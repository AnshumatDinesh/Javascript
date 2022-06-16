function checkinpt(){
    
    let y = document.forms["Registeration"]["name"].value;
    let z = document.forms["Registeration"]["password"].value;
    let c = document.forms["Registeration"]["cvc"].value;
    let a = document.getElementById('g1').checked;
    let b = document.getElementById('g2').checked;
    // let y = document.forms["Registeration"]["first"].value;
    // if (x=="") {
    //   
    // }
    if(y==""){
        alert("Enter a valid Nname");
      return false;
    }
    if(z==""){
        alert("Enter a valid Password");
      return false;
    }
    if(c.length!=3){
        alert("Enter a valid CVC");
      return false;
    }
    if(a==false && b==false){
        alert("select a gender");
      return false;
    }
}
function validateForm() {
    checkinpt();

  }