(function(){
  var icon = document.getElementById('custom-chat-icon');
  var tooltip = document.getElementById('chat-tooltip');
  var panel = document.getElementById('chat-panel');
  var iframe = document.getElementById('chat-panel-iframe');
  var closeBtn = document.getElementById('chat-panel-close');
  var CHAT_URL = 'https://paymegpt.com/agents/60610205/embed';
  var loaded = false;

  function openChat(){
    if(!loaded){ iframe.src = CHAT_URL; loaded = true; }
    panel.classList.add('open');
    tooltip.classList.remove('show');
  }
  function closeChat(){
    panel.classList.remove('open');
  }

  icon.addEventListener('click', function(){
    if(panel.classList.contains('open')){ closeChat(); } else { openChat(); }
  });
  icon.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); icon.click(); }
  });
  closeBtn.addEventListener('click', closeChat);

  setTimeout(function(){ tooltip.classList.add('show'); }, 3000);
  tooltip.querySelector('.close-btn').addEventListener('click', function(){
    tooltip.classList.remove('show');
  });

  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){ if(entry.isIntersecting) entry.target.classList.add('is-visible'); });
  }, {threshold: 0.14});
  reveals.forEach(function(el){ observer.observe(el); });

  document.getElementById('menuBtn').addEventListener('click', function(){
    document.getElementById('mobileMenu').classList.toggle('open');
  });
  window.closeMobile = function(){ document.getElementById('mobileMenu').classList.remove('open'); };

  var moreBtn = document.getElementById('moreBtn');
  var moreMenu = document.getElementById('moreMenu');
  var moreChevron = document.getElementById('moreChevron');
  if(moreBtn){
    moreBtn.addEventListener('click', function(e){
      e.stopPropagation();
      var isOpen = !moreMenu.classList.contains('hidden');
      moreMenu.classList.toggle('hidden');
      moreChevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
    document.addEventListener('click', function(e){
      if(!document.getElementById('moreWrap').contains(e.target)){
        moreMenu.classList.add('hidden');
        moreChevron.style.transform = '';
      }
    });
  }
})();