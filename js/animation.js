var bar = new ProgressBar.Line(splash_text, {
  easing: 'easeInOut',
  duration: 1000,
  strokeWidth: 0.2,
  color: '#555',
  trailWidth: 0.2,
  trailColor: '#bbb',
  text: {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',
      transform: 'translate(-50%,-50%)',
      'font-size': '1rem',
      color: '#fff'
    },
    autoStyleContainer: false
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + '%');
  }
});

bar.animate(1.0, function () {
  $("#splash").delay(500).fadeOut(800);
  $("#container").fadeIn();
});

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

