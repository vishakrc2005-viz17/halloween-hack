const fs = require('fs');
const path = require('path');

const dirs = [
  path.join(__dirname, 'assets', 'images'),
  path.join(__dirname, '..', 'assets', 'images')
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

function wrapSvg(title, caseNum, itemCode, bodyContent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <radialGradient id="bgVignette" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#161224"/>
      <stop offset="60%" stop-color="#0a0812"/>
      <stop offset="100%" stop-color="#040307"/>
    </radialGradient>
    <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e5c07b"/>
      <stop offset="50%" stop-color="#b4975a"/>
      <stop offset="100%" stop-color="#6b5328"/>
    </linearGradient>
    <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#4c1d95"/>
    </linearGradient>
    <filter id="dropGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#8b5cf6" flood-opacity="0.4"/>
    </filter>
    <filter id="heavyGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(139,92,246,0.06)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="600" height="600" fill="url(#bgVignette)"/>
  <rect width="600" height="600" fill="url(#grid)"/>

  <!-- Forensic Border -->
  <rect x="18" y="18" width="564" height="564" fill="none" stroke="#2e1065" stroke-width="2" rx="4"/>
  <rect x="24" y="24" width="552" height="552" fill="none" stroke="rgba(196,181,253,0.2)" stroke-width="1" stroke-dasharray="8 4"/>

  <!-- Corner Ornaments -->
  <path d="M 28 48 L 48 48 L 48 28" fill="none" stroke="#8b5cf6" stroke-width="2"/>
  <path d="M 572 48 L 552 48 L 552 28" fill="none" stroke="#8b5cf6" stroke-width="2"/>
  <path d="M 28 552 L 48 552 L 48 572" fill="none" stroke="#8b5cf6" stroke-width="2"/>
  <path d="M 572 552 L 552 552 L 552 572" fill="none" stroke="#8b5cf6" stroke-width="2"/>

  <!-- Top Forensic Header -->
  <g transform="translate(36, 44)">
    <rect x="0" y="0" width="140" height="20" fill="rgba(76,29,149,0.5)" rx="3" stroke="#8b5cf6" stroke-width="1"/>
    <text x="70" y="14" fill="#ddd6fe" font-family="'Courier New', monospace" font-size="10" font-weight="bold" text-anchor="middle" letter-spacing="1">FORENSIC UNIT</text>
    <text x="150" y="15" fill="#a78bfa" font-family="'Cinzel', serif" font-size="12" font-weight="bold" letter-spacing="1.5">NEVERMORE CRIME ARCHIVE // ${caseNum}</text>
    <text x="528" y="14" fill="#ef4444" font-family="'Courier New', monospace" font-size="11" font-weight="bold" text-anchor="end">${itemCode}</text>
  </g>

  <!-- Title Banner -->
  <text x="300" y="86" fill="#f5f3ff" font-family="'Cinzel', Georgia, serif" font-size="17" font-weight="bold" text-anchor="middle" letter-spacing="2" filter="url(#dropGlow)">${title.toUpperCase()}</text>
  <line x1="80" y1="98" x2="520" y2="98" stroke="rgba(139,92,246,0.3)" stroke-width="1"/>

  <!-- Specific Clue Graphics -->
  ${bodyContent}

  <!-- Bottom Forensic Metric Scale -->
  <g transform="translate(40, 535)">
    <rect x="0" y="0" width="520" height="24" fill="rgba(15,12,25,0.8)" stroke="#4c1d95" stroke-width="1" rx="2"/>
    <!-- Centimeter ticks -->
    ${Array.from({ length: 27 }).map((_, i) => `
      <line x1="${i * 20}" y1="0" x2="${i * 20}" y2="${i % 5 === 0 ? 14 : 7}" stroke="#c4b5fd" stroke-width="${i % 5 === 0 ? 1.5 : 0.8}"/>
      ${i % 5 === 0 ? `<text x="${i * 20 + 2}" y="20" fill="#a78bfa" font-family="'Courier New', monospace" font-size="8">${i}cm</text>` : ''}
    `).join('')}
    <text x="510" y="16" fill="#f59e0b" font-family="'Courier New', monospace" font-size="9" text-anchor="end">CONFIDENTIAL EVIDENCE</text>
  </g>
</svg>`;
}

const clues = {
  // =========================================================================
  // CASE 2 CLUES
  // =========================================================================
  'evidence_chalice.svg': wrapSvg(
    'Poisoned Black Porcelain Chalice',
    'CASE #002',
    'ITEM A-01',
    `<!-- Chalice Illustration -->
    <g transform="translate(300, 310)">
      <!-- Pedestal Shadow -->
      <ellipse cx="0" cy="160" rx="90" ry="18" fill="rgba(0,0,0,0.6)" filter="url(#heavyGlow)"/>

      <!-- Toxic Vapor Fumes -->
      <path d="M -30 -30 Q -60 -110 -20 -150 Q 20 -190 -10 -210" fill="none" stroke="rgba(168,85,247,0.35)" stroke-width="6" stroke-linecap="round" filter="url(#heavyGlow)"/>
      <path d="M 20 -40 Q 50 -120 10 -160 Q -30 -200 0 -220" fill="none" stroke="rgba(239,68,68,0.3)" stroke-width="4" stroke-linecap="round" filter="url(#heavyGlow)"/>

      <!-- Base -->
      <path d="M -70 150 C -70 135 -35 125 0 125 C 35 125 70 135 70 150 Z" fill="#181424" stroke="url(#goldGlow)" stroke-width="2"/>
      <!-- Stem -->
      <path d="M -16 125 L -12 40 L 12 40 L 16 125 Z" fill="#120f1c" stroke="url(#goldGlow)" stroke-width="1.5"/>
      <circle cx="0" cy="80" r="14" fill="#2d124d" stroke="url(#goldGlow)" stroke-width="1.5"/>

      <!-- Cup Outer -->
      <path d="M -85 -50 C -85 50 -55 45 0 45 C 55 45 85 50 85 -50 C 85 -70 -85 -70 -85 -50 Z" fill="#13101e" stroke="url(#goldGlow)" stroke-width="2.5"/>

      <!-- Embossed Gothic Skull -->
      <g transform="translate(0, -5) scale(0.7)">
        <path d="M -22 -15 C -22 -35 22 -35 22 -15 C 22 -5 18 10 12 18 L -12 18 C -18 10 -22 -5 -22 -15 Z" fill="#3b2d54" stroke="#a78bfa" stroke-width="1.2"/>
        <circle cx="-9" cy="-10" r="5" fill="#09080f"/>
        <circle cx="9" cy="-10" r="5" fill="#09080f"/>
        <path d="M -8 10 L -8 18 M 0 10 L 0 18 M 8 10 L 8 18" stroke="#09080f" stroke-width="1.5"/>
      </g>

      <!-- Gilded Filigree Rim -->
      <ellipse cx="0" cy="-55" rx="85" ry="24" fill="#0d0a17" stroke="url(#goldGlow)" stroke-width="3"/>
      
      <!-- Liquid Poison inside Chalice -->
      <ellipse cx="0" cy="-52" rx="74" ry="18" fill="#4c1d95" opacity="0.9"/>
      <ellipse cx="0" cy="-50" rx="60" ry="12" fill="#7e22ce" opacity="0.7" filter="url(#heavyGlow)"/>

      <!-- Toxic Droplets -->
      <circle cx="-42" cy="-40" r="4.5" fill="#c084fc" filter="url(#dropGlow)"/>
      <circle cx="35" cy="-35" r="3.5" fill="#ef4444" filter="url(#dropGlow)"/>
      <path d="M 68 -40 Q 72 -20 70 0" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round"/>

      <!-- Chemical Tag -->
      <rect x="-140" y="100" width="105" height="42" fill="rgba(30,20,50,0.85)" stroke="#ef4444" stroke-width="1.2" rx="3"/>
      <text x="-88" y="116" fill="#fca5a5" font-family="'Courier New', monospace" font-size="8.5" font-weight="bold" text-anchor="middle">ATROPA BELLA</text>
      <text x="-88" y="130" fill="#f87171" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">CONCENTRATION: LETHAL</text>
    </g>`
  ),

  'evidence_roster.svg': wrapSvg(
    'Greenhouse Seed Vault Roster',
    'CASE #002',
    'ITEM A-02',
    `<!-- Seed Vault Logbook -->
    <g transform="translate(100, 130)">
      <!-- Ledger Sheet -->
      <path d="M 0 0 L 380 0 L 400 300 L 290 320 L 250 260 L 210 320 L 0 320 Z" fill="#f3eedd" stroke="#5b4832" stroke-width="2"/>
      
      <!-- Ledger Ruled Lines -->
      ${Array.from({ length: 8 }).map((_, i) => `
        <line x1="20" y1="${55 + i * 30}" x2="370" y2="${55 + i * 30}" stroke="#c9baa4" stroke-width="1"/>
      `).join('')}

      <text x="30" y="38" fill="#3b2b1a" font-family="'Courier New', monospace" font-size="12" font-weight="bold">GREENHOUSE 3 - TOXIC FLORA CHECKOUT</text>
      
      <text x="30" y="75" fill="#4a3728" font-family="'Courier New', monospace" font-size="10">09:15 AM - Wolfsbane Essence (100ml) ... Dr. Graves</text>
      <text x="30" y="105" fill="#4a3728" font-family="'Courier New', monospace" font-size="10">11:30 AM - Ghost Orchid Pollen .......... Vance (Arch)</text>
      <text x="30" y="135" fill="#4a3728" font-family="'Courier New', monospace" font-size="10">02:00 PM - Mandrake Root (Dry) .......... Xavier T.</text>
      
      <!-- Critical Altered Line -->
      <rect x="25" y="152" width="350" height="24" fill="rgba(239,68,68,0.18)" stroke="#ef4444" stroke-width="1" stroke-dasharray="4 2"/>
      <text x="30" y="168" fill="#991b1b" font-family="'Courier New', monospace" font-size="10" font-weight="bold">04:30 PM - 3x Hybrid Belladonna Seeds ... [REDACTED]</text>
      
      <text x="30" y="198" fill="#6b533e" font-family="'Courier New', monospace" font-size="10">05:15 PM - Drosera Pitcher Fluid ........ [VOIDED]</text>

      <!-- Torn Section Marker -->
      <g transform="translate(230, 240)">
        <text x="0" y="0" fill="#dc2626" font-family="'Courier New', monospace" font-size="9" font-weight="bold">⚠️ SIGNATURE TORN OUT</text>
        <path d="M 0 5 L 40 30 M 15 5 L 25 35" stroke="#dc2626" stroke-width="1.5"/>
      </g>

      <!-- Red Stamp -->
      <g transform="translate(180, 70) rotate(-14)">
        <rect x="0" y="0" width="170" height="42" fill="none" stroke="#dc2626" stroke-width="2.5" rx="3"/>
        <text x="85" y="18" fill="#dc2626" font-family="'Courier New', monospace" font-size="11" font-weight="bold" text-anchor="middle">RESTRICTED SAFE</text>
        <text x="85" y="32" fill="#b91c1c" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">KEYMISTRESS ONLY</text>
      </g>

      <!-- Fingerprint Residue -->
      <ellipse cx="320" cy="165" rx="14" ry="19" fill="rgba(110,20,20,0.3)" filter="url(#dropGlow)"/>
    </g>`
  ),

  'evidence_glove.svg': wrapSvg(
    'Soil-Stained Horticultural Glove',
    'CASE #002',
    'ITEM A-03',
    `<!-- Glove Illustration -->
    <g transform="translate(300, 310)">
      <!-- Glove Shape -->
      <g transform="rotate(-15) translate(-70, -130)">
        <!-- Cuff -->
        <rect x="25" y="220" width="95" height="45" rx="6" fill="#1b3826" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="30" y1="242" x2="115" y2="242" stroke="url(#goldGlow)" stroke-width="2"/>
        <!-- Palm & Fingers -->
        <path d="M 30 220 C 20 180 20 130 25 100 
                 L 25 50 C 25 35 42 35 42 50 L 45 100 
                 L 48 25 C 48 10 65 10 65 25 L 68 100 
                 L 72 35 C 72 20 89 20 89 35 L 89 105 
                 L 92 65 C 92 50 108 50 108 65 L 105 130 
                 C 125 145 135 170 115 195 L 115 220 Z" 
              fill="#14281b" stroke="#15803d" stroke-width="2"/>
        
        <!-- Thumb -->
        <path d="M 30 150 C 5 140 0 165 18 185 L 30 190 Z" fill="#162e1f" stroke="#15803d" stroke-width="1.5"/>

        <!-- Purple Carnivorous Sap Stains -->
        <path d="M 40 80 Q 55 120 70 90 Q 60 140 50 130 Z" fill="#a855f7" opacity="0.85" filter="url(#dropGlow)"/>
        <circle cx="35" cy="55" r="6" fill="#9333ea" filter="url(#dropGlow)"/>
        <circle cx="56" cy="40" r="7" fill="#7e22ce" filter="url(#dropGlow)"/>
        <path d="M 68 110 Q 75 160 55 180" fill="none" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>

        <!-- Soil Residue -->
        <circle cx="45" cy="170" r="4" fill="#3b2b1a"/>
        <circle cx="85" cy="180" r="5" fill="#2d2114"/>
        <circle cx="70" cy="195" r="3.5" fill="#3b2b1a"/>
      </g>

      <!-- Attached Forensic String Tag -->
      <g transform="translate(45, 90)">
        <line x1="-30" y1="-20" x2="0" y2="0" stroke="#f59e0b" stroke-width="1.5"/>
        <rect x="0" y="0" width="130" height="48" fill="#1a1429" stroke="#f59e0b" stroke-width="1.2" rx="3"/>
        <text x="65" y="16" fill="#fde68a" font-family="'Courier New', monospace" font-size="8.5" font-weight="bold" text-anchor="middle">FORENSIC TAG #88</text>
        <text x="65" y="30" fill="#cbd5e1" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">RESIDUE: DROSERA SAP</text>
        <text x="65" y="42" fill="#ef4444" font-family="'Courier New', monospace" font-size="7.5" text-anchor="middle">RECOVERED: BELL TOWER</text>
      </g>
    </g>`
  ),

  // =========================================================================
  // CASE 3 CLUES
  // =========================================================================
  'evidence_fracture.svg': wrapSvg(
    'Acoustic Stone Cleavage Fracture',
    'CASE #003',
    'ITEM B-01',
    `<!-- Stone Fracture Illustration -->
    <g transform="translate(140, 150)">
      <!-- Stone Slab -->
      <path d="M 40 60 L 280 40 L 310 240 L 20 220 Z" fill="#332f42" stroke="#6b6480" stroke-width="2"/>
      
      <!-- Razor Flat Acoustic Cleavage -->
      <path d="M 60 140 L 290 120" stroke="#a78bfa" stroke-width="3.5" filter="url(#dropGlow)"/>
      <line x1="60" y1="140" x2="290" y2="120" stroke="#ffffff" stroke-width="1.5"/>

      <!-- Sonic Wave Harmonics -->
      <g transform="translate(170, 130) rotate(-4)">
        <path d="M -90 -30 Q -60 -50 -30 -30 T 30 -30 T 90 -30" fill="none" stroke="#38bdf8" stroke-width="2" opacity="0.8"/>
        <path d="M -90 30 Q -60 50 -30 30 T 30 30 T 90 30" fill="none" stroke="#c084fc" stroke-width="2" opacity="0.8"/>
      </g>

      <!-- Glassy Crystalline Texture -->
      <polygon points="120,90 145,115 130,125 105,100" fill="rgba(192,132,252,0.2)"/>
      <polygon points="200,150 230,165 215,190 190,170" fill="rgba(192,132,252,0.25)"/>

      <!-- Forensic Measurement Annotation -->
      <circle cx="175" cy="130" r="45" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5 3"/>
      <text x="175" y="70" fill="#fde68a" font-family="'Courier New', monospace" font-size="10" font-weight="bold" text-anchor="middle">FOCAL FREQUENCY: 432 Hz</text>
      <text x="175" y="200" fill="#94a3b8" font-family="'Courier New', monospace" font-size="9" text-anchor="middle">ZERO CHISEL TOOL MARKS</text>
    </g>`
  ),

  'evidence_tuning_fork.svg': wrapSvg(
    'Silver Siren Acoustic Tuning Fork',
    'CASE #003',
    'ITEM B-02',
    `<!-- Tuning Fork Illustration -->
    <g transform="translate(300, 310)">
      <!-- Translucent Acoustic Ring Waves -->
      <circle cx="0" cy="-60" r="50" fill="none" stroke="rgba(56,189,248,0.3)" stroke-width="2" filter="url(#dropGlow)"/>
      <circle cx="0" cy="-60" r="85" fill="none" stroke="rgba(168,85,247,0.2)" stroke-width="1.5"/>
      <circle cx="0" cy="-60" r="120" fill="none" stroke="rgba(196,181,253,0.1)" stroke-width="1"/>

      <!-- Fork Prongs (Sterling Silver Gradient) -->
      <g filter="url(#dropGlow)">
        <!-- Left Prong -->
        <rect x="-26" y="-140" width="14" height="120" rx="4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Right Prong -->
        <rect x="12" y="-140" width="14" height="120" rx="4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Base U-Bend -->
        <path d="M -26 -20 C -26 25 26 25 26 -20 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
        <!-- Stem & Handle -->
        <rect x="-8" y="10" width="16" height="110" rx="3" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
        <circle cx="0" cy="125" r="14" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
      </g>

      <!-- Engraved Siren Seal on Handle -->
      <g transform="translate(0, 60)">
        <path d="M -5 -15 Q 0 -5 5 -15 Q 0 5 -5 -15" fill="none" stroke="#475569" stroke-width="1.2"/>
        <text x="0" y="12" fill="#334155" font-family="'Cinzel', serif" font-size="7" font-weight="bold" text-anchor="middle">432 Hz</text>
      </g>

      <!-- Heraldic Siren Crest Tag -->
      <g transform="translate(60, -90)">
        <rect x="0" y="0" width="130" height="42" fill="#151226" stroke="#38bdf8" stroke-width="1.2" rx="3"/>
        <text x="65" y="16" fill="#7dd3fc" font-family="'Cinzel', serif" font-size="8.5" font-weight="bold" text-anchor="middle">BARCLAY HERALDRY</text>
        <text x="65" y="32" fill="#e2e8f0" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">SIREN CHORAL PITCH</text>
      </g>
    </g>`
  ),

  'evidence_siren_scarf.svg': wrapSvg(
    'Torn Blue Silk Siren Scarf',
    'CASE #003',
    'ITEM B-03',
    `<!-- Sea Silk Fabric Fragment -->
    <g transform="translate(130, 150)">
      <!-- Stone Gargoyle Talon Catching the Fabric -->
      <path d="M 60 40 L 90 100 L 70 120 L 40 60 Z" fill="#475569" stroke="#1e293b" stroke-width="2"/>
      <path d="M 80 90 L 100 130 L 85 140 L 65 105 Z" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>

      <!-- Shimmering Sea Silk Ribbon -->
      <path d="M 85 110 C 140 80 180 140 230 100 
               C 270 70 310 130 330 160 
               L 310 210 C 260 180 220 220 170 180 
               C 130 150 100 200 70 170 Z" 
            fill="url(#purpleGlow)" stroke="#38bdf8" stroke-width="2" filter="url(#dropGlow)"/>

      <!-- Thread Fraying -->
      <path d="M 70 170 L 40 190 M 75 160 L 50 185 M 80 180 L 60 215" stroke="#38bdf8" stroke-width="1.5"/>
      <path d="M 330 160 L 355 150 M 325 180 L 360 190 M 315 205 L 340 230" stroke="#c084fc" stroke-width="1.5"/>

      <!-- Microscopic Callout Circle -->
      <g transform="translate(240, 240)">
        <circle cx="0" cy="0" r="42" fill="#0b0914" stroke="#38bdf8" stroke-width="2"/>
        <line x1="-30" y1="-10" x2="30" y2="10" stroke="#7dd3fc" stroke-width="2"/>
        <line x1="-25" y1="5" x2="25" y2="-5" stroke="#c084fc" stroke-width="2"/>
        <line x1="-15" y1="-25" x2="15" y2="25" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="0" y="24" fill="#a5f3fc" font-family="'Courier New', monospace" font-size="7" font-weight="bold" text-anchor="middle">PINNA NOBILIS</text>
        <text x="0" y="34" fill="#94a3b8" font-family="'Courier New', monospace" font-size="6.5" text-anchor="middle">TRUE SEA-SILK</text>
      </g>
    </g>`
  ),

  // =========================================================================
  // CASE 4 CLUES
  // =========================================================================
  'evidence_black_dahlia.svg': wrapSvg(
    'Scalpel-Trimmed Black Dahlia',
    'CASE #004',
    'ITEM C-01',
    `<!-- Black Dahlia Flower -->
    <g transform="translate(300, 300)">
      <!-- Outer Petals (Deep Velvet Shadow) -->
      ${Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return `<path d="M 0 0 C -18 -60 18 -60 0 -95 C -15 -60 -5 -40 0 0" 
                      fill="#120c1f" stroke="#3b1d54" stroke-width="1.5" 
                      transform="rotate(${angle})" filter="url(#dropGlow)"/>`;
      }).join('')}

      <!-- Inner Petals -->
      ${Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12 + 15;
        return `<path d="M 0 0 C -12 -45 12 -45 0 -68 C -10 -40 -3 -25 0 0" 
                      fill="#1e102f" stroke="#6b21a8" stroke-width="1.2" 
                      transform="rotate(${angle})"/>`;
      }).join('')}

      <!-- Center Floret -->
      <circle cx="0" cy="0" r="16" fill="#3b0764" stroke="#a855f7" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="7" fill="#09080f"/>

      <!-- Stem with 45 Degree Palette Knife Bevel -->
      <g transform="translate(0, 60)">
        <path d="M -6 0 L -6 130 L 6 118 L 6 0 Z" fill="#14331d" stroke="#22c55e" stroke-width="1.5"/>
        <!-- Beveled Cut Callout -->
        <g transform="translate(45, 120)">
          <line x1="-39" y1="4" x2="-10" y2="4" stroke="#ef4444" stroke-width="1.5"/>
          <rect x="0" y="-12" width="125" height="34" fill="#1c132b" stroke="#ef4444" stroke-width="1.2" rx="3"/>
          <text x="62" y="3" fill="#fca5a5" font-family="'Courier New', monospace" font-size="8.5" font-weight="bold" text-anchor="middle">45° PALETTE CUT</text>
          <text x="62" y="15" fill="#f87171" font-family="'Courier New', monospace" font-size="7.5" text-anchor="middle">LINSEED OIL COATED</text>
        </g>
      </g>
    </g>`
  ),

  'evidence_charcoal_sketch.svg': wrapSvg(
    'Prophetic Charcoal Crypt Sketch',
    'CASE #004',
    'ITEM C-02',
    `<!-- Charcoal Sketch Drawing -->
    <g transform="translate(110, 130)">
      <!-- Textured Sketch Paper Sheet -->
      <rect x="0" y="0" width="380" height="320" fill="#ded7c4" stroke="#4a3f35" stroke-width="2"/>
      
      <!-- Charcoal Crypt Scene -->
      <g transform="translate(30, 25)">
        <!-- Tomb Slab -->
        <path d="M 20 180 L 140 120 L 290 140 L 180 210 Z" fill="#3a3630" stroke="#1c1a17" stroke-width="3"/>
        <path d="M 180 210 L 290 140 L 290 170 L 180 240 Z" fill="#24211d"/>
        <path d="M 20 180 L 180 210 L 180 240 L 20 210 Z" fill="#2d2a25"/>

        <!-- Skeletal Hand Rising -->
        <path d="M 140 150 L 135 110 L 145 105 L 148 145" stroke="#1c1a17" stroke-width="3"/>
        <path d="M 150 145 L 155 95 L 165 95 L 160 145" stroke="#1c1a17" stroke-width="3"/>
        <path d="M 165 148 L 175 105 L 182 110 L 172 150" stroke="#1c1a17" stroke-width="3"/>

        <!-- Glowing Eyes in the Mist -->
        <circle cx="210" cy="80" r="5" fill="#ef4444" filter="url(#heavyGlow)"/>
        <circle cx="235" cy="80" r="5" fill="#ef4444" filter="url(#heavyGlow)"/>

        <!-- Smudged Charcoal Shadows -->
        <ellipse cx="160" cy="190" rx="90" ry="25" fill="rgba(0,0,0,0.45)" filter="url(#dropGlow)"/>
        
        <!-- Xavier Thorpe Monogram -->
        <text x="270" y="270" fill="#1c1a17" font-family="'Cinzel Decorative', serif" font-size="20" font-weight="bold">XT</text>
        <text x="260" y="284" fill="#4a3f35" font-family="'Courier New', monospace" font-size="8">10:00 PM PRE-CRIME</text>
      </g>
    </g>`
  ),

  'evidence_paint_rag.svg': wrapSvg(
    'Turpentine Paint Rag & Cemetery Clay',
    'CASE #004',
    'ITEM C-03',
    `<!-- Paint Rag Illustration -->
    <g transform="translate(130, 140)">
      <!-- Linen Rag Swatch -->
      <path d="M 40 40 C 90 20 180 30 240 20 
               C 300 10 330 60 310 110 
               C 340 180 280 240 290 290 
               C 230 310 160 270 100 295 
               C 50 320 20 250 40 190 
               C 10 130 20 70 40 40 Z" 
            fill="#e2d8c3" stroke="#8c7853" stroke-width="2"/>

      <!-- Burnt Umber Oil Paint Pigment -->
      <path d="M 90 80 Q 150 140 210 90 Q 250 160 170 180 Q 120 140 90 80 Z" fill="#582f1b" opacity="0.9"/>
      <path d="M 180 180 Q 230 230 270 200 Q 240 260 190 230 Z" fill="#3d1c0b" opacity="0.85"/>

      <!-- Red Cemetery Clay Smear -->
      <path d="M 60 190 C 80 250 140 260 120 280 C 80 270 50 240 60 190 Z" fill="#991b1b" opacity="0.8" filter="url(#dropGlow)"/>
      <circle cx="100" cy="240" r="10" fill="#7f1d1d"/>

      <!-- Solvent Smell / Turpentine Badge -->
      <g transform="translate(170, 20)">
        <rect x="0" y="0" width="135" height="38" fill="#13101e" stroke="#f59e0b" stroke-width="1.2" rx="3"/>
        <text x="67" y="16" fill="#fde68a" font-family="'Courier New', monospace" font-size="8.5" font-weight="bold" text-anchor="middle">SOLVENT TEST: +POS</text>
        <text x="67" y="30" fill="#cbd5e1" font-family="'Courier New', monospace" font-size="8" text-anchor="middle">PURE TURPENTINE</text>
      </g>
    </g>`
  ),

  // =========================================================================
  // CASE 5 CLUES
  // =========================================================================
  'evidence_hyde_claws.svg': wrapSvg(
    'Shredded Reinforced Glass & Hyde Claws',
    'CASE #005',
    'ITEM D-01',
    `<!-- Shattered Glass Pane with Claw Gouges -->
    <g transform="translate(120, 140)">
      <!-- Tempered Glass Base -->
      <rect x="20" y="20" width="320" height="300" fill="rgba(30,41,59,0.5)" stroke="#64748b" stroke-width="3" rx="4"/>
      
      <!-- Spiderweb Fractures -->
      <path d="M 180 170 L 40 40 M 180 170 L 320 60 M 180 170 L 310 290 M 180 170 L 50 280" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
      <path d="M 180 170 L 100 110 M 180 170 L 250 120 M 180 170 L 230 240 M 180 170 L 110 220" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>

      <!-- Three Monstrous Claw Gouges -->
      <g filter="url(#dropGlow)">
        <!-- Claw 1 -->
        <path d="M 60 70 Q 140 140 260 110" fill="none" stroke="#ef4444" stroke-width="7" stroke-linecap="round"/>
        <path d="M 60 70 Q 140 140 260 110" fill="none" stroke="#fee2e2" stroke-width="2" stroke-linecap="round"/>

        <!-- Claw 2 -->
        <path d="M 75 140 Q 165 200 280 175" fill="none" stroke="#ef4444" stroke-width="8" stroke-linecap="round"/>
        <path d="M 75 140 Q 165 200 280 175" fill="none" stroke="#fee2e2" stroke-width="2.5" stroke-linecap="round"/>

        <!-- Claw 3 -->
        <path d="M 90 210 Q 180 270 295 240" fill="none" stroke="#ef4444" stroke-width="7" stroke-linecap="round"/>
        <path d="M 90 210 Q 180 270 295 240" fill="none" stroke="#fee2e2" stroke-width="2" stroke-linecap="round"/>
      </g>

      <!-- Cashmere Threads Caught in Glass Shard -->
      <g transform="translate(230, 115)">
        <path d="M 0 0 Q 15 -25 35 -15 Q 45 10 20 15" fill="none" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
        <circle cx="20" cy="-5" r="3" fill="#fef08a"/>
        <!-- Callout -->
        <rect x="35" y="-35" width="100" height="34" fill="#09080f" stroke="#eab308" stroke-width="1.2" rx="3"/>
        <text x="85" y="-20" fill="#fef08a" font-family="'Courier New', monospace" font-size="7.5" font-weight="bold" text-anchor="middle">ITALIAN CASHMERE</text>
        <text x="85" y="-8" fill="#cbd5e1" font-family="'Courier New', monospace" font-size="7" text-anchor="middle">LAVENDER SCENT</text>
      </g>
    </g>`
  ),

  'evidence_sedative_vial.svg': wrapSvg(
    'Shattered Hydral-4 Ampoule',
    'CASE #005',
    'ITEM D-02',
    `<!-- Shattered Ampoule Illustration -->
    <g transform="translate(300, 310)">
      <!-- Spilled Psychoactive Iridescent Fluid Pool -->
      <ellipse cx="0" cy="110" rx="140" ry="40" fill="rgba(168,85,247,0.3)" filter="url(#heavyGlow)"/>
      <ellipse cx="20" cy="115" rx="90" ry="22" fill="#7e22ce" opacity="0.6"/>

      <!-- Amber Glass Ampoule (Broken Neck) -->
      <g transform="rotate(-35) translate(-40, -100)">
        <!-- Base Body -->
        <rect x="0" y="50" width="70" height="130" rx="8" fill="#b45309" stroke="#f59e0b" stroke-width="2" opacity="0.9"/>
        <!-- Shattered Top Neck -->
        <path d="M 15 50 L 15 0 L 25 15 L 35 -10 L 45 20 L 55 50 Z" fill="#92400e" stroke="#fbbf24" stroke-width="2"/>

        <!-- Ampoule Label -->
        <rect x="6" y="70" width="58" height="85" fill="#fef3c7" stroke="#78350f" stroke-width="1.2" rx="2"/>
        <text x="35" y="86" fill="#78350f" font-family="'Courier New', monospace" font-size="8" font-weight="bold" text-anchor="middle">HYDRAL-4</text>
        <text x="35" y="98" fill="#991b1b" font-family="'Courier New', monospace" font-size="7" font-weight="bold" text-anchor="middle">⚠️ STIMULANT</text>
        <line x1="12" y1="104" x2="58" y2="104" stroke="#b45309" stroke-width="1"/>
        <text x="35" y="118" fill="#78350f" font-family="'Courier New', monospace" font-size="6" text-anchor="middle">CLINIC DISPENSARY</text>
        <text x="35" y="130" fill="#78350f" font-family="'Courier New', monospace" font-size="6" text-anchor="middle">DR. KINBOTT AUTH</text>
      </g>

      <!-- Glass Shards on Floor -->
      <polygon points="50,90 75,105 60,120" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
      <polygon points="-80,120 -60,110 -70,135" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
      <polygon points="100,125 125,115 110,140" fill="#fde68a" stroke="#d97706" stroke-width="1"/>
    </g>`
  ),

  'evidence_cassette_tape.svg': wrapSvg(
    'Hypnotherapy Dictaphone Cassette',
    'CASE #005',
    'ITEM D-03',
    `<!-- Cassette Tape Illustration -->
    <g transform="translate(140, 160)">
      <!-- Micro-cassette Shell -->
      <rect x="0" y="0" width="320" height="210" rx="10" fill="#1e182d" stroke="#6b21a8" stroke-width="2.5"/>
      <rect x="15" y="15" width="290" height="180" rx="6" fill="#130f1e" stroke="#3b1d54" stroke-width="1.5"/>

      <!-- Label Area -->
      <rect x="35" y="30" width="250" height="70" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5" rx="4"/>
      <text x="50" y="52" fill="#0f172a" font-family="'Courier New', monospace" font-size="11" font-weight="bold">DR. KINBOTT // CLINICAL HYPNOSIS</text>
      <text x="50" y="70" fill="#dc2626" font-family="'Courier New', monospace" font-size="9.5" font-weight="bold">TRIGGER TRACK: "AWAKEN THE BEAST"</text>
      <text x="50" y="86" fill="#475569" font-family="'Courier New', monospace" font-size="8.5">REC DATE: 10/30 - 3:00 AM</text>

      <!-- Tape Spool Windows -->
      <rect x="70" y="115" width="180" height="60" rx="30" fill="#050308" stroke="#4c1d95" stroke-width="1.5"/>
      
      <!-- Left Reel with Tape -->
      <circle cx="115" cy="145" r="22" fill="#3b2b1a" stroke="#8b5cf6" stroke-width="1.5"/>
      <circle cx="115" cy="145" r="12" fill="#f8fafc"/>
      <circle cx="115" cy="145" r="5" fill="#0f172a"/>

      <!-- Right Reel (Low Tape) -->
      <circle cx="205" cy="145" r="15" fill="#3b2b1a" stroke="#8b5cf6" stroke-width="1.5"/>
      <circle cx="205" cy="145" r="12" fill="#f8fafc"/>
      <circle cx="205" cy="145" r="5" fill="#0f172a"/>

      <!-- Audio Waveform Graphic Overlay -->
      <path d="M 80 185 L 95 180 L 105 195 L 120 170 L 135 195 L 150 185 L 165 200 L 180 170 L 195 195 L 210 180 L 225 190 L 240 185" 
            fill="none" stroke="#38bdf8" stroke-width="1.5" opacity="0.8"/>

      <!-- Loose Unspooled Tape Ribbon Spilling Out -->
      <path d="M 230 195 Q 260 250 210 270 Q 150 290 190 320" fill="none" stroke="#713f12" stroke-width="3" stroke-linecap="round"/>
    </g>`
  )
};

// Write files to both locations
dirs.forEach(targetDir => {
  for (const [filename, content] of Object.entries(clues)) {
    const filePath = path.join(targetDir, filename);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Saved: ${filePath}`);
  }
});
console.log('Successfully generated all 12 SVG forensic evidence artworks!');
