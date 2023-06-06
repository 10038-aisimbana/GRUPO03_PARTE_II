function myFunction1() {
const myCollection = document.getElementsByTagName("h6");
const secondPara = document.getElementsByClassName("secondPara")[0];

for (let i = 0; i < myCollection.length; i++) {
myCollection[i].classList.remove("blue");
myCollection[i].classList.add("highlight");

if (i === 0) {
myCollection[i].classList.remove("highlight");
}

if (myCollection[i] === secondPara) {
    if (myCollection[i].classList.contains("blue")) {
    myCollection[i].classList.remove("blue");
} else {
myCollection[i].classList.add("blue");
}
}
}
}