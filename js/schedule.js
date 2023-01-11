// function owoBig() {
//     var t = 1
//       , n = ""
//       , i = document.createElement("div")
//       , a = (i.id = "owo-big",
//     document.querySelector("body"));
//     a.appendChild(i),
//     document.getElementById("post-comment").addEventListener("DOMNodeInserted", function(e) {
//         e.target.classList && (e.target.classList.value,
//         1) && ((e = e.target).addEventListener("contextmenu", function(e) {
//             return e.preventDefault()
//         }),
//         e.addEventListener("mouseover", function(c) {
//             "IMG" == c.target.tagName && t && (t = 0,
//             n = setTimeout(function() {
//                 var e = 3 * c.path[0].clientHeight
//                   , t = 3 * c.path[0].clientWidth
//                   , n = c.x - c.offsetX - (t - c.path[0].clientWidth) / 2
//                   , o = (n + t > a.clientWidth && (n -= n + t - a.clientWidth + 10),
//                 n < 0 && (n = 10),
//                 c.y - c.offsetY);
//                 i.style.height = e + "px",
//                 i.style.width = t + "px",
//                 i.style.left = n + "px",
//                 i.style.top = o + "px",
//                 i.style.display = "flex",
//                 i.innerHTML = '<img src="'.concat(c.target.src, '">')
//             }, 300))
//         }),
//         e.addEventListener("mouseout", function(e) {
//             i.style.display = "none",
//             t = 1,
//             clearTimeout(n)
//         }))
//     })
// }
// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
setTimeout(() => {
  window.onscroll = percent; // 执行函数
  percent()
  setTimeout(() => {
    window.onscroll = percent; // 执行函数
    percent()
    setTimeout(() => {
      window.onscroll = percent; // 执行函数
      percent()
      }, 3000);
    }, 2000);
  }, 1000);


// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标
  result <= 99 || (result = 99);

  r = window.scrollY + document.documentElement.clientHeight;
  p =
    document.getElementById("post-comment") ||
    document.getElementById("footer");

  p.offsetTop + p.offsetHeight / 2 < r || 90 < result
    ? (document.querySelector("#nav-totop").classList.add("long"),
      (btn.innerHTML = "返回顶部"))
    : (document.querySelector("#nav-totop").classList.remove("long"),
      (btn.innerHTML = result));
  return 'Star'
}

// document.getElementById("post-comment") && owoBig(),

// window.onscroll = btf.throttle(percent, 10);
document.getElementById("page-name").innerText = document.title.split(" | Star's Blog")[0];
function scrollToTop() {
  document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
  document
    .getElementById("name-container")
    .setAttribute("style", "display:none");
  btf.scrollToDest(0, 500);
}
window.onkeydown = function (e) {
  123 === e.keyCode && btf.snackbarShow("开发者模式已打开，请遵循GPL协议", !1);
};
//切换夜间
function switchDarkMode() {
  const nowMode =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  if (nowMode === "light") {
    activateDarkMode();
    saveToLocal.set("theme", "dark", 2);
    GLOBAL_CONFIG.Snackbar !== undefined &&
      btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
  } else {
    activateLightMode();
    saveToLocal.set("theme", "light", 2);
    GLOBAL_CONFIG.Snackbar !== undefined &&
      btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
  }
  // handle some cases
  typeof utterancesTheme === "function" && utterancesTheme();
  typeof changeGiscusTheme === "function" && changeGiscusTheme();
  typeof FB === "object" && window.loadFBComment();
  typeof runMermaid === "function" && window.runMermaid();
}
