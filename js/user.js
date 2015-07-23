$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("HyskMX2DqTzAcHvF2e7sukLP5GEgin6wdaE96kSq", "UQr5vhAJIBA926E2G42LG3p0FzH6VcN9nZjFVK14");
});

function submitSignup(form) {
  console.log(document.getElementById('hero-username').value)
  console.log(document.getElementById('hero-email').value)

  var user = new Parse.User();
  user.set("username", document.getElementById('hero-email').value)
  user.set("email", document.getElementById('hero-email').value)
  user.set("name", document.getElementById('hero-username').value)

  user.signUp(null, {
    success: function(user) {
      alert("Awesome! We'll be in touch with you shortly with possible opputunities")
      console.log("saved!")
    }
    error: function(user, error) {
      alert("Error signing up: " + error.code + " " + error.message);
      console.log("error saving :(")
  })
}
