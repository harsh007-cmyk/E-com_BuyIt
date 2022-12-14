import { offers } from "./offers.js";
import {Shops,category} from "./shops.js";


let loginDetails=JSON.parse(sessionStorage.getItem('login_details'));

let signupDetails=JSON.parse(localStorage.getItem('details_Of_user'));

if(loginDetails){
    document.querySelector('.outer-login').remove();
    let logins=document.querySelectorAll('.login');
    logins[0].innerHTML=signupDetails.Registerd_Name;
    logins[1].innerHTML=signupDetails.Registerd_Name;
    document.querySelector('.signin').remove();
    document.querySelector('.signin').remove();
}else{
document.querySelector('.submit').addEventListener('click',validateLogin);
}




const todayOffer=document.getElementById("offers");
offers.forEach(element => {
    const Div=document.createElement("div");
    const heading =document.createElement('h1');
    Div.setAttribute("class",'Offer');
    const shop=document.createElement('h2');
    shop.setAttribute('class','shopname');
    if(element.Active){
        if(element.imageOfOffer){
        Div.style.backgroundImage=`linear-gradient(
            rgba(225, 225, 225, 0.5),
            rgba(225, 225, 0, 0.5)
          ),url(${element.imageOfOffer})`;
        }
        heading.innerHTML=element.offer+' on'
        shop.innerHTML=element.shopName;
        Div.appendChild(heading);
    Div.appendChild(shop);
    
    todayOffer.appendChild(Div);
    }
    
    
    
});




const shopCategories=document.querySelector(".shops");
category.forEach(element => {
    let divForCategory=document.createElement('div');
    let lisOfshops=document.createElement('div');
            lisOfshops.setAttribute('class','list');
    let categoryHeading=document.createElement('h2');
    categoryHeading.innerHTML=element;
    divForCategory.setAttribute('class','shop-category');
    categoryHeading.setAttribute('id',element)
    divForCategory.appendChild(categoryHeading);
    divForCategory.appendChild(lisOfshops);
    shopCategories.appendChild(divForCategory);
    Shops.forEach(ele => {
        if(ele.category===element){
            let nextButton=document.createElement('button');
            nextButton.setAttribute('class','next');
            let prevButton=document.createElement('button');
            nextButton.setAttribute('class','prev');

            let cardOfshop=document.createElement('div');
            let slideLen=cardOfshop.clientWidth;

            cardOfshop.setAttribute('class','cardOfitem');
            cardOfshop.setAttribute('id',ele.id);
            let imageOfitem=document.createElement('div');
            let imag=document.createElement('img');
            imag.src=ele.imageOfshop;
            imag.setAttribute('id',ele.id);
            cardOfshop.appendChild(imag);
            let nameOfShop=document.createElement('p');
            nameOfShop.setAttribute('id',ele.id);
            nameOfShop.innerHTML=ele.nameOfshop;
            cardOfshop.appendChild(nameOfShop);
            lisOfshops.appendChild(cardOfshop);
        }
    });
    
});

const shopDetails=[];
const cardsOfshops=document.querySelectorAll('.cardOfitem');
cardsOfshops.forEach(element => {
    element.addEventListener('click',(e)=>{
         localStorage.removeItem('data');
        Shops.forEach(ele => {
            if(ele.id==e.target.id){
                localStorage.setItem("data",JSON.stringify(ele.Data));
                window.location.href='index2.html';
            }
        });
    })
});

let nav=document.querySelector('.nav-bar');
nav.addEventListener('click',Resposive);
let nav_bar=document.querySelector('.fa-window-close');
nav_bar.addEventListener('click',Resposive);
function Resposive(){
    let m_nav=document.getElementById("m-nav");
    m_nav.classList.toggle("responsive");
}
 

const closeLogin=document.querySelector('.loign-window-close')
if(closeLogin){
    close_Login();
}


function close_Login(){
closeLogin.addEventListener('click',()=>{
document.querySelector('.outer-login').style.display="none";
})
let login=document.querySelectorAll('.login');
login.forEach(element => {
    element.addEventListener('click',()=>{
        document.querySelector('.outer-login').style.display='flex';
    })    
});

}


function validateLogin(){
    document.getElementById('logo').click();
    let user=JSON.parse(localStorage.getItem('details_Of_user'))
    const password=document.querySelectorAll('.user-name')[1];
    const E_mail=document.querySelectorAll('.user-name')[0];
    if(user.Registerd_E_mail===E_mail.value&&user.password===password.value){
        let loginobj={E_mail_login:E_mail.value,password_login:password.value};
        window.sessionStorage.setItem('login_details',JSON.stringify(loginobj));
        document.getElementById('login').innerHTML=signupDetails.Registerd_Name;
       
        document.getElementById('signin').remove();
        document.querySelector('.outer-login').style.display="none";
    }else{
        if(!E_mail){
            alert('Please enter E-mail');
        }
        else if(!password){
            alert('please enter password');
        }
        else if(!signupDetails||signupDetails.Registerd_E_mail!=E_mail||signupDetails.password!=password)
        alert('E-mail and password is not matching');
    }
}



document.getElementById('search-input').addEventListener('input',searchInput);
 
function searchInput(e){
    const inputItem=e.target.value;
    
}


const inputBox=document.getElementById('search-input');
const icon=document.querySelector('.fa-search');
const listOfsug=document.getElementById('listOfsug');
inputBox.onkeyup=(e)=>{
    console.log("Searchbar",e.target.value);
    const searchValue=inputBox.value;
    if(searchValue){
        icon.onclick=()=>{
            let lowerCaseinput=searchValue.toLocaleLowerCase();
           Shops.forEach(element => {
            let lowerCaseName=element.nameOfshop.toLocaleLowerCase();
            if(lowerCaseName===lowerCaseinput ){
              
                document.getElementById('search-Anchor').href=`#${element.id}`;
                document.getElementById('search-Anchor').click();
                document.getElementById('search-Anchor').href=`#`;
                inputBox.value="";
                document.querySelector('.sub-list').classList.remove('active');
            }else{
                document.querySelector('.sub-list').classList.remove('active');
            }
           });

        }
        let listOfSugs=Shops.filter((ele)=>{
            return ele.nameOfshop.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase());
        }  )
        listOfSugs=listOfSugs.map((data)=>{
            return data=`<li class="listOfsearch">${data.nameOfshop}</li>`
        })
        if(listOfSugs.length){
            document.querySelector('.sub-list').classList.add('active');
        }else{
            document.querySelector('.sub-list').classList.remove('active');
        
        }
        showSug(listOfSugs);
        if(listOfSugs){
            let listOfsearch=document.querySelectorAll('.listOfsearch');
            listOfsearch.forEach(element => {
                element.addEventListener('click',()=>{
                   inputBox.value=element.textContent;
                   let str=inputBox.value;
                   Shops.forEach(element => {
                        if(str===element.nameOfshop){
                            document.getElementById('search-Anchor').href=`#${element.id}`;
                            document.getElementById('search-Anchor').click();
                            document.getElementById('search-Anchor').href=`#`;
                            inputBox.value="";
                            document.querySelector('.sub-list').classList.remove('active');
                       
                        }
                   });
                   
                })
            });
        }
       
    }
    else{
        document.querySelector('.sub-list').classList.remove('active');
    }

   

}

function showSug(list){
    
     console.log(list);
     listOfsug.innerHTML="";
     list.forEach(element => {
        listOfsug.innerHTML+=element+"<br>";   
     });
     
 }