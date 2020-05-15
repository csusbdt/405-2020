(function() {
  a.login = function() {
    b_view.style.display = "block";
    b_view_edit_btn.disabled = false;
    const userId            = firebase.auth().currentUser.uid
    const userRef           = firebase.firestore().collection("users").doc(userId)
    userRef.onSnapshot(function(snapshot) {
      if (snapshot.exists) {
        b_view_note.innerText = snapshot.data().note
      } else {
        userRef.set({ note: "my note" });
      }
      b_edit_note.value = b_view_note.innerText
    })
  }

  a.logout = function() {
  }

  document.addEventListener('DOMContentLoaded', () => {
    b_view_edit_btn.addEventListener('click', function() {
      b_view_edit_btn.disabled   = true
      b_view.style.display       = "none"
      b_edit.style.display       = "block"
      b_edit_save_btn.disabled   = false
      b_edit_cancel_btn.disabled = false
    })
    b_edit_save_btn.addEventListener('click', function() {
      b_view_edit_btn.disabled   = false
      b_view.style.display       = "block"
      b_edit.style.display       = "none"
      b_edit_save_btn.disabled   = true
      b_edit_cancel_btn.disabled = true
      const userId               = firebase.auth().currentUser.uid
      const userRef              = firebase.firestore().collection("users").doc(userId)
      userRef.update({ note: b_edit_note.value })
    })
    b_edit_cancel_btn.addEventListener('click', function() {
      b_view_edit_btn.disabled = false
      b_view.style.display = "block"
      b_edit.style.display = "none"
      b_edit_save_btn.disabled = true
      b_edit_cancel_btn.disabled = true
    })
   })
})();
