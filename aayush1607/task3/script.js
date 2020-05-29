let ham= document.querySelector('.ham');

let times= document.querySelector('.times');

let mobileNav=document.querySelector('.mobile-nav');

let home=document.querySelector('.home');

let about=document.querySelector('.about');

let myskills=document.querySelector('.myskills');

let contact=document.querySelector('.contact');

ham.addEventListener('click',function(){

    mobileNav.classList.add('open');



});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});


home.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

about.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
myskills.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});
contact.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});