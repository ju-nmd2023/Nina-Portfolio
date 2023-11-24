const h1 = document.getElementById ("heading");
const inputElement = document.getElementById ("input-name")
const submitButton = document.getElementById("button");  

submitButton.addEventListener("mouseover", function(event) {
  submitButton.style.backgroundColor = "darkgreen";
});

submitButton.addEventListener("mouseout", function(event) {
    submitButton.style.backgroundColor = "#ff0000";
  });

submitButton.addEventListener("click", function (event){
    let enteredName = inputElement.value;

    if (enteredName !== "") {
        h1.innerText = "Thank you for your message" + enteredName + "! I will get back to you as soon as I can :)"
    } else {
        h1.innerText = "Contact me"
    }
}
)

