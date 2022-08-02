
  function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
  
      return true;
  
    } else {
  
  
      return false;
  
    }
  
  }

function onlyLetters(str){
    return /^[a-zA-Z]+$/.test(str);
}

function onlyNumbers(str){
    console.log(str.length);
    return /^[0-9]+$/.test(str)&&str.length==10;
}
console.log("Str"+onlyNumbers("8921048751"));


const next=document.querySelector('.submit');
let index=0;
let obj={Registerd_E_mail:"",Registerd_Name:"",
Registered_Mobile_Number:""};
next.addEventListener('click',clinckOnnext)

console.log('harshP')
function clinckOnnext (e){
    index++;
    const email=document.getElementById('email').value;
    const name=document.getElementById('name').value;
    const number=document.getElementById('Number').value;
   
  





    if(ValidateEmail(email)&&onlyNumbers(number)&&name){
    obj.Registerd_E_mail=email;
    obj.Registerd_Name=name;
    obj.Registered_Mobile_Number=number;
    document.querySelector('.Enter-contents').innerHTML=` <label for="password:">password</label>
    <input type="text" id="password">
    <label for="confirm">Confirm Password:</label>
    <input type="tel" id="confirm">
    <div class="submit">
        Sign up
    </div>`;
    console.log("harsh");
    // e.target.removeEventListener('click',clinckOnnext)
    









    document.querySelector('.submit').addEventListener('click',()=>{
        console.log("mechanical");
        let paasword=document.querySelector('#password').value;
    let confirm=document.querySelector('#confirm').value;
       
    
    if(paasword!=confirm){
            console.log(paasword+' '+confirm)
            alert("paasword doesn't match");
        }
        else if (paasword.length < 6) {
            alert("Too short Password must contain atlest six characters");
        } else if (paasword.length > 50) {
            alert("too long Password must contain  atmost 50 characters");
        } else if (paasword.search(/\d/) == -1) {
            alert("Password must contain atleast one digit");
        } else if (paasword.search(/[a-zA-Z]/) == -1) {
            alert("Password must contain atleast one alphabet");
        } else if (paasword.search(/[\!\@\#\$\%\^\&\*\(\)\_\+]/) == -1) {
            alert("Password must contain atleast one special character");
        }
        else{
            obj.password=paasword;
            window.localStorage.setItem('details_Of_user',JSON.stringify(obj));
            window.location.href="index.html";
        }
    })    
}else{
    if(!ValidateEmail(email)){
    alert("Enter valid Email");
    }
     if(!onlyNumbers(number)){
        alert("Enter valid Mobile Number");
    }
    if(!name){
        alert('Enter your Name');
    }
}
}
