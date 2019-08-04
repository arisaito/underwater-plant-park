function starMaker(n) {
  var star = document.createElement("div");
  star.className = "star";
  star.textContent = "●";
  for (var i = 0; i < n; i++) {
    starSet(star);
  }
}

function starSet(clone) {
  var starClone = clone.cloneNode(true);
  var starStyle = starClone.style;

  //星の位置（left）、アニメーションの遅延時間（animation-delay）、サイズ（font-size）をランダムで指定
  starStyle.left = 100 * Math.random() + "%";
  starStyle.animationDelay = 15 * Math.random() + "s";
  starStyle.fontSize = ~~(30 * Math.random() + 10) + "px";
  document.body.appendChild(starClone);

  starClone.addEventListener(
    "animationend",
    function() {
      this.parentNode.removeChild(this);
      var star = document.createElement("div");
      star.className = "star";
      star.textContent = "●";
      starSet(star);
    },
    false
  );
}

starMaker(30);
