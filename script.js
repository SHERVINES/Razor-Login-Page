let email = document.querySelector("#email");
let password = document.querySelector("#password");
let usernameMsg = document.querySelector(".username-msg");
let passwordMsg = document.querySelector(".password-msg");
let signinStatus = document.querySelector(".signin-status");
let signinButton = document.querySelector(".signin-button");

signinButton.addEventListener("click", signIn);
function signIn(event) {
  event.preventDefault();
  passwordMsg.innerHTML = "";
  usernameMsg.innerHTML = "";

  let emailInput = email.value;
  let passwordInput = password.value;
  let ifSendData = true;
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    let ifSendData = true;
  } else {
    usernameMsg.innerHTML = "Please enter a valid email*";
    ifSendData = false;
  }
  if (passwordInput.length === 0) {
    passwordMsg.innerHTML = "Please enter a valid passcode*";
    ifSendData = false;
  } else if (passwordInput.length <= 8) {
    passwordMsg.innerHTML = "Your passcode is too short*";
    ifSendData = false;
  }
  if (ifSendData) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        username: emailInput,
        password: passwordInput,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      if (response.ok) {
        signinStatus.innerHTML = "You signed in succsessfully";
      }
    });
  }
}
