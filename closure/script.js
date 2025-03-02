function outer() {
    let count = 0;
    
    return function inner() {
      count++;
      console.log(count);
    };
  }
  
  const increment = outer();
  increment(); // ✅ 1
  increment(); // ✅ 2 (Remembers count variable)
  