function greetUser() {
  const name = document.getElementById("username").value.trim();
  if (name) {
    alert(`Hey ${name}, how are you doing?`);
  } else {
    alert("Please enter your name.");
  }
}
