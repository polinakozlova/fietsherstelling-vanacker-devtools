document.addEventListener('DOMContentLoaded', function() {
   localStorage.setItem('vanacker_laatst_bezocht', window.location.pathname.split('/').pop() || 'index.html');

   if (document.cookie.indexOf('vanacker_cookies=') !== -1) {
      return;
   }

   const banner = document.createElement('div');
   banner.className = 'cookiebanner';
   banner.innerHTML
      = '<p class="cookiebanner__text">We gebruiken cookies om deze website goed te laten werken.</p>'
      + '<div class="cookiebanner__actions">'
      + '<button class="cookiebanner__button" type="button" data-cookies="functioneel">Enkel functionele cookies</button>'
      + '<button class="cookiebanner__button cookiebanner__button--accent" type="button" data-cookies="alle">Alle cookies toestaan</button>'
      + '</div>';
   document.body.append(banner);

   banner.querySelectorAll('.cookiebanner__button').forEach(function(button) {
      button.addEventListener('click', function() {
         document.cookie = 'vanacker_cookies=' + button.dataset.cookies + '; path=/; max-age=31536000';
         banner.remove();
      });
   });
});
