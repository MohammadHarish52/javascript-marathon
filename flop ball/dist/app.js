var block = document.getElementById("block");
var hole = document.getElementById("hole");
var character = document.getElementById("character");
var jumping = 0;
var counter = 0;
if (hole) {
    hole.addEventListener("animationiteration", function () {
        var random = -(Math.random() * 300 + 150);
        if (hole.style) {
            hole.style.top = random + "px";
        }
        counter++;
    });
}
setInterval(function () {
    if (character) {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumping === 0) {
            if (character.style) {
                character.style.top = characterTop + 3 + "px";
            }
        }
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var Ctop = -(500 - characterTop);
        if (characterTop > 480 ||
            (blockLeft < 20 &&
                blockLeft > -50 &&
                (Ctop < holeTop || Ctop > holeTop + 130))) {
            alert("Game Over! You scored ".concat(counter - 1));
            counter = 0;
            if (character.style) {
                character.style.top = 100 + "px";
            }
        }
    }
}, 10);
var jump = function () {
    jumping = 1;
    var jumpcount = 0;
    var jumpinterval = setInterval(function () {
        if (character) {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
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
