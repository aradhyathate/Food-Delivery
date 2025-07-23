const toggleBtn = document.getElementById('toggle-dark');
const body = document.body;

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    // Change icon
    if(body.classList.contains('dark-mode')) {
        toggleBtn.textContent = '☀️';
        toggleBtn.classList.add('active');
    } else {
        toggleBtn.textContent = '🌙';
        toggleBtn.classList.remove('active');
    }
});

// Load preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
