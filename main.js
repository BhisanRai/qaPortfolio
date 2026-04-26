// ─── TYPING EFFECT ───
const phrases = [
  'Manual Testing',
  'API Testing (Postman)',
  'Cypress Automation',
  'Playwright Scripts',
  'Appium Automation',
  'JMeter Performance',
  'VOIP QA',
  'Appium Mobile Tests',
  'Mobile testing'
];

let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const word = phrases[pi];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++ci);
    if (ci === word.length) { deleting = true; setTimeout(type, 1600); return; }
    setTimeout(type, 68);
  } else {
    typedEl.textContent = word.slice(0, --ci);
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 300); return; }
    setTimeout(type, 36);
  }
}
type();

// ─── SKILLS FILTER ───
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.skill-card').forEach(card => {
      const match = f === 'all' || card.dataset.cat === f;
      card.classList.toggle('hidden', !match);
    });
  });
});

// ─── SCROLL REVEAL + SKILL BARS ───
const bars = document.querySelectorAll('.skill-bar');
let barsAnimated = false;

function animateBars() {
  if (barsAnimated) return;
  const section = document.getElementById('skills');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.8) {
    bars.forEach(bar => {
      bar.style.width = bar.dataset.w + '%';
    });
    barsAnimated = true;
  }
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal, .tl-item').forEach(el => observer.observe(el));

window.addEventListener('scroll', animateBars, { passive: true });
animateBars();
