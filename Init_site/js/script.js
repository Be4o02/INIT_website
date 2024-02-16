(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
              items[i].classList.add("in-view");
          }
      }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();








/*скрулл лого*/
  let bg = document.getElementById("init_logo");
  let minSize = 70;

  window.addEventListener("scroll", function(){
    let newSize = minSize - window.pageYOffset / 100;
    if (newSize < minSize) {
      newSize = minSize;
    }

    bg.style.width = newSize + "px";
    bg.style.height = newSize + "px";
  });
