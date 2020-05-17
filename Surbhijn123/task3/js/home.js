$(document).ready(function(){
    //Sidenav
    $('.sidenav').sidenav();
    //On click add active class to li
    $('ul li').click(function(){
        $('li').removeClass("active");
        $(this).addClass("active");
    });
    // tabs
    $('.tabs').tabs();     

});