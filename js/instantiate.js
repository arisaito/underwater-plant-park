window.onload = function() {
  function randomNum(min, max) {
    return Math.floor(Math.random() * (max + min + 1)) + min;
  }

  var fragment = document.createDocumentFragment();
  var scene = document.querySelector("a-scene");
  var wrapper = document.querySelector("#cubeWrapper");
  for (var i = 0; i < 100; i++) {
    console.log("instansiate");
    var box = document.createElement("a-box");
    box.setAttribute("position", {
      x: randomNum(0, 30),
      y: randomNum(0, 30),
      z: randomNum(0, 30)
    });
    box.setAttribute("scale", { x: 1, y: 1, z: 1 });
    fragment.appendChild(box);
  }
  wrapper.appendChild(fragment);
};
