// // ---------------------------------
history.scrollRestoration = "manual"    // 새로고침시 최상단으로

// // first page scroll
// window.addEventListener('wheel', function(event) {
//   const scrollPos = document.documentElement.scrollTop;
//   const viewHeight = window.innerHeight - 80;
//   // console.log(scrollPos)
//   // console.log(event.deltaY)
//   if(event.deltaY > 1 && scrollPos < viewHeight){
//     event.preventDefault();
//     event.stopPropagation();
//     window.scrollTo({top:viewHeight, left:0, behavior:'smooth'});
//   }
//   else if(event.deltaY < -1 && scrollPos <= viewHeight + 10){
//     event.preventDefault();
//     event.stopPropagation();
//     window.scrollTo({top:0, left:0, behavior:'smooth'});
//   }
// }, {passive : false});