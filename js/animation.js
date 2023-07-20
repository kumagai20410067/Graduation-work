//画面がロードされたタイミングでロード画面を非表示にする
window.onload = function () {
  const spinner = document.getElementById('loading');

  // Add .loaded to .loading
  spinner.classList.add('loaded');
}

//指定秒数後にロード画面を非表示にする
// ページの読み込みが完了したら実行
// window.onload = function () {
//   // ローディング画面を非表示にする関数
//   function hideLoadingScreen() {
//     const spinner = document.getElementById('loading');
//     spinner.style.opacity = 0;
//     spinner.style.visibility = 'hidden';
//   }

//   // n秒後にローディング画面を非表示にする
//   setTimeout(hideLoadingScreen, 1000);
// };

const moon = document.querySelector('.moon');
const earth = document.querySelector('.earth');

let angle = 0;

function rotateMoon() {
  const radius = 250; // 地球から月までの距離
  const speed = 0.005; // 月の回転速度（適宜調整）

  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  moon.style.left = `${earth.offsetLeft + earth.offsetWidth / 2 + x}px`;
  moon.style.top = `${earth.offsetTop + earth.offsetHeight / 2 + y}px`;

  angle += speed;

  requestAnimationFrame(rotateMoon);
}

rotateMoon();

