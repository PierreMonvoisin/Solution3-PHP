$(function(){
  if (typeof(Storage) != "undefined") {
    if (! localStorage.getItem('storageAuthorization')){
      $('#userAuthorizationModal').modal('show');
    } else {
      $('#userAuthorizationModal').modal('hide');
    }
  }
  $('#storageDecline').click(function(){
    location.href = "https://www.google.com/";
  })
  $('.storageAllow').click(function(){
    if (typeof(Storage) != "undefined") {
      localStorage.setItem('storageAuthorization', 'true');
    } else {
      alert('Le stockage local n\'est pas disponible sur votre navigateur.');
    }
  })
});
