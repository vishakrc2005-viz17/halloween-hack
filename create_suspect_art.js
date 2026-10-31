const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, 'assets', 'images'),
  path.join(__dirname, '..', 'assets', 'images')
];

targetDirs.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

function wrapSuspectSvg(title, role, caseCode, badgeColor, innerArt) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="100%" height="100%">
  <defs>
    <radialGradient id="cardBg" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#181329"/>
      <stop offset="65%" stop-color="#0b0814"/>
      <stop offset="100%" stop-color="#040308"/>
    </radialGradient>
    <linearGradient id="gothicGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24"/>
      <stop offset="50%" stop-color="#b45309"/>
      <stop offset="100%" stop-color="#78350f"/>
    </linearGradient>
    <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="50%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#4c1d95"/>
    </linearGradient>
    <filter id="portraitShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.8"/>
    </filter>
    <filter id="accentGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="${badgeColor}" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="600" height="700" fill="url(#cardBg)"/>
  
  <!-- Subtle Gothic Filigree Corner Accents -->
  <path d="M 25 65 L 25 25 L 65 25" stroke="url(#gothicGold)" stroke-width="2" fill="none"/>
  <path d="M 575 65 L 575 25 L 535 25" stroke="url(#gothicGold)" stroke-width="2" fill="none"/>
  <path d="M 25 635 L 25 675 L 65 675" stroke="url(#gothicGold)" stroke-width="2" fill="none"/>
  <path d="M 575 635 L 575 675 L 535 675" stroke="url(#gothicGold)" stroke-width="2" fill="none"/>

  <!-- Outer Double Border -->
  <rect x="20" y="20" width="560" height="660" fill="none" stroke="#2e1065" stroke-width="2" rx="10"/>
  <rect x="28" y="28" width="544" height="644" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1" rx="8"/>

  <!-- Top Metadata Bar -->
  <rect x="40" y="40" width="520" height="34" fill="rgba(10,8,18,0.8)" stroke="#4c1d95" stroke-width="1" rx="4"/>
  <text x="55" y="62" font-family="'Courier New', monospace" font-size="12" fill="#c4b5fd" letter-spacing="2">NEVERMORE SECURITY DOSSIER // ${caseCode}</text>
  <rect x="440" y="47" width="105" height="20" fill="${badgeColor}" rx="3"/>
  <text x="492" y="61" font-family="'Courier New', monospace" font-size="10" font-weight="bold" fill="#05030a" text-anchor="middle">SUSPECT</text>

  <!-- Gothic Arch Frame for Portrait -->
  <g filter="url(#portraitShadow)">
    <path d="M 160 120 C 160 120, 240 90, 300 90 C 360 90, 440 120, 440 120 L 440 460 C 440 460, 370 480, 300 480 C 230 480, 160 460, 160 460 Z" 
          fill="#130e22" stroke="url(#gothicGold)" stroke-width="3"/>
    <path d="M 168 126 C 168 126, 244 98, 300 98 C 356 98, 432 126, 432 126 L 432 452 C 432 452, 366 472, 300 472 C 234 472, 168 452, 168 452 Z" 
          fill="#0d0a18" stroke="#3b1d6e" stroke-width="1"/>
  </g>

  <!-- Character Specific Silhouette & Illustration -->
  <g id="character-art">
    ${innerArt}
  </g>

  <!-- Bottom Nameplate Plaque -->
  <g filter="url(#portraitShadow)">
    <rect x="70" y="520" width="460" height="130" fill="rgba(15,10,25,0.95)" stroke="url(#gothicGold)" stroke-width="2" rx="6"/>
    <rect x="76" y="526" width="448" height="118" fill="none" stroke="rgba(196,181,253,0.15)" stroke-width="1" rx="4"/>
    
    <text x="300" y="565" font-family="'Georgia', serif" font-size="24" font-weight="bold" fill="#f8fafc" text-anchor="middle" letter-spacing="1.5">${title}</text>
    <text x="300" y="595" font-family="'Courier New', monospace" font-size="14" fill="#a78bfa" text-anchor="middle" letter-spacing="1">${role}</text>
    
    <line x1="120" y1="610" x2="480" y2="610" stroke="rgba(251,191,36,0.3)" stroke-width="1"/>
    <text x="300" y="630" font-family="'Courier New', monospace" font-size="11" fill="#94a3b8" text-anchor="middle" letter-spacing="2">OFFICIAL WITNESS STATEMENT ON FILE</text>
  </g>
</svg>`;
}

const suspects = [
  // 1. Vladislaus Stone - Fencing Master (Case 2)
  {
    filename: 'suspect_stone.svg',
    name: 'Vladislaus Stone',
    role: 'Fencing Master & Armory Warden',
    case: 'CASE-002',
    color: '#94a3b8',
    art: `
      <!-- Halo / Back aura -->
      <circle cx="300" cy="270" r="110" fill="#1e1832" stroke="#475569" stroke-width="1"/>
      <line x1="220" y1="190" x2="380" y2="350" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
      <line x1="380" y1="190" x2="220" y2="350" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
      <!-- Torso: Black Fencing Doublet with Silver Epaulets -->
      <path d="M 210 450 L 230 310 L 300 290 L 370 310 L 390 450 Z" fill="#1e2230" stroke="#475569" stroke-width="2"/>
      <path d="M 255 310 L 300 450 L 345 310" stroke="#94a3b8" stroke-width="2" fill="none"/>
      <!-- High stiff collar -->
      <path d="M 265 280 L 300 300 L 335 280 L 325 255 L 275 255 Z" fill="#334155" stroke="#cbd5e1" stroke-width="1"/>
      <!-- Head and jaw -->
      <ellipse cx="300" cy="225" rx="42" ry="52" fill="#f1e3d3"/>
      <!-- Hair: Silver streaked slicked back -->
      <path d="M 255 210 C 255 160, 345 160, 345 210 C 335 175, 265 175, 255 210 Z" fill="#94a3b8"/>
      <!-- Stern Face details: Sharp brows, mustache, goatee -->
      <path d="M 275 215 Q 288 210 295 216" stroke="#475569" stroke-width="2.5" fill="none"/>
      <path d="M 325 215 Q 312 210 305 216" stroke="#475569" stroke-width="2.5" fill="none"/>
      <circle cx="288" cy="223" r="3.5" fill="#1e293b"/>
      <circle cx="312" cy="223" r="3.5" fill="#1e293b"/>
      <path d="M 300 220 L 300 238 L 306 240" stroke="#cbb29b" stroke-width="2" fill="none"/>
      <!-- Imperial Mustache and Van Dyke Beard -->
      <path d="M 285 248 Q 300 252 315 248 Q 325 244 330 240 Q 318 256 300 256 Q 282 256 270 240 Q 275 244 285 248 Z" fill="#64748b"/>
      <polygon points="296,258 304,258 300,272" fill="#64748b"/>
      <!-- Crossed Rapiers Guard in hand -->
      <circle cx="240" cy="400" r="16" fill="none" stroke="#cbd5e1" stroke-width="3"/>
      <line x1="240" y1="360" x2="240" y2="440" stroke="#f8fafc" stroke-width="3.5"/>
    `
  },
  // 2. Enid Sinclair - Werewolf Roommate (Case 2)
  {
    filename: 'suspect_enid.svg',
    name: 'Enid Sinclair',
    role: 'Werewolf Roommate & Gossip Columnist',
    case: 'CASE-002',
    color: '#ec4899',
    art: `
      <!-- Soft Colorful Glow -->
      <circle cx="300" cy="260" r="115" fill="#2d1339" stroke="#f472b6" stroke-width="1.5" opacity="0.6"/>
      <!-- Werewolf Claw marks in background -->
      <path d="M 210 150 L 225 200" stroke="#ec4899" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
      <path d="M 225 145 L 240 195" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
      <path d="M 240 152 L 255 202" stroke="#facc15" stroke-width="3" stroke-linecap="round" opacity="0.4"/>
      <!-- Torso: Colorful Striped Knitted Sweater -->
      <path d="M 215 450 L 235 320 L 300 305 L 365 320 L 385 450 Z" fill="#f472b6" stroke="#db2777" stroke-width="2"/>
      <path d="M 220 360 L 380 360" stroke="#38bdf8" stroke-width="14"/>
      <path d="M 216 400 L 384 400" stroke="#fde047" stroke-width="14"/>
      <!-- Neck and Collar -->
      <path d="M 275 280 L 300 295 L 325 280 L 320 260 L 280 260 Z" fill="#ffe4e6"/>
      <!-- Head -->
      <ellipse cx="300" cy="225" rx="40" ry="48" fill="#ffe4e6"/>
      <!-- Blonde Hair with Pink and Blue Tips -->
      <path d="M 250 220 C 240 150, 360 150, 350 220 C 365 260, 360 300, 355 330 C 345 320, 335 290, 340 240 C 330 200, 270 200, 260 240 C 265 290, 255 320, 245 330 C 240 300, 235 260, 250 220 Z" fill="#fef08a"/>
      <!-- Highlights on hair tips -->
      <path d="M 245 280 C 240 300, 242 325, 248 335" stroke="#ec4899" stroke-width="6" stroke-linecap="round"/>
      <path d="M 355 280 C 360 300, 358 325, 352 335" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
      <!-- Face: Big expressive eyes, bright lips -->
      <circle cx="286" cy="222" r="5" fill="#38bdf8"/>
      <circle cx="314" cy="222" r="5" fill="#38bdf8"/>
      <circle cx="288" cy="220" r="1.5" fill="#fff"/>
      <circle cx="316" cy="220" r="1.5" fill="#fff"/>
      <!-- Eyelashes -->
      <path d="M 280 215 Q 286 212 292 215" stroke="#1e1b4b" stroke-width="2" fill="none"/>
      <path d="M 308 215 Q 314 212 320 215" stroke="#1e1b4b" stroke-width="2" fill="none"/>
      <!-- Gentle smirk/smile with cute werewolf fangs -->
      <path d="M 292 245 Q 300 252 308 245" stroke="#e11d48" stroke-width="2.5" fill="none"/>
      <polygon points="294,245 296,251 298,245" fill="#fff"/>
      <polygon points="302,245 304,251 306,245" fill="#fff"/>
      <!-- Fluffy Werewolf Claw Hand gesturing -->
      <circle cx="370" cy="380" r="14" fill="#fed7aa"/>
      <polygon points="362,370 365,360 368,370" fill="#ec4899"/>
      <polygon points="370,368 373,358 376,368" fill="#38bdf8"/>
    `
  },
  // 3. Ajax Petropolus - Gorgon Sculptor (Case 3)
  {
    filename: 'suspect_ajax.svg',
    name: 'Ajax Petropolus',
    role: 'Gorgon Sculptor & Stone Artisan',
    case: 'CASE-003',
    color: '#10b981',
    art: `
      <!-- Gorgon Serpent Glow Background -->
      <circle cx="300" cy="260" r="110" fill="#064e3b" stroke="#10b981" stroke-width="1.5" opacity="0.5"/>
      <!-- Torso: Sculptor Stonework Apron -->
      <path d="M 220 450 L 240 320 L 300 300 L 360 320 L 380 450 Z" fill="#27272a" stroke="#52525b" stroke-width="2"/>
      <path d="M 250 340 L 350 340 L 340 450 L 260 450 Z" fill="#71717a" opacity="0.8"/>
      <!-- Stone dust smudges on apron -->
      <circle cx="280" cy="380" r="12" fill="#d4d4d8" opacity="0.25"/>
      <circle cx="320" cy="410" r="18" fill="#d4d4d8" opacity="0.3"/>
      <!-- Neck -->
      <rect x="282" y="260" width="36" height="42" fill="#f4d7b5"/>
      <!-- Head -->
      <ellipse cx="300" cy="225" rx="38" ry="46" fill="#f4d7b5"/>
      <!-- Trademark Gorgon Slouchy Beanie covering snake dreads -->
      <path d="M 252 215 C 248 140, 352 140, 348 215 C 330 220, 270 220, 252 215 Z" fill="#047857" stroke="#065f46" stroke-width="2"/>
      <!-- Sneaking green snake heads peeking out from under beanie brim -->
      <path d="M 250 215 Q 235 225 240 240" stroke="#10b981" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="240" cy="240" r="3" fill="#34d399"/>
      <path d="M 350 215 Q 365 225 360 240" stroke="#10b981" stroke-width="4" stroke-linecap="round" fill="none"/>
      <circle cx="360" cy="240" r="3" fill="#34d399"/>
      <!-- Face: Relaxed / slightly stoned gaze -->
      <path d="M 276 212 L 292 210" stroke="#52525b" stroke-width="2"/>
      <path d="M 308 210 L 324 212" stroke="#52525b" stroke-width="2"/>
      <ellipse cx="284" cy="218" rx="4" ry="2.5" fill="#059669"/>
      <ellipse cx="316" cy="218" rx="4" ry="2.5" fill="#059669"/>
      <path d="M 295 240 Q 300 244 305 240" stroke="#b45309" stroke-width="2" fill="none"/>
      <!-- Sculptor's Chisel and Mallet in Hand -->
      <rect x="230" y="380" width="8" height="45" fill="#94a3b8" transform="rotate(30, 230, 380)"/>
    `
  },
  // 4. Principal Larissa Weems - Headmistress (Case 3)
  {
    filename: 'suspect_weems.svg',
    name: 'Principal Larissa Weems',
    role: 'Nevermore Headmistress & Shapeshifter',
    case: 'CASE-003',
    color: '#f8fafc',
    art: `
      <!-- Regal Moonlit Halo -->
      <circle cx="300" cy="260" r="115" fill="#1e1832" stroke="#e2e8f0" stroke-width="1.5" opacity="0.7"/>
      <!-- High Regal Collar Coat -->
      <path d="M 205 450 L 225 310 L 300 300 L 375 310 L 395 450 Z" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
      <!-- Sculptured Shawl Lapels -->
      <path d="M 240 310 L 300 420 L 360 310" stroke="#f1f5f9" stroke-width="4" fill="none"/>
      <!-- Pearl Necklace -->
      <circle cx="280" cy="305" r="4.5" fill="#f8fafc"/>
      <circle cx="290" cy="310" r="4.5" fill="#f8fafc"/>
      <circle cx="300" cy="312" r="5" fill="#f8fafc"/>
      <circle cx="310" cy="310" r="4.5" fill="#f8fafc"/>
      <circle cx="320" cy="305" r="4.5" fill="#f8fafc"/>
      <!-- Long swan neck -->
      <rect x="282" y="250" width="36" height="50" fill="#fdf2e9"/>
      <!-- Head -->
      <ellipse cx="300" cy="215" rx="38" ry="46" fill="#fdf2e9"/>
      <!-- Sculptured 1950s Platinum Blonde Coiffure -->
      <path d="M 252 210 C 245 130, 355 130, 348 210 C 365 190, 355 150, 300 145 C 245 150, 235 190, 252 210 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <path d="M 270 170 Q 300 155 330 170" stroke="#e2e8f0" stroke-width="3" fill="none"/>
      <!-- Elegant aristocratic features: Crimson Red Lipstick -->
      <path d="M 278 205 Q 288 200 294 204" stroke="#475569" stroke-width="2" fill="none"/>
      <path d="M 306 204 Q 312 200 322 205" stroke="#475569" stroke-width="2" fill="none"/>
      <circle cx="286" cy="212" r="3.5" fill="#1e293b"/>
      <circle cx="314" cy="212" r="3.5" fill="#1e293b"/>
      <path d="M 292 235 Q 300 240 308 235 Q 300 244 292 235 Z" fill="#be123c"/>
      <!-- Golden Raven Brooch -->
      <circle cx="300" cy="355" r="10" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    `
  },
  // 5. Xavier Thorpe - Psychic Painter (Case 4)
  {
    filename: 'suspect_xavier.svg',
    name: 'Xavier Thorpe',
    role: 'Psychic Painter & Raven Society',
    case: 'CASE-004',
    color: '#a855f7',
    art: `
      <!-- Swirling Psychic Vision Vortex -->
      <circle cx="300" cy="260" r="115" fill="#241438" stroke="#a855f7" stroke-width="1.5" opacity="0.6"/>
      <path d="M 220 180 Q 300 220 380 180 Q 300 320 220 180 Z" fill="none" stroke="#c084fc" stroke-width="1.5" opacity="0.4"/>
      <!-- Torso: Black Nevermore Blazer with Paint Smudges -->
      <path d="M 215 450 L 235 315 L 300 300 L 365 315 L 385 450 Z" fill="#18181b" stroke="#7e22ce" stroke-width="2"/>
      <!-- Splatters of Burnt Umber and Violet Paint -->
      <circle cx="260" cy="370" r="8" fill="#78350f" opacity="0.7"/>
      <circle cx="340" cy="400" r="12" fill="#9333ea" opacity="0.6"/>
      <!-- Neck -->
      <rect x="284" y="260" width="32" height="42" fill="#f7e6d4"/>
      <!-- Head -->
      <ellipse cx="300" cy="225" rx="38" ry="46" fill="#f7e6d4"/>
      <!-- Dirty-Blonde Flowing Wavy Hair Tied Back -->
      <path d="M 250 220 C 245 145, 355 145, 350 220 C 355 270, 360 310, 350 330 C 330 290, 335 240, 330 210 C 320 170, 280 170, 270 210 C 265 240, 270 290, 250 330 C 240 310, 245 270, 250 220 Z" fill="#ca8a04"/>
      <!-- Brooding Intense Eyes & Dark Under-Eye Circles (Insomnia) -->
      <path d="M 278 214 L 294 212" stroke="#475569" stroke-width="2.5"/>
      <path d="M 306 212 L 322 214" stroke="#475569" stroke-width="2.5"/>
      <circle cx="286" cy="220" r="3.5" fill="#1e293b"/>
      <circle cx="314" cy="220" r="3.5" fill="#1e293b"/>
      <path d="M 280 227 Q 286 232 292 227" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M 308 227 Q 314 232 320 227" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.6"/>
      <!-- Thin serious mouth -->
      <line x1="292" y1="245" x2="308" y2="245" stroke="#9a3412" stroke-width="2"/>
      <!-- Wooden Palette and Painting Knife in hand -->
      <ellipse cx="370" cy="380" rx="25" ry="35" fill="#78350f" stroke="#451a03" stroke-width="2" transform="rotate(-20, 370, 380)"/>
      <circle cx="360" cy="370" r="5" fill="#dc2626"/>
      <circle cx="375" cy="365" r="5" fill="#3b82f6"/>
      <circle cx="380" cy="385" r="5" fill="#eab308"/>
    `
  },
  // 6. Rowan Laslow - Telekinetic Outcast (Case 4)
  {
    filename: 'suspect_rowan.svg',
    name: 'Rowan Laslow',
    role: 'Telekinetic Outcast & Astrologer',
    case: 'CASE-004',
    color: '#06b6d4',
    art: `
      <!-- Telekinetic Ripple Waves -->
      <circle cx="300" cy="260" r="115" fill="#082f49" stroke="#06b6d4" stroke-width="1.5" opacity="0.6"/>
      <circle cx="300" cy="260" r="90" fill="none" stroke="#38bdf8" stroke-width="1" stroke-dasharray="6,6" opacity="0.5"/>
      <!-- Torso: Disheveled School Uniform & Loose Tie -->
      <path d="M 215 450 L 235 320 L 300 305 L 365 320 L 385 450 Z" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <path d="M 292 315 L 308 315 L 304 410 L 296 410 Z" fill="#991b1b"/>
      <!-- Neck -->
      <rect x="284" y="260" width="32" height="45" fill="#fee2e2"/>
      <!-- Head -->
      <ellipse cx="300" cy="225" rx="36" ry="44" fill="#fee2e2"/>
      <!-- Messy curly dark hair -->
      <path d="M 255 210 C 245 140, 355 140, 345 210 C 330 180, 270 180, 255 210 Z" fill="#18181b"/>
      <circle cx="265" cy="180" r="14" fill="#18181b"/>
      <circle cx="335" cy="180" r="14" fill="#18181b"/>
      <!-- Large Round Glasses with Glare -->
      <circle cx="282" cy="220" r="15" fill="none" stroke="#94a3b8" stroke-width="3"/>
      <circle cx="318" cy="220" r="15" fill="none" stroke="#94a3b8" stroke-width="3"/>
      <line x1="297" y1="220" x2="303" y2="220" stroke="#94a3b8" stroke-width="3"/>
      <!-- Wide nervous eyes -->
      <circle cx="282" cy="220" r="5" fill="#0369a1"/>
      <circle cx="318" cy="220" r="5" fill="#0369a1"/>
      <!-- Nervous wavy mouth -->
      <path d="M 292 245 Q 300 248 308 244" stroke="#991b1b" stroke-width="2" fill="none"/>
      <!-- Floating Telekinetic Origami Gargoyle -->
      <polygon points="230,280 245,260 255,275 240,285" fill="#38bdf8" opacity="0.85"/>
      <circle cx="240" cy="275" r="14" fill="#06b6d4" opacity="0.2"/>
    `
  },
  // 7. Sheriff Donovan Galpin - Jericho Sheriff (Case 4)
  {
    filename: 'suspect_galpin.svg',
    name: 'Sheriff Donovan Galpin',
    role: 'Jericho Town Sheriff',
    case: 'CASE-004',
    color: '#eab308',
    art: `
      <!-- Shadowy Town Backdrop with Flashlight Beam -->
      <circle cx="300" cy="260" r="115" fill="#1c1917" stroke="#78716c" stroke-width="1.5"/>
      <polygon points="380,380 200,160 260,140" fill="#fef08a" opacity="0.15"/>
      <!-- Heavy Sheriffs Sheepskin Trench Coat -->
      <path d="M 205 450 L 225 310 L 300 295 L 375 310 L 395 450 Z" fill="#44403c" stroke="#292524" stroke-width="2"/>
      <!-- Sheepskin Sherpa Collar -->
      <path d="M 235 310 Q 300 350 365 310" stroke="#d6d3d1" stroke-width="16" stroke-linecap="round" fill="none"/>
      <!-- Gold Star Sheriff Badge -->
      <polygon points="255,360 260,372 272,372 262,380 266,392 255,384 244,392 248,380 238,372 250,372" fill="#eab308" stroke="#ca8a04" stroke-width="1"/>
      <!-- Rugged, Weathered Neck and Jaw -->
      <rect x="280" y="255" width="40" height="45" fill="#e7cba8"/>
      <!-- Head -->
      <ellipse cx="300" cy="215" rx="42" ry="48" fill="#e7cba8"/>
      <!-- Receding Graying Brown Hair -->
      <path d="M 252 200 C 255 145, 345 145, 348 200 C 335 175, 265 175, 252 200 Z" fill="#57534e"/>
      <!-- Deep Furrowed Brow, Skeptical Frown -->
      <path d="M 272 202 L 292 206" stroke="#292524" stroke-width="3"/>
      <path d="M 328 202 L 308 206" stroke="#292524" stroke-width="3"/>
      <circle cx="284" cy="214" r="3.5" fill="#1c1917"/>
      <circle cx="316" cy="214" r="3.5" fill="#1c1917"/>
      <!-- Heavy 5 oclock shadow -->
      <path d="M 275 235 C 275 265, 325 265, 325 235 Z" fill="#78716c" opacity="0.35"/>
      <line x1="288" y1="244" x2="312" y2="244" stroke="#44403c" stroke-width="2.5"/>
      <!-- Flashlight in Hand -->
      <rect x="360" y="370" width="16" height="50" fill="#71717a" rx="4" transform="rotate(-30, 360, 370)"/>
    `
  },
  // 8. Dr. Valerie Kinbott - Academy Therapist (Case 5)
  {
    filename: 'suspect_kinbott.svg',
    name: 'Dr. Valerie Kinbott',
    role: 'Academy Therapist & Clinical Hypnotist',
    case: 'CASE-005',
    color: '#d97706',
    art: `
      <!-- Hypnotic Spiral Radial Aura -->
      <circle cx="300" cy="260" r="115" fill="#2d1c14" stroke="#d97706" stroke-width="1.5" opacity="0.7"/>
      <path d="M 300 260 M 300 210 A 50 50 0 0 1 350 260 A 40 40 0 0 1 310 300" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.4"/>
      <!-- Elegant Beige Italian Cashmere Coat -->
      <path d="M 210 450 L 230 315 L 300 300 L 370 315 L 390 450 Z" fill="#d6c5b0" stroke="#b59f84" stroke-width="2"/>
      <!-- Lavender Silk Scarf draped over shoulder -->
      <path d="M 255 310 Q 300 370 345 310 L 335 430 L 315 430 Z" fill="#c4b5fd" opacity="0.85"/>
      <!-- Graceful Neck -->
      <rect x="284" y="255" width="32" height="48" fill="#fce7d2"/>
      <!-- Head -->
      <ellipse cx="300" cy="215" rx="36" ry="44" fill="#fce7d2"/>
      <!-- Soft Auburn Bob Hairstyle -->
      <path d="M 250 210 C 245 135, 355 135, 350 210 C 358 245, 345 285, 335 285 C 330 250, 335 220, 330 190 C 320 160, 280 160, 270 190 C 265 220, 270 250, 265 285 C 255 285, 242 245, 250 210 Z" fill="#9a3412"/>
      <!-- Piercing Clinical Eyes and Thin Eyeglasses -->
      <rect x="272" y="208" width="22" height="14" rx="3" fill="none" stroke="#ca8a04" stroke-width="2"/>
      <rect x="306" y="208" width="22" height="14" rx="3" fill="none" stroke="#ca8a04" stroke-width="2"/>
      <line x1="294" y1="215" x2="306" y2="215" stroke="#ca8a04" stroke-width="2"/>
      <circle cx="283" cy="215" r="3.5" fill="#1e293b"/>
      <circle cx="317" cy="215" r="3.5" fill="#1e293b"/>
      <!-- Enigmatic, polite therapist smile -->
      <path d="M 292 238 Q 300 244 308 238" stroke="#be123c" stroke-width="2" fill="none"/>
      <!-- Gold Dictaphone Micro-Cassette in Hand -->
      <rect x="235" y="380" width="22" height="36" rx="4" fill="#eab308" stroke="#ca8a04" stroke-width="1.5"/>
      <circle cx="242" cy="392" r="3" fill="#1e293b"/>
      <circle cx="250" cy="392" r="3" fill="#1e293b"/>
    `
  },
  // 9. Tyler Galpin - Jericho Barista (Case 5)
  {
    filename: 'suspect_tyler.svg',
    name: 'Tyler Galpin',
    role: 'Jericho Barista & Forest Drifter',
    case: 'CASE-005',
    color: '#ef4444',
    art: `
      <!-- Menacing Dark Hyde Monster Shadow Silhouette in Background -->
      <path d="M 220 150 C 200 90, 400 90, 380 150 C 440 220, 420 340, 390 400 L 210 400 C 180 340, 160 220, 220 150 Z" fill="#180a0a" stroke="#7f1d1d" stroke-width="2" opacity="0.75"/>
      <circle cx="265" cy="140" r="6" fill="#ef4444" opacity="0.9"/>
      <circle cx="335" cy="140" r="6" fill="#ef4444" opacity="0.9"/>
      <!-- Torso: Brown Flannel over Black T-Shirt -->
      <path d="M 215 450 L 235 320 L 300 305 L 365 320 L 385 450 Z" fill="#78350f" stroke="#451a03" stroke-width="2"/>
      <path d="M 260 320 L 300 450 L 340 320" fill="#1c1917"/>
      <!-- Weathervane Cafe Brown Canvas Apron -->
      <path d="M 255 350 L 345 350 L 335 450 L 265 450 Z" fill="#292524"/>
      <!-- Neck -->
      <rect x="282" y="260" width="36" height="45" fill="#fbd5b5"/>
      <!-- Head -->
      <ellipse cx="300" cy="225" rx="38" ry="46" fill="#fbd5b5"/>
      <!-- Wavy, slightly curly dirty-brown hair -->
      <path d="M 250 215 C 242 140, 358 140, 350 215 C 330 185, 270 185, 250 215 Z" fill="#451a03"/>
      <!-- Troubled, conflicted eyes -->
      <path d="M 276 210 Q 286 214 294 210" stroke="#292524" stroke-width="2.5" fill="none"/>
      <path d="M 306 210 Q 314 214 324 210" stroke="#292524" stroke-width="2.5" fill="none"/>
      <circle cx="285" cy="218" r="4" fill="#3f2314"/>
      <circle cx="315" cy="218" r="4" fill="#3f2314"/>
      <path d="M 292 242 L 308 242" stroke="#9a3412" stroke-width="2"/>
      <!-- Weathervane Coffee Cup in Hand -->
      <polygon points="360,370 380,370 375,410 365,410" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="370" y="392" font-family="'Courier New', monospace" font-size="8" fill="#78350f" text-anchor="middle">CAFE</text>
    `
  },
  // 10. Mayor Noble Walker - Jericho Mayor (Case 5)
  {
    filename: 'suspect_walker.svg',
    name: 'Mayor Noble Walker',
    role: 'Jericho Mayor & Pilgrim Historian',
    case: 'CASE-005',
    color: '#8b5cf6',
    art: `
      <!-- Pilgrim World Heritage Memorial Silhouette -->
      <circle cx="300" cy="260" r="115" fill="#1e1832" stroke="#64748b" stroke-width="1.5"/>
      <!-- Heavy Formal Charcoal Gray Mayor's Three-Piece Suit -->
      <path d="M 205 450 L 225 310 L 300 295 L 375 310 L 395 450 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
      <path d="M 265 310 L 300 380 L 335 310 Z" fill="#f8fafc"/>
      <!-- Silk Mayoral Sash across chest -->
      <line x1="225" y1="310" x2="370" y2="440" stroke="#eab308" stroke-width="14"/>
      <line x1="225" y1="310" x2="370" y2="440" stroke="#991b1b" stroke-width="4"/>
      <!-- Stately Neck and Double Chin -->
      <rect x="280" y="255" width="40" height="42" fill="#e2b89d"/>
      <!-- Head -->
      <ellipse cx="300" cy="220" rx="42" ry="46" fill="#e2b89d"/>
      <!-- Distinguished White/Silver Trim Hair -->
      <path d="M 252 205 C 255 150, 345 150, 348 205 C 330 180, 270 180, 252 205 Z" fill="#cbd5e1"/>
      <!-- Dignified Political Face -->
      <path d="M 275 208 L 292 208" stroke="#475569" stroke-width="2.5"/>
      <path d="M 308 208 L 325 208" stroke="#475569" stroke-width="2.5"/>
      <circle cx="284" cy="216" r="3.5" fill="#0f172a"/>
      <circle cx="316" cy="216" r="3.5" fill="#0f172a"/>
      <path d="M 290 240 Q 300 244 310 240" stroke="#991b1b" stroke-width="2.5" fill="none"/>
      <!-- Antique Gold Pilgrim Pocket Watch with Chain -->
      <circle cx="270" cy="390" r="12" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
      <path d="M 270 378 Q 285 390 300 375" stroke="#fbbf24" stroke-width="2" fill="none"/>
    `
  }
];

suspects.forEach(s => {
  const svgData = wrapSuspectSvg(s.name, s.role, s.case, s.color, s.art);
  targetDirs.forEach(dir => {
    fs.writeFileSync(path.join(dir, s.filename), svgData, 'utf8');
  });
  console.log(`Generated suspect portrait: ${s.filename}`);
});

console.log("All 10 suspect portraits generated successfully!");
