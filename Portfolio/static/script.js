function isMobileView() {
    return window.innerWidth <= 1250;
}
function handleMobileView() {
    var popup = document.getElementById("popup");
    var background = document.getElementById("background");
    if (isMobileView()) {
        popup.style.display = "block";
        document.body.style.overflow = "hidden";
        background.style.filter = "blur(5px)";
    } else {
        popup.style.display = "none";
        document.body.style.overflow = "auto";
        background.style.filter = "none";
    }
}
window.onload = handleMobileView;
window.addEventListener('resize', handleMobileView);
var typed = new Typed('.text-works', {
    strings: [
    'Web Developer', 
    'Graphic Designer', 
    'Linux Enthusiast', 
    'AWS Cloud Practitioner', 
    'Database Administrator', 
    'Flask Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  });
  window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navigation-bar');
    if (window.scrollY > 0) {
        navbar.classList.add('blurred-bg');
    } else {
        navbar.classList.remove('blurred-bg');
    }
});
function sendMessage() {
    const username = document.querySelector('#name').value;
    const mail = document.querySelector('#email').value;
    const msg = document.querySelector('#message').value;
    const emailConfig = {
        Host: "smtp.elasticemail.com",
        Username: "isfoedu@gmail.com",
        Password: "7D6A5C7D4DD9F07CCD980C15EF9DD5F2CB61",
        To: 'isfoedu@gmail.com',
        From: "isfowashere@gmail.com",
        Subject: "Message from portfolio - " + username,
        Body: username + " said: My Email is: " + mail + ' , My Message is: ' + msg
    };
    Email.send(emailConfig).then(
        function () {
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#message').value = '';
            alert('Message Sent');
        }
    ).catch(
        function (error) {
            console.error("Error sending email: " + error);
            alert('Message could not be sent. Please try again later.');
        }
    );
}
