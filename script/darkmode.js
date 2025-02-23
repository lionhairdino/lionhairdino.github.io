document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-mode');
    toggleButton.textContent = 'LIGHT';
  }

  toggleButton.addEventListener('click', () => {
    const elem = document.documentElement.classList;
    elem.toggle('dark-mode');
    if (elem.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      toggleButton.textContent = 'LIGHT';
    } else {
      localStorage.setItem('theme', 'light');
      toggleButton.textContent = 'DARK';
    }
  });
});
