//防抖
function debounce(fun,delay) {
  return function(args){
         let _this = this;
         let _args = args;
         clearTimeout(fun.id);
         fun.id = setTimeout(() => {
          fun.call(_this,_args)
         }, delay);
  }
}

//节流 

function throttle(fun,delay){
  return function(...args) {
    let nowTime = Date.now()
    if(!fun.time||nowTime-fun.time>=delay){
      fun.time = nowTime
      fun.call(this,args)
    }
  }
}


function request(params) {
  console.log('request ==> '+params);
}

const debounceRequest = debounce(request,1000)

const throttleRequest = throttle(request,1000)

export {
  debounceRequest,
  throttleRequest
}