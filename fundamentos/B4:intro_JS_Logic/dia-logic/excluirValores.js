
    // Write your code here
    let values2 = [1,1,2,3,0,0,8];
    for ( let i = 0; i < values2.length; i += 1) {
        
        if (values2[i] == 0) {
            values2.splice((i - 1), 2);
        }
    }
    console.log(values2);
    
