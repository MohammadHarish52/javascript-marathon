const block: HTMLElement | null = document.getElementById("block");
const hole: HTMLElement | null = document.getElementById("hole");
const character: HTMLElement | null = document.getElementById("character");
let jumping: number = 0;
let counter: number = 0;

if (hole) {
  hole.addEventListener("animationiteration", () => {
    const random: number = -(Math.random() * 300 + 150);
    if (hole.style) {
      hole.style.top = random + "px";
    }
    counter++;
  });
}

setInterval(() => {
  if (character) {
    let characterTop: number = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (jumping === 0) {
      if (character.style) {
        character.style.top = characterTop + 3 + "px";
      }
    }
    let blockLeft: number = parseInt(
      window.getComputedStyle(block!).getPropertyValue("left")
    );
    let holeTop: number = parseInt(
      window.getComputedStyle(hole!).getPropertyValue("top")
    );
    let Ctop: number = -(500 - characterTop);

    if (
      characterTop > 480 ||
      (blockLeft < 20 &&
        blockLeft > -50 &&
        (Ctop < holeTop || Ctop > holeTop + 130))
    ) {
      alert(`Game Over! You scored ${counter - 1}`);
      counter = 0;
      if (character.style) {
        character.style.top = 100 + "px";
      }
    }
  }
}, 10);

const jump = () => {
  jumping = 1;
  let jumpcount: number = 0;
  const jumpinterval = setInterval(() => {
    if (character) {
      let characterTop: number = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
      );
      if (characterTop > 6 && counter < 15) {
        if (character.style) {
          character.style.top = characterTop - 5 + "px";
        }
      }
      if (jumpcount > 20) {
        clearInterval(jumpinterval);
        jumping = 0;
        jumpcount = 0;
      }
      jumpcount++;
    }
  }, 10);
};
