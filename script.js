function showTime() {
      const now = Date.now(); // gives time in milliseconds since 1970
      document.getElementById("time").textContent = now;
    }
    showTime();
    setInterval(showTime, 1); // update every 1 millisecond