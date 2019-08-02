let start = false;
const cursor = document.getElementById("cursor");
const target = document.getElementById("target");

let lastIndex = -1;
let colors = ["pink", "lightgreen", "lightbrue"];

document.querySelector("#target").addEventListener("click", function(evt) {
  start = true;
  if (start) {
    console.log("click");
    target.innerHTML = '<a-sphere radius="1.25" color="#EF2D5E"></a-sphere>';
  }
});
AFRAME.registerComponent("cursor-listener", {
  init: function() {
    var lastIndex = -1;
    var COLORS = ["red", "green", "blue"];
    this.el.addEventListener("click", function(evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute("material", "color", COLORS[lastIndex]);
      console.log("I was clicked at: ", evt.detail.intersection.point);
    });
  }
});
