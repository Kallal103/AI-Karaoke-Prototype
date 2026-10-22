# PRD -- AI Karaoke Venue Platform

**Version:** 2.0 (Expanded)
**Date:** October 18, 2026
**Sponsor:** Vanes (Lord Vanes)
**CPO / Project Director:** Kallal Das
**Chief Architect:** Rabib
**Engineers:** Abu Bakar Siddik, Fardin, Ahnaf
**Company:** Cookspace (Canada)
**Target Market:** Global (pilot launch: Dhaka, Bangladesh)

---

## 1. Overview

A subscription SaaS platform that runs a karaoke venue's night: guests queue songs and order drinks from their phones, staff run rooms and the stage from one screen, and AI scores singers and turns the best moments into shareable clips. Venues pay Cookspace a monthly fee per venue.

The platform is designed for **global deployment** -- any karaoke venue, KTV lounge, or entertainment cafe worldwide. The pilot launch targets Dhaka, Bangladesh, with **BAGHA Club (Gulshan 2)** as the first pitch venue.

### 1.1 The Problem Today

In most karaoke lounges and private-room venues worldwide (acutely felt in markets like Dhaka):

- Song requests go on paper slips or through a staff member
- Queues are unfair and slow
- Food and drink orders interrupt singing
- Rooms are booked by phone call
- The owner has no data on what sells or which nights are busy

### 1.2 The Product

Three surfaces on one backend:

| Surface | Description |
|---------|-------------|
| **Guest web app** | Opened by scanning a QR code at the table or in the room. No download needed (PWA). |
| **Staff console** | A tablet or laptop app for the host/KJ, the bar, and the front desk. |
| **Owner dashboard** | Bookings, revenue, top songs, peak hours. |

**What we do NOT build in the MVP:** our own song catalogue. We plug into the venue's existing licensed karaoke player or library.

### 1.3 Current Market Landscape

### 1.3a Pilot Venue: BAGHA Club

| Detail | Info |
|--------|------|
| **Full name** | British Aid Guest House Association (BAGHA) Club |
| **Location** | House 17, Road 44, Gulshan 2, Dhaka 1212 |
| **Established** | 1979 |
| **Type** | International expat club (British High Commission estate) |
| **Membership** | EU nationals with Bangladesh visas; guests from other international clubs welcome |
| **Existing karaoke** | Digital jukebox and karaoke system (exact software TBD -- needs on-site visit) |
| **F&B** | All-day restaurant, air-conditioned bar |
| **Other facilities** | Swimming pool, tennis court, terrace, library, Wi-Fi |
| **Why it's a good pilot** | Already has karaoke infra, bar/restaurant (F&B ordering use case), upscale international crowd, reliable Wi-Fi, management likely receptive to tech upgrades |

**Status:** Prototype pitch planned. Karaoke hardware details and song library to be confirmed during on-site visit.

### 1.3b Current Market Landscape

**How venues run today.** Most karaoke lounges and private KTV venues (in Dhaka and globally) rely on a fragmented mix of tools -- none purpose-built for karaoke operations:

| Operation | Current Approach |
|-----------|-----------------|
| **Bookings & reservations** | Facebook Page Inbox, Instagram DMs, WhatsApp Business, phone calls. Staff track slots in Google Sheets, physical registers, or calendar tools. Deposits collected via bKash/Nagad with manual TrxID matching. |
| **F&B billing** | Standard restaurant POS software not designed for karaoke. Common systems: Pridesys, e-Pos, Sheba POS (local), or Loyverse, Square, Petpooja (cloud). |
| **Music & playback** | Standalone KTV hardware imported from China (InAndOn, Thunder, generic Android KTV machines), or consumer apps (YouTube Karaoke, KaraFun) on PCs/tablets. No integration with billing or timers. |
| **Room time tracking** | Manual. Staff notify guests 10-15 minutes before expiry by walking to the room. |

