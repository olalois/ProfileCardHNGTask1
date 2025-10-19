function showTime() {
      const now = new Date();
      document.getElementById("time").textContent = now.toLocaleTimeString();
    }
    showTime(); // show immediately
    setInterval(showTime, 1000); // update every second