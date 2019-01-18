function openNavigation() {
  var nav = document.getElementById('navigation');
  nav.style.display = 'block';
  nav.style.width = '100%';
  nav.classList.remove('closed');
  nav.classList.add('activeNav');
}

function closeNavigation() {
  var nav = document.getElementById('navigation');
  nav.style.display = 'none';
  nav.style.width = '0';
  nav.classList.remove('active');
  nav.classList.add('closeNav');
}

function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
  popup.classList.add('activePop');

}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}