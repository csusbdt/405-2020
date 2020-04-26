(function() { 
  window.a = {}

  function loginCallback() {
    a_msg.innerHTML            = "logged in"
    a_logging_in.style.display = "none"
    a_logged_in.style.display  = "block"
  }

  function login() {
    const email = a_email.value
    a_send_link_btn.disable = true
    const auth = firebase.auth()
    actionCodeSettings = {
      url: window.location.href,
      handleCodeInApp: true
    }

    auth.sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
      a_msg.innerHTML = "login link send to email"
      localStorage.setItem("email", email)
    }).catch(err => console.log(err))
  }

  function logout() {
    // pretend we successfully logged out
    a_msg.innerHTML            = "logged out"
    a_logging_in.style.display = "block"
    a_logged_in.style.display  = "none"
  }

  document.addEventListener('DOMContentLoaded', () => {
    a_msg.innerHTML = "loaded"
    if (firebase.auth().isSignInWithEmailLink(location.href)) {
      const email = localStorage.getItem('email');
      if (!email) {
        email = prompt('Please provide your email for confirmation');
      }
      firebase.auth().signInWithEmailLink(email, location.href).then((result) => {
        localStorage.removeItem("email")
         a.user = result.user
         a_msg.innerHTML            = "logged in"
         a_logged_in.style.display  = "block"
         a_logout_btn.disabled      = false
      })
    } else {
      a_logging_in.style.display = "block"
      a_send_link_btn.addEventListener('click', login)
      a_send_link_btn.disable = false
      a_logout_btn.addEventListener('click', logout)
    }
  })
})();
