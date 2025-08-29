const themeSwitch = document.getElementById('theme-switch');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const logoImg = document.getElementById('site-logo');

function setLogo(mode) {
  if (mode === 'dark') {
    logoImg.src = 'assets/images/aldonlogowhite.svg';
  } else {
    logoImg.src = 'assets/images/aldonlogodark.svg';
  }
}

function updateThemeIcon(mode) {
  if (mode === 'dark') {
    themeIcon.innerHTML = '<i class="fa-regular fa-sun"></i>';
  } else {
    themeIcon.innerHTML = '<i class="fa-regular fa-moon"></i>';
  }
}

// Theme switch logic
function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
  }
  setLogo(mode);
  updateThemeIcon(mode);
  localStorage.setItem('theme', mode);
}

// Initial theme: default light, else localStorage
const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';
setTheme(initialTheme);

// Toggle knop
themeSwitch.addEventListener('click', () => {
  const newMode = body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(newMode);
});

// Keyboard accessibility (optioneel)
document.addEventListener('keydown', (e) => {
  if (e.key === 'l') setTheme('light');
  if (e.key === 'd') setTheme('dark');
});