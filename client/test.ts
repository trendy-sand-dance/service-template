
console.log("Script loaded, waiting for interactions...");
const regContainer = document.getElementById("register-container");
const logContainer = document.getElementById("login-container");
const toggleLogin = document.getElementById('toggleLogin')
const toggleRegister = document.getElementById('toggleRegister')

if (regContainer && logContainer) {
  regContainer.style.display = "none";
  toggleLogin?.classList.add("bg-teal-100");
  // logContainer.style.display = "none";
}
let arr = [logContainer, regContainer];

enum PageState {
  Login = 0,
  Register,
};


toggleLogin?.addEventListener('click', () => {
  if (arr[PageState.Login] && arr[PageState.Register]) {
    toggleLogin.classList.add("bg-teal-100");
    toggleRegister?.classList.remove("bg-teal-100");
    arr[PageState.Login].style.display = "block";
    arr[PageState.Register].style.display = "none";
  }
})

toggleRegister?.addEventListener('click', () => {
  if (arr[PageState.Login] && arr[PageState.Register]) {
    toggleRegister.classList.add("bg-teal-100");
    toggleLogin?.classList.remove("bg-teal-100");
    arr[PageState.Register].style.display = "block";
    arr[PageState.Login].style.display = "none";
  }
})



