// Ανάκτηση όλων των κουμπιών του κεντρικού μενού
const navLinks = document.querySelectorAll("nav ul li a");

// Ανάκτηση όλων των υπομενού
const submenus = document.querySelectorAll(".submenu");

// Προσθήκη Event Listeners στα κουμπιά του κεντρικού μενού
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); // Αποτροπή ανανέωσης της σελίδας

    // Απόκρυψη όλων των υπομενού
    submenus.forEach(menu => menu.classList.remove("active"));

    // Εμφάνιση του σχετικού υπομενού
    const target = link.getAttribute("href").replace("#", "submenu-");
    const submenu = document.getElementById(target);
    if (submenu) {
      submenu.classList.add("active");
    }
  });
});



// Επιλογή όλων των links στο aside που έχουν data-target
const asideLinks = document.querySelectorAll('aside a');

// Προσθήκη event listener σε κάθε link
asideLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Αποφυγή ανανέωσης της σελίδας

    // Απόκρυψη όλων των περιεχομένων στο main
    const mainContent = document.querySelectorAll('main .content');
    mainContent.forEach(content => content.classList.remove('active'));

    // Εύρεση του target περιεχομένου από το data-target
    const targetId = this.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);

    // Εμφάνιση του target περιεχομένου
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

 
  
