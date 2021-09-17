/**
 * Vue的插件，用来获取和设置localStorage存储
 **/
let local = {
  save (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    return JSON.parse(localStorage.getItem(key)) || null
  },
  clear(){
    localStorage.clear()
  }
}
/**
 * Vue的插件，用来获取和设置sessionStorage存储
 **/
let session = {
  save (key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },
  fetch (key) {
    return JSON.parse(sessionStorage.getItem(key)) || null
  },
  clear(){
    sessionStorage.clear()
  }
}
/**
 * 用来判断对象是否为空
 **/
let objFunc = {
  isEmpty(obj){
    for(let key in obj){
      return false
    }
    return true
  }
}
/**
 * slideDown,slideUp
 **/
let vAnimate ={
  slideDown (id,gap,max){
    let slider = document.getElementById(id)
    slider.style.display = 'block'
    let maxheight = max;
    let time = gap * 1000;
    let timer = null;
    let init = (new Date()).getTime();
    let disp = maxheight;
    timer = setInterval(function () {
      let instance = (new Date()).getTime() - init;
      if(instance < time ) {
        let pos = Math.floor(disp * instance / time);
        slider.style.height =  pos + 'px';
      }else {
        slider.style.height = maxheight + 'px'; //safety side ^^
        clearInterval(timer);
      }
    },1)
  },
  slideUp (id,gap,min){
    let slider = document.getElementById(id)
    slider.style.padding='0'
    let time = gap * 1000;
    let timer = null;
    let init = (new Date()).getTime();
    let disp = Math.abs(parseInt(slider.style.height)-min);
    console.log(disp)
    timer = setInterval(function () {
      let instance = (new Date()).getTime() - init;
      if(instance < time ) {
        let pos = Math.floor(disp * (time-instance) / time);
        slider.style.height =  pos + 'px';
      }else {
        slider.style.height = 0 + 'px'; //safety side ^^
        slider.style.display = 'none'
        clearInterval(timer);
      }
    },1)
  }
}
export default {
  install: function (vm) {
    vm.prototype.$local = local
    vm.prototype.$session = session
    vm.prototype.$objFunc = objFunc
    vm.prototype.$vAnimate = vAnimate
  }
}
