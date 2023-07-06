interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on windows media player");
  }

  public playVideo(): void {
    console.log("Playing video on windows media player");
  }
}

class MacOsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on MacOS media player");
  }

  public playVideo(): void {
    console.log("Playing video on MacOS media player");
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}

class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}

// Client Code
let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
windowsAudioPlayer.playFile();

let macOSVideoPlayer = new VideoPlayer(new MacOsMediaPlayer());
macOSVideoPlayer.playFile();
