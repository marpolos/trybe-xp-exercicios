function multiples_of_3_or_5(roof) {
    // Write your code here
    let array3e5 = [];
    let sum3e5 = 0;
    
    for (let i = 1; i< roof; i += 1){
        if (i % 3 == 0 || i % 5 == 0) {
            array3e5.push(i);
            sum3e5 += i;
        }
    }
    return sum3e5;
}