/* ============================================
   브레드이발소 캐릭터 성격검사 - 로직
   ============================================ */

const CHARACTERS = {
  bread: {
    name: '브레드',
    title: '빵집 최고의 천재 이발사',
    desc: '겉은 무뚝뚝하고 시크하지만 속은 따뜻해!\n네가 좋아하는 일에 푹 빠지는 진짜 장인이야.',
    img: 'images/bread.png',
  },
  wilk: {
    name: '윌크',
    title: '브레드의 사고뭉치 조수',
    desc: '실수투성이지만 누구보다 열정이 넘쳐!\n순수하고 따뜻해서 모두가 너를 좋아해.',
    img: 'images/wilk.png',
  },
  choco: {
    name: '초코',
    title: '브레드이발소의 시크한 캐셔',
    desc: '쿨하고 시크한 매력이 가득해!\n쇼핑과 핸드폰을 사랑하는 마이웨이 스타일이야.',
    img: 'images/choco.png',
  },
  sausage: {
    name: '소시지',
    title: '베이커리타운에서 가장 똑똑한 친구',
    desc: '지혜롭고 성숙해서 친구들이 의지해!\n어떤 상황에서도 차분하게 해결하는 만능 해결사야.',
    img: 'images/sausage.png',
  },
  cheese: {
    name: '치즈',
    title: '까망베르 치즈 가문의 장남',
    desc: '겉은 조용하지만 마음은 누구보다 따뜻해!\n자신만의 매력을 천천히 보여주는 진심파야.',
    img: 'images/cheese.png',
  },
  chips: {
    name: '감자칩',
    title: '감자칩 미용실의 사장',
    desc: '아이디어가 톡톡 튀는 잔머리의 천재!\n경쟁심도 강하고 너만의 방식으로 세상을 헤쳐 나가.',
    img: 'images/chips.png',
  },
  butter: {
    name: '버터',
    title: '세계적인 한류 톱스타',
    desc: '잘생긴 외모만큼 마음씨도 다정해!\n친구들을 늘 챙기는 따뜻한 카리스마가 있어.',
    img: 'images/butter.png',
  },
  macaron: {
    name: '마카롱',
    title: '베이커리타운 최고의 아이돌',
    desc: '반짝이는 매력이 가득한 인기 만점!\n다정하고 사랑스러워서 모두의 친구가 되어줘.',
    img: 'images/macaron.png',
  },
  icecream: {
    name: '아이스크림',
    title: '호기심 많은 아이스크림 소년',
    desc: '세상 모든 게 신기한 호기심 대마왕!\n새로운 도전을 두려워하지 않는 용감한 친구야.',
    img: 'images/icecream.png',
  },
  queen: {
    name: '케이크 여왕',
    title: '베이커리타운의 최고 권력자',
    desc: '카리스마 넘치는 타고난 리더!\n원하는 건 끝까지 해내는 강한 의지의 소유자야.',
    img: 'images/queen.png',
  },
  croissant: {
    name: '크로아상',
    title: '베이커리타운 국민 MC',
    desc: '말솜씨가 끝내주는 분위기 메이커!\n네가 가는 곳마다 웃음꽃이 활짝 피어나.',
    img: 'images/croissant.png',
  },
  popcorn: {
    name: '팝콘 감독',
    title: '베이커리타운 예능의 거장',
    desc: '완벽주의 카리스마의 진정한 프로!\n네가 지휘하면 어떤 일이든 명작이 돼.',
    img: 'images/popcorn.png',
  },
};