**Core gaps we exploit:**

1. **Unintegrated billing and time tracking** -- F&B bills and room rental fees calculated separately, requiring manual math at checkout
2. **Deposit and no-show friction** -- Venues manually match bKash TrxIDs in chat messages to hold slots
3. **No self-serve song queueing** -- Guests pass a physical tablet/remote around or rely on staff to manage an unordered playlist

### 1.4 Competitive Landscape

No specialized karaoke venue platform operates in Bangladesh today. Internationally, several platforms serve this vertical but none address the Dhaka market:

**All-in-One KTV / Private Room Software**

| Platform | Key Capabilities | Gap vs. Our Product |
|----------|-----------------|-------------------|
| **Singa Business** | Market leader in 34+ countries. Self-service private rooms, session management, cloud-synced catalogue, direct music-label licensing | No Bangla language support, no presence in Bangladesh, no F&B ordering |
| **REENG** | Time-tracked session billing, offline-first, in-room F&B ordering, bill-splitting | No Bangla/transliteration search, no AI scoring, not localized for BD payment rails |
| **SUNVIG** | Centralized dashboard, plug-and-play hardware, branded room software | Hardware-dependent model, European focus |
| **SingPods** | Automated pod/arcade model, smart PIN access, API/CRM integration | Pod-centric (not adaptable to existing venues), no BD market |

**Host-Centric / Open-Stage Software (KJs and Bars)**

| Platform | Key Capabilities | Gap vs. Our Product |
|----------|-----------------|-------------------|
| **KaraFun Pro** | Offline mode, QR-driven guest requests, real-time singer rotation | No room management, no F&B, no Bangla support |
| **PCDJ Karaoke** | Professional KJ workflow, mobile entertainment, rotation management | Desktop-only, no web/PWA, no venue operations |
| **KaraDom** | Synchronized lyrics, smart queue search, real-time key/tempo adjustment | Italian market, no multi-language transliteration |

**Our differentiation:**
- **Global-ready, local-first:** Multi-language support (starting with Bangla/Hindi/English + transliteration), adaptable to any market's payment rails and languages
- **Non-disruptive:** Integrates with the venue's existing karaoke hardware (player bridge) instead of replacing it -- works with InAndOn, Thunder, KaraFun, or any system
- **AI-powered engagement:** Pitch scoring as a guest hook that no competitor offers at the venue level
- **Zero friction:** PWA via QR scan -- no app download, works on any phone, any OS
- **Full-stack venue ops:** Queue + F&B ordering + room management + analytics in one platform (competitors only cover 1-2 of these)

---

## 2. Users and Their Jobs

| User | Who They Are | What They Need |
|------|-------------|----------------|
| **Guest** | Groups of friends, office teams, birthday parties, mostly 18-35 | Find a song fast in Bangla, Hindi or English; see when their turn is; order without waving for staff; share a clip afterwards |
| **Host / KJ** | Runs the stage or the room players | One queue to control, skip and reorder; announce the next singer; handle requests in a noisy room |
| **Bar and kitchen** | Prepares orders | Orders arrive with table or room number, clear status, no paper |
| **Front desk** | Takes room bookings and walk-ins | See which rooms are free, take a deposit, extend a session |
| **Owner** | Runs one or a few venues | Revenue per night, per room, per item; top songs; busy hours; which promotions work |

---

## 3. Goals and Success Metrics

**Business goal:** 10 paying venues within six months of launch (starting in Dhaka, expanding globally), at a monthly fee that pays back in the first month through higher food and drink sales.

The pilot venue's own numbers from the month before launch are the baseline. Agree in writing to collect them before go-live.

| Metric | Target for Pilot Venue |
|--------|----------------------|
| Share of song requests made through the app | 70% or more by week 4 |
| Food and drink orders placed through the app | 40% or more by week 4 |
| Average spend per table or room | Up 10% against the month before |
| Average wait between songs | Under 30 seconds |
| Clips shared to social media | 1 in 5 sessions |
| Room bookings made online | 50% or more by week 8 |
| Venue renews after the free pilot | Yes |

