// Function to move the bee to a random position
function moveBee() {
    const bee = document.getElementById('bee');
    
    // Get the window width and height
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Generate random x and y positions within the window boundaries
    const randomX = Math.floor(Math.random() * (windowWidth - 100)); // Adjust based on bee size
    const randomY = Math.floor(Math.random() * (windowHeight - 100));
    
    // Apply the new position to the bee
    bee.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
  
  // Move the bee every 2 minutes (120,000 milliseconds)
  setInterval(moveBee, 120000);
  
  // Move the bee immediately when the page loads
  moveBee();
  