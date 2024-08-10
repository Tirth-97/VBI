const firebaseConfig = {
    apiKey: "AIzaSyAo7AGc6N5Jt0sHZSxIF2_wWXkmmJqQaFI",
    authDomain: "vbi-tohelp-3561d.firebaseapp.com",
    databaseURL: "https://vbi-tohelp-3561d-default-rtdb.firebaseio.com",
    projectId: "vbi-tohelp-3561d",
    storageBucket: "vbi-tohelp-3561d.appspot.com",
    messagingSenderId: "591891805930",
    appId: "1:591891805930:web:b10dc2b3843830f693c993"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var occupation = getElementVal("occupation");
    var date_timing = getElementVal( "date_time");
    var work_type = getElementVal("work_type");
  
    saveMessages(name, emailid, occupation,date_timing,work_type);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid,occupation,date_time,work_type ) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      occupation: occupation,
      date_timing: date_time,
      work_type: work_type,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };