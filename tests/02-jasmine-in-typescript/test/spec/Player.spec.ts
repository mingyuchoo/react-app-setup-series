import Song from "../../src/Song";
import Player from "../../src/Player";

describe("Player", function() {
  let song: Song;
  let player: Player;

  beforeEach(function() {
    song = new Song();
    player = new Player(song);
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
  });

  describe("when song has been paused", () => {
    beforeEach(() => {
      player.play(song);
      player.pause();
    });
    it("should indicate that the song is currently paused", () => {
      expect(player.isPlaying).toBe(true);
    });
  });
});
