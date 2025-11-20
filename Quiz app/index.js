import { validateName } from './validation/validation.js';


//Validate Name Input
window.handleKeyUp = (value) => {
    if(!validateName(value)){
        document.getElementById("warning").innerText = "Input valid name characters between 4-30"
    } else {
        document.getElementById("warning").innerText = "";
    }
};

window.start = () => {
    let name = document.getElementById('name').value;
    if(!validateName(name)){
        alert("Please enter a valid name..")
    } else {
         window.location.href = `main.html?name=${encodeURIComponent(name)}`
    }
}


/* ✅ window.location.href
This means go to another page (புதிய பக்கம் செல்லும் வழி).
window.location is the current URL (தற்போதைய இணைய முகவரி).
.href is used to change the URL → so it will redirect (வழிமாற்றம் செய்யும்).

~ this is called backstick
*/