if(localStorage.getItem('theme') !== 'dark') {
  document.querySelector('body').classList.remove('dark');
}

document.getElementsByClassName('switch')[0].addEventListener("click", toggleTheme);

function toggleTheme() {
  if(document.querySelector('body').classList.contains('dark')) {
    localStorage.setItem('theme', 'light');
    document.querySelector('body').classList.remove('dark');
  } else {
    localStorage.setItem('theme', 'dark');
    document.querySelector('body').classList.add('dark');
  }
}