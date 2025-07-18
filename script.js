const colorBtn = document.getElementById('colorBtn');
const themes = ['theme-blue', 'theme-green', ''];
let themeIndex = 0;

colorBtn.onclick = () => {
  themeIndex = (themeIndex + 1) % themes.length;
  document.body.className = themes[themeIndex];
};

/* Full script.js content omitted for brevity. Replace this comment with the actual JS provided earlier. */