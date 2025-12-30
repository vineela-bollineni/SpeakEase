function login(event) {
  event.preventDefault();

  const role = document.getElementById("role").value;
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.style.display = "none";
  username.classList.remove("error");
  password.classList.remove("error");

  if (role === "") {
    errorMsg.innerText = "Please select a role";
    errorMsg.style.display = "block";
    return;
  }

  if (username.value.trim() === "" || password.value.trim() === "") {
    errorMsg.innerText = "Username and password are required";
    errorMsg.style.display = "block";
    username.classList.add("error");
    password.classList.add("error");
    return;
  }

  const credentials = {
    student: { username: "student", password: "student123" },
    faculty: { username: "faculty", password: "faculty123" }
  };

  if (
    credentials[role].username === username.value.trim() &&
    credentials[role].password === password.value.trim()
  ) {
    username.value = "";
    password.value = "";
    document.getElementById("role").value = "";

    if (role === "student") {
      window.location.href = "student.html";
    } else {
      window.location.href = "faculty.html";
    }
  } else {
    errorMsg.innerText = "Invalid username or password";
    errorMsg.style.display = "block";
    username.classList.add("error");
    password.classList.add("error");
  }
}

function togglePassword() {
  const password = document.getElementById("password");
  const eye = document.querySelector(".eye");

  if (password.type === "password") {
    password.type = "text";
    eye.classList.add("visible");
  } else {
    password.type = "password";
    eye.classList.remove("visible");
  }
}
