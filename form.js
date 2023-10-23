$(document).ready(function () {
  $("form").submit(function (event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Validate email
    var email = $("#email").val();
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password (if needed)
    // var password = $("#password").val();
    // Add your password validation logic here

    // Validate address
    var address = $("#address").val();
    if (address.trim() === "") {
      alert("Please enter your address.");
      return;
    }

    // Validate city
    var city = $("#city").val();
    if (city.trim() === "") {
      alert("Please enter your city.");
      return;
    }

    // Validate if the agree button is checked
    var agreeChecked = $("#agree").is(":checked");
    if (!agreeChecked) {
      alert("Please agree to the terms and conditions.");
      event.preventDefault(); // Prevent form submission
      return;
    }

    // Validate state
    var state = $("#state").val();
    if (state === "Select State") {
      alert("Please select your state.");
      return;
    }

    // Validate zip code
    var zip = $("#zip").val();
    if (!isValidZip(zip)) {
      alert("Please enter a valid zip code.");
      return;
    }

    // If all validations pass, submit the form
    this.submit();
  });

  function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
  }

  function isValidZip(zip) {
    // Add your zip code validation logic here
    return /^\d{5}$/.test(zip);
  }
});
