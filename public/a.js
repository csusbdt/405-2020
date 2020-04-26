console.log("(1) a.js is running");

(function() {
  function login() {
    const email = a_email.value
    // pretend we successfully logged in
    a_msg.innerHTML            = "logged in"
    a_logging_in.style.display = "none"
    a_logged_in.style.display  = "block"
  }

  function logout() {
    // pretend we successfully logged out
    a_msg.innerHTML            = "logged out"
    a_logging_in.style.display = "block"
    a_logged_in.style.display  = "none"
  }

  document.addEventListener('DOMContentLoaded', () => {
    console.log("(3) dom content loaded event fired")
    a_msg.innerHTML = "loaded"
    a_logging_in.style.display = "block"
    a_send_link_btn.addEventListener('click', login)
    a_logout_btn.addEventListener('click', logout)
  })
})();

