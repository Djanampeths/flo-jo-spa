const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(session({
  secret: 'replace_this_with_a_secure_random_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(express.static(path.join(__dirname, '../app')));
app.use(express.static(path.join(__dirname, '../public')));

function readJSON(fileName) {
    const filePath = path.join(__dirname, '../app/data', fileName);
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

function writeJSON(fileName, data) {
  const filePath = path.join(__dirname, '../app/data', fileName);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}


app.get("/api/achievements", (req, res) => {
    const category = req.query.category;
    let achievements = readJSON("achievements.json");

    if (category) {
        achievements = achievements.filter(a => a.category === category);
    }

    res.json(achievements);
});

app.get("/api/links", (req, res) => {
    const category = req.query.category;
    let links = readJSON("links.json");

    if (category) {
        links = links.filter(l => l.category === category);
    }

    res.json(links);
});

app.post("/api/links", ensureAdmin, (req, res) => {
  const links = readJSON("links.json");

  const newLink = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    category: req.body.category
  };

  links.push(newLink);
  writeJSON("links.json", links);

  res.json({ success: true });
});

app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    const users = readJSON("users.json");
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = { username: user.username, role: user.role };
        res.json({ success: true, role: user.role });
    } else {
        res.status(401).json({ success: false });
    }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ success: false });
    res.json({ success: true });
  });
});

function ensureAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'admin') return next();
  return res.status(403).json({ success: false, message: 'Forbidden' });
}

app.post("/api/achievements", ensureAdmin, (req, res) => {
  const achievements = readJSON("achievements.json");

  const newAchievement = {
    id: Date.now(),
    year: req.body.year,
    event: req.body.event,
    discipline: req.body.discipline,
    place: req.body.place,
    category: req.body.category
  };

  achievements.push(newAchievement);
  writeJSON("achievements.json", achievements);

  res.json({ success: true });
});

app.put("/api/achievements/:id", ensureAdmin, (req, res) => {
  let achievements = readJSON("achievements.json");
  const id = Number(req.params.id);

  achievements = achievements.map(a =>
    a.id === id ? { ...a, ...req.body } : a
  );

  writeJSON("achievements.json", achievements);
  res.json({ success: true });
});

app.put("/api/links/:id", ensureAdmin, (req, res) => {
  const id = Number(req.params.id);
  let links = readJSON("links.json");

  links = links.map(l =>
    l.id === id ? { ...l, ...req.body } : l
  );

  writeJSON("links.json", links);
  res.json({ success: true });
});

app.delete("/api/links/:id", ensureAdmin, (req, res) => {
  const id = Number(req.params.id);
  let links = readJSON("links.json");

  links = links.filter(l => l.id !== id);

  writeJSON("links.json", links);
  res.json({ success: true });
});

app.delete("/api/achievements/:id", ensureAdmin, (req, res) => {
  let achievements = readJSON("achievements.json");
  const id = Number(req.params.id);

  achievements = achievements.filter(a => a.id !== id);

  writeJSON("achievements.json", achievements);
  res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
