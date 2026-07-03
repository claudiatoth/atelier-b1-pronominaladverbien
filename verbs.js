// ============================================
// VERB-KONJUGATION - Atelier B1.2: Pronominaladverbien komplett
// 6 verbe PONS-verified cu prepoziție fixă: warten auf, denken an, sprechen über,
// sich freuen über/auf, sich interessieren für, sich bedanken für
// Prepoziția fixă generează Pronominaladverb: Worauf? → darauf; Woran? → daran ...
// Badge: tare/neregulat (rosu) · regulat (verde). Präteritum = IMPERFECT.
// ============================================

const verbsData = [
    {
        inf: 'warten', ro: 'a aștepta — auf', typ: 'regulat', aux: 'haben', part: 'gewartet',
        praes: [
            ['ich','warte','aștept'],['du','wartest','aștepți'],['er/sie/es','wartet','așteaptă'],
            ['wir','warten','așteptăm'],['ihr','wartet','așteptați'],['sie/Sie','warten','așteaptă']
        ],
        praet: [
            ['ich','wartete','așteptam'],['du','wartetest','așteptai'],['er/sie/es','wartete','aștepta'],
            ['wir','warteten','așteptam (noi)'],['ihr','wartetet','așteptați'],['sie/Sie','warteten','așteptau']
        ],
        perf: [
            ['ich','habe gewartet','am așteptat'],['du','hast gewartet','ai așteptat'],['er/sie/es','hat gewartet','a așteptat'],
            ['wir','haben gewartet','am așteptat'],['ihr','habt gewartet','ați așteptat'],['sie/Sie','haben gewartet','au așteptat']
        ],
        note: 'Verb REGULAT (-e- de ajutor: wartest). Präp auf → LUCRU: Worauf? / darauf · PERSOANĂ: Auf wen? / auf ihn.'
    },
    {
        inf: 'denken', ro: 'a se gândi — an', typ: 'tare / neregulat', aux: 'haben', part: 'gedacht',
        praes: [
            ['ich','denke','mă gândesc'],['du','denkst','te gândești'],['er/sie/es','denkt','se gândește'],
            ['wir','denken','ne gândim'],['ihr','denkt','vă gândiți'],['sie/Sie','denken','se gândesc']
        ],
        praet: [
            ['ich','dachte','mă gândeam'],['du','dachtest','te gândeai'],['er/sie/es','dachte','se gândea'],
            ['wir','dachten','ne gândeam'],['ihr','dachtet','vă gândeați'],['sie/Sie','dachten','se gândeau']
        ],
        perf: [
            ['ich','habe gedacht','m-am gândit'],['du','hast gedacht','te-ai gândit'],['er/sie/es','hat gedacht','s-a gândit'],
            ['wir','haben gedacht','ne-am gândit'],['ihr','habt gedacht','v-ați gândit'],['sie/Sie','haben gedacht','s-au gândit']
        ],
        note: 'Verb NEREGULAT (gemischt: dachte, gedacht). Präp an → LUCRU: Woran? / daran · PERSOANĂ: An wen? / an ihn.'
    },
    {
        inf: 'sprechen', ro: 'a vorbi (despre) — über', typ: 'tare / neregulat', aux: 'haben', part: 'gesprochen',
        praes: [
            ['ich','spreche','vorbesc'],['du','sprichst','vorbești'],['er/sie/es','spricht','vorbește'],
            ['wir','sprechen','vorbim'],['ihr','sprecht','vorbiți'],['sie/Sie','sprechen','vorbesc']
        ],
        praet: [
            ['ich','sprach','vorbeam'],['du','sprachst','vorbeai'],['er/sie/es','sprach','vorbea'],
            ['wir','sprachen','vorbeam (noi)'],['ihr','spracht','vorbeați'],['sie/Sie','sprachen','vorbeau']
        ],
        perf: [
            ['ich','habe gesprochen','am vorbit'],['du','hast gesprochen','ai vorbit'],['er/sie/es','hat gesprochen','a vorbit'],
            ['wir','haben gesprochen','am vorbit'],['ihr','habt gesprochen','ați vorbit'],['sie/Sie','haben gesprochen','au vorbit']
        ],
        note: 'Verb TARE (e→i: spricht). Präp über → LUCRU: Worüber? / darüber · PERSOANĂ: Über wen? / über ihn.'
    },
    {
        inf: 'sich freuen', ro: 'a se bucura — über/auf', typ: 'regulat (reflexiv)', aux: 'haben', part: 'gefreut',
        praes: [
            ['ich','freue mich','mă bucur'],['du','freust dich','te bucuri'],['er/sie/es','freut sich','se bucură'],
            ['wir','freuen uns','ne bucurăm'],['ihr','freut euch','vă bucurați'],['sie/Sie','freuen sich','se bucură']
        ],
        praet: [
            ['ich','freute mich','mă bucuram'],['du','freutest dich','te bucurai'],['er/sie/es','freute sich','se bucura'],
            ['wir','freuten uns','ne bucuram'],['ihr','freutet euch','vă bucurați'],['sie/Sie','freuten sich','se bucurau']
        ],
        perf: [
            ['ich','habe mich gefreut','m-am bucurat'],['du','hast dich gefreut','te-ai bucurat'],['er/sie/es','hat sich gefreut','s-a bucurat'],
            ['wir','haben uns gefreut','ne-am bucurat'],['ihr','habt euch gefreut','v-ați bucurat'],['sie/Sie','haben sich gefreut','s-au bucurat']
        ],
        note: 'REFLEXIV. über = de ceva petrecut · auf = de ceva viitor. LUCRU: Worüber?/Worauf? / darüber, darauf · PERSOANĂ: Über wen? / über ihn.'
    },
    {
        inf: 'sich interessieren', ro: 'a fi interesat — für', typ: 'regulat (reflexiv)', aux: 'haben', part: 'interessiert',
        praes: [
            ['ich','interessiere mich','mă interesează'],['du','interessierst dich','te interesează'],['er/sie/es','interessiert sich','îl interesează'],
            ['wir','interessieren uns','ne interesează'],['ihr','interessiert euch','vă interesează'],['sie/Sie','interessieren sich','îi interesează']
        ],
        praet: [
            ['ich','interessierte mich','mă interesa'],['du','interessiertest dich','te interesa'],['er/sie/es','interessierte sich','îl interesa'],
            ['wir','interessierten uns','ne interesa'],['ihr','interessiertet euch','vă interesa'],['sie/Sie','interessierten sich','îi interesa']
        ],
        perf: [
            ['ich','habe mich interessiert','m-am interesat'],['du','hast dich interessiert','te-ai interesat'],['er/sie/es','hat sich interessiert','s-a interesat'],
            ['wir','haben uns interessiert','ne-am interesat'],['ihr','habt euch interessiert','v-ați interesat'],['sie/Sie','haben sich interessiert','s-au interesat']
        ],
        note: 'REFLEXIV, fără -ge- la participiu (verb pe -ieren). Präp für → LUCRU: Wofür? / dafür · PERSOANĂ: Für wen? / für ihn.'
    },
    {
        inf: 'sich bedanken', ro: 'a mulțumi — für', typ: 'regulat (reflexiv)', aux: 'haben', part: 'bedankt',
        praes: [
            ['ich','bedanke mich','mulțumesc'],['du','bedankst dich','mulțumești'],['er/sie/es','bedankt sich','mulțumește'],
            ['wir','bedanken uns','mulțumim'],['ihr','bedankt euch','mulțumiți'],['sie/Sie','bedanken sich','mulțumesc']
        ],
        praet: [
            ['ich','bedankte mich','mulțumeam'],['du','bedanktest dich','mulțumeai'],['er/sie/es','bedankte sich','mulțumea'],
            ['wir','bedankten uns','mulțumeam (noi)'],['ihr','bedanktet euch','mulțumeați'],['sie/Sie','bedankten sich','mulțumeau']
        ],
        perf: [
            ['ich','habe mich bedankt','am mulțumit'],['du','hast dich bedankt','ai mulțumit'],['er/sie/es','hat sich bedankt','a mulțumit'],
            ['wir','haben uns bedankt','am mulțumit'],['ihr','habt euch bedankt','ați mulțumit'],['sie/Sie','haben sich bedankt','au mulțumit']
        ],
        note: 'REFLEXIV, fără -ge- la participiu (prefix be-). Präp für → LUCRU: Wofür? / dafür · PERSOANĂ: Bei wem? (a mulțumi cuiva = sich bei jdm. bedanken).'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#5A5147;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> er <strong>' + v.perf[2][1] + '</strong> · <em style="color:#5A5147;">' + v.perf[2][2] + '</em><br>' +
        '<small style="color:#5A5147;">Conjugi auxiliarul ca de obicei (ich habe/bin, du hast/bist...) + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale atelierului</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Toate au o prepoziție fixă — de aici se nasc Pronominaladverbien (Worauf? → darauf).' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Toate cele 6 verbe au o prepoziție fixă — de aceea nasc Pronominaladverbien: warten auf → Worauf? / darauf; denken an → Woran? / daran; sprechen über → Worüber? / darüber. Dar atenție: pentru PERSOANĂ nu folosim wo-/da-, ci prepoziția + wen/ihn (Auf wen? / auf ihn). sprechen e TARE, denken e neregulat, restul regulate. <img src=\"images/butterfly-emerald.png\" class=\"bf-inline\" alt=\"\">"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('Modal') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#F5F0E8;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });
    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
