# Florence Griffith Joyner - Single Page Application

A responsive single-page application (SPA) built with Node.js, Express, and vanilla JavaScript, featuring Florence Griffith Joyner's biography, achievements, and media.

## Features

✅ **Single Page Application (SPA)** - Dynamic content changes without page reloads  
✅ **Responsive Design** - Desktop, tablet, and mobile optimized  
✅ **Authentication** - Session-based admin login with protected endpoints  
✅ **CRUD API** - RESTful endpoints for achievements and links management  
✅ **JSON Data Storage** - Persistent data in JSON files  
✅ **Athletic Typography** - Oswald & Roboto fonts for premium feel  
✅ **Hero Banner** - Full-screen responsive image overlay with text  

## Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Backend:** Node.js, Express.js
- **Sessions:** express-session
- **Data:** JSON files
- **Responsive:** CSS Grid, Flexbox, Media Queries

## Project Structure

```
web/
├── app/
│   ├── index.html          # Main SPA markup
│   ├── css/
│   │   └── style.css       # All styles (grid, responsive, typography)
│   ├── js/
│   │   ├── app.js          # SPA routing and content management
│   │   ├── api.js          # Fetch API calls for achievements/links
│   │   └── auth.js         # Login/logout and session handling
│   └── data/
│       ├── achievements.json
│       ├── links.json
│       └── users.json      # Admin credentials
├── server/
│   └── server.js           # Express server with auth & CRUD APIs
├── public/
│   └── images/             # Hero banner and gallery images
├── package.json
├── .gitignore
└── README.md
```

## Setup & Installation

### Prerequisites
- Node.js 14+ installed
- npm or yarn

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/YOUR_USERNAME/florence-griffith-joyner.git
cd florence-griffith-joyner
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
npm start
# or
node server/server.js
```

4. **Open in browser:**
```
http://localhost:3000
```

## Admin Login

- **Username:** `admin`
- **Password:** `admin123`

After login, manage achievements and links from the admin panel.

## API Endpoints

### Public Endpoints
- `GET /api/achievements?category=olympics` - Fetch achievements by category
- `GET /api/links?category=videos` - Fetch links by category

### Protected Endpoints (admin only)
- `POST /api/achievements` - Create new achievement
- `POST /api/links` - Create new link
- `PUT /api/achievements/:id` - Update achievement
- `PUT /api/links/:id` - Update link
- `DELETE /api/achievements/:id` - Delete achievement
- `DELETE /api/links/:id` - Delete link
- `POST /api/login` - Login (sets session)
- `POST /api/logout` - Logout (destroys session)

## Deployment

### Option 1: Deploy to Cyclic.sh (Recommended for Node.js)

1. **Push to GitHub** (see "Push to GitHub" below)
2. Go to [cyclic.sh](https://cyclic.sh)
3. Click "Link your Repo"
4. Authorize GitHub and select your repository
5. Cyclic auto-detects Node.js and deploys
6. Your app is live! 🎉

### Option 2: Deploy to Vercel

1. **Push to GitHub**
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Live in seconds ✨

### Option 3: Deploy to Railway.app

1. **Push to GitHub**
2. Go to [railway.app](https://railway.app)
3. Click "New Project" → "Deploy from GitHub"
4. Select your repo
5. Railway automatically detects and runs `npm start`

## Push to GitHub

### 1. Create GitHub Repository

Go to [github.com/new](https://github.com/new) and create a public repository named `florence-griffith-joyner`.

### 2. Initialize & Push Locally

```bash
# Navigate to project folder
cd c:\Users\billa\OneDrive\Desktop\web

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: SPA with admin auth and CRUD APIs"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/florence-griffith-joyner.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Verify on GitHub

Visit `https://github.com/YOUR_USERNAME/florence-griffith-joyner` to confirm all files are uploaded.

## Features in Detail

### SPA Architecture
- Dynamic page switching via JavaScript (no server redirects)
- Side menu visibility toggled per top-menu selection
- Hero banner with responsive overlay text

### Admin Management
- Session-based authentication (express-session)
- Server-side route protection with `ensureAdmin` middleware
- Forms for adding/editing/deleting achievements and links
- JSON files auto-update on mutations

### Responsive Design
- Mobile-first approach with media queries at 900px, 520px, 360px breakpoints
- Hero banner scales responsively (min 150px to 420px height)
- Grid layout switches from sidebar+main to stacked on mobile

## Troubleshooting

**Port 3000 already in use?**
```bash
# Change port in server.js or run on different port
PORT=3001 npm start
```

**Session not persisting?**
- Ensure cookies are enabled in browser
- Check that credentials: 'same-origin' is in fetch calls

**Images not loading after deploy?**
- Verify `public/images/` files are committed to GitHub
- Check image paths are absolute (e.g., `/images/photo.jpg`)

## Future Enhancements

- [ ] Database (MongoDB/PostgreSQL) instead of JSON files
- [ ] Admin password hashing (bcrypt)
- [ ] User registration
- [ ] Photo upload feature
- [ ] Search/filter functionality
- [ ] Dark mode toggle
- [ ] Multi-language support

## License

Open source – feel free to use and modify.

## Author

Created for a web development course project showcasing SPA, REST APIs, and responsive design.

---

**Ready to deploy?** Follow the "Deployment" section above and share your live link! 🚀
