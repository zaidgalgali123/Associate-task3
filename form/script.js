function validateForm() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var dob = document.getElementById("dob").value;
  var country = document.getElementById("country").value;
  var gender = document.querySelectorAll('input[name="gender"]:checked');
  var profession = document.getElementById("profession").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;

  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender.length > 0 &&
    profession &&
    email &&
    mobile
  ) {
    displayPopup(
      firstName,
      lastName,
      dob,
      country,
      gender,
      profession,
      email,
      mobile
    );
  } else {
    alert("Please fill out all fields.");
  }
}

function displayPopup(
  firstName,
  lastName,
  dob,
  country,
  gender,
  profession,
  email,
  mobile
) {
  var popupContent = document.getElementById("popup-content");
  popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${Array.from(gender)
          .map((g) => g.value)
          .join(", ")}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("survey-form").reset();
}
