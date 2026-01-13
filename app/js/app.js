const mainContent = document.getElementById("content");
const sideMenus = document.querySelectorAll(".side-menu");
const navItems = document.querySelectorAll("nav ul li");

let isInitialLoad = true;

// Εμφάνιση της αρχικής σελίδας (βιογραφία)
showPage("bio");

// Χειρισμός κλικ στο κύριο πλοηγικό μενού
navItems.forEach(item => {
    item.addEventListener("click", () => {
        const page = item.dataset.page;
        showPage(page);
    });
});

// Εμφάνιση της επιλεγμένης κύριας σελίδας
function showPage(page) {
    hideAllSideMenus();

    const activeMenu = document.getElementById(`${page}-menu`);
    if (activeMenu) {
        activeMenu.classList.remove("hidden");
    }

    const includeLead = isInitialLoad && page === "bio";
    loadDefaultContent(page, includeLead);

    isInitialLoad = false;
}

// Απόκρυψη όλων των πλευρικών μενού
function hideAllSideMenus() {
    sideMenus.forEach(menu => {
        menu.classList.add("hidden");
    });
}

// Φόρτωση προεπιλεγμένου περιεχομένου για κάθε κύρια ενότητα
function loadDefaultContent(page, includeLead = false) {
    switch (page) {
        case "bio":
            loadBiography("early", includeLead);
            break;
        case "photos":
            loadPhotoGallery("seoul");
            break;
        case "achievements":
            mainContent.innerHTML = "<h2>Διακρίσεις</h2><p>Επιλέξτε μια κατηγορία από το μενού για να δείτε τις διακρίσεις.</p>";
            break;
        case "links":
            mainContent.innerHTML = "<h2>Σύνδεσμοι</h2><p>Επιλέξτε μια κατηγορία από το μενού για να δείτε τους συνδέσμους.</p>";
            break;
        case "mgmt":
            mainContent.innerHTML = "<h2>Διαχείρηση</h2><p>Επιλέξτε μια ενέργεια από το μενού διαχείρισης.</p>";
            break;
    }
}

document.querySelectorAll("aside li").forEach(item => {
    item.addEventListener("click", () => {
        const section = item.dataset.section;
        const parentMenu = item.closest(".side-menu").id;
        handleSideMenu(parentMenu, section);
    });
});

function handleSideMenu(menuid, section) {
    switch (menuid) {
        case "bio-menu":
            loadBiography(section, false);
            break;
        case "photos-menu":
            loadPhotoGallery(section);
            break;
        case "achievements-menu":
            loadAchievements(section);
            break;
        case "links-menu":
            loadLinks(section);
            break;
        case "mgmt-menu":
            loadMgmt(section)
            break;
    }
}

