    const heading = document.createElement("h1");
    heading.textContent = "Counter Example";

    const counterValue = document.createElement("p");

    const incrementBtn = document.createElement("button");
    incrementBtn.className = "btn";
    incrementBtn.textContent = "Increment";
    incrementBtn.addEventListener("click", incrementCounter);

    const decrementBtn = document.createElement("button");
    decrementBtn.className = "btn";
    decrementBtn.textContent = "Decrement";
    decrementBtn.addEventListener("click", decrementCounter);

    let counter = 0;

    function incrementCounter() {
      counter++;
      document.getElementById("counter-value").textContent = counter;
    }

    function decrementCounter() {
      counter--;
      document.getElementById("counter-value").textContent = counter;
    }

    function resetCounter() {
      counter = 0;
      document.getElementById("counter-value").textContent = counter;
    }
