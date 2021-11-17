// ---------------------------------
// button-top
const topButton = document.querySelector('.button-top');
try{
  const handleTopButton = () => {
    const viewPortHeight = document.documentElement.clientHeight;
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  };
  topButton.addEventListener('click', handleTopButton);
}catch(e){
  // console.log(e);
};

window.addEventListener('scroll', function() {
  scrollPos = document.documentElement.scrollTop;
  if(scrollPos > 30){
    topButton.style.opacity = 1;
  }else{
    topButton.style.opacity = 0;
  }
});