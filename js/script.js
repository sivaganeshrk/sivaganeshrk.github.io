const spans = document.querySelectorAll("h1 span");
spans.forEach((span) =>
  span.addEventListener("mouseover", function (e) {
    span.classList.add("animated", "rubberBand");
  })
);
spans.forEach((span) =>
  span.addEventListener("mouseout", function (e) {
    span.classList.remove("animated", "rubberBand");
  })
);

var x = document.getElementById("skill_me");
x.addEventListener("mouseenter", move, { once: true });
x.addEventListener("mouseenter", movecss, { once: true });
x.addEventListener("mouseenter", movepython, { once: true });
x.addEventListener("mouseenter", movec, { once: true });
x.addEventListener("mouseenter", movereact, { once: true });
function move() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function movecss() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarcss");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function movepython() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarpython");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function movec() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarc");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 70) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function movereact() {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBarreact");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 60) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

function about() {
  document.getElementById("about").focus();
}
