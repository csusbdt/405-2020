(function() {
  a.login = function() {
    b_view.style.display = "block";
    b_view_edit_btn.disabled = false;
  }

  a.logout = function() {
  }

  document.addEventListener('DOMContentLoaded', () => {
    b_view_edit_btn.addEventListener('click', function() {
      b_view_edit_btn.disabled = true
      b_view.style.display = "none"
      b_edit.style.display = "block"
      b_edit_save_btn.disabled = false
      b_edit_cancel_btn.disabled = false
    })
    b_edit_save_btn.addEventListener('click', function() {
      b_view_edit_btn.disabled = false
      b_view.style.display = "block"
      b_edit.style.display = "none"
      b_edit_save_btn.disabled = true
      b_edit_cancel_btn.disabled = true
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
