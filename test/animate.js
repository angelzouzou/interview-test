// Test 3

export const animate = (ele,target) => {
  // 此方法无法限定秒数
  clearInterval(ele.timer);
  ele.timer = setInterval(() => {
    let step = Math.abs(target-ele.offsetLeft)/10;
    ele.style.left = ele.offsetLeft + step + "px";
    if (Math.abs(target-ele.offsetLeft) <= step){
      ele.style.left = target + "px";
      clearInterval(ele.timer);
    }
  },30);
};
