let isLoggedIn = false;

// Διαχείριση φόρμας σύνδεσης
document.addEventListener("submit", function (e) {
  if (e.target && e.target.id === "loginForm") {
    e.preventDefault();

    const username = e.target.querySelector('input[type="text"]').value;
    const password = e.target.querySelector('input[type="password"]').value;

    fetch("/api/login", {
      method: "POST",
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => {
        if (!res.ok) throw new Error("Λάθος στοιχεία");
        return res.json();
      })
      .then(data => {
        isLoggedIn = true;
        updateAdminMenu();
        showLoginSuccess();
      })
      .catch(() => {
        alert("Λάθος όνομα χρήστη ή κωδικός");
      });
  }
});

// Συνάρτηση αποσύνδεσης χρήστη
function logout() {
  fetch('/api/logout', { method: 'POST', credentials: 'same-origin' })
    .then(() => {
      isLoggedIn = false;
      updateAdminMenu();

      document.getElementById("content").innerHTML = `
        <h2>Αποσύνδεση</h2>
        <p>Αποσυνδεθήκατε με επιτυχία.</p>
      `;
    })
    .catch(() => {
      isLoggedIn = false;
      updateAdminMenu();
    });
}

// Ενημέρωση του μενού διαχείρισης ανάλογα με την κατάσταση σύνδεσης
function updateAdminMenu() {
  const adminMenu = document.getElementById("mgmt-menu");
  const items = adminMenu.querySelectorAll("li");

  items.forEach(item => {
    const section = item.dataset.section;

    if (
      section === "manage-achievements" ||
      section === "manage-links" ||
      section === "logout"
    ) {
      item.style.display = isLoggedIn ? "block" : "none";
    }

    if (section === "login") {
      item.style.display = isLoggedIn ? "none" : "block";
    }
  });
}

// Εμφάνιση μηνύματος επιτυχούς σύνδεσης
function showLoginSuccess() {
  document.getElementById("content").innerHTML = `
    <h2>Επιτυχής σύνδεση</h2>
    <p>Καλώς ήρθατε στη διαχείριση της εφαρμογής.</p>
  `;
}

// Χειρισμός ενεργειών διαχείρισης
function handleAdminAction(section) {
  if (section === "logout") {
    logout();
    return;
  }

  if (!isLoggedIn && section !== "login") {
    alert("Πρέπει να συνδεθείτε ως διαχειριστής.");
    return;
  }
}
