/**
 * Cookspace Karaoke - White-Label Venue Configuration
 *
 * This config is loaded by every surface. Change the venue object
 * to rebrand the entire platform for a different venue.
 */
const PLATFORM = {
  name: 'Cookspace',
  product: 'Karaoke',
  fullName: 'Cookspace Karaoke',
  tagline: 'Smart venue platform',
  url: 'cookspace.ca',
};

const VENUE = {
  name: 'BAGHA Club',
  shortName: 'BAGHA',
  tagline: 'Gulshan 2, Dhaka',
  logo: 'B',                       // Single letter or emoji for logo placeholder
  currency: 'Tk',
  timezone: 'Asia/Dhaka',
  // Theme colors - venue can customize these
  theme: {
    primary: '#6C5CE7',
    primaryDark: '#5A4BD1',
    accent: '#FF6B6B',
    success: '#00C853',
    warning: '#FFB300',
    danger: '#FF4757',
  }
};

// Demo data - represents what the venue would configure
const DEMO = {
  tables: ['Table 1','Table 2','Table 3','Table 4','Table 5','Table 6','Table 7','Table 8'],
  rooms: [
    { name: 'Room A', capacity: 12, rate: 1500 },
    { name: 'Room B', capacity: 8,  rate: 1200 },
    { name: 'Room C', capacity: 20, rate: 2000 },
    { name: 'Room D', capacity: 10, rate: 1500 },
    { name: 'Room E', capacity: 8,  rate: 1200 },
    { name: 'Room F', capacity: 6,  rate: 1000 },
  ],
  staff: [
    { name: 'Rahul',  role: 'host',  label: 'Host / KJ' },
    { name: 'Sakib',  role: 'bar',   label: 'Bar' },
    { name: 'Tamim',  role: 'desk',  label: 'Front Desk' },
    { name: 'Vanes',  role: 'owner', label: 'Owner' },
  ],
  menu: [
    { name: 'Heineken Draft',  price: 450, cat: 'Drinks',   icon: '🍺', available: true },
    { name: 'House Red Wine',  price: 650, cat: 'Drinks',   icon: '🍷', available: true },
    { name: 'Mojito',          price: 550, cat: 'Cocktails',icon: '🍹', available: true },
    { name: 'Coca-Cola',       price: 150, cat: 'Drinks',   icon: '🥤', available: true },
    { name: 'Nachos Supreme',  price: 380, cat: 'Snacks',   icon: '🧀', available: true },
    { name: 'Fish & Chips',    price: 520, cat: 'Mains',    icon: '🐟', available: false },
    { name: 'Chicken Wings',   price: 350, cat: 'Snacks',   icon: '🍗', available: true },
  ],
  songs: [
    { title: 'Amar Shonar Bangla',  artist: 'Rabindranath Tagore',lang: 'BN', icon: '🎵' },
    { title: 'Tum Hi Ho',           artist: 'Arijit Singh',      lang: 'HI', icon: '🎶' },
    { title: 'Bohemian Rhapsody',   artist: 'Queen',             lang: 'EN', icon: '🎸' },
    { title: 'Channa Mereya',       artist: 'Arijit Singh',      lang: 'HI', icon: '🎵' },
    { title: 'Hotel California',    artist: 'Eagles',            lang: 'EN', icon: '🎸' },
    { title: 'Ei Meghla Dine Ekla', artist: 'Hemanta Mukherjee', lang: 'BN', icon: '🎹' },
    { title: 'Shape of You',        artist: 'Ed Sheeran',        lang: 'EN', icon: '🎤' },
    { title: 'Lag Ja Gale',         artist: 'Lata Mangeshkar',   lang: 'HI', icon: '🎵' },
    { title: 'Amar Sonar Moyna',    artist: 'Jasim Uddin',       lang: 'BN', icon: '🎵' },
    { title: 'Kun Faya Kun',        artist: 'A.R. Rahman',       lang: 'HI', icon: '🎶' },
    { title: "Don't Stop Believin'",artist: 'Journey',           lang: 'EN', icon: '🎸' },
  ],
};

// Utility: format currency
function fmtPrice(amount) {
  return VENUE.currency + ' ' + amount.toLocaleString();
}

// Apply venue theme to CSS variables
function applyTheme() {
  const root = document.documentElement;
  if (VENUE.theme) {
    root.style.setProperty('--primary', VENUE.theme.primary);
    root.style.setProperty('--primary-dark', VENUE.theme.primaryDark);
    root.style.setProperty('--accent', VENUE.theme.accent);
    root.style.setProperty('--success', VENUE.theme.success);
    root.style.setProperty('--warning', VENUE.theme.warning);
    root.style.setProperty('--danger', VENUE.theme.danger);
  }
}

// Inject "Powered by" footer
function addPoweredBy(container) {
  const el = document.createElement('div');
  el.className = 'powered-by';
  el.innerHTML = 'Powered by <strong>' + PLATFORM.fullName + '</strong>';
  (container || document.body).appendChild(el);
}

document.addEventListener('DOMContentLoaded', function() {
  applyTheme();
});