/* 질문 + 보기 + 캐릭터 매칭 점수 */
const QUESTIONS = [
  {
    q: '친구들과 있을 때 너는 어떤 편이야?',
    options: [
      { emoji: '🎤', text: '분위기를 띄우는 분위기 메이커!',
        scores: { croissant: 3, wilk: 2, macaron: 2, butter: 1 } },
      { emoji: '🤫', text: '가만히 듣는 조용한 편',
        scores: { sausage: 3, choco: 2, icecream: 2, cheese: 2 } },
      { emoji: '💪', text: '내 생각을 똑 부러지게 말해',
        scores: { bread: 2, queen: 3, popcorn: 2, chips: 1 } },
      { emoji: '🤗', text: '친구들을 챙기고 응원해줘',
        scores: { butter: 2, macaron: 2, cheese: 1, wilk: 1, sausage: 1 } },
    ],
  },
  {
    q: '쉬는 날에 가장 하고 싶은 건?',
    options: [
      { emoji: '🎉', text: '친구들과 신나게 놀러 가기!',
        scores: { wilk: 3, macaron: 2, croissant: 2, icecream: 1 } },
      { emoji: '📱', text: '집에서 핸드폰 보며 푹 쉬기',
        scores: { choco: 3, butter: 2, queen: 2, popcorn: 1 } },
      { emoji: '🗺️', text: '새로운 곳을 탐험해보기',
        scores: { icecream: 3, wilk: 1, croissant: 1, sausage: 1 } },
      { emoji: '🎨', text: '좋아하는 취미에 푹 빠지기',
        scores: { bread: 3, popcorn: 2, chips: 2, cheese: 1 } },
    ],
  },
  {
    q: '처음 보는 새로운 일이 생기면?',
    options: [
      { emoji: '🚀', text: '일단 부딪혀 보는 편!',
        scores: { wilk: 3, icecream: 3, croissant: 1, queen: 1 } },
      { emoji: '📋', text: '계획부터 꼼꼼히 세워',
        scores: { sausage: 3, popcorn: 2, bread: 2, butter: 1 } },
      { emoji: '💬', text: '친구나 어른에게 물어봐',
        scores: { cheese: 2, macaron: 2, icecream: 1, butter: 1 } },
      { emoji: '✨', text: '내 방식대로 해결해',
        scores: { chips: 3, queen: 2, choco: 2, bread: 1 } },
    ],
  },
  {
    q: '너의 성격을 한마디로 표현하면?',
    options: [
      { emoji: '😆', text: '장난기 많고 활발해!',
        scores: { wilk: 3, croissant: 2, icecream: 2, chips: 1, macaron: 1 } },
      { emoji: '😎', text: '차분하고 시크해',
        scores: { choco: 3, bread: 2, cheese: 2, sausage: 1 } },
      { emoji: '🦁', text: '똑부러지고 카리스마 있어',
        scores: { popcorn: 3, queen: 2, sausage: 2, bread: 1 } },
      { emoji: '💖', text: '다정하고 따뜻해',
        scores: { macaron: 3, butter: 2, cheese: 1, wilk: 1 } },
    ],
  },
  {
    q: '가장 좋아하는 간식은?',
    options: [
      { emoji: '🍰', text: '달콤한 케이크와 마카롱',
        scores: { queen: 2, macaron: 2, butter: 1, croissant: 1, bread: 1 } },
      { emoji: '🍿', text: '짭짤한 과자랑 팝콘',
        scores: { chips: 3, popcorn: 3, croissant: 1 } },
      { emoji: '🍦', text: '시원한 아이스크림',
        scores: { icecream: 3, choco: 1, sausage: 1 } },
      { emoji: '🥛', text: '갓 구운 빵과 우유',
        scores: { bread: 2, wilk: 3, cheese: 2, sausage: 1 } },
    ],
  },
];

/* 인트로 대사 */
const INTRO_LINES = [
  '어서 와! 나는 브레드야.',
  '너에게 어울리는 베이커리타운 친구를 찾아줄게.',
  '몇 가지 질문에 답해볼래?',
];

/* ============================================
   상태 관리
   ============================================ */
const state = {
  step: 0,
  scores: {},
  selectedOption: null,
  introIdx: 0,
  autoResetTimer: null,
  autoResetCountdown: null,
};

const screens = {
  idle: document.getElementById('screen-idle'),
  intro: document.getElementById('screen-intro'),
  question: document.getElementById('screen-question'),
  loading: document.getElementById('screen-loading'),
  result: document.getElementById('screen-result'),
};

const els = {
  startBtn: document.getElementById('start-btn'),
  introText: document.getElementById('intro-text'),
  introNextBtn: document.getElementById('intro-next-btn'),
  qCurrent: document.getElementById('q-current'),
  qTotal: document.getElementById('q-total'),
  progressFill: document.getElementById('progress-fill'),
  questionText: document.getElementById('question-text'),
  optionsGrid: document.getElementById('options-grid'),
  resultImg: document.getElementById('result-img'),
  resultName: document.getElementById('result-name'),
  resultTitle: document.getElementById('result-title'),
  resultDesc: document.getElementById('result-desc'),
  printBtn: document.getElementById('print-btn'),
  restartBtn: document.getElementById('restart-btn'),
  autoReset: document.getElementById('auto-reset'),
  autoResetTimer: document.getElementById('auto-reset-timer'),
};

/* ============================================
   화면 전환
   ============================================ */
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  requestAnimationFrame(() => {
    screens[name].classList.add('active');
  });
}

/* ============================================
   대기 → 인트로
   ============================================ */
els.startBtn.addEventListener('click', startIntro);

function startIntro() {
  resetState();
  showScreen('intro');
  state.introIdx = 0;
  showIntroLine();
}

