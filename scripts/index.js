function openNavigation() {
  var nav = document.getElementById('navigation');
  nav.style.display = 'block';
  nav.style.width = '100%';
  nav.classList.remove('closed');
  nav.classList.add('active');
}

function closeNavigation() {
  var nav = document.getElementById('navigation');
  nav.style.display = 'none';
  nav.style.width = '0';
  nav.classList.remove('active');
  nav.classList.add('closed');
}

function openPopup() {
  document.getElementById('popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}