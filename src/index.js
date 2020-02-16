import menu from './menu.json';
import menuTemplate from '../templat/menu-item.hbs'
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  jsMenu: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
  selector: document.querySelector('.js-switch-input')
};


function buildMenu(menu) {
  const collect = menu.map(post => menuTemplate(post)).join('');
  refs.jsMenu.insertAdjacentHTML('beforeend', collect);
}

buildMenu(menu);


const currentTheme = localStorage.getItem('Theme');

if(currentTheme === Theme.DARK) {
  refs.selector.checked = true;
  refs.body.classList.add(Theme.DARK);
};

function handleChangeInput (event) {
  if(event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);

    localStorage.setItem('Theme', Theme.DARK);
  }

};
refs.selector.addEventListener('change', handleChangeInput);
