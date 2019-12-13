document.getElementById("name").addEventListener("blur", validName);
document.getElementById("email").addEventListener("blur", validEmail);
document.getElementById("zip").addEventListener("blur", validZip);
document.getElementById("phone").addEventListener("blur", validPhone);

function validName() {
  const name = document.getElementById("name");
  const res = /^([a-zA-Z]{2,10}+)\s([a-zA-Z]{2,10})$/;
  if (!res.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}
function validZip() {
  const zip = document.getElementById("zip");
  const res = /^[0-9]{5}$/;
  if (!res.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}
function validEmail() {
  const email = document.getElementById("email");
  const res = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;
  if (!res.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validPhone() {
  const phone = document.getElementById("phone");
  const res = /^\+49+[0-9]{11}$/;
  if (!res.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
