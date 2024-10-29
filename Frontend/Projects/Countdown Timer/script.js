function clicks(event) {
    event.preventDefault();
  
    const input = document.querySelector(".field");
    const number = document.querySelector(".number");
    let num = parseInt(input.value, 10);
  
    number.textContent = num;
  
    setInterval(() => {
      if (num === 0) {
        return false;
      } else {
        num--;
        number.textContent = num;
      }
    }, 1000);
  }