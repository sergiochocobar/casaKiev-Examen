$(document).ready(function(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    $(burger).click(function(){
        $(nav).toggleClass('nav-active');
        $(this).toggleClass('toggle') ;
    });
});