---

## 4. Scope

### 4.1 MVP (First 6 Weeks)

The tools a venue uses every night, plus one AI feature that guests will talk about.

- QR check-in per table or room, guest name only, no account needed
- Song search over the venue's licensed library, in Bangla, English and transliterated Bangla ("amar shonar bangla" finds the Bangla script version)
- Fair song queue with live position and estimated wait
- Host console to reorder, skip, pause and announce
- Food and drink ordering with a live order board for the bar
- Room booking with availability calendar and session timer
- Live pitch scoring on the stage screen
- Owner dashboard with nightly sales, top songs and top items

### 4.2 Post-Pilot

- Payment inside the app through bKash, Nagad or card (MVP marks orders "pay at counter")
- AI vocal removal, so a venue can add new songs from tracks it holds a licence for
- Auto highlight clips with a branded frame, ready to post
- Song recommendations for the group based on what they sang
- Loyalty points and promotions (e.g. free drink after five songs)
- Duets and team battles with a leaderboard
- Multi-venue management for chains

---

## 5. Key User Flows

### 5.1 Guest: From Table to Stage

```
[Scan QR] --> [Enter name] --> [Song search] --> [Queue song]
    --> [Wait notification: "2 songs away"] --> [Wait notification: "You're next!"]
    --> [Sing on stage w/ live pitch line] --> [See score] --> [Share score card]
```

1. Scans the QR code on the table or room door.
2. Types a name (or group name) and lands on the song search.
3. Searches, taps a song, and sees "You are 4th, about 12 minutes."
4. Gets a phone alert when two songs away and again when up next.
5. Sings. The stage screen shows lyrics and a live pitch line; a score appears at the end.
6. Gets the score card on the phone and can share it.

### 5.2 Guest: Ordering

```
[Tap "Order"] --> [Browse venue menu] --> [Confirm order]
    --> [Bar receives w/ table #] --> [Status: Received -> Preparing -> On the way]
    --> [See bill at end] --> [Pay at counter]
```

1. Taps "Order" from any screen and picks items from the venue menu.
2. Confirms. The order appears on the bar board with the table or room number.
3. Sees status change from "Received" to "Preparing" to "On the way".
4. At the end, sees one bill for the table or room and pays at the counter (in-app payment later).

### 5.3 Host: Running the Night

1. Opens the console and sees the queue for each stage or room.
2. Drags to reorder, skips no-shows, inserts a birthday song.
3. Taps "Next" to start the song on the venue player and announce the singer.

### 5.4 Front Desk: Room Booking

1. Customer books a room online for a time slot, or the desk books a walk-in.
2. Desk takes a deposit and starts the session timer when the group arrives.
3. Ten minutes before the end, the room screen and the desk both get a warning, with an option to extend.

---

## 6. Functional Requirements

P0 = must have for the pilot | P1 = should have before the second venue | P2 = later

