let loginDetails=JSON.parse(sessionStorage.getItem('login_details'));

let signupDetails=JSON.parse(localStorage.getItem('details_Of_user'));

if(loginDetails){
    let logins=document.querySelector('.Login');
    logins.innerHTML=signupDetails.Registerd_Name;
    document.querySelector('.Sign-up').remove();
    
}

let Cartarray=[];

let data=JSON.parse(localStorage.getItem('data'));
console.log(data[0].ImageOfitem);
let item=document.querySelector('.items');
function createCard(){
    data.forEach(element => {
        let  card=document.createElement('div');
        card.setAttribute('class','Card');
        let divOfim=document.createElement('div');
        divOfim.setAttribute('class','imageOfitem');
        let image=document.createElement('img');
        let button=document.createElement('button');
        button.addEventListener('click',addTocart);
        button.innerHTML="Add to card"
        button.setAttribute('id',element.No)
        let nameOfitem=document.createElement('h3');
        nameOfitem.innerHTML=element.name;
        image.src=element.ImageOfitem;
        divOfim.append(image);
        card.appendChild(divOfim);
        card.appendChild(button);
        card.appendChild(nameOfitem);
        item.appendChild(card);
        
    });
   
}
let cart=document.querySelector('.Number_of_pdts');
let NumberOfitemsIncart=0;

createCard();
function addTocart(){
    if(NumberOfitemsIncart>50){
        cart.innerHTML=50;
        return;
    }
    NumberOfitemsIncart++;
    cart.innerHTML=NumberOfitemsIncart;
}

function addToCartPage(element){
    let idnumber=element.id;
    let cartItem=document.createElement('div');
    cartItem.setAttribute('class','cartItem');
    let cartImage=document.createElement('img');
    cartImage.setAttribute('class','cartImage');
    let NumberOfCartitem=document.createElement('span');
    NumberOfCartitem.setAttribute('class','NumberOFcartItems');
    let plusAndMinus=document.createElement('div');
    plusAndMinus.innerHTML=`<i class="fa fa-plus" aria-hidden="true"></i><span class="increase"></span>`+`<i class="fa fa-minus" aria-hidden="true"></i><span class="decrease"></span>`
    
}