const API_BASE = "/api";

function loadAchievements(category) {
    fetch(`${API_BASE}/achievements?category=${category}`)
        .then(response => response.json())
        .then(data => renderAchievementsTable(data, category))
        .catch(error => console.error('Σφάλμα κατά τη φόρτωση των διακρίσεων:', error));
}

function renderAchievementsTable(achievements, category) {
    let html = `
        <h2>Διακρίσεις - ${getCategoryTitle(category)}</h2>
        <table border="1" cellpadding="8">
            <tr>
                <th>Έτος</th>
                <th>Διοργάνωση</th>
                <th>Αγώνισμα</th>
                <th>Θέση</th>
            </tr>
    `;
    achievements.forEach(achievement => {
        html += `
          <tr>
            <td>${achievement.year}</td>
            <td>${achievement.event}</td>
            <td>${achievement.discipline}</td>
            <td>${achievement.place}</td>
          </tr>
        `;
    });
    html += `</table>`;
    mainContent.innerHTML = html;
}

function loadLinks(category) {
    fetch(`${API_BASE}/links?category=${category}`)
        .then(response => response.json())
        .then(data => renderLinksTable(data, category))
        .catch(error => console.error('Σφάλμα κατά τη φόρτωση των συνδέσμων:', error));
}

function renderLinksTable(links, category) {
    let html = `
        <h2>Σύνδεσμοι - ${getCategoryTitle(category)}</h2>
        <table border="1" cellpadding="8">
            <tr>
                <th>Τίτλος</th>
                <th>Περιγραφή</th>
                <th>Σύνδεσμος</th>
            </tr>
    `;
    links.forEach(link => {
        html += `
            <tr>
                <td>${link.title}</td>
                <td>${link.description}</td>
                <td><a href="${link.url}" target="_blank">Άνοιγμα</a></td>
            </tr>
        `;
    });
    html += `</table>`;
    mainContent.innerHTML = html;
}

function getCategoryTitle(category) {
    const titles = {
        olympics: "Ολυμπιακοί Αγώνες",
        world: "Παγκόσμια Πρωταθλήματα",
        european: "Άλλες Διοργανώσεις",
        videos: "Βίντεο",
        interviews: "Συνεντεύξεις",
        websites: "Ιστοσελίδες"
    };
    return titles[category] || category;
}
document.addEventListener("submit", function (e) {
  if (e.target.id === "achievementForm") {
    e.preventDefault();

    const inputs = e.target.querySelectorAll("input, select");

    const data = {
      year: inputs[0].value,
      event: inputs[1].value,
      discipline: inputs[2].value,
      place: inputs[3].value,
      category: inputs[4].value
    };

    fetch("/api/achievements", {
      method: "POST",
      credentials: 'same-origin',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) { alert('Δεν έχετε δικαίωμα ή υπήρξε σφάλμα.'); }
        return res.json().catch(()=>{});
      })
      .then(() => loadAdminAchievements());
  }

  if (e.target.id === "linkForm") {
    e.preventDefault();

    const inputs = e.target.querySelectorAll("input, select");

    const data = {
      title: inputs[0].value,
      description: inputs[1].value,
      url: inputs[2].value,
      category: inputs[3].value
    };

    fetch("/api/links", {
      method: "POST",
      credentials: 'same-origin',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (!res.ok) { alert('Δεν έχετε δικαίωμα ή υπήρξε σφάλμα.'); }
        return res.json().catch(()=>{});
      })
      .then(() => loadAdminLinks());
  }
});

function loadAdminAchievements() {
  fetch("/api/achievements")
    .then(res => res.json())
    .then(data => {
      let html = "<h3>Υπάρχουσες Διακρίσεις</h3><ul>";

      data.forEach(a => {
        html += `
          <li>
            ${a.year} – ${a.event} (${a.discipline})
            <button onclick="deleteAchievement(${a.id})">Διαγραφή</button>
          </li>
        `;
      });

      html += "</ul>";
      document.getElementById("adminAchievements").innerHTML = html;
    });
}

function deleteAchievement(id) {
  fetch(`/api/achievements/${id}`, {
    method: "DELETE",
    credentials: 'same-origin'
  }).then(() => loadAdminAchievements());
}

function loadAdminLinks() {
  fetch("/api/links")
    .then(res => res.json())
    .then(data => {
      let html = "<h3>Υπάρχοντες Σύνδεσμοι</h3><ul>";

      data.forEach(l => {
        html += `
          <li>
            <strong>${l.title}</strong> (${l.category})
            <button onclick="deleteLink(${l.id})">Διαγραφή</button>
          </li>
        `;
      });

      html += "</ul>";
      document.getElementById("adminLinks").innerHTML = html;
    });
}

function deleteLink(id) {
  fetch(`/api/links/${id}`, {
    method: "DELETE",
    credentials: 'same-origin'
  }).then(() => loadAdminLinks());
}