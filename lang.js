const T = {
  uk: {
    'nav-videos':'Відео','nav-music':'Музика','nav-about':'Про канал',
    'hero-eyebrow':'КІНЕМАТОГРАФІЧНИЙ ЕМБІЄНТ — ЖИТТЯ В 2250',
    'hero-h1-sub':'СВІТ ЗА ГОРИЗОНТОМ',
    'hero-desc':'Занурся у всесвіт іммерсивної релаксації та кінематографічного звуку. Глибокий мелодійний ембієнт, неонові мегаполіси та прогресивні цивілізації 2250 року.',
    'hero-btn1':'▶ Дивитись відео','hero-btn2':'♪ Слухати музику',
    'stat1':'Кінематографічна якість','stat2':'Ембієнт-подорожі','stat3':'Рік візії','stat4':'AI-Візуали',
    'featured-tag':'АРХІВ СИГНАЛІВ','featured-title':'Останні відео','featured-more':'Всі відео →',
    'cta-eyebrow':'ПІДПИСАТИСЬ НА КАНАЛ',
    'cta-title':'Готовий до подорожі у 2250 рік?',
    'cta-sub':'Нові кінематографічні мандрівки та тривалі ембієнт-мікси завантажуються регулярно.',
    'cta-btn':'Відкрити YouTube ↗',
    'videos-eyebrow':'АРХІВ СИГНАЛІВ','videos-title':'Всі відео',
    'music-eyebrow':'СИГНАЛ','music-title':'Слухати музику',
    'stream-eyebrow':'СТРІМІНГ',
    'support-eyebrow':'ПІДТРИМКА',
    'kofi-title':'Допоможи сигналу рости.',
    'kofi-desc':'Ko-fi — основний спосіб підтримати Blagoday Vision. Твій внесок допомагає створювати нові кінематографічні подорожі та музику.',
    'kofi-btn':'☕ Підтримати на Ko-fi →',
    'about-eyebrow':'ПРО КАНАЛ','about-title':'Що таке Blagoday Vision',
    'about-p1':'Ласкаво просимо до <strong>Blagoday Vision</strong> — світу за горизонтом, де звук і майбутнє стають єдиним цілим.',
    'about-p2':'Це твій портал в іммерсивну релаксацію, натхненну завтрашнім днем. Глибокий мелодійний ембієнт, футуристична архітектура, неонові горизонти.',
    'about-p3':'Чи потрібен тобі <strong>фокус, навчання, сон або втеча</strong> — наш канал пропонує спокійний притулок у серці майбутнього.',
    'about-p4':'Кожне відео — це кінематографічна подорож у <strong>Життя в 2250 році</strong>.',
    'feat1':'Космічні та міжзоряні атмосфери за межами Землі',
    'feat2':'Неонові мегаполіси та футуристичні горизонти 2250 року',
    'feat3':'Світи, керовані штучним інтелектом',
    'feat4':'Кінематографічні AI-візуали в 4K',
    'vibes-eyebrow':'АТМОСФЕРИ','vibes-title':'Обери свою атмосферу',
    'vibe1':'Концентрація та продуктивність','vibe2':"М'який сон і відпочинок",
    'vibe3':'Подорож між зорями','vibe4':'Мегаполіс майбутнього',
    'vibe5':'Органічна архітектура','vibe6':'Вихід із реального часу',
  },
  en: {
    'nav-videos':'Videos','nav-music':'Music','nav-about':'About',
    'hero-eyebrow':'CINEMATIC AMBIENT — LIFE IN 2250',
    'hero-h1-sub':'A WORLD BEYOND THE HORIZON',
    'hero-desc':'Immerse yourself in a universe of relaxation and cinematic sound. Deep melodic ambient, neon megacities, and advanced civilizations of 2250.',
    'hero-btn1':'▶ Watch Videos','hero-btn2':'♪ Listen to Music',
    'stat1':'Cinematic Quality','stat2':'Ambient Journeys','stat3':'Year of Vision','stat4':'AI-Generated Visuals',
    'featured-tag':'SIGNAL ARCHIVE','featured-title':'Latest Videos','featured-more':'All Videos →',
    'cta-eyebrow':'SUBSCRIBE TO THE CHANNEL',
    'cta-title':'Ready for a Journey to 2250?',
    'cta-sub':'New cinematic journeys and long-play ambient mixes are uploaded regularly.',
    'cta-btn':'Open YouTube ↗',
    'videos-eyebrow':'SIGNAL ARCHIVE','videos-title':'All Videos',
    'music-eyebrow':'SIGNAL','music-title':'Listen to Music',
    'stream-eyebrow':'STREAMING',
    'support-eyebrow':'SUPPORT',
    'kofi-title':'Help the Signal Grow.',
    'kofi-desc':'Ko-fi is the primary way to support Blagoday Vision. Your contribution helps create new cinematic journeys and music.',
    'kofi-btn':'☕ Support on Ko-fi →',
    'about-eyebrow':'ABOUT THE ENTITY','about-title':'What is Blagoday Vision',
    'about-p1':'Welcome to <strong>Blagoday Vision</strong> — a world beyond the horizon, where sound and the future become one.',
    'about-p2':'This is your gateway to immersive relaxation inspired by tomorrow. Deep melodic ambient, futuristic architecture, neon horizons.',
    'about-p3':'Whether you need to <strong>focus, study, sleep, or escape</strong> — our channel offers a serene sanctuary in the heart of the future.',
    'about-p4':'Every video is a cinematic journey into <strong>Life in 2250</strong>.',
    'feat1':'Cosmic and interstellar atmospheres beyond Earth',
    'feat2':'Neon megacities and futuristic horizons of 2250',
    'feat3':'Worlds driven by artificial intelligence',
    'feat4':'Cinematic AI visuals in 4K',
    'vibes-eyebrow':'ATMOSPHERES','vibes-title':'Choose Your Atmosphere',
    'vibe1':'Concentration and productivity','vibe2':'Soft sleep and rest',
    'vibe3':'Journey between the stars','vibe4':'The megacity of the future',
    'vibe5':'Organic architecture','vibe6':'Escape from real time',
  }
};

let lang = localStorage.getItem('bv-lang') || 'uk';

function applyLang(l) {
  const d = T[l];
  document.querySelectorAll('[data-t]').forEach(el => {
    const k = el.getAttribute('data-t');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
  const uk = document.getElementById('btn-uk');
  const en = document.getElementById('btn-en');
  if (uk) uk.classList.toggle('active', l === 'uk');
  if (en) en.classList.toggle('active', l === 'en');
  document.documentElement.lang = l;
}

function setLang(l) {
  if (l === lang) return;
  lang = l;
  localStorage.setItem('bv-lang', l);
  const all = document.querySelectorAll('[data-t]');
  all.forEach(el => el.classList.add('fade-out'));
  setTimeout(() => {
    applyLang(l);
    all.forEach(el => { el.classList.remove('fade-out'); el.classList.add('fade-in'); });
    setTimeout(() => all.forEach(el => el.classList.remove('fade-in')), 150);
  }, 150);
}

function initLang() {
  applyLang(lang);
}
