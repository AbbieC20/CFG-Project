function submitContactForm() {
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var emailaddress = document.getElementById('eaddress').value;
    console.log(firstname + ", " + lastname + ", " + emailaddress);
    alert("Thank you for signing up, we'll be in touch soon!");
  }
