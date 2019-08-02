window.onload = function() {
  var fragment = document.createDocumentFragment();
  var scene = document.querySelector("a-scene");
  var wrapper = document.querySelector("#sphereWrapper");
  var sphere = document.querySelector(".kurage");
  for (var i = 0; i < 100; i++) {
    fragment.appendChild(sphere);
  }
  wrapper.appendChild(fragment);
};
