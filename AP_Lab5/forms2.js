function checkdate(){
  let dob= document.forms["Registeration"]["dob"].value;
  let exp= document.forms["Registeration"]["exp"].value;
  let today_yyyy=new Date();
  let today_mm=new Date();
  console.log(exp.slice(5,7))
  console.log(today_yyyy.getFullYear())
  today_yyyy.getFullYear();
  today_mm.getMonth;
  if(today_yyyy.getFullYear()-parseInt(dob.slice(0,4))<=18){
    alert("Sorry You have to Be above 18");
    return false;
  }
  if(parseInt(exp.slice(0,4))<today_yyyy.getFullYear()){
    alert("Card is Expired");
    return false;
  } 
  if(parseInt(exp.slice(0,4))==today_yyyy.getFullYear() && parseInt(exp.slice(5,7))<today_mm.getMonth()){
   alert("Card is Expired");
    return false;
  } 

}
function isEmpty(){
    
    let name = document.forms["Registeration"]["name"].value;
    let email = document.forms["Registeration"]["email"].value;
    let password = document.forms["Registeration"]["password"].value;
    let date = document.forms["Registeration"]["dob"].value;
    let CardNumber = document.forms["Registeration"]["cno"].value;
    let c = document.forms["Registeration"]["cvc"].value;
    let male = document.getElementById('g1').checked;
    let female = document.getElementById('g2').checked;
    // let y = document.forms["Registeration"]["first"].value;
    // if (x=="") {
    //   
    // }
    if(name ==""){
        alert("Please Enter a  Name");
      return false;
    }
    if(email==""){
      alert("Enter an Email Id");
      return false;
    }
    if(password==""){
        alert("Enter a valid Password");
      return false;
    }
    if(date==""){
      alert("Enter a Valid Date");
      return false;
    }
    if(male==false && female==false){
        alert("Select a Gender");
      return false;
    }
    if(CardNumber==""){
      alert("Enter a valid Card Number");
      return false;
    }
    if(c.length!=3){
        alert("Enter a valid CVC");
      return false;
    }
}
function validateForm() {
    isEmpty();  
    checkdate();

  }