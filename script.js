const colorBtn = document.getElementById('colorBtn');
const themes = ['theme-blue', 'theme-green', ''];
let themeIndex = 0;

colorBtn.onclick = () => {
  themeIndex = (themeIndex + 1) % themes.length;
  document.body.className = themes[themeIndex];
};

document.querySelectorAll('.faq-question').forEach(q => {
  q.onclick = function() {
    const item = this.parentElement;
    item.classList.toggle('active');
    document.querySelectorAll('.faq-item').forEach(i => {
      if(i !== item) i.classList.remove('active');
    });
  }
});
