var plus_btn=document.querySelectorAll(".plus")
var minus_btn=document.querySelectorAll(".minus")
var aime=document.querySelectorAll(".like")
var panier=document.querySelectorAll(".ajoutpanier")
var compt=document.querySelectorAll('.compteur')
var totcompt=document.querySelector('#compteur')
var total=document.querySelector("#totale")
var price=document.querySelectorAll('.totprice')

function like(e) {
    var cible=e.target;
    var butn=cible.parentElement;
    if (butn.style.color=='red')
    {butn.style.color='black';}
    else
    {butn.style.color='red'}
}

function increment(e) {
    var cible=e.target;
    var divbtn=cible.parentElement;
    var divp=divbtn.querySelector('p');
    var value=Number(divp.innerHTML);
    value++;
    divp.innerHTML=value;
    var divprix=divbtn.parentElement;
    var unitprice=divprix.querySelector('.price').innerHTML;
    var price=divprix.querySelector('.totprice');
    price.innerHTML=Number(unitprice)*value;
}

function decrement(e) {
    var cible=e.target;
    var divbtn=cible.parentElement;
    var divp=divbtn.querySelector('p');
    var value=Number(divp.innerHTML);
    if (value>0)
    {
        value--;
    }
    divp.innerHTML=value;
    var divprix=divbtn.parentElement;
    var unitprice=divprix.querySelector('.price').innerHTML;
    var price=divprix.querySelector('.totprice');
    price.innerHTML=Number(unitprice)*value;
    sommePrix();
    sommeCompteur();
}
function sommePanier(e) {
    sommeCompteur();
    sommePrix();
}

function sommeCompteur() {
    var sum=0;
    for (let i = 0; i < compt.length; i++) {
        sum +=Number(compt[i].innerHTML);
    }
    totcompt.innerHTML=sum;
}

function sommePrix() {
    var s=0;
    for (let i = 0; i < price.length; i++) {
        s +=Number(price[i].innerHTML);
    }
    total.innerHTML=s;
}

for (let i = 0; i < plus_btn.length; i++) {
    plus_btn[i].addEventListener('click',increment);

}

for (let i = 0; i < minus_btn.length; i++) {
    minus_btn[i].addEventListener('click',decrement);
    
}

for (let i = 0; i < panier.length; i++) {
    panier[i].addEventListener('click',sommePanier);
    
}

for (let i = 0; i < aime.length; i++) {
    aime[i].addEventListener('click',like);
}