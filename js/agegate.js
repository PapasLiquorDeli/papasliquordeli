(function() {
  var KEY = 'papa_age_ok';

  // If already verified this session, do nothing
  if (sessionStorage.getItem(KEY)) return;

  // Create overlay
  var overlay = document.createElement('div');
  overlay.id = 'ageGate';
  overlay.style.cssText = 'position:fixed;inset:0;background:#ffffff;z-index:9999;display:flex;align-items:center;justify-content:center;padding:2rem;';

  overlay.innerHTML = [
    '<div style="text-align:center;max-width:400px;">',
      '<div style="font-family:Playfair Display,serif;font-size:1.4rem;font-weight:700;color:#b83232;margin-bottom:1.5rem;">Papa\'s Liquor & Deli</div>',
      '<div style="width:1px;height:40px;background:linear-gradient(to bottom,#b8841f,transparent);margin:0 auto 1.5rem;"></div>',
      '<h2 style="font-family:Playfair Display,serif;font-size:2rem;font-weight:700;color:#b83232;margin-bottom:0.6rem;">Are you 21 or older?</h2>',
      '<p style="font-size:0.88rem;font-weight:300;color:rgba(90,55,30,0.6);margin-bottom:2rem;line-height:1.6;">You must be of legal drinking age to enter this site.</p>',
      '<div style="display:flex;gap:0.75rem;justify-content:center;">',
        '<button id="ageYes" style="background:#b8841f;color:#fff;border:1px solid #b8841f;padding:0.82rem 2rem;font-family:Barlow,sans-serif;font-size:0.72rem;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;cursor:pointer;">Yes, I\'m 21+</button>',
        '<button id="ageNo" style="background:transparent;color:rgba(0,0,0,0.4);border:1px solid rgba(0,0,0,0.15);padding:0.82rem 1.8rem;font-family:Barlow,sans-serif;font-size:0.72rem;font-weight:500;letter-spacing:0.14em;text-transform:uppercase;cursor:pointer;">No</button>',
      '</div>',
    '</div>'
  ].join('');

  // Block scroll
  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);

  // Yes button
  document.getElementById('ageYes').addEventListener('click', function() {
    sessionStorage.setItem(KEY, '1');
    overlay.remove();
    document.body.style.overflow = '';
  });

  // No button
  document.getElementById('ageNo').addEventListener('click', function() {
    overlay.innerHTML = '<div style="text-align:center;max-width:340px;padding:2rem;"><p style="font-family:Playfair Display,serif;font-size:1.4rem;font-weight:700;color:#b83232;margin-bottom:0.75rem;">Come back when you are ready.</p><p style="font-size:0.85rem;color:rgba(90,55,30,0.55);">You must be 21 or older to visit this site.</p></div>';
  });
})();
