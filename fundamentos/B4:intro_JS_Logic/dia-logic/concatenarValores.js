function count_down(x) {
    // Write your code here
    let regressive = "";
    for(let i = x; i >= 0; i -=1){
        if(i == 0){
            regressive += i + "!!!";
        }
        else{
          regressive += i + "...";    
        }  
    }
    return regressive;
}