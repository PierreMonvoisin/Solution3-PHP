$(function(){
  if (typeof(Storage) != "undefined") {
    // Check if the user has already allowed the storage modal
    if (! localStorage.getItem('storageAuthorization')){
      $('#userAuthorizationModal').modal('show');
    } else {
      $('#userAuthorizationModal').modal('hide');
    }
  }
  // If the user declines, send him to Google
  $('#storageDecline').click(function(){
    location.href = "https://www.google.com/";
  });
  // If the user allow, add his choice to the local storage not to ask him again
  $('.storageAllow').click(function(){
    if (typeof(Storage) != "undefined") {
      localStorage.setItem('storageAuthorization', 'true');
    } else {
      alert('Le stockage local n\'est pas disponible sur votre navigateur.');
    }
  });
});
