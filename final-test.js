// ============================================
// TEST FINAL - Atelier B1.2: Pronominaladverbien komplett
// Claudia Toth · 15 întrebări: da(r)- + wo(r)- + regula -r- + lucru vs persoană + traducere
// ============================================

const finalTestData = [
    // da(r)- (3)
    { type: 'multiple', category: '📌 da(r)-', question: 'Pronominaladverbul (darauf, damit) înlocuiește:', options: ['prepoziție + es/das (un LUCRU)', 'o persoană', 'un verb', 'un adjectiv'], correct: 'prepoziție + es/das (un LUCRU)', explanation: 'da(r)- + prepoziție = prepoziția + es/das — numai pentru LUCRURI, nu persoane.' },
    { type: 'luckentext', category: '📌 da(r)-', question: 'Completează (warten auf → lucru):', sentence: 'Ich warte auf den Bus. → Ich warte <strong>______</strong>.', translation: 'Aștept asta.', accept: ['darauf'], correct: 'darauf', explanation: 'auf are vocală → dar- + auf = darauf.' },
    { type: 'luckentext', category: '📌 da(r)-', question: 'Completează (mit → lucru):', sentence: 'Ich bin mit dem Ergebnis zufrieden. → Ich bin <strong>______</strong> zufrieden.', translation: 'Sunt mulțumit de asta.', accept: ['damit'], correct: 'damit', explanation: 'mit are consoană → fără -r-: da + mit = damit.' },

    // wo(r)- (3)
    { type: 'multiple', category: '❓ wo(r)-', question: 'Cu ce întrebăm despre un LUCRU la „denken an"?', options: ['Woran?', 'An wen?', 'Wer?', 'Wo?'], correct: 'Woran?', explanation: 'Pentru un lucru → wo(r)- + prepoziție: Woran denkst du? Pentru persoană → An wen?' },
    { type: 'luckentext', category: '❓ wo(r)-', question: 'Completează (sich interessieren für → lucru):', sentence: '<strong>______</strong> interessierst du dich?', translation: 'De ce te interesezi?', accept: ['wofür', 'wofuer'], correct: 'Wofür', explanation: 'für are consoană → fără -r-: wo + für = Wofür.' },
    { type: 'luckentext', category: '❓ wo(r)-', question: 'Completează (sprechen über → lucru):', sentence: '<strong>______</strong> sprecht ihr?', translation: 'Despre ce vorbiți?', accept: ['worüber', 'worueber'], correct: 'Worüber', explanation: 'über are vocală → wor- + über = Worüber.' },

    // regula -r- (3)
    { type: 'multiple', category: '🔤 regula -r-', question: 'Când apare -r- de legătură (dar-, wor-)?', options: ['când prepoziția începe cu VOCALĂ', 'când prepoziția începe cu consoană', 'mereu', 'niciodată'], correct: 'când prepoziția începe cu VOCALĂ', explanation: 'Vocală (auf, an, über, in) → -r- (darauf, woran). Consoană (mit, für, von) → fără -r- (damit, wofür).' },
    { type: 'luckentext', category: '🔤 regula -r-', question: 'Formează: an + da =', sentence: 'an + da → <strong>______</strong>', translation: 'la asta', accept: ['daran'], correct: 'daran', explanation: 'an începe cu vocală → dar + an = daran.' },
    { type: 'luckentext', category: '🔤 regula -r-', question: 'Formează: von + wo =', sentence: 'von + wo → <strong>______</strong>', translation: 'despre ce', accept: ['wovon'], correct: 'wovon', explanation: 'von începe cu consoană → fără -r-: wo + von = wovon.' },

    // lucru vs persoană (3)
    { type: 'multiple', category: '👤 lucru vs persoană', question: 'Pentru o PERSOANĂ (warten auf) folosim:', options: ['Auf wen? / auf ihn', 'Worauf? / darauf', 'Wofür? / dafür', 'oricare'], correct: 'Auf wen? / auf ihn', explanation: 'Persoană → prepoziție + wen/ihn (Auf wen wartest du? Auf ihn). NU worauf/darauf.' },
    { type: 'luckentext', category: '👤 lucru vs persoană', question: 'Completează (persoană, denken an):', sentence: '<strong>______</strong> denkst du? — An meine Mutter.', translation: 'La cine te gândești?', accept: ['an wen'], correct: 'An wen', explanation: 'Persoană → prepoziția + wen: An wen? (NU Woran, care e pentru lucruri).' },
    { type: 'luckentext', category: '👤 lucru vs persoană', question: 'Completează (lucru, denken an):', sentence: '<strong>______</strong> denkst du? — An die Arbeit.', translation: 'La ce te gândești?', accept: ['woran'], correct: 'Woran', explanation: 'Lucru → wo(r)-: Woran? (an = vocală → wor-).' },

    // Traducere (3)
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (lucru):', ro: 'La ce aștepți? — Aștept asta.', accept: ['worauf wartest du? ich warte darauf.', 'worauf wartest du ich warte darauf'], correct: 'Worauf wartest du? Ich warte darauf.', explanation: 'auf = vocală → Worauf / darauf.' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (persoană):', ro: 'La cine te gândești?', accept: ['an wen denkst du?', 'an wen denkst du'], correct: 'An wen denkst du?', explanation: 'Persoană → An wen? (nu Woran).' },
    { type: 'translate', category: '🇷🇴 Traducere', question: 'Traduceți (lucru):', ro: 'De ce te interesezi? — Mă interesează asta.', accept: ['wofür interessierst du dich? ich interessiere mich dafür.', 'wofuer interessierst du dich ich interessiere mich dafuer'], correct: 'Wofür interessierst du dich? Ich interessiere mich dafür.', explanation: 'für = consoană → Wofür / dafür.' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function normalizeTestAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Test Final — Atelier Pronominaladverbien komplett</h3>
            <p>Test cu <strong>${finalTestData.length} întrebări</strong>: da(r)- + wo(r)- + regula lui -r- + lucru vs. persoană + traducere.</p>
            <ul class="test-info-list">
                <li>📌 da(r)- (3) · ❓ wo(r)- (3) · 🔤 regula -r- (3) · 👤 lucru vs persoană (3) · 🇷🇴 Traducere (3)</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>⏱️ Timp estimat: 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar"><div class="test-progress-fill" id="progress-fill"></div></div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback';
    feedback.textContent = '';
    let questionHTML = '';
    if (q.type === 'luckentext') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => { optionsHTML += `<div class="mc-option"><input type="radio" name="test-answer" value="${opt.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${opt}</label></div>`; });
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${optionsHTML}</div></div>`;
    } else if (q.type === 'translate') {
        questionHTML = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div><input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană..."></div>`;
    }
    container.innerHTML = questionHTML;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const userNorm = normalizeTestAnswer(userAnswer);
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === userNorm);
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    let emoji, message, messageRo, badge;
    if (percentage === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă! Pronominaladverbien stăpânite complet!'; }
    else if (percentage >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (percentage >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (percentage >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (percentage >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mistakes.push({ q, i, userAns: userAnswers[i].answer }); });
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br><span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color: #5A5147;">${m.q.explanation}</small></div>`;
        });
        mistakesHTML += '</div>';
    }
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    wizard.style.display = 'none';
    results.style.display = 'block';
    results.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top: 8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Atelier trecut (70%+)! 🧲 Acum stăpânești Pronominaladverbien — da-/wo-, regula lui -r- și lucru vs. persoană.</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsHTML}
        ${mistakesHTML}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

function goBackToTheory() {
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', function () { buildFinalTest(); });
