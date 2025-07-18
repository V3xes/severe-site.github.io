const colorBtn = document.getElementById('colorBtn');
const themes = ['theme-blue', 'theme-green', ''];
let themeIndex = 0;

colorBtn.onclick = () => {
  themeIndex = (themeIndex + 1) % themes.length;
  document.body.className = themes[themeIndex];
};

function setActiveNav(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
}

function renderHome() {
  setActiveNav('home');
  document.getElementById('main-content').innerHTML = `
    <section class="hero">
      <h1 class="fade-in">Severe<br>Roblox Executor</h1>
      <div class="hero-sub">A new era of safe, external execution. Fast. Secure. Powerful.</div>
      <div class="code-window pop-in">
        <div class="code-bar">
          <span></span><span></span><span></span>
        </div>
        <pre>
<span class="purple">local</span> severe = <span class="blue">require</span>(<span class="green">'Severe'</span>)
<span class="purple">if</span> severe:Ready() <span class="purple">then</span>
    severe:Inject()
<span class="purple">end</span>
        </pre>
      </div>
    </section>
    <section class="faq-section slide-up">
      <div class="faq-title">Frequently Asked Questions</div>
      <div class="faq">
        <div class="faq-item">
          <div class="faq-question">What's the official Discord?<span>+</span></div>
          <div class="faq-answer">Join: <a href="https://discord.com/severe" target="_blank">discord.com/severe</a></div>
        </div>
        <div class="faq-item">
          <div class="faq-question">How much does it cost?<span>+</span></div>
          <div class="faq-answer">Severe is $20 one-time.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">How do I get access?<span>+</span></div>
          <div class="faq-answer">Buy via Stripe, submit proof, and wait for a team member to activate you.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">How do I contact support?<span>+</span></div>
          <div class="faq-answer">Open a ticket in Discord or email support@severe.gg</div>
        </div>
      </div>
    </section>
  `;
  setupFAQ();
}

function renderBuy() {
  setActiveNav('buy');
  document.getElementById('main-content').innerHTML = `
    <section class="buy-section">
      <h2>How to Buy</h2>
      <div class="buy-steps">
        <ol>
          <li>Join our Discord: <a href="https://discord.com/severe" target="_blank">https://discord.com/severe</a></li>
          <li>Go to the payment channel and pay <b>$20</b> via Stripe (link in Discord).</li>
          <li>Take a screenshot of your payment proof.</li>
          <li>Wait for a team member to respond and activate your access.</li>
        </ol>
      </div>
    </section>
  `;
}

function renderDocs() {
  setActiveNav('docs');
  document.getElementById('main-content').innerHTML = `
    <section class="docs-section">
      <h2>Docs</h2>
      <div class="docs-placeholder">Documentation coming soon.</div>
    </section>
  `;
}

function setupFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.onclick = function() {
      const item = this.parentElement;
      item.classList.toggle('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        if(i !== item) i.classList.remove('active');
      });
    }
  });
}

function route(page) {
  if (page === 'home') renderHome();
  if (page === 'buy') renderBuy();
  if (page === 'docs') renderDocs();
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    route(this.dataset.page);
    window.scrollTo(0,0);
  }
});

route('home');
