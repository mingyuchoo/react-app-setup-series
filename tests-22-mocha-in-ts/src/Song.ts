export default class Song {
  persistFavorite: boolean;

  constructor() {
    this.persistFavorite = false;
  }
  persistFavoriteStatus(status: boolean): void {
    throw new Error("not yet implemented");
  }
}
