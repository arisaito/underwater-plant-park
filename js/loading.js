// ローディング画面のdivを取得
var showloading = document.getElementById("loading");
// 画面本体のdivを取得
var contents = document.getElementById("loading_bg");
// 読み込みが完了したら発動
window.addEventListener("load", function() {
  // loadingのdivを非表示に
  showloading.style.display = "none";
  // contentsのdivを表示
  contents.classList.remove("hidden");
});
