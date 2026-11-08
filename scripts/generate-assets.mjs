import fs from "fs";
import path from "path";

// Ensure directories
const dirs = [
  "public/images/products",
  "public/images/categories",
  "public/images/brand"
];
dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

// 1. Brand Logo SVG (curved green ribbon icon + POWERGEN typography)
const brandLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none">
  <!-- Ribbon symbol -->
  <g transform="translate(10, 10)">
    <path d="M28 8C18 8 10 16 10 26C10 42 36 38 36 50C36 54 32 58 26 58C18 58 14 52 14 52" stroke="#009E49" stroke-width="6.5" stroke-linecap="round"/>
    <path d="M38 12C48 12 56 20 56 30C56 46 30 42 30 54C30 58 34 62 40 62C48 62 52 56 52 56" stroke="#00843D" stroke-width="6.5" stroke-linecap="round"/>
    <circle cx="28" cy="8" r="3.5" fill="#009E49" />
    <circle cx="40" cy="62" r="3.5" fill="#00843D" />
  </g>
  <!-- Text -->
  <text x="85" y="42" font-family="Outfit, sans-serif" font-weight="900" font-size="24" fill="#0E1B10" letter-spacing="0.5">POWERGEN</text>
  <text x="86" y="58" font-family="Outfit, sans-serif" font-weight="600" font-size="12" fill="#00843D" letter-spacing="3">PERFORMANCE LABS</text>