| ID | Module | Requirement | Priority |
|----|--------|-------------|----------|
| K-01 | Check-in | Each table and room has its own QR code; scanning opens the guest web app tied to that table or room | P0 |
| K-02 | Check-in | Guest joins with a display name only; optional phone number for alerts | P0 |
| K-03 | Songs | Search by title, artist or lyric line, in Bangla script, English and transliterated Bangla, with typo tolerance | P0 |
| K-04 | Songs | Filters by language (Bangla, Hindi, English), decade and mood; "popular tonight" list | P1 |
| K-05 | Queue | Fair rotation: one song per table in turn, not first-come-first-served; host can switch to strict order | P0 |
| K-06 | Queue | Live position and estimated wait for every guest; alert when 2 songs away and when next | P0 |
| K-07 | Queue | Limit of 2 songs waiting per table at once, set by the venue | P0 |
| K-08 | Host | Reorder, skip, remove, pause, insert a priority song, mark a no-show | P0 |
| K-09 | Host | "Next" starts the song on the venue player and shows the singer's name on the stage screen | P0 |
| K-10 | Ordering | Venue menu with photos, prices in Tk, sold-out toggle | P0 |
| K-11 | Ordering | Order board for bar and kitchen with table or room number and status; sound alert on new orders | P0 |
| K-12 | Ordering | One running bill per table or room; staff close it at payment | P0 |
| K-13 | Payment | In-app payment through bKash, Nagad and card | P2 |
| K-14 | Rooms | Calendar of rooms by hour, online booking with deposit, walk-in booking by staff | P0 |
| K-15 | Rooms | Session timer with a 10-minute warning and one-tap extend at the current hourly rate | P0 |
| K-16 | Scoring | Live pitch line and score shown on the stage screen and the singer's phone | P0 |
| K-17 | Clips | 20-second highlight clip of each performance with the venue's logo, opt-in only | P1 |
| K-18 | Owner | Dashboard: sales per night, per room, per item; top songs; busy hours; export to Excel | P0 |
| K-19 | Owner | Promotions: happy-hour prices, birthday packages, loyalty points | P2 |
| K-20 | Admin | Staff accounts with roles (host, bar, desk, owner) and a PIN for each | P0 |

---

## 7. AI Features

The AI must make a night more fun or a venue more money. Each feature has a fallback so the night never stops if it fails.

| Feature | What User Sees | How It Works | Fallback | Phase |
|---------|---------------|-------------|----------|-------|
| **Pitch scoring** | Live pitch line against the melody and a score out of 100 | Pitch detection on room mic feed, compared with song's reference melody. Open-source pitch tracker on the stage computer (no cloud, no delay) | Hide the score; song plays normally | MVP |
| **Smart search** | Finds the right song from a half-remembered line or misspelt name | Fuzzy and phonetic matching across Bangla, English and transliteration; LLM only rewrites hard queries | Plain text search | MVP |
| **Vocal removal** | Venue can add a new song from a track it licenses | Open-source source-separation model run once per song on a server, result stored | Venue adds only ready-made karaoke tracks | Post-pilot |
| **Highlight clips** | 20-second clip of the best part, with score and venue logo | Pick highest-scoring 20 seconds; render with venue's frame. Requires singer's consent and camera | No clip | Post-pilot |
| **Recommendations** | "Your group might like..." | Based on what the group and similar groups sang | Popular-tonight list | Post-pilot |
| **Owner insights** | "Thursdays after 10 pm are your slowest; try a happy hour" | Weekly summary of venue data written in plain language by LLM | Dashboard only | Post-pilot |

---

## 8. Technical Architecture

### 8.1 System Overview

```
+-------------------+     +-------------------+     +-------------------+
|   Guest PWA       |     |   Staff Console   |     |   Stage Screen    |
|   (Mobile browser)|     |   (Tablet/Laptop) |     |   (Venue PC)      |
+--------+----------+     +--------+----------+     +--------+----------+
         |                         |                          |
         +------------+------------+--------------------------+
                      |
              +-------v--------+
              |   Firebase      |
              |   Hosting       |
              |   (PWA + Web)   |
              +-------+--------+
                      |
         +------------+------------+
         |                         |
+--------v----------+    +--------v----------+
| Cloud Firestore   |    | Firebase Cloud     |
| (Realtime DB)     |    | Functions (API)    |
| - venues          |    | - queue logic      |
| - queues          |    | - order processing |
| - orders          |    | - search indexing  |
| - rooms           |    | - notifications    |
| - sessions        |    | - dashboard agg.   |
+-------------------+    +--------+----------+
                                  |
                    +-------------+-------------+
                    |             |              |
             +------v---+  +----v-----+  +-----v------+
             | Firebase  |  | Firebase |  | Claude API |
             | Auth      |  | Storage  |  | (Smart     |
             | (Staff    |  | (Menu    |  |  search    |
             |  PINs)    |  |  photos) |  |  fallback) |
             +-----------+  +----------+  +------------+

+-------------------+
| Player Bridge     |
| (Local agent on   |
|  venue karaoke PC)|
| - Receives "play" |
| - Reports "ended" |
| - Runs pitch      |
|   scoring locally  |
+-------------------+
```

