const firebaseConfig = {
    apiKey: "AIzaSyAo7AGc6N5Jt0sHZSxIF2_wWXkmmJqQaFI",
    authDomain: "vbi-tohelp-3561d.firebaseapp.com",
    databaseURL: "https://vbi-tohelp-3561d-default-rtdb.firebaseio.com",
    projectId: "vbi-tohelp-3561d",
    storageBucket: "vbi-tohelp-3561d.appspot.com",
    messagingSenderId: "591891805930",
    appId: "1:591891805930:web:b10dc2b3843830f693c993"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var contactFormdb = firebase.database();

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var formData = new FormData(this);
    var name = formData.get("name");
    var emailid = formData.get("emailid");
    var occupation = formData.get("occupation");
    var date_timing = formData.get("date_timing");
    var work_type = formData.get("work_type");

    saveMessages(name, emailid, occupation, date_timing, work_type);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contactForm").reset();
}

function saveMessages(name, emailid, occupation, date_timing, work_type) {
    var newContactForm = db.ref("contactForm").push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        occupation: occupation,
        date_timing: date_timing,
        work_type: work_type
    });
}
