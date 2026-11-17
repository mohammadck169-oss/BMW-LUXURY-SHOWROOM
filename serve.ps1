# BMW LUXURY SHOWROOM - HTTP & REST SERVER FOR WINDOWS POWERSHELL
# Serves static assets and provides persistent REST endpoints

$candidatePorts = @(5500, 5501, 5502, 8080, 3000)
$started = $false
$port = $null
$listener = $null

foreach ($p in $candidatePorts) {
    try {
        $tempListener = New-Object System.Net.HttpListener
        $tempListener.Prefixes.Add("http://localhost:$p/")
        $tempListener.Start()
        $listener = $tempListener
        $port = $p
        $started = $true
        Write-Host "==========================================================" -ForegroundColor Cyan
        Write-Host " BMW LUXURY AUTOMOTIVE SHOWROOM WEB SERVER READY" -ForegroundColor Yellow
        Write-Host " URL: http://localhost:$port/" -ForegroundColor Green
        Write-Host " Press Ctrl+C in this terminal to stop the server" -ForegroundColor Gray
        Write-Host "==========================================================" -ForegroundColor Cyan
        break
    } catch {
        if ($tempListener) {
            try { $tempListener.Close() } catch {}
        }
    }
}

if (-not $started) {
    Write-Host "Could not bind to any candidate port ($($candidatePorts -join ', '))." -ForegroundColor Red
    exit 1
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".ts"   = "application/typescript; charset=utf-8"
    ".tsx"  = "application/typescript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".mp4"  = "video/mp4"
}

$baseDir = $PSScriptRoot

# Try to launch default browser
try {
    Start-Process "http://localhost:$port/"
} catch {}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Add CORS headers
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        $response.AddHeader("Access-Control-Allow-Headers", "Content-Type")

        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/" -or [string]::IsNullOrWhiteSpace($urlPath)) {
            $urlPath = "/index.html"
        }

        # Normalize relative path
        $cleanPath = $urlPath.TrimStart('/').Replace('/', '\')
        $filePath = Join-Path $baseDir $cleanPath

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $mime = $mimeTypes[$ext]
            }

            try {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
                $response.StatusCode = 200
            } catch {
                $response.StatusCode = 500
            }
        } else {
            # 404 Fallback
            $response.StatusCode = 404
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes("404 - Not Found")
            $response.ContentType = "text/plain"
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        $response.Close()
    }
} finally {
    if ($listener) {
        $listener.Stop()
        $listener.Close()
    }
}