### 8.2 Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Guest app** | PWA (React + Vite) | No install, QR scan opens it, works on low-end Android |
| **Staff console** | Same React codebase, responsive layout | Tablet/laptop optimized views |
| **Stage screen** | Same codebase, fullscreen mode | Shows lyrics, pitch line, singer name |
| **Backend** | Firebase Cloud Functions (Node.js) | Serverless, scales per venue, team already knows Firebase |
| **Database** | Cloud Firestore | Real-time listeners for queue and orders, multi-tenant by venue doc |
| **Auth** | Firebase Auth (anonymous for guests, email+PIN for staff) | Guests need zero friction; staff need role-based access |
| **File storage** | Firebase Storage | Menu photos, QR code images, clip videos |
| **Hosting** | Firebase Hosting | PWA served with CDN, fast in Bangladesh |
| **Search** | Algolia or Meilisearch | Fuzzy + transliterated Bangla search with typo tolerance |
| **AI - Smart search** | Claude API (Claude 3.5 Sonnet) | Only for hard queries that fuzzy search can't resolve |
| **AI - Pitch scoring** | Open-source pitch tracker (e.g. CREPE, pYIN) | Runs locally on venue PC, no latency |
| **Player bridge** | Electron or Node.js agent on venue PC | Talks to venue's karaoke software via local API/hotkeys |
| **Notifications** | Firebase Cloud Messaging + Web Push | "You're up next" alerts to guest's phone browser |
| **Analytics** | Firestore aggregation + Cloud Functions | Nightly sales, top songs, busy hours for owner dashboard |

### 8.3 Data Model (Firestore)

```
venues/{venueId}
    name, address, timezone, plan, setupDate
    config: { maxQueuePerTable, fairRotation, hourlyRate }

venues/{venueId}/tables/{tableId}
    label, qrCodeUrl, type (table | room), status (active | closed)

venues/{venueId}/sessions/{sessionId}
    tableId, guestName, phoneNumber?, startTime, endTime?, status
    bill: { items[], total, paid }

venues/{venueId}/songs/{songId}
    title, titleBangla, titleTranslit, artist, language, decade, mood
    referenceFile?, duration

venues/{venueId}/queue/{queueItemId}
    songId, sessionId, guestName, tableId, position, status
    requestedAt, startedAt?, completedAt?, score?

venues/{venueId}/orders/{orderId}
    sessionId, tableId, items[], status (received | preparing | on_the_way | delivered)
    orderedAt, total

venues/{venueId}/menu/{menuItemId}
    name, nameBangla, category, price, photoUrl, soldOut

venues/{venueId}/rooms/{roomId}
    name, capacity, hourlyRate
    bookings: [{ date, startHour, endHour, guestName, deposit, status }]

venues/{venueId}/staff/{staffId}
    name, role (host | bar | desk | owner), pinHash
```

### 8.4 Player Bridge

A lightweight local agent installed on the venue's karaoke PC:

- **Inbound:** Listens for "play song X" commands via WebSocket from the backend
- **Outbound:** Reports "song started", "song ended" events back
- **Scoring:** Captures microphone audio input, runs pitch detection against the reference melody, streams pitch data to the stage screen via local WebSocket
- **Fallback:** If the bridge disconnects, host can manually control the player; queue still works

### 8.5 Real-Time Data Flow

