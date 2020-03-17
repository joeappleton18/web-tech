var prefArray = [];

function main() {
  document
    .getElementById("contact-form")
    .addEventListener("submit", handleSubmit);
  document
    .getElementById("contact-form")
    .addEventListener("change", handleChange);
}

function handleChange(e) {
  prefArray = [];
  prefOutput = "";

  var prefs = document.getElementById("contact-form").pref;
  for (var i = 0; i < prefs.length; i++) {
    if (prefs[i].checked) {
      prefArray.push(prefs[i].value);
      prefOutput += "<p>" + prefs[i].dataset.humanDesc + "</p>";
    }
  }

  document.getElementById("contactMethods").innerHTML = prefOutput;
}

function handleSubmit(event) {
  var myForm = document.getElementById("contact-form");
  var valid = true;

  if (myForm.email.value == "") {
    event.preventDefault();
    valid = false;
    document.getElementById("emailRequiredError").style.display = "block";
  } else {
    document.getElementById("emailRequiredError").style.display = "none";
    valid = true;
  }

  if (myForm.name.value == "") {
    event.preventDefault();
    valid = false;
    document.getElementById("nameRequiredError").style.display = "block";
  } else {
    document.getElementById("nameRequiredError").style.display = "none";
    valid = true;
  }

  if (myForm.terms.checked === false) {
    event.preventDefault();
    valid = false;
    document.getElementById("termsRequiredError").style.display = "block";
  } else {
    document.getElementById("termsRequiredError").style.display = "none";
    valid = true;
  }

  if (prefArray.length == 0) {
    event.preventDefault();
    valid = false;
    document.getElementById("prefRequiredError").style.display = "block";
  } else {
    document.getElementById("prefRequiredError").style.display = "none";
    valid = true;
  }

  if (valid) {
    console.log("form submitted");
  }

  event.preventDefault(); // this is so the page does not reload
}
