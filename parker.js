console.log("Hello world");

let text = "Welcome to my portfolio!";
let i = 0;

let text2 = "I'm a Junior Computer Science student at Sacramento State University. Thank you for taking your time to learn a bit more about me";
let i2 = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typed").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 75);
    } else {
        
        setTimeout(secondWriter, 500);
    }
}

function secondWriter() {
    if (i2 < text2.length) {
        document.getElementById("babble").innerHTML += text2.charAt(i2);
        i2++;
        setTimeout(secondWriter, 50);
    }
}


window.onload = () => {
    typeWriter();
};
