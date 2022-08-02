let loginDetails=JSON.parse(sessionStorage.getItem('login_details'));

let signupDetails=JSON.parse(localStorage.getItem('details_Of_user'));

if(loginDetails){
    let logins=document.querySelector('.Login');
    logins.innerHTML=signupDetails.Registerd_Name;
    document.querySelector('.Sign-up').remove();
    
}



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

