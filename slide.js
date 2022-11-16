const slideWrapper = document.querySelector('.slide-wrapper');
const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide li')
const buttonPrev = document.querySelector('.prev')
const buttonNext = document.querySelector('.next')


const imgNum = slideImg.length; // 목록 갯수
console.log(imgNum)
const imgWidth = 1900; // 이미지 장당 넓이
const margin = 0; // 사이 여백
const viewImg = 1; // 보여줄 갯수

let count = 0;

//감싸는 요소의 넓이 구하기
// slide.style.width = (imgWidth + margin) * imgNum - margin + 'px';
//1620 = (300+30)*5-30

//함수작성
function mSlide(n){
  // slide.style.width = (imgWidth + margin) * imgNum - margin + 'px';
  slide.style.left = -(imgWidth + margin) * n + 'px'; //-330 , -660................................
  count = n;
  console.log(slide.style.left);
}

// 3초마다 mSlide를 호출하여 자동으로 움직이게
let Timer = setInterval(function(){
  if(count<imgNum-viewImg){
    mSlide(count+1);
  }else{
    mSlide(0)
  }
},3000)

// 버튼클릭시 해당 방향으로 움직이게 하기
buttonPrev.addEventListener('click',function(){
  if(count>0){
    mSlide(count-1);
  }else{
    mSlide(imgNum-viewImg);
  }
});
buttonNext.addEventListener('click',function(){
  if(count<imgNum-viewImg){
    mSlide(count+1);
  }else{
    mSlide(0)
  }
});