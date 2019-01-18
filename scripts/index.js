function openNavigation() {
  var nav = document.getElementById('navigation');
  nav.style.display = 'block';
  nav.style.width = '100%';
  nav.classList.remove('closeNav');
  nav.classList.add('activeNav');
}

function closeNavigation() {
  var nav = document.getElementById('navigation');
  nav.style.display = 'none';
  nav.style.width = '0';
  nav.classList.remove('activeNav');
  nav.classList.add('closeNav');
}

function openPopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
  popup.style.width = '90%';

}

function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
  popup.style.width = '0';

}