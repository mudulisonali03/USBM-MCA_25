function Blink() {
    const text = document.querySelector(".blink");
  
    setInterval(() => {
      if (text.style.visibility === "hidden") {
        text.style.visibility = "visible";
      } else {
        text.style.visibility = "hidden";
      }
    }, 1000);
  }
  
  Blink();