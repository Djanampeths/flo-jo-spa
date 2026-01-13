# Florence Griffith Joyner - Εφαρμογή Μίας Σελίδας

Μια δυναμικά responsive διαδικτυακή εφαρμογή (SPA) για την Florence Griffith Joyner και τα κατορθώματά της στον κόσμο του στίβου, που χτίστηκε με Node.js, Express και Javascript.

## Χαρακτηριστικά

**Εφαρμογή Μίας Σελίδας (SPA)** - Δυναμική αλλαγή περιεχομένου χωρίς επαναφόρτωση σελίδας  
**Responsive Σχεδίαση** - Βελτιστοποιημένη για desktop, tablet και mobile, με banner, lightbox για θέαση φωτογραφιών  
**Αυθεντικοποίηση** - Σύνδεση διαχειριστή βάσει session με προστατευμένα endpoints  
**CRUD API** - RESTful endpoints για διαχείριση διακρίσεων και συνδέσμων  
**Αποθήκευση σε JSON** - Μόνιμα δεδομένα σε αρχεία JSON

## Τεχνολογική Λύση

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Session:** express-session
- **Δεδομένα:** Αρχεία JSON
- **Responsive:** CSS Grid, Flexbox, Media Queries

## Δομή Φακέλων

```
web/
├── app/
│   ├── index.html          # Κύριο markup SPA
│   ├── css/
│   │   └── style.css       # Όλα τα στυλ (grid, responsive, τυπογραφία)
│   ├── js/
│   │   ├── app.js          # SPA δρομολόγηση και διαχείριση περιεχομένου
│   │   ├── api.js          # Κλήσεις Fetch API για διακρίσεις/συνδέσμους
│   │   └── auth.js         # Σύνδεση/αποσύνδεση και διαχείριση session
│   └── data/
│       ├── achievements.json
│       ├── links.json
│       └── users.json      # Διαπιστευτήρια διαχειριστή
├── server/
│   └── server.js           # Express server με αυθεντικοποίηση & CRUD APIs
├── public/
│   └── images/             # Εικόνες hero banner και σχετικές φωτογραφίες
├── package.json
├── .gitignore
└── README.md
```

## Εγκατάσταση & Ρύθμιση

### Προαπαιτούμενα

- Node.js 14+ εγκατεστημένο
- npm ή yarn

## Σύνδεση Διαχειριστή

- **Όνομα χρήστη:** `admin`
- **Κωδικός πρόσβασης:** `admin123`

Μετά τη σύνδεση, διαχειριστείτε διακρίσεις και συνδέσμους από τον πίνακα διαχείρισης.

## API Endpoints

### Δημόσια Endpoints

- `GET /api/achievements?category=olympics` - Ανάκτηση διακρίσεων ανα κατηγορία
- `GET /api/links?category=videos` - Ανάκτηση συνδέσμων ανα κατηγορία

### Προστατευμένα Endpoints (μόνο διαχειριστής)

- `POST /api/achievements` - Δημιουργία νέας διάκρισης
- `POST /api/links` - Δημιουργία νέου συνδέσμου
- `PUT /api/achievements/:id` - Ενημέρωση διάκρισης
- `PUT /api/links/:id` - Ενημέρωση συνδέσμου
- `DELETE /api/achievements/:id` - Διαγραφή διάκρισης
- `DELETE /api/links/:id` - Διαγραφή συνδέσμου
- `POST /api/login` - Σύνδεση (ορίζει συνόδο)
- `POST /api/logout` - Αποσύνδεση (καταστρέφει συνόδο)

## Ανάρτηση στο διαδίκτυο

### Με codesandbox

## Χαρακτηριστικά & Λεπτομέρειες

### Αρχιτεκτονική SPA

- Δυναμική εναλλαγή σελίδας μέσω JavaScript (χωρίς server redirects)
- Ορατότητα πλευρικού μενού ανάλογα με την επιλογή κύριου μενού
- Hero banner με responsive overlay text

### Διαχείριση Διαχειριστή

- Αυθεντικοποίηση βάσει συνόδου (express-session)
- Προστασία server-side routes με `ensureAdmin` middleware
- Φόρμες για προσθήκη/επεξεργασία/διαγραφή διακρίσεων και συνδέσμων
- Αρχεία JSON ενημερώνονται αυτόματα σε mutations

### Responsive Σχεδίαση

- Mobile-first προσέγγιση με media queries στα 900px, 520px, 360px breakpoints
- Hero banner κλιμακώνεται responsively (ελάχιστο 150px έως 420px ύψος)
- Grid layout εναλλάσσεται από sidebar+main σε stacked mode σε mobile

## Άδεια

Open source – μπορείτε ελεύθερα να το χρησιμοποιήσετε και να το τροποποιήσετε.

## Συγγραφέας

Ανδρέας Παναγόπουλος, Προπτυχιακός Φοιτητής Πληροφορικής Και Τηλεπικοινωνιών στο Πανεπιστήμιο Θεσσαλίας
