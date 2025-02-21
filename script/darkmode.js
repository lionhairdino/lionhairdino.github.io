document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // 로컬 스토리지에서 테마 상태 확인
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '라이트 모드';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      toggleButton.textContent = '라이트 모드';
      localStorage.setItem('theme', 'dark');
    } else {
      toggleButton.textContent = '다크 모드';
      localStorage.setItem('theme', 'light');
    }
  });
});
