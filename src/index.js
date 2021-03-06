import menu from './menu';
import about from './about';
import contact from './contact';
import footer from './footer';

// navbar
const div = document.getElementById('content');
const divMain = document.createElement('DIV');
divMain.setAttribute('id', 'mainContent');

const nav = document.createElement('NAV');
const h1 = document.createElement('H1');
h1.innerHTML = 'Coconut Mojo';
const navContainer = document.createElement('DIV');

// navbar items
const navList = document.createElement('UL');
const navListMenu = document.createElement('LI');
navListMenu.innerHTML = 'Menu';
navListMenu.setAttribute('id', 'navListMenu');
const navListAbout = document.createElement('LI');
navListAbout.innerHTML = 'About';
navListAbout.setAttribute('id', 'navListAbout');
const navListContact = document.createElement('LI');
navListContact.innerHTML = 'Contact';
navListContact.setAttribute('id', 'navListContact');

navList.append(navListMenu, navListAbout, navListContact);
navContainer.appendChild(navList);
nav.append(h1, navContainer);
div.append(nav, divMain);

// navbar interaction
navListMenu.addEventListener('click', () => {
  const item = document.getElementById('navListMenu');
  document.getElementById('navListAbout').classList.remove('select-item');
  document.getElementById('navListContact').classList.remove('select-item');
  item.setAttribute('class', 'select-item');
  document.getElementById('mainContent').innerHTML = '';
  menu();
  footer();
});

navListAbout.addEventListener('click', () => {
  const item = document.getElementById('navListAbout');
  document.getElementById('navListMenu').classList.remove('select-item');
  document.getElementById('navListContact').classList.remove('select-item');
  item.setAttribute('class', 'select-item');
  document.getElementById('mainContent').innerHTML = '';
  about();
});

navListContact.addEventListener('click', () => {
  const item = document.getElementById('navListContact');
  document.getElementById('navListAbout').classList.remove('select-item');
  document.getElementById('navListMenu').classList.remove('select-item');
  item.setAttribute('class', 'select-item');
  document.getElementById('mainContent').innerHTML = '';
  contact();
  footer();
});

navListMenu.setAttribute('class', 'select-item');
menu();
footer();
