function even_fibonacci_numbers(roof) {
    // Write your code here
    let fibonacci = [1,2];
    let num;
    let pair = 0;
    
    let i = 1;
    while (fibonacci[i] < roof) {
        num = fibonacci[i] + fibonacci [i - 1];
        fibonacci.push(num);
        i += 1;
    }
    fibonacci.pop();
    
    for (let i = 0; i < fibonacci.length; i += 1) {
        if (fibonacci[i] % 2 == 0) {
            pair += fibonacci[i];
        }
    }
    
    return pair;
  
}