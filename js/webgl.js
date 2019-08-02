window.addEventListener(
  "load",
  (init = () => {
    // サイズを指定
    const width = 980;
    const height = 600;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#myCanvas")
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱をつくりゅ
    // 1. ジオメトリ/形を定義する
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    // 2. マテリアルを定義する
    const material = new THREE.MeshNormalMaterial();
    // 3. 1のジオメトリと2のマテリアルをbox変数に代入
    const box = new THREE.Mesh(geometry, material);
    // 4. シーンにaddする
    scene.add(box);

    // 毎フレーム時に実行されるループイベント
    let tick = () => {
      box.rotation.y += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    };

    tick();
  })
);
