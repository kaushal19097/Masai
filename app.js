function findPrimes(numbers) {
    function isPrime(num) {
      if (num <= 1) {
        return false;
      }
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primeArray = [];
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        primeArray.push(numbers[i]);
        sum += numbers[i];
      }
    }
  
    let max = primeArray.length > 0 ? primeArray[0] : null;
    let min = primeArray.length > 0 ? primeArray[0] : null;
  
    for (let j = 1; j < primeArray.length; j++) {
      if (primeArray[j] > max) {
        max = primeArray[j];
      }
      if (primeArray[j] < min) {
        min = primeArray[j];
      }
    }
  
    console.log("Prime Numbers:", primeArray);
    console.log("Sum of Prime Numbers:", sum);
    console.log("Maximum Prime Number:", max);
    console.log("Minimum Prime Number:", min);
  }
  
  // Example input
  const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30];
  findPrimes(numbers);
  