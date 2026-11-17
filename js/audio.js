// BMW M TwinPower Turbo & Hans Zimmer IconicSounds Web Audio Engine

(function() {
  class BMWWebAudio {
    constructor() {
      this.ctx = null;
      this.isRunning = false;
      this.idleOsc1 = null;
      this.idleOsc2 = null;
      this.subBassOsc = null;
      this.masterGain = null;
      this.filter = null;
    }

    initContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggleEngine() {
      this.initContext();
      if (this.isRunning) {
        this.stopEngine();
        return false;
      } else {
        this.startEngine();
        return true;
      }
    }

    startEngine() {
      this.initContext();
      if (!this.ctx || this.isRunning) return;
      const t = this.ctx.currentTime;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, t);
      this.masterGain.gain.exponentialRampToValueAtTime(0.2, t + 0.5);

      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(140, t);
      this.filter.Q.setValueAtTime(4.0, t);

      // Starter motor burst
      const starter = this.ctx.createOscillator();
      const starterGain = this.ctx.createGain();
      starter.type = 'sawtooth';
      starter.frequency.setValueAtTime(32, t);
      starter.frequency.exponentialRampToValueAtTime(160, t + 0.35);
      starter.frequency.exponentialRampToValueAtTime(54, t + 0.7);

      starterGain.gain.setValueAtTime(0.12, t);
      starterGain.gain.exponentialRampToValueAtTime(0.28, t + 0.35);
      starterGain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);

      starter.connect(starterGain);
      starterGain.connect(this.ctx.destination);
      starter.start(t);
      starter.stop(t + 0.85);

      // Twin-Turbo Straight-Six 54 Hz rumble
      this.idleOsc1 = this.ctx.createOscillator();
      this.idleOsc1.type = 'sawtooth';
      this.idleOsc1.frequency.setValueAtTime(54, t + 0.6);

      this.idleOsc2 = this.ctx.createOscillator();
      this.idleOsc2.type = 'triangle';
      this.idleOsc2.frequency.setValueAtTime(108, t + 0.6);

      this.subBassOsc = this.ctx.createOscillator();
      this.subBassOsc.type = 'sine';
      this.subBassOsc.frequency.setValueAtTime(36, t + 0.6);

      this.idleOsc1.connect(this.filter);
      this.idleOsc2.connect(this.filter);
      this.subBassOsc.connect(this.filter);

      this.filter.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);

      this.idleOsc1.start(t + 0.6);
      this.idleOsc2.start(t + 0.6);
      this.subBassOsc.start(t + 0.6);

      this.isRunning = true;
    }

    stopEngine() {
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
        } catch (e) {}
        this.isRunning = false;
      }, 450);
    }
  }

  window.bmwAudio = new BMWWebAudio();
})();