</svg>`;
fs.writeFileSync("public/images/brand/logo.svg", brandLogoSvg);

// 2. Hero Tub with Liquid Splash & Strawberries SVG
const heroTubSplashSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
  <defs>
    <!-- Gradients -->
    <radialGradient id="pinkSplash" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFDEE8"/>
      <stop offset="70%" stop-color="#FFB3C7"/>
      <stop offset="100%" stop-color="#FFA1BA" stop-opacity="0.9"/>
    </radialGradient>
    <radialGradient id="milkGlow" cx="50%" cy="30%" r="60%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="85%" stop-color="#FFE8EF"/>
      <stop offset="100%" stop-color="#FFD1E0"/>
    </radialGradient>
    <linearGradient id="tubBody" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#121417"/>
      <stop offset="25%" stop-color="#2D333B"/>
      <stop offset="50%" stop-color="#3F4752"/>
      <stop offset="75%" stop-color="#1E2328"/>
      <stop offset="100%" stop-color="#0F1114"/>
    </linearGradient>
    <linearGradient id="tubLid" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1E2227"/>
      <stop offset="30%" stop-color="#3D454E"/>
      <stop offset="70%" stop-color="#24292F"/>
      <stop offset="100%" stop-color="#121518"/>
    </linearGradient>
    <linearGradient id="labelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C22718"/>
      <stop offset="35%" stop-color="#E8482A"/>
      <stop offset="65%" stop-color="#FF6B3D"/>
      <stop offset="100%" stop-color="#9C170E"/>
    </linearGradient>
    <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.38"/>
    </filter>
  </defs>

  <!-- Dynamic Milk & Protein Liquid Splash Backdrop -->
  <g filter="url(#dropShadow)">
    <!-- Splash tentacles & droplets -->
    <path d="M120 340 C90 280, 70 200, 110 160 C140 130, 190 220, 230 260 C210 170, 240 100, 290 90 C340 80, 360 160, 370 240 C420 180, 480 140, 510 180 C540 220, 500 290, 480 340 C550 370, 580 430, 540 480 C500 530, 430 510, 390 530 C330 560, 260 560, 210 530 C150 490, 120 460, 90 420 C60 380, 140 370, 120 340 Z" fill="url(#pinkSplash)" opacity="0.95"/>
    <path d="M160 360 C140 300, 130 230, 180 200 C210 180, 240 240, 270 280 C270 190, 310 140, 340 160 C370 180, 370 250, 410 270 C450 220, 490 210, 490 250 C490 290, 460 340, 440 380 C490 410, 500 460, 460 490 C420 520, 370 500, 330 510 C280 520, 220 510, 190 480 C160 450, 170 410, 160 360 Z" fill="url(#milkGlow)"/>
  </g>

  <!-- Floating Splash Droplets -->
  <circle cx="85" cy="180" r="14" fill="#FFB3C7"/>
  <circle cx="70" cy="230" r="8" fill="#FFE8EF"/>
  <circle cx="110" cy="120" r="10" fill="#FFCCD8"/>
  <circle cx="270" cy="70" r="12" fill="#FFE8EF"/>
  <circle cx="330" cy="55" r="9" fill="#FFB3C7"/>
  <circle cx="510" cy="120" r="16" fill="#FFCCD8"/>
  <circle cx="545" cy="190" r="11" fill="#FFE8EF"/>
  <circle cx="570" cy="360" r="15" fill="#FFB3C7"/>
  <circle cx="60" cy="450" r="12" fill="#FFE8EF"/>

  <!-- Strawberries Around Base -->
  <g transform="translate(140, 440)">
    <!-- Strawberry 1 -->
    <path d="M25 15 C10 15 0 35 15 55 C25 68 30 70 35 70 C40 70 45 68 55 55 C70 35 60 15 45 15 Z" fill="#D32F2F"/>
    <path d="M25 15 C30 5 40 5 45 15 C52 10 60 18 50 25 C45 22 35 22 30 25 C20 18 28 10 25 15 Z" fill="#2E7D32"/>
    <circle cx="28" cy="30" r="1.5" fill="#FFEB3B"/>
    <circle cx="42" cy="32" r="1.5" fill="#FFEB3B"/>
    <circle cx="35" cy="45" r="1.5" fill="#FFEB3B"/>
    <circle cx="26" cy="52" r="1.5" fill="#FFEB3B"/>
    <circle cx="44" cy="50" r="1.5" fill="#FFEB3B"/>
  </g>
  <g transform="translate(390, 450) scale(0.85)">
    <!-- Strawberry 2 -->
    <path d="M25 15 C10 15 0 35 15 55 C25 68 30 70 35 70 C40 70 45 68 55 55 C70 35 60 15 45 15 Z" fill="#E53935"/>
    <path d="M25 15 C30 5 40 5 45 15 C52 10 60 18 50 25 C45 22 35 22 30 25 C20 18 28 10 25 15 Z" fill="#388E3C"/>
    <circle cx="28" cy="30" r="1.5" fill="#FFF59D"/>
    <circle cx="42" cy="32" r="1.5" fill="#FFF59D"/>
    <circle cx="35" cy="45" r="1.5" fill="#FFF59D"/>
  </g>

  <!-- Main Supplement Tub Container -->
  <g filter="url(#dropShadow)" transform="translate(195, 120)">
    <!-- Ridged Lid -->
    <rect x="25" y="0" width="160" height="38" rx="8" fill="url(#tubLid)"/>
    <line x1="35" y1="10" x2="35" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="50" y1="10" x2="50" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="65" y1="10" x2="65" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="80" y1="10" x2="80" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="95" y1="10" x2="95" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="110" y1="10" x2="110" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="125" y1="10" x2="125" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="140" y1="10" x2="140" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="155" y1="10" x2="155" y2="30" stroke="#4F5966" stroke-width="2"/>
    <line x1="170" y1="10" x2="170" y2="30" stroke="#4F5966" stroke-width="2"/>

    <!-- Neck & Shoulder -->
    <path d="M30 38 L180 38 L195 70 L15 70 Z" fill="#1C2126"/>

    <!-- Tub Main Cylinder Body -->
    <rect x="10" y="70" width="190" height="260" rx="16" fill="url(#tubBody)"/>
    <!-- Specular Highlight Strip -->
    <rect x="55" y="70" width="22" height="260" fill="#FFFFFF" opacity="0.12"/>
    
    <!-- Bold High-Gloss Front Label -->
    <rect x="15" y="100" width="180" height="195" rx="8" fill="#14181D"/>
    
    <!-- Accent Chevron Graphics -->
    <path d="M25 110 L50 110 L65 145 L40 145 Z" fill="#FF5722"/>
    <path d="M45 110 L70 110 L85 145 L60 145 Z" fill="#FF9800"/>
    <path d="M65 110 L90 110 L105 145 L80 145 Z" fill="#FFC107"/>

    <!-- Brand Typography on Tub -->
    <text x="105" y="165" font-family="Outfit, sans-serif" font-weight="900" font-size="24" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">ZENITH</text>
    
    <rect x="30" y="180" width="150" height="42" rx="4" fill="url(#labelGrad)"/>
    <text x="105" y="209" font-family="Outfit, sans-serif" font-weight="900" font-size="21" fill="#FFFFFF" text-anchor="middle" letter-spacing="2.5">BIO-FUEL</text>
    
    <!-- Badges & Subtext -->
    <text x="105" y="242" font-family="Outfit, sans-serif" font-weight="700" font-size="10" fill="#E2E8F0" text-anchor="middle" letter-spacing="1">100% CROSS-FLOW WHEY ISOLATE</text>
    
    <!-- Spec Badges -->
    <g transform="translate(25, 255)">
      <rect x="5" y="0" width="42" height="22" rx="3" fill="#242B35"/>
      <text x="26" y="14" font-family="Outfit, sans-serif" font-weight="800" font-size="10" fill="#4ADE80" text-anchor="middle">28G</text>
      
      <rect x="55" y="0" width="42" height="22" rx="3" fill="#242B35"/>
      <text x="76" y="14" font-family="Outfit, sans-serif" font-weight="800" font-size="10" fill="#38BDF8" text-anchor="middle">7.1G</text>
      
      <rect x="105" y="0" width="42" height="22" rx="3" fill="#242B35"/>
      <text x="126" y="14" font-family="Outfit, sans-serif" font-weight="800" font-size="10" fill="#FACC15" text-anchor="middle">ZERO</text>
    </g>
    <text x="46" y="286" font-family="Outfit, sans-serif" font-size="7.5" fill="#94A3B8" text-anchor="middle">PROTEIN</text>
    <text x="96" y="286" font-family="Outfit, sans-serif" font-size="7.5" fill="#94A3B8" text-anchor="middle">BCAA</text>
    <text x="146" y="286" font-family="Outfit, sans-serif" font-size="7.5" fill="#94A3B8" text-anchor="middle">SUGAR</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/hero-tub-splash.svg", heroTubSplashSvg);

// 3. Product: Vitamin Complex (White bottle with yellow/green label)
const vitaminComplexSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" width="100%" height="100%">
  <defs>
    <linearGradient id="whiteBottle" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="30%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F8FAFC"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <linearGradient id="vitLid" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#475569"/>
      <stop offset="50%" stop-color="#64748B"/>
      <stop offset="100%" stop-color="#334155"/>
    </linearGradient>
    <linearGradient id="yellowGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FACC15"/>
      <stop offset="60%" stop-color="#84CC16"/>
      <stop offset="100%" stop-color="#16A34A"/>
    </linearGradient>
    <filter id="shadowV" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.18"/>
    </filter>
  </defs>
  <g filter="url(#shadowV)">
    <!-- Lid -->
    <rect x="100" y="30" width="100" height="28" rx="6" fill="url(#vitLid)"/>
    <line x1="110" y1="38" x2="110" y2="52" stroke="#94A3B8" stroke-width="2"/>
    <line x1="125" y1="38" x2="125" y2="52" stroke="#94A3B8" stroke-width="2"/>
    <line x1="140" y1="38" x2="140" y2="52" stroke="#94A3B8" stroke-width="2"/>
    <line x1="155" y1="38" x2="155" y2="52" stroke="#94A3B8" stroke-width="2"/>
    <line x1="170" y1="38" x2="170" y2="52" stroke="#94A3B8" stroke-width="2"/>
    <line x1="185" y1="38" x2="185" y2="52" stroke="#94A3B8" stroke-width="2"/>

    <!-- Bottle Body -->
    <rect x="65" y="58" width="170" height="240" rx="22" fill="url(#whiteBottle)"/>
    
    <!-- Label -->
    <rect x="75" y="95" width="150" height="165" rx="8" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
    <rect x="75" y="130" width="150" height="58" fill="url(#yellowGreen)"/>
    
    <text x="150" y="120" font-family="Outfit, sans-serif" font-weight="800" font-size="12" fill="#0F172A" text-anchor="middle" letter-spacing="1">ZENITH LABS</text>
    <text x="150" y="165" font-family="Outfit, sans-serif" font-weight="900" font-size="19" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">VITAMIN B/C</text>
    <text x="150" y="210" font-family="Outfit, sans-serif" font-weight="700" font-size="10" fill="#334155" text-anchor="middle">ACTIVE COMPLEX</text>
    <text x="150" y="235" font-family="Outfit, sans-serif" font-weight="600" font-size="9" fill="#16A34A" text-anchor="middle">60 BIO-CAPSULES</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/vitamin-complex.png", vitaminComplexSvg);
fs.writeFileSync("public/images/products/vitamin-complex.svg", vitaminComplexSvg);

// 4. Product: Monolith Obsidian Mass Matrix (Matte black monstrous tub)
const massGainerSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" width="100%" height="100%">
  <defs>
    <linearGradient id="blackTub" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F172A"/>
      <stop offset="25%" stop-color="#1E293B"/>
      <stop offset="55%" stop-color="#334155"/>
      <stop offset="85%" stop-color="#1E293B"/>
      <stop offset="100%" stop-color="#0F172A"/>
    </linearGradient>
    <filter id="shadowG" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  <g filter="url(#shadowG)">
    <!-- Lid -->
    <rect x="85" y="25" width="130" height="32" rx="7" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
    <path d="M90 57 L210 57 L230 85 L70 85 Z" fill="#1E293B"/>
    <!-- Tub -->
    <rect x="60" y="85" width="180" height="230" rx="18" fill="url(#blackTub)"/>
    <rect x="95" y="85" width="18" height="230" fill="#FFFFFF" opacity="0.08"/>

    <!-- Label -->
    <rect x="70" y="115" width="160" height="160" rx="6" fill="#090D16" stroke="#1E293B"/>
    <text x="150" y="145" font-family="Outfit, sans-serif" font-weight="900" font-size="11" fill="#94A3B8" text-anchor="middle" letter-spacing="2">APEX MONOLITH</text>
    <text x="150" y="185" font-family="Outfit, sans-serif" font-weight="900" font-size="22" fill="#F8FAFC" text-anchor="middle" letter-spacing="1">MONSTROUS</text>
    <text x="150" y="212" font-family="Outfit, sans-serif" font-weight="800" font-size="12" fill="#E2E8F0" text-anchor="middle">MASS GAINER MATRIX</text>
    
    <rect x="90" y="228" width="120" height="26" rx="4" fill="#3B82F6"/>
    <text x="150" y="246" font-family="Outfit, sans-serif" font-weight="800" font-size="11" fill="#FFFFFF" text-anchor="middle">52G HYBRID PROTEIN</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/mass-gainer.png", massGainerSvg);
fs.writeFileSync("public/images/products/mass-gainer.svg", massGainerSvg);

// 5. Product: Electro-Hydrate Recovery Whey (White container with orange lid)
const recoveryWheySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" width="100%" height="100%">
  <defs>
    <linearGradient id="whiteTub" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="35%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F1F5F9"/>
      <stop offset="100%" stop-color="#CBD5E1"/>
    </linearGradient>
    <linearGradient id="orangeLid" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#C2410C"/>
      <stop offset="50%" stop-color="#EA580C"/>
      <stop offset="100%" stop-color="#9A3412"/>
    </linearGradient>
    <filter id="shadowR" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000000" flood-opacity="0.2"/>
    </filter>
  </defs>
  <g filter="url(#shadowR)">
    <!-- Orange Lid -->
    <rect x="85" y="25" width="130" height="34" rx="8" fill="url(#orangeLid)"/>
    <path d="M90 59 L210 59 L225 85 L75 85 Z" fill="#CBD5E1"/>
    <!-- Tub -->
    <rect x="65" y="85" width="170" height="230" rx="16" fill="url(#whiteTub)"/>
    
    <!-- Big Orange 'Z' Icon Badge -->
    <rect x="75" y="110" width="150" height="170" rx="8" fill="#FFFFFF" stroke="#E2E8F0"/>
    <circle cx="150" cy="155" r="32" fill="#EA580C"/>
    <text x="150" y="167" font-family="Outfit, sans-serif" font-weight="900" font-size="34" fill="#FFFFFF" text-anchor="middle">Z</text>
    
    <text x="150" y="210" font-family="Outfit, sans-serif" font-weight="900" font-size="14" fill="#0F172A" text-anchor="middle">RECOVER PROTEIN</text>
    <text x="150" y="228" font-family="Outfit, sans-serif" font-weight="700" font-size="10" fill="#EA580C" text-anchor="middle">ELECTROLYTE FORTIFIED</text>
    <text x="150" y="255" font-family="Outfit, sans-serif" font-weight="600" font-size="9" fill="#64748B" text-anchor="middle">NET WT. 2.2 LBS (1 KG)</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/recovery-whey.png", recoveryWheySvg);
fs.writeFileSync("public/images/products/recovery-whey.svg", recoveryWheySvg);

// 6. Product: Apex Bio-Fuel Iso-Protein (Red/Black Muscle Milk style)
const isolateGoldSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" width="100%" height="100%">
  <defs>
    <linearGradient id="redLid" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#991B1B"/>
      <stop offset="50%" stop-color="#DC2626"/>
      <stop offset="100%" stop-color="#7F1D1D"/>
    </linearGradient>
    <filter id="shadowI" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="14" stdDeviation="18" flood-color="#000000" flood-opacity="0.22"/>
    </filter>
  </defs>
  <g filter="url(#shadowI)">
    <rect x="90" y="25" width="120" height="30" rx="6" fill="url(#redLid)"/>
    <rect x="70" y="65" width="160" height="245" rx="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
    
    <!-- Red Header on White Bottle -->
    <path d="M70 85 C70 75 75 65 90 65 L210 65 C225 65 230 75 230 85 L230 140 L70 140 Z" fill="#DC2626"/>
    <text x="150" y="105" font-family="Outfit, sans-serif" font-weight="900" font-size="16" fill="#FFFFFF" text-anchor="middle">MUSCLE BIO</text>
    <text x="150" y="128" font-family="Outfit, sans-serif" font-weight="900" font-size="19" fill="#FFFFFF" text-anchor="middle">PURE MILK</text>
    
    <text x="150" y="180" font-family="Outfit, sans-serif" font-weight="900" font-size="14" fill="#0F172A" text-anchor="middle">GENUINE ISOLATE</text>
    <text x="150" y="200" font-family="Outfit, sans-serif" font-weight="700" font-size="11" fill="#DC2626" text-anchor="middle">28G PURE WHEY</text>
    <rect x="95" y="225" width="110" height="24" rx="4" fill="#0F172A"/>
    <text x="150" y="241" font-family="Outfit, sans-serif" font-weight="700" font-size="9" fill="#FFFFFF" text-anchor="middle">INSTANT MIXING</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/isolate-gold.png", isolateGoldSvg);
fs.writeFileSync("public/images/products/isolate-gold.svg", isolateGoldSvg);

// 7. Creatine Powder (Green jar with dark lid)
const creatinePowderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" width="100%" height="100%">
  <defs>
    <linearGradient id="creatineGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#047857"/>
      <stop offset="35%" stop-color="#10B981"/>
      <stop offset="70%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#064E3B"/>
    </linearGradient>
  </defs>
  <g>
    <rect x="85" y="35" width="130" height="34" rx="8" fill="#1F2937"/>
    <rect x="65" y="75" width="170" height="235" rx="18" fill="url(#creatineGreen)"/>
    <rect x="75" y="115" width="150" height="150" rx="8" fill="#111827"/>
    <text x="150" y="150" font-family="Outfit, sans-serif" font-weight="900" font-size="14" fill="#34D399" text-anchor="middle">CREAPURE 100%</text>
    <text x="150" y="180" font-family="Outfit, sans-serif" font-weight="900" font-size="18" fill="#FFFFFF" text-anchor="middle">MICRONIZED</text>
    <text x="150" y="202" font-family="Outfit, sans-serif" font-weight="800" font-size="11" fill="#9CA3AF" text-anchor="middle">CREATINE POWDER</text>
    <text x="150" y="235" font-family="Outfit, sans-serif" font-weight="700" font-size="10" fill="#34D399" text-anchor="middle">5000MG PER SCOOP</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/creatine-powder.png", creatinePowderSvg);
fs.writeFileSync("public/images/products/creatine-powder.svg", creatinePowderSvg);

// 8. Energy Drink / Electrolyte
const energyDrinkSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 360" width="100%" height="100%">
  <defs>
    <linearGradient id="drinkCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284C7"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0369A1"/>
    </linearGradient>
  </defs>
  <g>
    <rect x="110" y="25" width="80" height="32" rx="6" fill="#0F172A"/>
    <rect x="80" y="60" width="140" height="260" rx="20" fill="url(#drinkCyan)"/>
    <rect x="90" y="110" width="120" height="150" rx="8" fill="#FFFFFF"/>
    <text x="150" y="145" font-family="Outfit, sans-serif" font-weight="900" font-size="14" fill="#0284C7" text-anchor="middle">KETO-BIO</text>
    <text x="150" y="175" font-family="Outfit, sans-serif" font-weight="900" font-size="16" fill="#0F172A" text-anchor="middle">HYDRATION</text>
    <text x="150" y="200" font-family="Outfit, sans-serif" font-weight="700" font-size="10" fill="#64748B" text-anchor="middle">ZERO SUGAR</text>
    <text x="150" y="225" font-family="Outfit, sans-serif" font-weight="800" font-size="11" fill="#0284C7" text-anchor="middle">REAL COCONUT</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/energy-drink.png", energyDrinkSvg);
fs.writeFileSync("public/images/products/energy-drink.svg", energyDrinkSvg);

// 9. Spotlight Tub (OPTIMUM NUTRITION GOLD BIOMASS - Black with Gold metallic label)
const spotlightTubSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 460" width="100%" height="100%">
  <defs>
    <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="30%" stop-color="#FCD34D"/>
      <stop offset="60%" stop-color="#F59E0B"/>
      <stop offset="85%" stop-color="#FEF08A"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
    <linearGradient id="blackMetallic" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0A0C10"/>
      <stop offset="25%" stop-color="#1E232B"/>
      <stop offset="50%" stop-color="#3A4350"/>
      <stop offset="75%" stop-color="#1A1F26"/>
      <stop offset="100%" stop-color="#080A0E"/>
    </linearGradient>
    <filter id="spotShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>
  <g filter="url(#spotShadow)">
    <rect x="115" y="30" width="170" height="42" rx="10" fill="#181B20" stroke="#374151"/>
    <path d="M120 72 L280 72 L305 108 L95 108 Z" fill="#1F242C"/>
    <!-- Tub body -->
    <rect x="80" y="108" width="240" height="310" rx="22" fill="url(#blackMetallic)"/>
    <rect x="140" y="108" width="26" height="310" fill="#FFFFFF" opacity="0.1"/>

    <!-- Gold Foil Label -->
    <rect x="95" y="145" width="210" height="235" rx="10" fill="#0C0F14" stroke="url(#goldMetallic)" stroke-width="2.5"/>
    
    <!-- Big 100% Emblem -->
    <circle cx="200" cy="195" r="32" fill="url(#goldMetallic)"/>
    <text x="200" y="204" font-family="Outfit, sans-serif" font-weight="900" font-size="18" fill="#000000" text-anchor="middle">100%</text>
    
    <text x="200" y="248" font-family="Outfit, sans-serif" font-weight="900" font-size="18" fill="url(#goldMetallic)" text-anchor="middle" letter-spacing="1.5">OPTIMUM GOLD</text>
    <text x="200" y="272" font-family="Outfit, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">BIOMASS WHEY</text>
    
    <text x="200" y="300" font-family="Outfit, sans-serif" font-weight="700" font-size="11" fill="#FBBF24" text-anchor="middle">CROSS-FLOW MICROFILTERED</text>
    
    <g transform="translate(115, 318)">
      <rect x="0" y="0" width="52" height="24" rx="4" fill="#1F2937"/>
      <text x="26" y="16" font-family="Outfit, sans-serif" font-weight="800" font-size="11" fill="#FCD34D" text-anchor="middle">24G</text>
      <rect x="60" y="0" width="52" height="24" rx="4" fill="#1F2937"/>
      <text x="86" y="16" font-family="Outfit, sans-serif" font-weight="800" font-size="11" fill="#FCD34D" text-anchor="middle">5.5G</text>
      <rect x="120" y="0" width="52" height="24" rx="4" fill="#1F2937"/>
      <text x="146" y="16" font-family="Outfit, sans-serif" font-weight="800" font-size="11" fill="#FCD34D" text-anchor="middle">4G</text>
    </g>
    <text x="141" y="354" font-family="Outfit, sans-serif" font-size="8" fill="#9CA3AF" text-anchor="middle">PROTEIN</text>
    <text x="201" y="354" font-family="Outfit, sans-serif" font-size="8" fill="#9CA3AF" text-anchor="middle">BCAAs</text>
    <text x="261" y="354" font-family="Outfit, sans-serif" font-size="8" fill="#9CA3AF" text-anchor="middle">GLUTAMINE</text>
  </g>
</svg>`;
fs.writeFileSync("public/images/products/spotlight-tub.png", spotlightTubSvg);
fs.writeFileSync("public/images/products/spotlight-tub.svg", spotlightTubSvg);

