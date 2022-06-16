
let a=document.getElementById("inp").innerHTML;
let a1=a;
let plus_mode=false;
let minus_mode=false;
let multiply_mode=false;
let divide_mode=false;
let fact_mode=false;
let sq_mode=false;
let sqrt_mode=false;
function fact(x){
    x=parseInt(x);
    let fact=1;
    for(let i=1;i<=x;i++){
        fact*=i;
    }
    return String(fact);
}
function square_root(x){
    x=parseInt(x);
    let guess=x/2;
    for(let i=0; i<10;i++){
        guess=(guess+x/guess)/2;
    }
    return String(guess);
}
function update(new_value){
    /*
    This function updates the value of the 
    form and form variable
    */
    a=new_value;
    document.getElementById("inp").innerHTML=a;
}
function number(n){
    /*This function appends the number at the end of the form string */
    if(a=="Enter the number" || a=="ERROR"){
        a=n;
    }
    else{
    a+=n;
    }
    document.getElementById("inp").innerHTML=a;
    console.log(a);
}

function backspace(){
    let l=a.length;
    let a_copy=a;
    console.log(l);
    update('');
    for(let i=0;i<l-1;i++){
        number(a_copy[i]);
    }
}
function equals(){
    if (plus_mode){
        console.log(parseInt(a1)+parseInt(a));
        update(String(parseInt(a1)+parseInt(a)));
        plus_mode=false;
    }
    else if(minus_mode){
        console.log(parseInt(a1)-parseInt(a));
        update(String(parseInt(a1)-parseInt(a)));
        minus_mode=false;
    }
    else if(multiply_mode){
        console.log(parseInt(a1)*parseInt(a));
        update(String(parseInt(a1)*parseInt(a)));
        multiply_mode=false;
    }
    else if(divide_mode){
        if (a="0"){
            update("");
            document.getElementById("inp").innerHTML="ERROR";
            divide_mode=false;
        }
        else{
            console.log(parseInt(a1)/parseInt(a));
            update(function factorial(){
                a1=a;
                console.log(a1);
                update('');
                fact_mode=true;
                equals()
            });
            divide_mode=false;
        }
    }
    else if(fact_mode){
        update(fact(a1));
        fact_mode=false;
    }
    else if(sq_mode){
        update(String(parseInt(a1)*parseInt(a1)));
        sq_mode=false;
    }
    else if(sqrt_mode){
        update(square_root(a1));
        sqrt_mode=false;
    }
}
function plus(){
    a1=a;
    console.log(a1);
    update('');
    plus_mode=true;
}
function minus(){
    a1=a;
    console.log(a1);
    update('');
    minus_mode=true;
}
function multiply(){
    a1=a;
    console.log(a1);
    update('');
    multiply_mode=true;
}
function divide(){
    a1=a;
    console.log(a1);
    update('');
    divide_mode=true;
}
function factorial(){
    a1=a;
    console.log(a1);
    update('');
    fact_mode=true;
    equals()
}
function square(){
    a1=a;
    console.log(a1);
    update('');
    sq_mode=true;
    equals()
}
function squarert(){
    a1=a;
    console.log(a1);
    update('');
    sqrt_mode=true;
    equals()
}
