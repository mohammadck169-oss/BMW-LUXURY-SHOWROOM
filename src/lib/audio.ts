// BMW M TwinPower Turbo & Hans Zimmer IconicSounds Web Audio Synthesizer

class BMWEngineAudio {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private idleOsc1: OscillatorNode | null = null;
  private idleOsc2: OscillatorNode | null = null;
  private subBassOsc: OscillatorNode | null = null;
  private masterGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private isRunning: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public isAudioActive(): boolean {
    return this.isRunning && !this.isMuted;
  }

  public toggleEngine(): boolean {
    this.initContext();
    if (this.isRunning) {
      this.stopEngine();
      return false;
    } else {
      this.startEngine();
      return true;
    }
  }

  public startEngine() {
    this.initContext();
    if (!this.ctx) return;
    if (this.isRunning) return;

    const t = this.ctx.currentTime;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, t);
    this.masterGain.gain.exponentialRampToValueAtTime(0.18, t + 0.5);

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(140, t);
    this.filter.Q.setValueAtTime(4.0, t);

    // Starter motor whir then ignition burst
    const starterOsc = this.ctx.createOscillator();
    const starterGain = this.ctx.createGain();
    starterOsc.type = 'sawtooth';
    starterOsc.frequency.setValueAtTime(32, t);
    starterOsc.frequency.exponentialRampToValueAtTime(160, t + 0.35);
    starterOsc.frequency.exponentialRampToValueAtTime(55, t + 0.7);

    starterGain.gain.setValueAtTime(0.12, t);
    starterGain.gain.exponentialRampToValueAtTime(0.28, t + 0.35);
    starterGain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);

    starterOsc.connect(starterGain);
    starterGain.connect(this.ctx.destination);
    starterOsc.start(t);
    starterOsc.stop(t + 0.85);

    // Deep Twin-Turbo Straight-Six Idle rumble (52 Hz + 104 Hz harmonic)
    this.idleOsc1 = this.ctx.createOscillator();
    this.idleOsc1.type = 'sawtooth';
    this.idleOsc1.frequency.setValueAtTime(54, t + 0.6);

    this.idleOsc2 = this.ctx.createOscillator();
    this.idleOsc2.type = 'triangle';
    this.idleOsc2.frequency.setValueAtTime(108, t + 0.6);

    // Low-end rumble sub-bass
    this.subBassOsc = this.ctx.createOscillator();
    this.subBassOsc.type = 'sine';
    this.subBassOsc.frequency.setValueAtTime(36, t + 0.6);

    // Distortion shaper for mechanical grit
    const distortion = this.ctx.createWaveShaper();
    distortion.curve = this.makeDistortionCurve(18);

    this.idleOsc1.connect(this.filter);
    this.idleOsc2.connect(this.filter);
    this.subBassOsc.connect(this.filter);

    this.filter.connect(distortion);
    distortion.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.idleOsc1.start(t + 0.6);
    this.idleOsc2.start(t + 0.6);
    this.subBassOsc.start(t + 0.6);

    this.isRunning = true;
  }

  public revEngine() {
    if (!this.ctx || !this.isRunning) {
      this.startEngine();
      return;
    }
    const t = this.ctx.currentTime;
    if (this.idleOsc1 && this.idleOsc2 && this.filter && this.masterGain) {
      // Fast throttle blip to 3200 RPM note (approx 165 Hz)
      this.idleOsc1.frequency.cancelScheduledValues(t);
      this.idleOsc1.frequency.exponentialRampToValueAtTime(165, t + 0.3);
      this.idleOsc1.frequency.exponentialRampToValueAtTime(54, t + 1.2);

      this.idleOsc2.frequency.cancelScheduledValues(t);
      this.idleOsc2.frequency.exponentialRampToValueAtTime(330, t + 0.3);
      this.idleOsc2.frequency.exponentialRampToValueAtTime(108, t + 1.2);

      this.filter.frequency.cancelScheduledValues(t);
      this.filter.frequency.exponentialRampToValueAtTime(480, t + 0.3);
      this.filter.frequency.exponentialRampToValueAtTime(140, t + 1.2);

      this.masterGain.gain.cancelScheduledValues(t);
      this.masterGain.gain.linearRampToValueAtTime(0.28, t + 0.25);
      this.masterGain.gain.linearRampToValueAtTime(0.18, t + 1.2);
    }
  }

  public stopEngine() {
    if (!this.ctx || !this.isRunning) return;
    const t = this.ctx.currentTime;
    if (this.masterGain) {
      this.masterGain.gain.cancelScheduledValues(t);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    }
    setTimeout(() => {
      try {
        this.idleOsc1?.stop();
        this.idleOsc2?.stop();
        this.subBassOsc?.stop();
        this.idleOsc1?.disconnect();
        this.idleOsc2?.disconnect();
        this.subBassOsc?.disconnect();
      } catch {}
      this.isRunning = false;
    }, 450);
  }

  public playChime() {
    this.initContext();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, t); // A5 note
    osc.frequency.exponentialRampToValueAtTime(440, t + 0.25);

    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.3);
  }

  private makeDistortionCurve(amount: number): Float32Array {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }
}

export const bmwAudio = new BMWEngineAudio();
