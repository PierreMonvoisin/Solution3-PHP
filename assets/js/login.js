$(function(){
  // Change avatar image on mouse hover
  $('#avatarContainer').mouseenter(function(){
    $('#topAvatar').attr('src', 'assets/img/addPhotoAvatar.png');
  })
  $('#avatarContainer').mouseleave(function(){
    $('#topAvatar').attr('src', 'https://image.flaticon.com/icons/svg/163/163801.svg');
  })
  $('input').blur(function(){
    checkInputs();
  })
  // Check all form inputs
  function checkInputs() {
    var errorLog = [], valueLog = [], validity = false;
    $('#newUserCard :input[class=form-control]').each(function(){
      if ($(this).val() != ''){
        valueLog += $(this).val();
      } else {
        errorLog += $(this).val();
      }
    });
  }
});
