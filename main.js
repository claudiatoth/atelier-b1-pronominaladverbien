// ============================================
// MAIN.JS - Funcții principale
// Claudia Toth · Nomen-Verb-Verbindungen
// ============================================

// ============================================
// TOGGLE SECȚIUNI PRINCIPALE
// ============================================
function toggleMainSection(i) {
    const content = document.getElementById('main-section-' + i);
    const arrow = document.querySelectorAll('.arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ============================================
// TOGGLE SUB-SECȚIUNI (în Teorie)
// ============================================
function toggleSubSection(i) {
    const content = document.getElementById('sub-section-' + i);
    const arrow = document.querySelectorAll('.sub-arrow')[i];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}

// ============================================
// OPEN SECTION FROM NAVBAR
// ============================================
function openSection(index) {
    const contents = document.querySelectorAll('.section-content');
    const arrows = document.querySelectorAll('.arrow');
    if (contents[index] && !contents[index].classList.contains('active')) {
        contents[index].classList.add('active');
        if (arrows[index]) arrows[index].classList.add('rotated');
    }
}

// ============================================
// AUDIO CONTROL - player brandat: play/pause + restart + bara de progres (seek)
// FARA reluare automata: la reincarcare porneste de la 0; pauza-continua in sesiune.
// ============================================
let currentAudioId = null;

function formatAudioTime(seconds) {
    if (!isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return m + ':' + s;
}

function pauseOtherAudio(audioId) {
    if (currentAudioId && currentAudioId !== audioId) {
        const prevAudio = document.getElementById(currentAudioId);
        const prevBtn = document.getElementById('btn-' + currentAudioId);
        if (prevAudio) prevAudio.pause();
        if (prevBtn) prevBtn.textContent = '▶';
    }
}

function toggleAudio(event, audioId) {
    if (event) event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio || !btn) return;

    pauseOtherAudio(audioId);

    if (audio.paused) {
        audio.play().then(() => {
            btn.textContent = '⏸';
            currentAudioId = audioId;
        }).catch(err => {
            console.log('Audio nu poate fi redat:', err);
            alert('Fisierul audio nu este disponibil inca. Incearca din nou.');
            btn.textContent = '▶';
        });
    } else {
        audio.pause();
        btn.textContent = '▶';
        currentAudioId = null;
    }

    audio.onended = function () {
        btn.textContent = '▶';
        currentAudioId = null;
    };
}

// Reia de la INCEPUT (buton restart): pozitie 0 + porneste
function restartAudio(event, audioId) {
    if (event) event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (!audio) return;
    pauseOtherAudio(audioId);
    audio.currentTime = 0;
    audio.play().then(() => {
        if (btn) btn.textContent = '⏸';
        currentAudioId = audioId;
    }).catch(() => {});
    audio.onended = function () {
        if (btn) btn.textContent = '▶';
        currentAudioId = null;
    };
}

// ============================================
// INIT AUDIO - injecteaza restart + bara de progres + timp + seek (click/drag)
// ============================================
function initLessonAudios() {
    document.querySelectorAll('audio[id^="audio-"]').forEach(audio => {
        const player = audio.closest('.audio-player');
        if (!player || player.querySelector('.audio-progress')) return;

        // playerul umple latimea disponibila (bara de progres larga)
        player.style.flex = '1';

        // durata vizibila + seek posibil inainte de play
        try { audio.preload = 'metadata'; } catch (e) {}

        // buton RESTART (dupa play), stil brandat
        const mainBtn = player.querySelector('.audio-btn');
        const restart = document.createElement('button');
        restart.type = 'button';
        restart.className = 'audio-btn audio-restart';
        restart.textContent = '⏮';
        restart.title = 'De la inceput';
        restart.setAttribute('aria-label', 'Reia de la inceput');
        restart.style.cssText = 'margin-left:6px; font-size:0.8rem;';
        restart.addEventListener('click', e => restartAudio(e, audio.id));
        if (mainBtn && mainBtn.parentNode) {
            mainBtn.parentNode.insertBefore(restart, mainBtn.nextSibling);
        }

        // bara de progres (track + fill + knob)
        const bar = document.createElement('div');
        bar.className = 'audio-progress';
        bar.style.cssText = 'flex:1; height:10px; background:#E7E0D4; border-radius:6px; position:relative; cursor:pointer; margin:0 12px; min-width:70px; touch-action:none;';
        const fill = document.createElement('div');
        fill.className = 'audio-progress-fill';
        fill.style.cssText = 'position:absolute; left:0; top:0; height:100%; width:0%; background:#10B981; border-radius:6px; pointer-events:none;';
        const knob = document.createElement('div');
        knob.className = 'audio-progress-knob';
        knob.style.cssText = 'position:absolute; top:50%; left:0%; width:16px; height:16px; background:#10B981; border:2px solid #ffffff; border-radius:50%; transform:translate(-50%,-50%); box-shadow:0 1px 3px rgba(0,0,0,0.3); pointer-events:none;';
        bar.appendChild(fill);
        bar.appendChild(knob);
        player.appendChild(bar);

        // timp curent / total
        const tc = document.createElement('span');
        tc.className = 'audio-timecode';
        tc.id = 'time-' + audio.id;
        tc.textContent = '0:00';
        tc.style.cssText = "font-size:0.85rem; color:#5A5147; font-family:'Courier New', monospace; font-weight:600; white-space:nowrap; min-width:82px; text-align:right;";
        player.appendChild(tc);

        const updateUI = () => {
            const d = audio.duration || 0;
            const pct = d ? (audio.currentTime / d) * 100 : 0;
            fill.style.width = pct + '%';
            knob.style.left = pct + '%';
            tc.textContent = formatAudioTime(audio.currentTime) + ' / ' + formatAudioTime(d);
        };
        audio.addEventListener('timeupdate', updateUI);
        audio.addEventListener('loadedmetadata', updateUI);
        audio.addEventListener('durationchange', updateUI);

        // SEEK: click/drag oriunde (inceput = restart, oriunde = inainte/inapoi)
        let dragging = false;
        const seekTo = clientX => {
            if (!audio.duration) return;
            const rect = bar.getBoundingClientRect();
            let ratio = (clientX - rect.left) / rect.width;
            ratio = Math.max(0, Math.min(1, ratio));
            audio.currentTime = ratio * audio.duration;
            updateUI();
        };
        bar.addEventListener('pointerdown', e => {
            dragging = true;
            try { bar.setPointerCapture(e.pointerId); } catch (x) {}
            seekTo(e.clientX);
        });
        bar.addEventListener('pointermove', e => { if (dragging) seekTo(e.clientX); });
        bar.addEventListener('pointerup', e => {
            dragging = false;
            try { bar.releasePointerCapture(e.pointerId); } catch (x) {}
        });
    });
}

if (document.readyState !== 'loading') {
    initLessonAudios();
} else {
    document.addEventListener('DOMContentLoaded', initLessonAudios);
}

// ============================================
// VERIFICĂ EXERCIȚIU INDIVIDUAL
// ============================================
function checkExercise(num) {
    let result;
    
    switch(num) {
        case 1: result = checkEx1(); break;
        case 2: result = checkEx2(); break;
        case 3: result = checkEx3(); break;
        case 4: result = checkEx4(); break;
        case 5: result = checkEx5(); break;
        default: return;
    }
    
    const percentage = Math.round((result.correct / result.total) * 100);
    
    let message = '';
    let emoji = '';
    if (percentage === 100) {
        emoji = '🏆';
        message = 'Perfekt! / Perfect!';
    } else if (percentage >= 80) {
        emoji = '⭐';
        message = 'Sehr gut! / Foarte bine!';
    } else if (percentage >= 60) {
        emoji = '👍';
        message = 'Gut! / Bine!';
    } else if (percentage >= 40) {
        emoji = '📚';
        message = 'Übe noch! / Mai exersează!';
    } else {
        emoji = '💪';
        message = 'Wiederhole die Theorie! / Repetă teoria!';
    }
    
    const scoreDiv = document.getElementById('score-' + num);
    scoreDiv.className = 'score show';
    scoreDiv.innerHTML = `
        <div class="score-value">${emoji} ${result.correct} / ${result.total} (${percentage}%)</div>
        <div class="score-message">${message}</div>
    `;
    
    scoreDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ============================================
// RESETEAZĂ EXERCIȚIU INDIVIDUAL
// Delegator: cheamă resetExN definit în exercises.js
// ============================================
function resetExercise(num) {
    const fnName = 'resetEx' + num;
    if (typeof window[fnName] === 'function') {
        window[fnName]();
    }

    // Reset score pentru exercițiul respectiv
    const scoreDiv = document.getElementById('score-' + num);
    if (scoreDiv) {
        scoreDiv.className = 'score';
        scoreDiv.innerHTML = '';
    }

    // Scroll la începutul exercițiului
    const exSection = document.getElementById('ex' + num);
    if (exSection) {
        exSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
