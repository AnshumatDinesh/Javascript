function checkpsswrd(){
    let x = document.forms["Registeration"]["password"].value;
    let y = document.forms["Registeration"]["repassword"].value;
    if (x.length<8) {
      alert("Enter a valid password");
      return false;
    }
    else if(x!=y){
        alert("Passwords don't match");
      return false;
    }
}
function checkinpt(){
    let x = document.forms["Registeration"]["email"].value;
    let y = document.forms["Registeration"]["first"].value;
    let z = document.forms["Registeration"]["last"].value;
    let a = document.getElementById('g1').checked;
    let b = document.getElementById('g2').checked;
    // let y = document.forms["Registeration"]["first"].value;
    if (x=="") {
      alert("Enter a valid email");
      return false;
    }
    if(y==""){
        alert("Enter a valid First name");
      return false;
    }
    if(z==""){
        alert("Enter a valid Last name");
      return false;
    }
    if(a==false && b==false){
        alert("select a gender");
      return false;
    }
}
function checkboxes(){
    let x = document.getElementById('terms').checked;
    let y = document.getElementById('recieve').checked;
    if (!x){
        alert("Accept the terms and conditions");
        return false;
    }
    if (!y){
        alert("Agree to recieve the newsletter");
        return false;
    }
}
function validateForm() {
    checkinpt();
    checkboxes();
    checkpsswrd();

  }