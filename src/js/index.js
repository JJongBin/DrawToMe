// best slide
const carousel = document.querySelector('.best');
const carouselScreen = carousel.querySelector('.best-swiper-container');
const numScreen = carouselScreen.childElementCount;
const prevBtn = carousel.querySelector('.swiper-prev');
const nextBtn = carousel.querySelector('.swiper-next');
const pagination = carousel.querySelector('.swiper-pagination');
const paginationChildren = pagination.children;

const handleDot = (now) => {
  paginationChildren[now*2].checked = true;
  const pos = now / numScreen * 100;
  if(carouselScreen.style.transform === ""){
    carouselScreen.style.transition = `all 1s`;
  }
  carouselScreen.style.transform = `translateX(${-pos}%)`;
};

const checkRadio = () => {
  for(let i = 0; i < paginationChildren.length; i=i+2){
    if(paginationChildren[i].checked === true) return i / 2;
  }
};

const handlePrev = () => {
  let idx = checkRadio();
  idx--;
  if(idx < 0) idx = numScreen - 1;
  handleDot(idx);
};
const handleNext = () => {
  let idx = checkRadio();
  idx++;
  if(idx > numScreen - 1) idx = 0;
  handleDot(idx);
};
const handlePage = () => {
  let idx = checkRadio();
  const pos = idx / numScreen * 100;
  carouselScreen.style.transform = `translateX(${-pos}%)`;
  console.log(carouselScreen.style.transition)
  // carouselScreen.style.transition = `translateX(${-pos}%)`;
};

prevBtn.addEventListener('click', handlePrev);
nextBtn.addEventListener('click', handleNext);
pagination.addEventListener('click', handlePage);


// ---------------------------------
// button-top
const topButton = document.querySelector('.button-top');

const handleTopButton = () => {
  const viewPortHeight = document.documentElement.clientHeight;
  window.scrollTo({top:viewPortHeight, left:0, behavior:'smooth'});
};
topButton.addEventListener('click', handleTopButton);


// ---------------------------------
// daily look
const dailyBox = document.querySelector('.daily__ul');
const dailyContainer = document.querySelector('.daily__container');
const len = dailyBox.children.length;

let showSize = dailyBox.children[0].clientWidth;  // 아이템 하나의 초기값
let showItem = Math.ceil(dailyBox.clientWidth / (showSize+20));

window.onresize = () => {   // 반응형이므로 사이즈 변경 방지
  showSize = dailyBox.children[0].clientWidth;
  showItem = Math.ceil(dailyBox.clientWidth / (showSize+20))
};

let dailyidx = 0;

const dailyMove = () => {
  dailyidx++;
  console.log(showItem, len-dailyidx)
  if(showItem > len-dailyidx){
    console.log(dailyContainer.children[showItem-len+dailyidx], showItem-len+dailyidx);
    dailyContainer.children[showItem-len+dailyidx].cloneNode(true);
  }
  dailyBox.style.transform = `translateX(${-dailyidx*(showSize+20)}px)`;
};

setInterval(dailyMove, 2000);