// ============================================
// TEORIE - Atelier B1.2: Pronominaladverbien komplett
// Claudia Toth · da(r)- + prep · wo(r)- + prep · regula -r- · lucru vs. persoană
// Standard vizual: logo + marca-fluture (branding-only — gramatică)
// Perechea cu Relativsätze: reper NOMEN → Relativsatz · reper es/das/etwas → da-/wo- (aici)
// ============================================

const theoryHTML = `
    <!-- 0: da(r)- + Präposition -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🧲 1. da(r)- + prepoziție = „prep + es/das"</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-da.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune:</div>
                    <div class="text">„Când vrei să spui „prepoziție + el/asta" despre un <em>LUCRU</em>, germana NU zice „auf es". Lipește prepoziția de <strong>da-</strong>: <em>Ich warte <strong>darauf</strong></em> (= aștept asta). Pentru întrebare, lipești de <strong>wo-</strong>: <em>Worauf wartest du?</em> Ai o regulă simplă cu -r- și o capcană: lucru vs. persoană. Hai să le prindem! <img src="images/butterfly-emerald.png" class="bf-inline" alt=""></div>
                </div>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 da(r)- înlocuiește „prepoziție + es / das / it" (doar pentru LUCRURI)</h4>
                <table class="grammar-table">
                    <tr><th>În loc de…</th><th>Pronominaladverb</th><th>Exemplu</th></tr>
                    <tr><td>auf das/es</td><td class="verb">darauf</td><td>Ich warte <strong>darauf</strong>.</td></tr>
                    <tr><td>an das/es</td><td class="verb">daran</td><td>Ich denke <strong>daran</strong>.</td></tr>
                    <tr><td>mit dem/es</td><td class="verb">damit</td><td>Ich bin <strong>damit</strong> zufrieden.</td></tr>
                    <tr><td>für das/es</td><td class="verb">dafür</td><td>Ich interessiere mich <strong>dafür</strong>.</td></tr>
                </table>
                <p style="margin-top:6px">Se referă la ceva deja cunoscut: „Aștept <strong>asta</strong>" = darauf.</p>
            </div>

            <div class="theory-box">
                <h4>Ce înveți în acest atelier</h4>
                <ul>
                    <li>🧲 <strong>da(r)-</strong> + prep — referință la lucruri (darauf, daran)</li>
                    <li>❓ <strong>wo(r)-</strong> + prep — întrebare pentru lucruri (Worauf? Woran?)</li>
                    <li>🔤 <strong>regula lui -r-</strong> (auf → worauf/darauf · mit → womit/damit)</li>
                    <li>👤 <strong>lucru vs. persoană</strong> (worauf ≠ auf wen)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: wo(r)- + Präposition -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>❓ 2. wo(r)- + prepoziție = întrebare pentru lucruri</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-wo.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 Ca să întrebi despre un LUCRU, lipești prepoziția de wo-</h4>
                <table class="grammar-table">
                    <tr><th>Verb + prep</th><th>Întrebare (lucru)</th><th>Răspuns</th></tr>
                    <tr><td>warten auf</td><td class="verb">Worauf?</td><td>Worauf wartest du? — Auf den Bus.</td></tr>
                    <tr><td>denken an</td><td class="verb">Woran?</td><td>Woran denkst du? — An die Arbeit.</td></tr>
                    <tr><td>sprechen über</td><td class="verb">Worüber?</td><td>Worüber sprecht ihr?</td></tr>
                    <tr><td>sich interessieren für</td><td class="verb">Wofür?</td><td>Wofür interessierst du dich?</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>💬 da- răspunde la wo-</h4>
                <div class="example-box">
                    <p class="de"><strong>Worauf</strong> wartest du? — Ich warte <strong>darauf</strong>.</p>
                    <p class="de"><strong>Woran</strong> denkst du? — Ich denke <strong>daran</strong>.</p>
                    <p class="ro">La ce aștepți? — Aștept asta. · La ce te gândești? — Mă gândesc la asta.</p>
                </div>
            </div>

            <div style="background: #fdf4ff; border-left: 4px solid #a21caf; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #86198f;">Carolina:</strong> wo- fragt, da- antwortet — beide für Sachen. Worüber freust du dich? — Darüber! Ganz einfach: gleiche Präposition, anderer Anfang.</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">wo- întreabă, da- răspunde — amândouă pentru lucruri. Aceeași prepoziție, alt început.</p>
            </div>
        </div>
    </div>

    <!-- 2: regula -r- ⭐ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔤 3. Regula lui -r- (worauf vs. womit)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-regula-r.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box" style="background: #dbeafe; border-color: #D4A574;">
                <h4>📐 -r- de legătură DOAR dacă prepoziția începe cu vocală</h4>
                <table class="grammar-table">
                    <tr><th>Prepoziție</th><th>wo-</th><th>da-</th></tr>
                    <tr><td><strong>auf</strong> (vocală)</td><td class="verb">wor<strong>auf</strong></td><td class="verb">dar<strong>auf</strong></td></tr>
                    <tr><td><strong>an</strong> (vocală)</td><td class="verb">wor<strong>an</strong></td><td class="verb">dar<strong>an</strong></td></tr>
                    <tr><td><strong>über</strong> (vocală)</td><td class="verb">wor<strong>über</strong></td><td class="verb">dar<strong>über</strong></td></tr>
                    <tr><td><strong>mit</strong> (consoană)</td><td class="verb">wo<strong>mit</strong></td><td class="verb">da<strong>mit</strong></td></tr>
                    <tr><td><strong>für</strong> (consoană)</td><td class="verb">wo<strong>für</strong></td><td class="verb">da<strong>für</strong></td></tr>
                    <tr><td><strong>von</strong> (consoană)</td><td class="verb">wo<strong>von</strong></td><td class="verb">da<strong>von</strong></td></tr>
                </table>
                <p style="margin-top:6px"><strong>Regula:</strong> vocală (auf/an/über/in/aus) → <strong>wor-/dar-</strong>; consoană (mit/für/von/zu/nach) → <strong>wo-/da-</strong>.</p>
            </div>

            <div style="background: #eff6ff; border-left: 4px solid #1e3a8a; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #1e3a8a;">Florian:</strong> Das -r- ist nur eine Brücke für die Aussprache: „woauf" klingt schlecht, also worauf. Bei „mit" braucht man keine Brücke: womit. Sag es laut — du hörst es sofort!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">-r- e doar o punte de pronunție: „woauf" sună rău, deci worauf. La „mit" nu trebuie punte: womit. Zi-o cu voce tare — o auzi imediat!</p>
            </div>
        </div>
    </div>

    <!-- 3: lucru vs persoană ⭐ -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>👤 4. Lucru vs. persoană (worauf ≠ auf wen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-person.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box warn-box" style="background: #fef2f2; border-color: #dc2626;">
                <h4>🚨 da-/wo- DOAR pentru lucruri! Pentru PERSOANE — prepoziție + wen/ihn</h4>
                <table class="grammar-table">
                    <tr><th></th><th>LUCRU → da-/wo-</th><th>PERSOANĂ → prep + wen/ihn</th></tr>
                    <tr><td>întrebare</td><td class="verb">Worauf wartest du?</td><td class="verb">Auf wen wartest du?</td></tr>
                    <tr><td>referință</td><td class="verb">Ich warte darauf.</td><td class="verb">Ich warte auf ihn.</td></tr>
                    <tr><td>gândire</td><td class="verb">Woran denkst du?</td><td class="verb">An wen denkst du?</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>💡 Testul: e un lucru sau o persoană?</h4>
                <div class="example-box">
                    <p class="de">Ich denke <strong>daran</strong> (an den Urlaub — LUCRU) &nbsp;≠&nbsp; Ich denke <strong>an ihn</strong> (an meinen Freund — PERSOANĂ).</p>
                    <p class="ro">Mă gândesc la asta (vacanța) ≠ Mă gândesc la el (prietenul).</p>
                </div>
                <p style="margin-top:4px">Deci: LUCRU → darauf / worauf; PERSOANĂ → auf ihn / auf wen. Nu spune „worauf" despre un om!</p>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #ea580c; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #9a3412;">Mihai:</strong> Woran denke ich? An mein nächstes Gericht (Sache → daran). An wen denke ich? An meine Gäste (Person → an sie). Sache oder Person — das entscheidet alles!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">La ce mă gândesc? La următorul preparat (lucru → daran). La cine? La clienți (persoană → an sie). Lucru sau persoană — asta decide totul!</p>
            </div>
        </div>
    </div>

    <!-- 4: Verben mit Präposition + im Relativsatz + Wortschatz -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🏅 5. Verbe cu prepoziție, im Relativsatz & Wortschatz</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-wortschatz.wav" type="audio/wav"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Fundația: Verben mit Präposition (prepoziția e fixă!)</h4>
                <table class="grammar-table">
                    <tr><th>Verb + prep</th><th>wo-? / da-</th></tr>
                    <tr><td class="verb">warten auf</td><td>Worauf? / darauf</td></tr>
                    <tr><td class="verb">denken an</td><td>Woran? / daran</td></tr>
                    <tr><td class="verb">sich freuen über/auf</td><td>Worüber? Worauf? / darüber, darauf</td></tr>
                    <tr><td class="verb">sich interessieren für</td><td>Wofür? / dafür</td></tr>
                    <tr><td class="verb">Angst haben vor</td><td>Wovor? / davor</td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #FBF7EF;">
                <h4>Bonus: da(r)- în propoziții relative (reper nedefinit)</h4>
                <p>După <strong>etwas / nichts / alles / das</strong>, folosești <strong>wo(r)-</strong> ca pronume relativ:</p>
                <div class="example-box">
                    <p class="de">Das ist etwas, <strong>worüber</strong> ich nachdenke. · Es gibt nichts, <strong>wofür</strong> ich dankbar bin.</p>
                    <p class="ro">Asta e ceva la care mă gândesc. · Nu e nimic pentru care să fiu recunoscător.</p>
                </div>
            </div>

            <div style="background: #FBF7EF; border-left: 4px solid #10b981; padding: 15px 20px; border-radius: 6px; margin: 12px 0;">
                <p><strong style="color: #065f46;">Annette:</strong> Tipp: memorați verbul CU prepoziția (denken AN, warten AUF). Apoi: lucru → da-/wo- (+ -r- la vocală); persoană → prepoziție + wen/ihn. Aveți totul!</p>
                <p style="color: #5A5147; font-style: italic; font-size: 0.9rem;">Sfat: memorați verbul cu prepoziția; lucru → da-/wo-; persoană → prep + wen/ihn.</p>
            </div>

            <div class="theory-box" style="text-align:center; background:#ecfdf5; border-color:#10b981;">
                <p style="margin:0; font-weight:bold; color:#065f46;">🧲 Pronominaladverbien bifate — da-/wo-, regula -r- și lucru vs. persoană. Acum vorbești despre orice fără să repeți substantivul!</p>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});