function showIntroLine() {
  els.introNextBtn.style.display = 'none';
  els.introText.textContent = INTRO_LINES[state.introIdx];
  els.introText.style.animation = 'none';
  // reflow to restart animation
  void els.introText.offsetWidth;
  els.introText.style.animation = 'result-pop 0.6s ease';

  if (state.introIdx < INTRO_LINES.length - 1) {
    setTimeout(() => {
      state.introIdx++;
      showIntroLine();
    }, 2000);
  } else {
    setTimeout(() => {
      els.introNextBtn.style.display = 'inline-block';
      els.introNextBtn.classList.add('pulse');
    }, 1200);
  }
}

els.introNextBtn.addEventListener('click', () => {
  els.introNextBtn.classList.remove('pulse');
  startQuestions();
});

/* ============================================
   질문 진행
   ============================================ */
function startQuestions() {
  state.step = 0;
  state.scores = {};
  Object.keys(CHARACTERS).forEach(k => state.scores[k] = 0);
  els.qTotal.textContent = QUESTIONS.length;
  showScreen('question');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[state.step];
  els.qCurrent.textContent = state.step + 1;
  els.progressFill.style.width = `${((state.step + 1) / QUESTIONS.length) * 100}%`;
  els.questionText.textContent = q.q;
  els.optionsGrid.innerHTML = '';

  q.options.forEach((opt, idx) => {
    const card = document.createElement('button');
    card.className = 'option-card';
    card.innerHTML = `<span class="opt-emoji">${opt.emoji}</span><span>${opt.text}</span>`;
    card.addEventListener('click', () => onSelectOption(card, opt));
    els.optionsGrid.appendChild(card);
  });
}

function onSelectOption(card, opt) {
  // 중복 선택 방지
  const all = els.optionsGrid.querySelectorAll('.option-card');
  if (Array.from(all).some(c => c.classList.contains('selected'))) return;
  card.classList.add('selected');

  // 점수 누적
  Object.entries(opt.scores).forEach(([char, pts]) => {
    state.scores[char] = (state.scores[char] || 0) + pts;
  });

  setTimeout(() => {
    if (state.step < QUESTIONS.length - 1) {
      state.step++;
      renderQuestion();
    } else {
      finishTest();
    }
  }, 450);
}

/* ============================================
   결과 산출
   ============================================ */
function finishTest() {
  showScreen('loading');
  setTimeout(() => {
    const winner = pickWinner();
    showResult(winner);
  }, 1800);
}

function pickWinner() {
  let max = -1;
  let candidates = [];
  Object.entries(state.scores).forEach(([char, score]) => {
    if (score > max) {
      max = score;
      candidates = [char];
    } else if (score === max) {
      candidates.push(char);
    }
  });
  // 동점일 경우 랜덤
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function showResult(charKey) {
  const c = CHARACTERS[charKey];
  els.resultImg.src = c.img;
  els.resultImg.alt = c.name;
  els.resultName.textContent = c.name;
  els.resultTitle.textContent = c.title;
  els.resultDesc.innerHTML = c.desc.replace(/\n/g, '<br/>');
  showScreen('result');
  startAutoResetTimer(20);
}

/* ============================================
   다시 하기 / 자동 리셋
   ============================================ */
els.printBtn.addEventListener('click', () => {
  window.print();
});

els.restartBtn.addEventListener('click', () => {
  stopAutoResetTimer();
  goToIdle();
});

function goToIdle() {
  resetState();
  showScreen('idle');
}

function resetState() {
  state.step = 0;
  state.scores = {};
  state.introIdx = 0;
  stopAutoResetTimer();
}

function startAutoResetTimer(seconds) {
  stopAutoResetTimer();
  let remaining = seconds;
  els.autoResetTimer.textContent = remaining;
  els.autoReset.classList.remove('hidden');

  state.autoResetCountdown = setInterval(() => {
    remaining--;
    els.autoResetTimer.textContent = remaining;
    if (remaining <= 0) {
      stopAutoResetTimer();
      goToIdle();
    }
  }, 1000);
}

function stopAutoResetTimer() {
  if (state.autoResetCountdown) clearInterval(state.autoResetCountdown);
  state.autoResetCountdown = null;
  els.autoReset.classList.add('hidden');
}

/* ============================================
   유휴 화면에서 자동 새로고침 (장기 운영용)
   ============================================ */
let idleResetTimer = null;
function resetIdleTimer() {
  if (idleResetTimer) clearTimeout(idleResetTimer);
  // 결과/질문 화면에서 1분 동안 인터랙션 없으면 처음으로
  idleResetTimer = setTimeout(() => {
    if (!screens.idle.classList.contains('active')) goToIdle();
  }, 60000);
}

document.addEventListener('touchstart', resetIdleTimer, { passive: true });
document.addEventListener('click', resetIdleTimer);

/* ============================================
   초기화
   ============================================ */
showScreen('idle');
