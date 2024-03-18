    // JavaScript code to check if a number is even or odd
    document.getElementById('numberForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get the input value
      const number = parseInt(document.getElementById('numberInput').value);

      // Check if the number is even or odd
      if (number % 2 === 0) {
        alert(number + ' is even.');
      } else {
        alert(number + ' is odd.');
      }
    });
  