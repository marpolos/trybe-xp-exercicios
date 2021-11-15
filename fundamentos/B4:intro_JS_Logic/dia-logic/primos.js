function nth_prime(n) {
    // Write your code here
    
    let prime = "";
    for (let i = 2; i < n; i += 1){
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(nth_prime(5));