// Φόρτωση βιογραφίας της Florence Griffith Joyner
function loadBiography(section, includeLead = false) {
    const lead = includeLead ? `
        <p class="lead">
            Η Florence Griffith Joyner (Flo-Jo) ήταν μία από τις πιο εμβληματικές σπρίντερ στην ιστορία του στίβου, γνωστή
            για την ταχύτητα της που έσπασε κάθε ρεκόρ και το αδιαμφισβήτητο στυλ της. Ακολουθούν τα σημαντικότερα γεγονότα της ζωής και της καριέρας της.
        </p>
    ` : "";

    let content = "";

    if (section === "early") {
        content = `
            <h2>Πρώτα Χρόνια</h2>
            ${lead}
            <p>
                Η Florence Joyner, γνωστή ως «Flo Jo», γεννήθηκε ως Florence Delorez Griffith στις 21 Δεκεμβρίου 1959 στο Λος Άντζελες. Άρχισε να τρέχει σε ηλικία 7 ετών και το ταλέντο της στην ταχύτητα γρήγορα έγινε εμφανές. 
                Σε ηλικία 14 ετών, κέρδισε τους Εθνικούς Αγώνες Νέων Jesse Owens. Αργότερα αγωνίστηκε για το Λύκειο Jordan, όπου ήταν η τελευταία δρομέας της ομάδας σκυταλοδρομίας, και στη συνέχεια συνέχισε να αγωνίζεται σε επίπεδο κολεγίου.
            </p>

            <p>
                Φοίτησε στο California State University στο Northridge και έτρεξε για την ομάδα στίβου του πανεπιστημίου υπό την καθοδήγηση του προπονητή Bob Kersee, ο οποίος συνέχισε να την προπονεί για αρκετά χρόνια. 
                Έφυγε από το πανεπιστήμιο για οικονομικούς λόγους, αλλά το 1980, εγγράφηκε στο University of California Los Angeles, όπου ο Kersee είχε πρόσφατα δεχτεί μια θέση ως βοηθός προπονητή στίβου. 
                Γρήγορα απέκτησε φήμη ως αστέρι του στίβου. Το 1982, κατέκτησε τον τίτλο της πρωταθλήτριας NCAA με νίκη στα 200 μέτρα. Την επόμενη χρονιά, κατέκτησε την πρώτη θέση στα 400 μέτρα. Αποφοίτησε το 1983 με πτυχίο ψυχολογίας.
            </p>

            <p>
                Η προσωπική της αισθητική (μακριά νύχια, τολμηρά χτενίσματα και έντονα χρώματα) έγινε αναγνωρίσιμη
                και μέρος της δημόσιας εικόνας της.
            </p>
        `;
    } 
    else if (section === "career") {
        content = `
            <h2>Αθλητική Καριέρα</h2>
            ${lead}
            <p>
                Με προπονητή τον Bob Kersee, η Joyner έκανε το ολυμπιακό της ντεμπούτο το 1984, στους Θερινούς Ολυμπιακούς Αγώνες του Λος Άντζελες. 
                Εκεί, κέρδισε ασημένιο μετάλλιο στα 200 μέτρα και έγινε γνωστή για την ταχύτητά της, τα κολλητά κορμάκια της και τα έντονα βαμμένα νύχια της, μήκους 15 εκατοστών.
            </p>
            
            <p>
                Μετά τους Ολυμπιακούς Αγώνες του 1984, η Joyner αποσύρθηκε εν μέρει, αλλά επέστρεψε στον στίβο πριν από τους Ολυμπιακούς Αγώνες του 1988 και ξαναρχισε την προπόνηση. 
                Κατά τη διάρκεια αυτής της περιόδου, η Flo Jo προπονούταν τόσο με τον Kersee όσο και με τον σύζυγό της, Al. Η σκληρή δουλειά της Joyner απέδωσε καρπούς. 
                Στις αμερικανικές προκριματικές για τους Ολυμπιακούς Αγώνες του 1988 στην Ινδιανάπολη, έθεσε νέο παγκόσμιο ρεκόρ γυναικών στα 100 μέτρα με χρόνο 10,49 δευτερόλεπτα. 
                Λίγο αργότερα, αποχώρησε από τον Kersee και επέλεξε τον σύζυγό της ως πλήρη προπονητή της.
            </p>

            <p>
                Στους Θερινούς Ολυμπιακούς Αγώνες του 1988, που πραγματοποιήθηκαν στη Σεούλ της Νότιας Κορέας, κέρδισε χρυσά μετάλλια στα 4x100 μέτρα σκυταλοδρομία και στα 100 και 200 μέτρα, 
                καθώς και ασημένιο μετάλλιο στα 4x400 μέτρα σκυταλοδρομία. Επίσης, έθεσε παγκόσμιο ρεκόρ στα 200 μέτρα με χρόνο 21,34 δευτερόλεπτα.
            </p>
        `;
    }
    else if (section === "personal") {
        content = `
            <h2>Προσωπική Ζωή</h2>
            ${lead}
            <p>
                Η Flo-Jo συνέχισε να ασχολείται με τον αθλητισμό και μετά την αποχώρησή της. Το 1993 διορίστηκε συμπρόεδρος του Προεδρικού Συμβουλίου για τη Φυσική Κατάσταση και στη συνέχεια ίδρυσε το δικό της ίδρυμα 
                για παιδιά σε ανάγκη. Σχεδόν έξι χρόνια μετά τους Ολυμπιακούς Αγώνες της Σεούλ, το 1995, η Τζόινερ τιμήθηκε με την ένταξή της στο Hall of Fame του στίβου. Περίπου την ίδια περίοδο, άρχισε και πάλι 
                να προπονείται για τους Ολυμπιακούς Αγώνες. Ωστόσο, η προσπάθειά της για επιστροφή σταδιακά περιορίστηκε λόγω προβλημάτων με τον δεξιό της αχίλλειο τένοντα.
            </p>

            <p>
                Ασχολήθηκε επίσης με δημιουργικές δραστηριότητες, όπως η υποκριτική. Το 1989, η γνωστή ιέρεια της μόδας προσλήφθηκε για να σχεδιάσει τις στολές της ομάδας μπάσκετ Indiana Pacers. 
                Οι Pacers χρησιμοποίησαν το σχέδιό της για επτά σεζόν, που συνέπεσε με την άνοδο της ομάδας στην κορυφή στις αρχές και στα μέσα της δεκαετίας του '90.
            </p>

            <p>
                Το 1987, η Florence παντρεύτηκε τον Al Joyner, τον χρυσό Ολυμπιονίκη του τριπλού άλματος του 1984 και αδελφό της διάσημης αθλήτριας Jackie Joyner-Kersee. Με το νόμιμο όνομα Florence Delorez Griffith-Joyner, 
                έγινε γνωστή στο κοινό ως Florence Joyner, ή «Flo Jo», εκείνη την εποχή.
            </p>
                
            <p>
                Η Flo-Jo απεβίωσε απροσδόκητα από επιληπτική κρίση στις 21 Σεπτεμβρίου 1998, στο σπίτι της στο Mission Viejo της Καλιφόρνια. 
                Ήταν μόλις 38 ετών και άφησε πίσω τον σύζυγό της, Al, και την κόρη τους, Mary Joyner.
            </p>
            
            <p>
                Το έργο και η κληρονομιά της συνεχίζουν να επηρεάζουν τον αθλητισμό και την κουλτούρα.
            </p>
        `;
    }

    mainContent.innerHTML = content;
}

