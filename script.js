 // Initialisation AOS
 AOS.init({
    duration: 1000,
    once: true
});

// Validation du formulaire
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const nom = document.getElementById('nom');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let isValid = true;

    // Validation du nom
    if (!nom.value.trim()) {
        nom.classList.add('is-invalid');
        isValid = false;
    } else {
        nom.classList.remove('is-invalid');
        nom.classList.add('is-valid');
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    // Validation du message
    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        isValid = false;
    } else {
        message.classList.remove('is-invalid');
        message.classList.add('is-valid');
    }

    // Si le formulaire est valide
    if (isValid) {
        // Afficher le message de succès
        document.getElementById('successMessage').classList.remove('d-none');
        form.reset();
        document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
    }
});
/////////////////////:
// Initialize AOS.js
AOS.init({
    duration: 1000,  // Animation duration
    easing: 'ease-in-out',  // Easing function
});

// Dynamic interaction with jQuery
// Initialiser AOS.js
AOS.init({
    duration: 1200,  // Durée de l'animation en millisecondes
    easing: 'ease-in-out',  // Type d'animation
    once: true,  // Animation uniquement la première fois
});

// Fonction pour la réservation dynamique
function bookSession() {
    var bookingDate = $("#bookingDate").val();
    var bookingTime = $("#bookingTime").val();

    if (bookingDate && bookingTime) {
        alert("Votre session a été réservée pour le " + bookingDate + " à " + bookingTime + ".");
    } else {
        alert("Veuillez sélectionner une date et une heure.");
    }
}

//////////////////
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
    
    // Reset form
    this.reset();
});