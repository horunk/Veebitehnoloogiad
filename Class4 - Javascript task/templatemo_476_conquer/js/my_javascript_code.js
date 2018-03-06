// 1. `When I hover on the navigation bar of your webpage, I want the hover effect to make the box white and the text inside the box Black`

var listElements = document.querySelectorAll(".nav.navbar-nav a")
for (var i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener("mouseover", function () {
        this.style.color = "black";
        this.style["background-color"] = "white";
    })
    listElements[i].addEventListener("mouseout", function () {
        this.style.color = "";
        this.style["background-color"] = "";
    })
}




// 2. `When I click the send button in the contact form I want to see all the information entered into the box popped up in an alert box`

// 3. `If any field is missing/empty when user clicks submit button on contact form, pop up and alert box saying the name of the missing field/fields`

var contactSubmit = document.getElementById("submit-btn");
contactSubmit.addEventListener("click", function(event) {
    var emptyFields = [];
    var fields = document.getElementsByClassName("form-control");
    for (var i = 0; i < fields.length; i++) {
        if (fields[i].value == "") {
            emptyFields.push(fields[i].id);
        }
    }
    var contactName = document.getElementById("name").value;
    var contactEmail = document.getElementById("mail").value;
    var contactSubject = document.getElementById("subject").value;
    var contactMessage = document.getElementById("comment").value;
    var alertMessage = "";
    if (emptyFields.length == 0) {
        alertMessage = "Name: "+contactName+"\n\n" + "Email: "+contactEmail+"\n\n"
        + "Subject: "+contactSubject+"\n\nMessage: "+contactMessage;
    } else {
        for (var x = 0; x < emptyFields.length; x++) {
            alertMessage += "Please fill in the field: "+ emptyFields[x]+" !\n"
        }
    }
    alert(alertMessage);
});


// 4. `On click of the green button, change the text of the button to a different text and the color of the button to a different colour `.

var greenButton = document.getElementsByClassName("green-btn")[0];
greenButton.addEventListener("click", function(event) {
    var colors = ["cyan", "pink", "red"];
    var text = ["butron geren", "tubbon reegn", "gneer buddon"];
    var randomColor = Math.floor(Math.random() * Math.floor(colors.length));
    var randomText = Math.floor(Math.random() * Math.floor(text.length));
    event.target.style.background = colors[randomColor];
    event.target.text = text[randomText];
});


// 5. `Link one of the div buttons to your public Facebook or Github profile (feel free to select any button you live"` (edited)

document.getElementById("change-url").href = "http://www.github.com/horunk";
