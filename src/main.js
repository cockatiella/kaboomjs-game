import kaboom from "kaboom";

// initialize context
kaboom();

// load assets
loadSprite("bean", "sprites/bean.png");
loadPedit("ground", "sprites/ground.pedit");
loadPedit("enemy", "sprites/enemy.pedit");

// add a character to screen
const player = add([
  // list of components
  sprite("bean"),
  pos(80, 40),
  area(),
  body(),
]);

const MOVE_SPEED = 200;
const MOVE_SPEED2 = -200;
keyDown("right", () => {
  player.move(MOVE_SPEED, 0);
});

keyDown("left", () => {
  player.move(MOVE_SPEED2, 0);
});

addLevel(
  [
    "                        ",
    "               @                    ",
    "           @               ",
    "                          ",
    "                          ",
    "                          ",
    "                          ",
    "                          ",
    "                          ",

    "===========================",
  ],
  {
    // define the size of each block
    width: 32,
    height: 32,
    // define what each symbol means, by a function returning a component list (what will be passed to add())
    "=": () => [sprite("ground"), area(), solid()],
    "@": () => [area(), sprite("enemy"), solid(), body(), "dangerous"],
  }
);

player.collides("dangerous", () => {
  destroy(player);
});
