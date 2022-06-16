comp_choices=["rock","paper","scissors"];
curr_choice=""
function comp_choice(){
    rnd=Math.ceil(Math.random()*59);
    console.log(rnd);
    if (rnd>=0 && rnd<=20){
        curr_choice=comp_choices[0];
        comp_choices[0];
    }
    else if(rnd>20 && rnd<=40){
        curr_choice=comp_choices[1];
    }
    else{
        curr_choice=comp_choices[2];
    }
    document.getElementById("comp_choice").innerHTML=curr_choice;
}
function result(a){
    reslt=""
    if(a==curr_choice){
        reslt="Tie"
    }
    else{
        if(a=="rock"){
            if(curr_choice=="scissors"){
                reslt="User wins"
            }
            else{
                reslt="Computer wins"
            }
        }
        else if(a=="paper"){
            if(curr_choice=="rock"){
                reslt="User wins"
            }
            else{
                reslt="Computer wins"
            }
        }
        if(a=="scissors"){
            if(curr_choice=="paper"){
                reslt="User wins"
            }
            else{
                reslt="Computer wins"
            }
        }
    }
    document.getElementById("result").innerHTML=reslt;
}
function user_choice(a){
    document.getElementById("user_choice").innerHTML=a
    comp_choice()
    result(a)
}   