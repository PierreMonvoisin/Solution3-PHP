$(function(){
    $('#avatarContainer').mouseenter(function(){
        $('#topAvatar').attr('src', 'assets/img/addPhotoAvatar.png');
    })
    $('#avatarContainer').mouseleave(function(){
        $('#topAvatar').attr('src', 'https://image.flaticon.com/icons/svg/163/163801.svg');
    })
});