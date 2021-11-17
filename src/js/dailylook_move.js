// ---------------------------------
// daily look

const dailyBox = document.querySelector('.daily__ul');
const len = dailyBox.children.length;

let showSize = dailyBox.children[0].clientWidth;  // 아이템 하나의 초기값
let showItem = Math.ceil(dailyBox.clientWidth / (showSize+20));

window.onresize = () => {   // 반응형이므로 사이즈 변경 방지
  showSize = dailyBox.children[0].clientWidth;
  showItem = Math.ceil(dailyBox.clientWidth / (showSize+20));
};

let dailyIdx = 0;
let cntClone = 0;
const dailyMove = () => {
  dailyIdx++;
  if(dailyIdx >= len - showItem && cntClone < showItem){
    const newDaily = dailyBox.children[cntClone].cloneNode(true);
    dailyBox.appendChild(newDaily);
    cntClone++;
  }
  dailyBox.style.transition = `all 1s`;
  dailyBox.style.transform = `translateX(${-dailyIdx*(showSize+20)}px)`;
  if(dailyIdx >= len){
    dailyIdx = 0;
    setTimeout(() => {
      dailyBox.style.transition = ``;
      dailyBox.style.transform = `translateX(${0}px)`;
    }, 1900);
  }
};

setInterval(dailyMove, 2000);