var expect = require("chai").expect;

describe("Player", function() {
  var Player = require("../../src/Player");
  var Song = require("../../src/Song");
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).to.be.equal(song);
  });

  describe("when song has been paused", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });

    it("should be possible to resume", function() {
      player.resume();
      expect(player.currentlyPlayingSong).to.be.equal(song);
    });
  });
});