```
Guest queues song --> Firestore write --> onSnapshot listeners fire
    --> Host console updates queue display (< 1 sec)
    --> Guest phone updates position (< 1 sec)

Host taps "Next" --> Cloud Function triggers Player Bridge
    --> Bridge starts song on karaoke player
    --> Stage screen shows singer name + lyrics
    --> Pitch scoring starts streaming to stage screen

Guest places order --> Firestore write --> Bar order board updates (< 1 sec)
    --> Bar updates status --> Guest phone shows status change
```

---

## 9. Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Queue and order updates reach every screen | Under 1 second |
| Guest app load time (mid-range Android, 4G) | Under 3 seconds |
| Offline resilience | Stage keeps playing loaded queue; orders sync on reconnect |
| Bangla text rendering | Correct everywhere (song titles, menu, UI) |
| Data privacy | Bangladesh data/payment rules; no guest data sold or shared |
| Consent | Clips/recordings created only with singer's consent, deleted after 30 days unless saved |
| Concurrent users per venue | Up to 100 guests + 10 staff simultaneously |
| Uptime during venue hours (6 PM - 2 AM) | 99.5% |

---

## 10. Music Licensing

**This is the biggest legal risk in the product.**

Playing songs, showing lyrics, and creating clips with recorded music in public all need rights from the music owners.

**MVP approach:**
- Cookspace does NOT supply or stream songs
- The venue uses its existing licensed library and player
- The contract makes the venue responsible for its licences

**Before adding vocal removal or shareable clips:**
- Get advice from a Bangladeshi copyright lawyer
- Talk to the music labels and the national copyright office about what a venue licence covers

---

## 11. Monetization

### 11.1 Pricing (Starting Points for Pilot)

| Plan | For | What's Included | Indicative Price |
|------|-----|----------------|-----------------|
| **Lounge** | One stage, up to 20 tables | Queue, ordering, scoring, dashboard | Tk 8,000-12,000/month |
| **Rooms** | Private-room venues, up to 10 rooms | Everything in Lounge + room booking and timers | Tk 12,000-20,000/month |
| **Setup** | Any venue | QR codes, menu upload, staff training, player bridge install | One-time Tk 15,000-25,000 |

Prices are starting points to test, not market research. Ask the pilot venue what it spends today on staff time and lost orders.

### 11.2 Revenue Projections (Conservative)

| Milestone | Venues | Monthly Revenue (Low End) |
|-----------|--------|-------------------------|
| Month 1 (Pilot) | 1 | Free pilot |
| Month 3 | 3 | Tk 24,000 - 36,000 |
| Month 6 | 10 | Tk 80,000 - 120,000 |
| Month 12 | 25 | Tk 200,000 - 300,000 |

---

## 12. Milestones and Sprint Plan

### 12.1 High-Level Milestones (from Vanes)

| Milestone | Weeks | Deliverable |
|-----------|-------|-------------|
| 1 | 1-2 | Clickable prototype of guest app and host console; sign one pilot venue |
| 2 | 3-4 | Working queue, search, ordering and order board on test data |
| 3 | 5 | Player bridge and pitch scoring working in the pilot venue |
| 4 | 6 | Live pilot on two busy nights a week |
| 5 | 7-10 | Fix issues, measure against baseline, convert pilot to paid contract |
| 6 | 11-12 | Second and third venue; in-app payment |

### 12.2 Sprint Breakdown

**Sprint 1 (Week 1-2): Foundation + Prototype**

| Task | Owner | Deliverable |
|------|-------|-------------|
| Firebase project setup, Firestore schema, auth | Rabib | Backend foundation |
| PWA scaffold (React + Vite), routing, QR check-in flow | Abu Bakar Siddik | Guest app shell |
| Song search UI + Algolia/Meilisearch integration | Fardin | Search working on test data |
| Host console UI: queue view, drag-to-reorder | Ahnaf | Host console shell |
| Clickable prototype (all screens) | Kallal + team | Prototype for venue pitch |

**Sprint 2 (Week 3-4): Core Features**

