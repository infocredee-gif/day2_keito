document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname.replace(/\/$/, "");
  if (path !== "/coming-soon") { return; }

  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "https://infocredee-gif.github.io/credee-site-assets/coming-soon-page.css";
  document.head.appendChild(css);

  var heroTitle = Array.from(document.querySelectorAll("p")).find(function (p) {
    return p.textContent.trim() === "お問合せ" && p.closest('[class*="image--horizontal"]');
  });
  if (heroTitle) { heroTitle.textContent = "準備中"; }

  var form = document.querySelector('form[name="form1"]');
  if (!form) { return; }
  var contentBox = form.parentElement;
  if (!contentBox) { return; }
  contentBox.style.display = "none";

  var html =
    '<div class="comingsoon-legacy">' +
    "<h2>ただいま準備中です</h2>" +
    "<p>このページは現在準備中です。<br>公開まで今しばらくお待ちくださいませ。</p>" +
    '<a class="comingsoon-home-btn" href="/">トップページへ戻る</a>' +
    "</div>";

  var wrap = document.createElement("div");
  wrap.innerHTML = html;
  contentBox.parentNode.insertBefore(wrap, contentBox.nextSibling);
});
