const myList = document.getElementsByTagName("li");

for (let i = 0; i < myList.length; i += 1) {
  myList[i].style.color = "purple";
}

const errorNotPurple = document.getElementsByClassName("NOT");

for (let i = 0; i <= errorNotPurple.length; i += 1) {
  errorNotPurple[i].style.color = "black";
} 