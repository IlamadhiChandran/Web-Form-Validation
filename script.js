function validateForm() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;

  if (name === "" || email === "" || mobile === "") {
    alert("All fields must be filled");
    return false;
  }

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  let mobilePattern = /^[0-9]{10}$/;

  if (!mobilePattern.test(mobile)) {
    alert("Mobile number must be exactly 10 digits");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}