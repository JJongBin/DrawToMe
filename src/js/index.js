const carousel = document.querySelector('.best');
const carouselScreen = carousel.querySelector('.best-swiper-container');
const numScreen = carouselScreen.childElementCount;
const prevBtn = carousel.querySelector('.swiper-prev');
const nextBtn = carousel.querySelector('.swiper-next');

let nowPos = 0;
const handlePrev = () => {
  const pos = 100 / numScreen;
  nowPos += pos;
  if(nowPos >= 0) nowPos = -(100 - 100 / numScreen);
  carouselScreen.style.transform = `translateX(${nowPos}%)`;
}
const handleNext = () => {
  const pos = 100 / numScreen;
  nowPos -= pos;
  if(nowPos <= -100) nowPos = 0;
  carouselScreen.style.transform = `translateX(${nowPos}%)`;
}


prevBtn.addEventListener('click', handlePrev);
nextBtn.addEventListener('click', handleNext);

