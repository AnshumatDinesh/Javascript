//document.getElementById("count-el").innerText=5

let count=0;
function update(){
    document.getElementById("count-el").innerText=count
}
function increment(){
    count++;
    update()
}
function decrement(){
    if (count>0){
        count--;
    }
    update()
}
