const headerTag = document.querySelector("header")
const contentTag = document.querySelector(".main-content")

const backBtn = document.querySelector(".main-content .slideBack")
const forwardBtn = document.querySelector(".main-content .slideForward")

const firstSlide = document.querySelector(".slideBar a:nth-child(1)")
const secondSlide = document.querySelector(".slideBar a:nth-child(2)")
const thirdSlide = document.querySelector(".slideBar a:nth-child(3)")

const numderTag = document.querySelector(".slideStatus p")

const bgImg = document.querySelector(".main-content")

const titleTag1 = document.querySelector(".main-content .title h1")
const titleTag2 = document.querySelector(".main-content .title h2")


let currentNumber = 1;


document.addEventListener("scroll", function(){
    
    let contentBottom = contentTag.getBoundingClientRect().bottom;
    let windowBottom = window.innerHeight;

    if(Math.abs(windowBottom - contentBottom) > 200){
        headerTag.style.background = "rgba(17, 17, 17, 0.3)";
        headerTag.style.transition = "0.5s all ease";
        headerTag.style.backdropFilter = "blur(20px)";
    }else{
        headerTag.style.background = "none";
        headerTag.style.backdropFilter = "none";
    }
})


backBtn.addEventListener("click", function(){
    currentNumber--;

    if(currentNumber<1){
        currentNumber = 3;
    }
    console.log(currentNumber);

    bgImg.style.backgroundImage = `url(Image/mainImg-${currentNumber}.png)`;

    numderTag.innerHTML = principles[currentNumber-1].number;
    titleTag1.innerHTML = principles[currentNumber-1].big;
    titleTag2.innerHTML = principles[currentNumber-1].small;

    bgImg.style.transition = "0.5s all ease";
})

forwardBtn.addEventListener("click", function(){
    currentNumber++;

    if(currentNumber>3){
        currentNumber = 1;
    }
    console.log(currentNumber);

    bgImg.style.backgroundImage = `url(Image/mainImg-${currentNumber}.png)`;

    numderTag.innerHTML = principles[currentNumber-1].number;
    titleTag1.innerHTML = principles[currentNumber-1].big;
    titleTag2.innerHTML = principles[currentNumber-1].small;

    bgImg.style.transition = "0.5s all ease";
})



const principles = [
    {
        number: "1",
        big: "Outstanding<br>Original Technology",
        small: "세계 1위 연질과 RP Scherer의 원천기술을 계승합니다",
    },
    {
        number: "2",
        big: "World Class<br>Quality",
        small: "엄격하고 철저한 품질 관리를 통한 세계적 수준의 제품 퀄리티를 선보입니다",
    },
    {
        number: "3",
        big: "Growing Together<br>in Lives",
        small: "인류의 건강을 위해 고객과 함께 성장하는 바이오 혁신 기업이 되겠습니다",
    },
]