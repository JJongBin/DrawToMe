// ---------------------------------
// detail slide
try{

  const carousel = document.querySelector('.detail-wraper');
  const carouselScreen = carousel.querySelector('.detail-swiper-container');
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
    };
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
  };
  
  prevBtn.addEventListener('click', handlePrev);
  nextBtn.addEventListener('click', handleNext);
  pagination.addEventListener('click', handlePage);
}catch(e){
  
}