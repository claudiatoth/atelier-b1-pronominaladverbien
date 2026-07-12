// ============================================
// EXERCIȚII - Atelier B1.2: Pronominaladverbien komplett
// Claudia Toth · 5 exerciții cu rezolvări complete
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '').trim();
}

// ============================================
// EX 1: da(r)- pentru lucruri (înlocuiește prep + das)
// ============================================
const ex1Data = [
    { id: 'a', sentence: 'Ich warte auf den Bus. → Ich warte ____. (auf)', translation: 'Aștept asta.', correct: 'darauf', accept: ['darauf'] },
    { id: 'b', sentence: 'Ich denke an die Arbeit. → Ich denke ____. (an)', translation: 'Mă gândesc la asta.', correct: 'daran', accept: ['daran'] },
    { id: 'c', sentence: 'Ich freue mich über das Geschenk. → Ich freue mich ____. (über)', translation: 'Mă bucur de asta.', correct: 'darüber', accept: ['darüber', 'darueber'] },
    { id: 'd', sentence: 'Ich interessiere mich für Musik. → Ich interessiere mich ____. (für)', translation: 'Mă interesează asta.', correct: 'dafür', accept: ['dafür', 'dafuer'] },
    { id: 'e', sentence: 'Wir sprechen über das Problem. → Wir sprechen ____. (über)', translation: 'Vorbim despre asta.', correct: 'darüber', accept: ['darüber', 'darueber'] },
    { id: 'f', sentence: 'Ich habe Angst vor dem Test. → Ich habe Angst ____. (vor)', translation: 'Mi-e frică de asta.', correct: 'davor', accept: ['davor'] },
    { id: 'g', sentence: 'Ich bin mit dem Ergebnis zufrieden. → Ich bin ____ zufrieden. (mit)', translation: 'Sunt mulțumit de asta.', correct: 'damit', accept: ['damit'] },
    { id: 'h', sentence: 'Ich danke dir für die Hilfe. → Ich danke dir ____. (für)', translation: 'Îți mulțumesc pentru asta.', correct: 'dafür', accept: ['dafür', 'dafuer'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 da(r)- pentru lucruri (înlocuiește prepoziție + das). 🧲</strong><br>
        <em>Reține:</em> vocală → dar- (darauf, daran, darüber) · consoană → da- (damit, davor, dafür).
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex1-${it.id}" placeholder="da- / dar- + prepoziție">
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const input = document.getElementById(`ex1-${it.id}`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EX 2: wo(r)- — întrebare pentru lucruri
// ============================================
const ex2Data = [
    { id: 'a', sentence: 'Ich denke an den Urlaub. → ____ denkst du? (an)', translation: 'La ce te gândești?', correct: 'Woran', accept: ['woran'] },
    { id: 'b', sentence: 'Ich warte auf den Bus. → ____ wartest du? (auf)', translation: 'La ce aștepți?', correct: 'Worauf', accept: ['worauf'] },
    { id: 'c', sentence: 'Ich freue mich über das Geschenk. → ____ freust du dich? (über)', translation: 'De ce te bucuri?', correct: 'Worüber', accept: ['worüber', 'worueber'] },
    { id: 'd', sentence: 'Ich interessiere mich für Sport. → ____ interessierst du dich? (für)', translation: 'De ce te interesezi?', correct: 'Wofür', accept: ['wofür', 'wofuer'] },
    { id: 'e', sentence: 'Wir sprechen über das Wetter. → ____ sprecht ihr? (über)', translation: 'Despre ce vorbiți?', correct: 'Worüber', accept: ['worüber', 'worueber'] },
    { id: 'f', sentence: 'Ich habe Angst vor Spinnen. → ____ hast du Angst? (vor)', translation: 'De ce ți-e frică?', correct: 'Wovor', accept: ['wovor'] },
    { id: 'g', sentence: 'Ich fahre mit dem Zug. → ____ fährst du? (mit)', translation: 'Cu ce mergi?', correct: 'Womit', accept: ['womit'] },
    { id: 'h', sentence: 'Ich danke für das Geschenk. → ____ dankst du? (für)', translation: 'Pentru ce mulțumești?', correct: 'Wofür', accept: ['wofür', 'wofuer'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 wo(r)- — întrebare pentru lucruri. ❓</strong><br>
        <em>Reține:</em> vocală → wor- (Worauf, Woran, Worüber) · consoană → wo- (Womit, Wovor, Wofür).
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex2-${it.id}" placeholder="Wo- / Wor- + prepoziție">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const input = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EX 3: regula -r- (formează da-/wo- din prepoziție)
// ============================================
const ex3Data = [
    { id: 'a', sentence: 'an + da → ____ (vocală → -r-)', translation: 'la asta', correct: 'daran', accept: ['daran'] },
    { id: 'b', sentence: 'mit + wo → ____ (consoană → fără -r-)', translation: 'cu ce', correct: 'womit', accept: ['womit'] },
    { id: 'c', sentence: 'auf + wo → ____ (vocală → -r-)', translation: 'la ce', correct: 'worauf', accept: ['worauf'] },
    { id: 'd', sentence: 'für + da → ____ (consoană → fără -r-)', translation: 'pentru asta', correct: 'dafür', accept: ['dafür', 'dafuer'] },
    { id: 'e', sentence: 'über + da → ____ (vocală → -r-)', translation: 'despre asta', correct: 'darüber', accept: ['darüber', 'darueber'] },
    { id: 'f', sentence: 'von + wo → ____ (consoană → fără -r-)', translation: 'despre ce', correct: 'wovon', accept: ['wovon'] },
    { id: 'g', sentence: 'in + da → ____ (vocală → -r-)', translation: 'în asta', correct: 'darin', accept: ['darin'] },
    { id: 'h', sentence: 'zu + wo → ____ (consoană → fără -r-)', translation: 'la ce (scop)', correct: 'wozu', accept: ['wozu'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Regula lui -r- — formează da-/wo-. 🔤</strong><br>
        <em>Reține:</em> prepoziție cu VOCALĂ (auf/an/über/in) → wor-/dar- (cu -r-); cu CONSOANĂ (mit/für/von/zu) → wo-/da- (fără -r-).
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>${it.sentence}</label>
                <small style="color:#5A5147">💬 ${it.translation}</small>
                <input type="text" id="ex3-${it.id}" placeholder="cuvântul format...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const input = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EX 4: Diktat audio
// ============================================
const ex4Data = [
    { id: 'a', audio: 'audio/diktat-01.wav', text: 'Worauf wartest du?', accept: ['Worauf wartest du?'], ro: 'La ce aștepți? (lucru)' },
    { id: 'b', audio: 'audio/diktat-02.wav', text: 'Ich warte darauf.', accept: ['Ich warte darauf.'], ro: 'Aștept asta.' },
    { id: 'c', audio: 'audio/diktat-03.wav', text: 'Woran denkst du?', accept: ['Woran denkst du?'], ro: 'La ce te gândești?' },
    { id: 'd', audio: 'audio/diktat-04.wav', text: 'Ich denke daran.', accept: ['Ich denke daran.'], ro: 'Mă gândesc la asta.' },
    { id: 'e', audio: 'audio/diktat-05.wav', text: 'Wofür interessierst du dich?', accept: ['Wofür interessierst du dich?'], ro: 'De ce te interesezi?' },
    { id: 'f', audio: 'audio/diktat-06.wav', text: 'Ich interessiere mich dafür.', accept: ['Ich interessiere mich dafür.'], ro: 'Mă interesează asta.' },
    { id: 'g', audio: 'audio/diktat-07.wav', text: 'Auf wen wartest du?', accept: ['Auf wen wartest du?'], ro: 'Pe cine aștepți? (persoană)' },
    { id: 'h', audio: 'audio/diktat-08.wav', text: 'Ich freue mich darüber.', accept: ['Ich freue mich darüber.'], ro: 'Mă bucur de asta.' }
];

function playDiktat(event, id) {
    event.preventDefault();
    event.stopPropagation();
    const audio = document.getElementById('diktat-audio-' + id);
    if (audio) { audio.currentTime = 0; audio.play().catch(() => {}); }
}

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎧 Diktat — ascultă și scrie propoziția.</strong><br>
        <em>Sfat:</em> atenție la wo-/da- + prepoziție și la lucru (darauf) vs. persoană (auf wen).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>
                    <button type="button" class="audio-btn" onclick="playDiktat(event, '${it.id}')" title="Ascultă" style="vertical-align:middle;">▶</button>
                    <span style="margin-left:8px;">Propoziția ${i + 1} — scrie ce auzi:</span>
                </label>
                <audio id="diktat-audio-${it.id}" preload="none"><source src="${it.audio}" type="audio/wav"></audio>
                <input type="text" id="ex4-${it.id}" placeholder="Scrie propoziția...">
                <small style="color:#5A5147">💬 ${it.ro}</small>
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const input = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        const valid = [it.text, ...(it.accept || [])].map(normalizeAnswer);
        if (valid.includes(ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.text}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.text}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EX 5: Traducere RO → DE (lucru vs. persoană)
// ============================================
const ex5Data = [
    { id: 'a', ro: 'La ce te gândești? (lucru)', correct: 'Woran denkst du?', accept: ['woran denkst du?', 'woran denkst du'] },
    { id: 'b', ro: 'Mă gândesc la asta.', correct: 'Ich denke daran.', accept: ['ich denke daran.', 'ich denke daran'] },
    { id: 'c', ro: 'La ce aștepți? (lucru)', correct: 'Worauf wartest du?', accept: ['worauf wartest du?', 'worauf wartest du'] },
    { id: 'd', ro: 'Aștept asta.', correct: 'Ich warte darauf.', accept: ['ich warte darauf.', 'ich warte darauf'] },
    { id: 'e', ro: 'La cine te gândești? (persoană)', correct: 'An wen denkst du?', accept: ['an wen denkst du?', 'an wen denkst du'] },
    { id: 'f', ro: 'Cu ce mergi? (lucru)', correct: 'Womit fährst du?', accept: ['womit fährst du?', 'womit faehrst du'] },
    { id: 'g', ro: 'De ce te interesezi? (lucru)', correct: 'Wofür interessierst du dich?', accept: ['wofür interessierst du dich?', 'wofuer interessierst du dich'] },
    { id: 'h', ro: 'Mă bucur de asta.', correct: 'Ich freue mich darüber.', accept: ['ich freue mich darüber.', 'ich freue mich darueber'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Traducere RO → DE.</strong><br>
        <em>Mix:</em> da(r)- · wo(r)- · lucru vs. persoană (worauf ≠ auf wen).
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <label>🇷🇴 ${it.ro}</label>
                <input type="text" id="ex5-${it.id}" placeholder="Traducere în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const input = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(input.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

document.addEventListener('DOMContentLoaded', function () {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});
