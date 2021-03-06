import Song from "./Song";
import Player from "./Player";

import { expect } from "chai";

describe("Player", function() {
  let song: Song;
  let player: Player;

  beforeEach(function() {
    song = new Song();
    player = new Player(song);
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).to.be.equal(song);
  });

  describe("when song has been paused", () => {
    beforeEach(() => {
      player.play(song);
      player.pause();
    });
    it("should indicate that the song is currently paused", () => {
      expect(player.isPlaying).to.be.equal(true);
    });
  });
});
