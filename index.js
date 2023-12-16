const names=(["Guadalupe", "Ollie", "Aki"], surprise)
function writeCards(names, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const thankYouMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(thankYouMessage);
    }
  
    return thankYouMessages;
  }
  
  
  // Function to count down from a given number and log each number
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }