// isPrime - Returns true or false, indicating whether the given number is prime

const isPrime = (n) => {
    if(n < 2) return false
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}