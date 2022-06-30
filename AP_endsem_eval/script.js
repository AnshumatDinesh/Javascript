let num_memory=0;
let curr_op=""
function backspace(){
    let a=document.getElementById("display").innerHTML;
    let a_cpy="";
    for(let i=0;i<a.length-1;i++){
        a_cpy+=a[i];
    }
    a=a_cpy;
    document.getElementById("display").innerHTML=a;
}
function clr(){
    let a=document.getElementById("display").innerHTML;
    a="";
    curr_op="";
    num_memory=0;
    document.getElementById("display").innerHTML=a;
}
function addnumber(n){
    let a=document.getElementById("display").innerHTML;
    if(a=="ERROR"){
        a="";
    }
    a=a+String(n);
    document.getElementById("display").innerHTML=a;
}
function operator(o){
    let a=document.getElementById("display").innerHTML;
    num_memory=parseInt(a);
    console.log(num_memory)
    curr_op=o;
    a="";
    document.getElementById("display").innerHTML=a;
}
function equal(){
    let a=document.getElementById("display").innerHTML;
    let num2=parseInt(a)
    switch (curr_op) {
        case '+':
                console.log(num_memory+num2);
                a=num_memory+num2;
                break;
        case '-':
            console.log(num_memory-num2);
            a=num_memory-num2;
            break;
        case '*':
            console.log(num_memory*num2);
            a=num_memory*num2;
            break;
        case '/':
            if(num2==0){
                a="ERROR";
            }
            else{
                console.log(num_memory/num2);
                a=num_memory/num2;
            }
            break;
        default:
            break;
    }
    document.getElementById("display").innerHTML=a;
    num_memory=0;
    curr_op="";
}