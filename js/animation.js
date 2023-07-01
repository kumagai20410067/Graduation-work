// //一文字ずつ登場するテキストアニメーション
// const CLASSNAME = "-visible";
// const TIMEOUT = 1500;
// const $target = $(".title");

// setInterval(() => {
//   $target.addClass(CLASSNAME);
//   setTimeout(() => {
//     $target.removeClass(CLASSNAME);
//   }, TIMEOUT);
// }, TIMEOUT * 2);
//幕のように背景が上がるアニメーション
const CLASSNAME = "-visible";
const TIMEOUT = 2000;
const $target = $(".bg");

setInterval(() => {
  $target.addClass(CLASSNAME);

  setTimeout(() => {
    $target.removeClass(CLASSNAME);
  }, TIMEOUT);
}, TIMEOUT*2);