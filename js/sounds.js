const pathToMusic = "../music/";
const pathToSFX = "../sfx/";

var intro = new Howl({
  src: [pathToMusic + "derezzed.mp3"],
});

var hover = new Howl({
  src: [pathToSFX + "click1.mp3"],
});

var click = new Howl({
  src: [pathToSFX + "click2.mp3"],
});