// Φωτογραφίες της Florence Griffith Joyner ανά κατηγορία
const galleryImages = {
    seoul: [
        { src: "/images/florence_griffith_joyner_1.webp", caption: "Η Florence στην κορυφή της δύναμής της κατά τους Ολυμπιακούς Αγώνες της Σεούλ 1988" },
        { src: "/images/florence_griffith_joyner_2.webp", caption: "Ιστορική στιγμή που παρουσιάζει το διακριτικό της αθλητικό στυλ" },
        { src: "/images/florence_griffith_joyner_4.webp", caption: "Τα μετάλλια που κέρδισε η Flo-Jo στη Σεούλ με την ιστορική προσπάθειά της" }
    ],
    competitions: [
        { src: "/images/florence-griffith-joyner-fast-and-flashy.jpg", caption: "Γρήγορη και Λαμπερή: Το χαρακτηριστικό στυλ της Florence στον στίβο" },
        { src: "/images/florence-griffith-joyner-sprints.jpg", caption: "Στη μέση του σπριντ με πλήρη επιτάχυνση, επιδεικνύοντας τη ταχύτητά της που έσπασε παγκόσμια ρεκόρ" },
        { src: "/images/griffith-joyner-team-usa-rome-1987.jpg", caption: "Ομάδα ΗΠΑ 1987 Ρώμη – εκπροσωπώντας τις Ηνωμένες Πολιτείες στο παγκόσμιο θέατρο" }
    ],
    awards: [
        { src: "/images/1988_Florence-Joyner.jpg", caption: "Εξώφυλλο του Time Magazine που τιμά την Florence Griffith Joyner ως μια από τις σημαντικότερες γυναικείες προσωπικότητες του 20ού αιώνα" },
        { src: "/images/flojostatue.jpg", caption: "Μία από τις μεγαλύτερες αθλήτριες όλων των εποχών – η κληρονομιά της παραμένει" },
        { src: "/images/flo-jo-podium-1988.jpg", caption: "Η Florence στο πόντιουμ των Ολυμπιακών Αγώνων της Σεούλ 1988, μετά του παγκοσμίου ρεκόρ της" }
    ]
};

// Φόρτωση φωτογραφιών με lightbox
function loadPhotoGallery(section) {
    const images = galleryImages[section] || galleryImages.seoul;
    let html = `<h2>Φωτογραφίες - ${section}</h2><div class="photos-container">`;
    images.forEach((image, i) => {
        html += `
            <figure class="photo">
                <img src="${image.src}" alt="${image.caption}" data-section="${section}" data-index="${i}">
                <figcaption>${image.caption}</figcaption>
            </figure>
        `;
    });
    html += `</div>`;
    mainContent.innerHTML = html;

    // Προσθήκη ακροατών κλικ για άνοιγμα του lightbox
    const imgs = mainContent.querySelectorAll('.photo img');
    imgs.forEach(img => {
        img.addEventListener('click', (e) => {
            const sec = e.currentTarget.dataset.section;
            const idx = Number(e.currentTarget.dataset.index);
            openLightbox(sec, idx);
        });
    });
}

