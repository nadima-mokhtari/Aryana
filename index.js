document.getElementById('showSecret').addEventListener('click', function(){
    document.getElementById('secretItem').style.display = 'block'
});

const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const  image = document.querySelectorAll('img')
image.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
  })
 })

lightbox.addEventListener('click', e=> {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})



// Calculate and display the number of days since birth
function calculateDaysLived() {
    const birthDate = new Date('1995-06-15'); // Replace with Aryana's birth date
    const currentDate = new Date();
    const timeDifference = currentDate - birthDate;
    const daysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days
    document.getElementById('days-lived').textContent = `Aryana Sayed vit depuis ${daysLived} jours.`;
}

// Form validation
document.getElementById('formContact').addEventListener('submit', function(event) {
    const message = document.getElementById('message').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;

    // Check if message is at least 50 characters
    if (message.length < 50) {
        alert("Le message doit contenir au moins 50 caractères.");
        event.preventDefault(); // Stop form submission
        return;
    }

    // Check if name and email are filled
    if (nom === "" || email === "") {
        alert("Le nom et l'email sont obligatoires.");
        event.preventDefault(); // Stop form submission
        return;
    }
});

// Run the calculation on page load
window.onload = calculateDaysLived;
