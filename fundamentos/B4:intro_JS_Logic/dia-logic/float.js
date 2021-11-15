function fahrenheit_to_celsius(temp_fahrenheit) {
    // Write your code here
    let temp_celsius = (temp_fahrenheit - 32) / 1.8;
    temp_celsius = temp_celsius.toFixed(1);
    return temp_celsius;
}