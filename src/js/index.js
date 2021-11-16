// best slide
try{
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
}catch(e){
  console.log(e);
};


// ---------------------------------
// button-top
try{
  const topButton = document.querySelector('.button-top');
  
  const handleTopButton = () => {
    const viewPortHeight = document.documentElement.clientHeight;
    // window.scrollTo({top:viewPortHeight, left:0, behavior:'smooth'});
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  };
  topButton.addEventListener('click', handleTopButton);
}catch(e){
  console.log(e);
};


// ---------------------------------
// daily look
try{
  const dailyBox = document.querySelector('.daily__ul');
  const dailyContainer = document.querySelector('.daily__container');
  const len = dailyBox.children.length;
  
  
  let showSize = dailyBox.children[0].clientWidth;  // 아이템 하나의 초기값
  let showItem = Math.ceil(dailyBox.clientWidth / (showSize+20));
  
  // const dailyBoxWidth = (showSize + 20) * len;
  // console.log(dailyBoxWidth);
  // const target = dailyBoxWidth - dailyBox.clientWidth;
  // console.log(target);
  
  window.onresize = () => {   // 반응형이므로 사이즈 변경 방지
    showSize = dailyBox.children[0].clientWidth;
    showItem = Math.ceil(dailyBox.clientWidth / (showSize+20))
  };
  
  
  
  let dailyIdx = 0;
  let dailyCnt = 0;
  let cnt = 0;
  const dailyMove = () => {
    dailyIdx++;
    // cnt++;
    // console.log(showItem, len-dailyIdx)
    if(showItem > len-dailyIdx){
      console.log(showItem-len+dailyIdx-1)
      // console.log(dailyContainer.children[showItem-len+dailyIdx], showItem-len+dailyIdx);
      const newDaily = dailyContainer[showItem-len+dailyIdx].cloneNode(true);
      console.log(newDaily)
      dailyBox.appendChild(newDaily);
    }
    // if(cnt >= showSize){
    //   cnt = 0;
    //   dailyIdx ++;
    //   if(dailyIdx > len) dailyIdx = 0;
    //   console.log(dailyBox.children[dailyIdx-1], dailyIdx-1);
      // const newDaily = dailyBox.children[dailyIdx-1].cloneNode(true);
      // dailyBox.appendChild(newDaily);
      // dailyBox.removeChild(document.querySelector('.daily__ul').children[0]);
    //   dailyBox.style.transform = `translateX(${-dailyCnt}px)`;
    // }
    dailyBox.style.transform = `translateX(${-dailyIdx*(showSize+20)}px)`;
    // requestAnimationFrame(dailyMove);
  };
  
  // dailyMove();
  setInterval(dailyMove, 2000);
}catch(e){
  console.log(e);
};