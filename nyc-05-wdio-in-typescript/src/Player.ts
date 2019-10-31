import Song from "./Song";

export default class Player {
  private _currentlyPlayingSong: Song;
  private _isPlaying: boolean;

  constructor(song: Song) {
    this._currentlyPlayingSong = song;
    this._isPlaying = false;
  }

  get currentlyPlayingSong(): Song {
    return this._currentlyPlayingSong;
  }
  get isPlaying(): boolean {
    return this._isPlaying;
  }

  play(song: Song) {
    this._currentlyPlayingSong = song;
    this._isPlaying = true;
  }

  pause(): boolean {
    return this._isPlaying;
  }

  resume(): void {
    if (this._isPlaying) {
      throw new Error("song is already playing");
    }
    this._isPlaying = true;
  }
  makeFavorite(): void {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
  }
}
