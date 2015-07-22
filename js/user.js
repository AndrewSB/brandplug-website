$(function() {

  Parse.$ = jQuery;

  // Initialize Parse with your Parse application javascript keys
  Parse.initialize("HyskMX2DqTzAcHvF2e7sukLP5GEgin6wdaE96kSq", "UQr5vhAJIBA926E2G42LG3p0FzH6VcN9nZjFVK14");
});

function submitSignup(form) {
  console.log(document.getElementById('register-form'));
}

$('#hero-submit').click(function(e){

  console.log("here")

  alert("Lol")

      // Stop form submission & check the validation
    //   e.preventDefault();
    //
    //   // Variable declaration
    //   var error = false;
    //   var fname = $('#hero-fname').val();
    //   var email = $('#hero-email').val();
    //   var username = $('#hero-username').val();
    //
    // // Form field validation
    //   if(fname.length == 0){
    //       var error = true;
    //       $('#hero-fname').parent('div').addClass('field-error');
    //   }else{
    //       $('#hero-fname').parent('div').removeClass('field-error');
    //   }
    //   if(email.length == 0 || email.indexOf('@') == '-1'){
    //       var error = true;
    //       $('#hero-email').parent('div').addClass('field-error');
    //   }else{
    //       $('#hero-email').parent('div').removeClass('field-error');
    //   }
    //   if(username.length == 0){
    //       var error = true;
    //       $('#hero-username').parent('div').addClass('field-error');
    //   }else{
    //       $('#hero-username').parent('div').removeClass('field-error');
    //   }
    //
    //   if(error == true){
    //     $('#hero-error-notification').addClass('show-up');
    //   }else{
    //      $('#hero-error-notification').removeClass('show-up');
    //   }
    //
    //   if(error == false){
    //       $.post("hero-form.php", $("#register-form").serialize(),function(result){
    //           if(result == 'sent'){
    //               $('#hero-success-notification').addClass('show-up');
    //               $('#hero-submit').addClass('disabled');
    //           }
    //       });
    //   }
  });
