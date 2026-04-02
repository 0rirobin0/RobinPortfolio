function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('open');
}

function closeMenu() {
    document.getElementById('nav-menu').classList.remove('open');
}

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

// Form submit to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbxGv41lsLLxp-0gsBDmPCqCbBJZ_SNwO0gyQQFJrFv1indoxd7zdDmlThnMCUAnjjSgUA/exec';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['submit-to-google-sheet'];
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message));
        });
    }
});
