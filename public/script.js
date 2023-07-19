document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code can go here
  
    // Example: Display a welcome message when the page loads
    console.log("Welcome to Apoorv's Portfolio!");
  
    // Example: Handling a button click event
    const myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function () {
      alert("You clicked the button!");
    });
  
    // Example: Handling a form submission event
    const myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const inputName = document.getElementById("inputName");
      const inputEmail = document.getElementById("inputEmail");
      alert(
        `Thank you for submitting your information!\nName: ${inputName.value}\nEmail: ${inputEmail.value}`
      );
      // You can add further code to send form data to a server or perform other actions with the data.
      // Remember to handle form validation and security before processing the data.
    });
  
    // Example: Animating an element using anime.js library
    const animatedElement = document.getElementById("animatedElement");
    animatedElement.addEventListener("click", function () {
      anime({
        targets: animatedElement,
        translateX: 250,
        rotate: "1turn",
        backgroundColor: "#FF5733",
        duration: 1000,
        easing: "easeInOutQuad",
      });
    });
  });
  