// 10. Category Icons
const catIcons = {
  creatine: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" fill="#00843D" /><rect x="36" y="22" width="28" height="10" rx="3" fill="#1F2937"/><rect x="30" y="34" width="40" height="46" rx="6" fill="#10B981"/><rect x="34" y="42" width="32" height="24" rx="3" fill="#064E3B"/><text x="50" y="58" font-family="Outfit, sans-serif" font-weight="900" font-size="8" fill="#FFFFFF" text-anchor="middle">CREA</text></svg>`,
  "food-drink": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" fill="#00843D" /><rect x="42" y="20" width="16" height="8" rx="2" fill="#1F2937"/><path d="M35 30 L65 30 L60 80 L40 80 Z" fill="#38BDF8"/><text x="50" y="58" font-family="Outfit, sans-serif" font-weight="900" font-size="8" fill="#FFFFFF" text-anchor="middle">DRINK</text></svg>`,
  gainer: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" fill="#00843D" /><rect x="34" y="24" width="32" height="8" rx="2" fill="#111827"/><rect x="28" y="34" width="44" height="46" rx="5" fill="#1E293B"/><rect x="32" y="42" width="36" height="26" rx="2" fill="#0F172A"/><text x="50" y="58" font-family="Outfit, sans-serif" font-weight="900" font-size="8" fill="#F8FAFC" text-anchor="middle">MASS</text></svg>`,
  nutrition: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" fill="#00843D" /><circle cx="50" cy="50" r="30" fill="#FFFFFF"/><circle cx="50" cy="50" r="22" fill="#009E49"/><text x="50" y="54" font-family="Outfit, sans-serif" font-weight="900" font-size="9" fill="#FFFFFF" text-anchor="middle">BIO</text></svg>`,
  protein: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" fill="#00843D" /><rect x="36" y="22" width="28" height="10" rx="3" fill="#991B1B"/><rect x="30" y="34" width="40" height="46" rx="6" fill="#EF4444"/><rect x="34" y="42" width="32" height="24" rx="3" fill="#7F1D1D"/><text x="50" y="58" font-family="Outfit, sans-serif" font-weight="900" font-size="8" fill="#FFFFFF" text-anchor="middle">WHEY</text></svg>`,
  vitamins: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="46" fill="#00843D" /><rect x="36" y="24" width="28" height="8" rx="2" fill="#475569"/><rect x="32" y="34" width="36" height="46" rx="6" fill="#F8FAFC"/><rect x="34" y="44" width="32" height="22" rx="3" fill="#FACC15"/><text x="50" y="58" font-family="Outfit, sans-serif" font-weight="900" font-size="8" fill="#0F172A" text-anchor="middle">VIT-C</text></svg>`,
};

Object.entries(catIcons).forEach(([name, svg]) => {
  fs.writeFileSync(`public/images/categories/${name}.png`, svg);
  fs.writeFileSync(`public/images/categories/${name}.svg`, svg);
});

console.log("All custom product and category SVG assets generated successfully!");