| Task | Owner | Deliverable |
|------|-------|-------------|
| Queue logic: fair rotation, position calc, wait estimate | Rabib | Queue engine |
| Real-time queue sync (Firestore onSnapshot) | Abu Bakar Siddik | Live updates |
| Food/drink ordering: menu CRUD, order placement | Fardin | Guest ordering flow |
| Order board: bar/kitchen view with status updates | Ahnaf | Staff order management |
| Web Push notifications ("you're next") | Rabib | Guest alerts |
| Room booking: calendar, timers, extend flow | Abu Bakar Siddik | Room management |

**Sprint 3 (Week 5): Player Bridge + AI**

| Task | Owner | Deliverable |
|------|-------|-------------|
| Player bridge agent (Electron/Node) | Rabib | Local agent on venue PC |
| Pitch scoring integration (CREPE/pYIN) | Rabib + Fardin | Live scoring on stage screen |
| Stage screen UI: lyrics, pitch line, singer name | Ahnaf | Stage display |
| Owner dashboard: nightly stats, top songs | Abu Bakar Siddik | Dashboard v1 |
| Staff admin: roles, PINs, venue config | Fardin | Admin panel |

**Sprint 4 (Week 6): Pilot Launch**

| Task | Owner | Deliverable |
|------|-------|-------------|
| Venue onboarding: QR codes, menu upload, song import | Full team | Pilot venue setup |
| Staff training session | Kallal | Trained staff |
| Bug fixes, performance tuning | Full team | Stable for live nights |
| Live pilot on 2 busy nights | Full team on-site | Real-world validation |

---

## 13. Team and Responsibilities

| Role | Person | Focus Areas |
|------|--------|-------------|
| CPO / Project Director | Kallal Das | Product decisions, venue relationships, prototype, sprint oversight |
| Project Sponsor | Vanes | Vision, business strategy, funding |
| Chief Architect | Rabib | System architecture, Firebase, player bridge, pitch scoring, code review |
| Full-stack Engineer | Abu Bakar Siddik | Guest PWA, real-time sync, room booking, dashboard |
| Full-stack Engineer | Fardin | Search engine, ordering flow, admin panel, pitch scoring |
| Full-stack Engineer | Ahnaf | Host console, order board, stage screen UI |

---

## 14. Risks and Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Music licensing ambiguity | High | High | MVP uses venue's own library; contract puts licence responsibility on venue; consult BD copyright lawyer before clips feature |
| Player bridge compatibility | Medium | High | Survey pilot venue's karaoke software early (week 1); build bridge as thin adapter with hotkey fallback |
| QR scanning in dark/loud rooms | Medium | Medium | High-contrast QR codes, backlit table stands; fallback: staff can add guests manually from console |
| Low guest adoption at pilot | Medium | Medium | Table tent cards explaining the app; host encourages use; first 2 weeks have staff assist guests |
| Bangla text/search issues | Medium | Medium | Test with real Bangla song data from day 1; phonetic transliteration mapping validated with native speakers |
| Internet drops at venue | Low | High | Offline queue buffer on stage PC; orders sync on reconnect; player bridge works locally |
| Firebase costs at scale | Low | Low | Firestore reads optimized with listeners (not polls); evaluate costs at 10+ venues |

---

## 15. Open Questions (from Vanes)

- [x] Which venue is the pilot? **BAGHA Club, House 17, Road 44, Gulshan 2, Dhaka 1212.** International expat club (est. 1979) with existing digital jukebox and karaoke system, restaurant, air-conditioned bar, Wi-Fi. Member-only (EU nationals). We pitch with the prototype.
- [ ] What karaoke software and player does BAGHA Club use today? (Need to confirm on-site)
- [ ] Does the pilot venue hold licences for its song library, and what do they cover?
- [ ] Are guests happy to scan a QR code in a dark, loud room, or do we also need a staff-side request screen?
- [ ] Will venues allow clips to be recorded and shared from their rooms?
- [ ] Which payment provider do we integrate first, bKash or Nagad?

