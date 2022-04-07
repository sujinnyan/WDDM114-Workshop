let index = 0;

const img = document.querySelector("img");
const next = document.getElementById("next-button");
const back = document.getElementById("back-button");

const imgArray = [
    "https://github.com/sujinnyan/WDDM114-Workshop/blob/main/img/image-1.jpg",
    "https://github.com/sujinnyan/WDDM114-Workshop/blob/main/img/image-2.jpg",
    "https://github.com/sujinnyan/WDDM114-Workshop/blob/main/img/image-3.jpg",
    "https://github.com/sujinnyan/WDDM114-Workshop/blob/main/img/image-4.jpg",
];

// EVENT LISTENERS
next.addEventListener("click", imageNext);
back.addEventListener("click", imagePrevious);



function imageNext() {
    index++;
    img.src = imgArray[index % imgArray.length];
    console.log(index % imgArray.lenth);
}

function imagePrevious() {
    index--;

    if (index < 0) {
        index = imgArray.length - 1;
    }
        img.src = imgArray[index % imgArray.length];
        console.log(index % imgArray.lenth);
}
