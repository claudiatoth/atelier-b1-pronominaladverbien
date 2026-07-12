// ============================================
// FLASHCARDS - Atelier B1.2: Pronominaladverbien komplett
// 32 carduri: 8 reguli + 8 propoziții + 8 vocab + 8 verbe
// Audio: WAV-uri Hedda în audio/letters/
// REGULĂ: EXACT 6 ghilimele ASCII per card — ZERO ghilimele interne!
// ============================================

const flashcardsData = [
    // ========== 8 reguli ==========
    { de: "da(r)- + prep = prep + es/das", ro: "pentru LUCRURI: Ich warte darauf (= auf das)", audio: "audio/letters/01-da.wav" },
    { de: "wo(r)- + prep = întrebare", ro: "pentru lucruri: Worauf wartest du?", audio: "audio/letters/02-wo.wav" },
    { de: "regula -r- (vocală)", ro: "auf → worauf/darauf; über → darüber; an → daran", audio: "audio/letters/03-r-vokal.wav" },
    { de: "fără -r- (consoană)", ro: "mit → womit/damit; von → davon; für → dafür", audio: "audio/letters/04-r-konsonant.wav" },
    { de: "LUCRU → da-/wo-", ro: "Worauf? / darauf (numai pentru lucruri)", audio: "audio/letters/05-sache.wav" },
    { de: "PERSOANĂ → prep + wen/ihn", ro: "Auf wen? / auf ihn (NU worauf!)", audio: "audio/letters/06-person.wav" },
    { de: "Verben mit Präposition", ro: "warten auf, denken an, sich freuen über", audio: "audio/letters/07-verben.wav" },
    { de: "im Relativsatz (reper nedefinit)", ro: "etwas, worüber ich nachdenke", audio: "audio/letters/08-relativ.wav" },

    // ========== 8 propoziții ==========
    { de: "Worauf wartest du?", ro: "La ce aștepți? (lucru)", audio: "audio/letters/09-worauf.wav" },
    { de: "Ich warte darauf.", ro: "Aștept asta.", audio: "audio/letters/10-darauf.wav" },
    { de: "Woran denkst du?", ro: "La ce te gândești?", audio: "audio/letters/11-woran.wav" },
    { de: "Ich denke daran.", ro: "Mă gândesc la asta.", audio: "audio/letters/12-daran.wav" },
    { de: "Wofür interessierst du dich?", ro: "De ce te interesezi?", audio: "audio/letters/13-wofuer.wav" },
    { de: "Ich freue mich darüber.", ro: "Mă bucur de asta.", audio: "audio/letters/14-darueber.wav" },
    { de: "Auf wen wartest du?", ro: "Pe cine aștepți? (persoană)", audio: "audio/letters/15-auf-wen.wav" },
    { de: "Womit fährst du?", ro: "Cu ce mergi?", audio: "audio/letters/16-womit.wav" },

    // ========== 8 vocab ==========
    { de: "darauf · daran · darüber", ro: "la asta (auf/an/über + das)", audio: "audio/letters/17-dar.wav" },
    { de: "damit · davon · dafür", ro: "cu / despre / pentru asta", audio: "audio/letters/18-da-kons.wav" },
    { de: "worauf · woran · worüber", ro: "la ce (întrebare, vocală)", audio: "audio/letters/19-wor.wav" },
    { de: "womit · wovon · wofür", ro: "cu / despre / pentru ce (consoană)", audio: "audio/letters/20-wo-kons.wav" },
    { de: "davor · wovor", ro: "de asta / de ce (Angst haben vor)", audio: "audio/letters/21-vor.wav" },
    { de: "dazu · wozu · darin · worin", ro: "la asta/ce (scop) · în asta/ce", audio: "audio/letters/22-zu-in.wav" },
    { de: "das Pronominaladverb", ro: "adverbul pronominal (wo-/da- + prep)", audio: "audio/letters/23-begriff.wav" },
    { de: "Sache vs. Person", ro: "lucru → da-/wo- · persoană → prep + wen/ihn", audio: "audio/letters/24-sache-person.wav" },

    // ========== 8 verbe (cu prepoziție) ==========
    { de: "warten auf (regulat)", ro: "a aștepta — Worauf? / darauf", audio: "audio/letters/25-warten-v.wav" },
    { de: "denken an (neregulat)", ro: "a se gândi la — Woran? / daran", audio: "audio/letters/26-denken-v.wav" },
    { de: "sprechen über (tare)", ro: "a vorbi despre — Worüber? / darüber", audio: "audio/letters/27-sprechen-v.wav" },
    { de: "sich freuen über/auf (regulat)", ro: "a se bucura — Worüber? Worauf? / darüber", audio: "audio/letters/28-freuen-v.wav" },
    { de: "sich interessieren für (regulat)", ro: "a fi interesat de — Wofür? / dafür", audio: "audio/letters/29-interessieren-v.wav" },
    { de: "sich bedanken für (regulat)", ro: "a mulțumi pentru — Wofür? / dafür", audio: "audio/letters/30-bedanken-v.wav" },
    { de: "Angst haben vor", ro: "a-i fi frică de — Wovor? / davor", audio: "audio/letters/31-angst-card.wav" },
    { de: "sich freuen auf", ro: "a se bucura de (viitor) — Worauf? / darauf", audio: "audio/letters/32-freuen-auf-card.wav" }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri pentru atelierul Pronominaladverbien.</strong><br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunție.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

let flashcardAudioEl = null;
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (flashcardAudioEl) { flashcardAudioEl.pause(); flashcardAudioEl.currentTime = 0; }
    flashcardAudioEl = new Audio(card.audio);
    flashcardAudioEl.play().catch(err => {
        console.warn('Audio nu poate fi redat:', err);
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(card.de);
            u.lang = 'de-DE';
            u.rate = 0.85;
            window.speechSynthesis.speak(u);
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    buildFlashcards();
});
