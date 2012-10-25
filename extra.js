var goAwayCounter;

var forceApplyStyles = function(main, counter) {
  var a = "display: block;position: absolute;top: 0;left: 0;width: 100%;height: 100%;padding: 20px;box-sizing: border-box;background-color: #ddd;color: black;font-size: large;z-index: 9001;";
  var a_p = "font-size: large;";
  var b = "font-size: x-large;";
  main.setAttribute("style", a);
  counter.setAttribute("style", b);
  var main_p = main.getElementsByTagName("p");
  for (var i in main_p) {
    if (!main_p.hasOwnProperty(i)) continue;
    var mp = main_p[i];
    mp.setAttribute("style", a_p);
  }
};

window.onload = function() {
  if (document.getElementById('j_username') !== null) {
    // we have a username field. this is probably the login page.
    var el = document.createElement('div');
    el.innerHTML = '<h1>Hey there!</h1><p>You seem to have reached our Jenkins instance, whether on purpose or by accident.</p><p>Jenkins is no longer publically accessible, and you will be automatically redirected to our downloads page in <span id="overlord_counter">15</span> second<span id="overlord_counter_plural">s</span>.</p>';
    el.id = 'overlord';
    document.body.appendChild(el);
    var counter = 15;
    var counterEl = document.getElementById('overlord_counter');

    forceApplyStyles(el, counterEl);

    goAwayCounter = setInterval(function() {
      counter -= 1;
      counterEl.innerHTML = counter;
      if (counter == 1) {
        var pluralEl = document.getElementById('overlord_counter_plural');
        pluralEl.parentElement.removeChild(pluralEl);
      }
      if (counter == 0) window.location = "http://dl.bukkit.org";
    }, 1000);
    counterEl.onclick = function() {
      clearInterval(goAwayCounter);
      el.parentElement.removeChild(el);
    };
  }
};