// Φόρτωση διακρίσεων ανά κατηγορία
function loadAchievements(section) {
    mainContent.innerHTML = `
        <h2>Διακρίσεις - ${section}</h2>
        <p>Περιεχόμενο διακρίσεων για την κατηγορία: ${section}.</p>
    `;
}

// Λειτουγικότητα lightbox για την προβολή εικόνων
let _lightbox = null;
let _lbSection = null;
let _lbIndex = 0;

function initLightbox() {
    if (document.querySelector('.lightbox-overlay')) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    overlay.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-prev" aria-label="Previous">◀</button>
            <img src="" alt="" class="lightbox-image">
            <button class="lightbox-next" aria-label="Next">▶</button>
        </div>
        <div class="lightbox-caption" role="status"></div>
        <button class="lightbox-close" aria-label="Close">✕</button>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });

    overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    overlay.querySelector('.lightbox-prev').addEventListener('click', () => changeImage(-1));
    overlay.querySelector('.lightbox-next').addEventListener('click', () => changeImage(1));

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'ArrowLeft') changeImage(-1);
    });

    _lightbox = overlay;
}

function openLightbox(section, index) {
    initLightbox();
    _lbSection = section;
    _lbIndex = index;
    renderLightbox();
    _lightbox.classList.add('active');
}

function closeLightbox() {
    if (!_lightbox) return;
    _lightbox.classList.remove('active');
}

function changeImage(delta) {
    const images = galleryImages[_lbSection] || galleryImages.seoul;
    _lbIndex = (_lbIndex + delta + images.length) % images.length;
    renderLightbox();
}

function renderLightbox() {
    if (!_lightbox) return;
    const images = galleryImages[_lbSection] || galleryImages.seoul;
    const item = images[_lbIndex];
    const imgEl = _lightbox.querySelector('.lightbox-image');
    const captionEl = _lightbox.querySelector('.lightbox-caption');
    imgEl.src = item.src;
    imgEl.alt = item.caption || '';
    captionEl.textContent = item.caption || '';
}

// Αρχικοποίηση lightbox κατά τη φόρτωση της σελίδας
document.addEventListener('DOMContentLoaded', initLightbox);

// Φόρτωση συνδέσμων ανά κατηγορία
function loadLinks(section) {
    mainContent.innerHTML = `
        <h2>Σύνδεσμοι - ${section}</h2>
        <p>Περιεχόμενο συνδέσμων για την κατηγορία: ${section}.</p>
    `;
}

// Φόρτωση σελίδας διαχείρισης
function loadMgmt(section) {
    if (typeof handleAdminAction === "function") {
        handleAdminAction(section);
    }

    if (section === "login") {
        mainContent.innerHTML = `
        <h2>Σύνδεση Διαχειριστή</h2>
        <form id="loginForm">
            <input name="username" type="text" placeholder="Όνομα χρήστη" required><br><br>
            <input name="password" type="password" placeholder="Κωδικός" required><br><br>
            <button type="submit">Σύνδεση</button>
        </form>
        `;
    }

    if (section === "logout") {
        if (typeof logout === "function") logout();
    }

    if (section === "manage-achievements") {
        mainContent.innerHTML = `
            <h2>Διαχείριση Διακρίσεων</h2>

            <form id="achievementForm">
            <input name="year" type="number" placeholder="Έτος" required>
            <input name="event" type="text" placeholder="Διοργάνωση" required>
            <input name="discipline" type="text" placeholder="Αγώνισμα" required>
            <input name="place" type="text" placeholder="Θέση" required>
            <select name="category">
                <option value="olympics">Ολυμπιακοί</option>
                <option value="world">Παγκόσμιο</option>
            </select>
            <button type="submit">Προσθήκη</button>
            </form>

            <div id="adminAchievements"></div>
        `;

        loadAdminAchievements();
    }

    if (section === "manage-links") {
        mainContent.innerHTML = `
            <h2>Διαχείριση Συνδέσμων</h2>

            <form id="linkForm">
            <input name="title" type="text" placeholder="Τίτλος" required>
            <input name="description" type="text" placeholder="Περιγραφή" required>
            <input name="url" type="url" placeholder="URL" required>
            <select name="category">
                <option value="videos">Βίντεο</option>
                <option value="interviews">Συνεντεύξεις</option>
                <option value="websites">Ιστοσελίδες</option>
            </select>
            <button type="submit">Προσθήκη</button>
            </form>

            <div id="adminLinks"></div>
        `;

        loadAdminLinks();
    }
}