### Additional Questions (from Expanded PRD)

- [ ] What search engine to use? Algolia (hosted, fast, costly) vs Meilisearch (self-hosted, free, needs server)?
- [ ] Does the pilot venue have reliable Wi-Fi, or do we need to factor in a router as part of setup?
- [ ] What is the venue's existing karaoke player software? (Needed to design the player bridge adapter)
- [ ] Should the guest PWA support offline mode, or is connectivity assumed?
- [ ] Clip storage and CDN costs -- who pays? Included in subscription or usage-based?

---

## 16. Wireframe Specs (for Clickable Prototype)

The following screens are needed for the clickable prototype (deliverable for Week 1-2):

### Guest App (Mobile PWA)

| Screen | Key Elements |
|--------|-------------|
| **G1: QR Landing** | Venue logo, "Enter your name" field, "Join" button |
| **G2: Song Search** | Search bar (with mic icon for voice), language tabs (Bangla/Hindi/English), song list with title + artist |
| **G3: Song Detail** | Song title, artist, duration, "Queue This Song" button, estimated wait |
| **G4: Queue Status** | Your songs listed, position number, estimated wait time, "You're next!" alert state |
| **G5: Now Singing** | Song title, live pitch visualization, score counter |
| **G6: Score Card** | Final score /100, song name, share buttons (Facebook, Instagram, copy link) |
| **G7: Menu** | Categories (Drinks, Snacks, Mains), item cards with photo + price + add button |
| **G8: Cart + Order** | Order summary, table/room number, "Place Order" button |
| **G9: Order Status** | Order items with status badges (Received / Preparing / On the way) |
| **G10: Bill** | Itemized bill, total in Tk, "Pay at counter" note |

### Host / KJ Console (Tablet)

| Screen | Key Elements |
|--------|-------------|
| **H1: Queue Board** | Full queue list, drag handles, skip/remove/priority buttons, "Next" action button, current song highlighted |
| **H2: Room Overview** | Grid of rooms with status (occupied/free/ending soon), timer countdown |
| **H3: Announcements** | Singer name + song title ready to display on stage screen |

### Bar / Kitchen Console

| Screen | Key Elements |
|--------|-------------|
| **B1: Order Board** | Kanban columns: New / Preparing / Ready, each card shows items + table/room number |

### Owner Dashboard

| Screen | Key Elements |
|--------|-------------|
| **D1: Tonight** | Live stats: active guests, songs played, orders placed, revenue so far |
| **D2: Analytics** | Charts: revenue by night, top 10 songs, top menu items, peak hours, room utilization |
| **D3: Venue Settings** | Menu management, room config, staff accounts, QR code generator |

### Stage Screen

| Screen | Key Elements |
|--------|-------------|
| **S1: Now Playing** | Song title, artist, singer name, live pitch line visualization, score |
| **S2: Up Next** | Next 3 singers with song names |
| **S3: Idle** | Venue branding, "Scan QR to queue a song" prompt |

---

## Appendix A: Glossary

| Term | Definition |
|------|-----------|
| **KJ** | Karaoke Jockey -- the host who runs the stage |
| **Player bridge** | Local software agent on the venue's karaoke PC that receives commands from the cloud backend |
| **Fair rotation** | Queue algorithm: one song per table in turn, ensuring every table gets equal stage time |
| **PWA** | Progressive Web App -- a web app that can be "installed" on a phone without an app store |
| **Transliterated Bangla** | Bangla words written in English letters (e.g. "amar shonar bangla") |

---

## Appendix B: Reference Documents

- Vanes's original PRD (Oct 17, 2026) -- source of truth for product scope and priorities
- Cookspace existing tech stack: React Native/Expo, Firebase, Claude 3.5 Sonnet API (from Kindred, MatchBD, Munchies apps)
