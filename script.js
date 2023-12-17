console.log(document.querySelectorAll('.box'));
document.getElementsByClassName('boxc')[0].addEventListener("click",myFn0);
document.getElementsByClassName('boxc')[1].addEventListener("click",myFn1);
document.getElementsByClassName('boxc')[2].addEventListener("click",myFn2);
document.getElementsByClassName('boxc')[3].addEventListener("click",myFn3);
document.getElementsByClassName('boxc')[4].addEventListener("click",myFn4);
document.getElementsByClassName('boxc')[5].addEventListener("click",myFn5);
function myFn0(){
    document.getElementsByClassName('inf')[0].classList.toggle('infos2');
    document.getElementsByClassName('boxz')[0].classList.toggle('boxx');
}
function myFn1(){
    document.getElementsByClassName('inf')[1].classList.toggle('infos2');
    document.getElementsByClassName('boxz')[1].classList.toggle('boxx');
}
function myFn2(){
    document.getElementsByClassName('inf')[2].classList.toggle('infos2');
    document.getElementsByClassName('boxz')[2].classList.toggle('boxx');
}
function myFn3(){
    document.getElementsByClassName('inf')[3].classList.toggle('infos2');
    document.getElementsByClassName('boxz')[3].classList.toggle('boxx');
}
function myFn4(){
    document.getElementsByClassName('inf')[4].classList.toggle('infos2');
    document.getElementsByClassName('boxz')[4].classList.toggle('boxx');
}
function myFn5(){
    document.getElementsByClassName('inf')[5].classList.toggle('infos2');
    document.getElementsByClassName('boxz')[5].classList.toggle('boxx');
}
