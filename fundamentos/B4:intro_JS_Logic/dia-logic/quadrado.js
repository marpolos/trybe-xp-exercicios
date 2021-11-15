function sum_square_difference(n) {
    // Write your code here
    let sum = 0;

    for (let i = 1; i <= n; i +=1){
        sum += i;
    }
    let square = sum * sum;

    let squareUnic;
    let sum2 = 0;

    for (let i = 1; i <= n; i +=1){
        squareUnic = i * i;
        sum2 += squareUnic;
    }

    let diference = square - sum2;
    return diference;
}
console.log(sum_square_difference(10));