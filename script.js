const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select tab content Item
function selectItem(e) {
    removeBorder();
    removeShow();

    //Add border to current tab
    this.classList.add('tab-border');
    // Grab content Item from DOM

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}



// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));




// Sign in form


document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the actual form submission


    var email = document.getElementById('eml').value;
    var password = document.getElementById('pass').value;


    if (email.trim() === '' || password.trim() === '') {
        alert('Please fill in both email and password fields.');
        return;
    }


    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }


    if (password.length < 4) {
        alert('Password must be at least 4 characters long.');
        return;
    }

    window.location.href = 'signup.html';
});


function validateEmail(email) {

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

