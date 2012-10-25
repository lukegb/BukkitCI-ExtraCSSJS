var goAwayCounter;

window.onload = function() {
  if (document.getElementById('j_username') !== null) {
    // we have a username field. this is probably the login page.
    var el = document.createElement('div');
    el.innerHTML = '<h1>Hey there!</h1><p>You seem to have reached our Jenkins instance, whether on purpose or by accident.</p><p>Jenkins is no longer publically accessible, and you will be automatically redirected to our downloads page in <span id="overlord_counter">15</span> seconds.</p>';
    document.body.appendChild(el);
    el.id = 'overlord';
    var counter = 15;
    var counterEl = document.getElementById('overlord_counter');
    goAwayCounter = setInterval(function() {
      counter -= 1;
      counterEl.innerHTML = counter;
      if (counter == 0) window.location = "http://dl.bukkit.org";
    }, 1000);
    counterEl.onclick = function() {
      clearInterval(goAwayCounter);
      el.parentElement.removeChild(el);
    };
  }
};