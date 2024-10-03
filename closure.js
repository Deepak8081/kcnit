function createCounter() {
    let counter = 0; 
  
    return function() {
      counter += 1; 
      return counter; 
    };
  }
  
  const incrementCounter = createCounter();
  
  console.log(incrementCounter());
  console.log(incrementCounter()); 
  console.log(incrementCounter()); 
  