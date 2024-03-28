// call 实现
Function.prototype.myCall = function (content) {
  if (typeof this !== 'function') {
    console.error('类型出错')
    return
  }
  //如果content未传入则默认为window
  content = content || window;
  // 获取参数
  let args = [...arguments].slice(1);
  // 将调用函数设为content方法
  content.fn = this
  let result = content.fn(args);
  delete content.fn;
  return result;
}


Function.prototype.myApply = function (content) {
  if (typeof this !== 'function') {
    console.error('类型出错')
    return
  }
  content = content || window
  let result = null;
  content.fn = this;
  if (arguments[1]) {
    result = content, fn(...arguments[1])
  } else {
    result = content.fn
  }
  delete content.fn
  return result
}

Function.prototype.myBind = function (content) {
  if (typeof this !== 'function') {
    throw new TypeError("类型错误")
  }
  let args = [...arguments].slice(1)
  let fn = this
  return function Fn() {
    console.log(this);
    //除函数作为构造函数调用其余皆用content , 参数除调用bind的参数外还应有调用本函数所携带的参数
    return fn.apply(this instanceof Fn ? this : content, args.concat([...arguments]))
  }
}
function getUser(messgae) {
  console.log(this.name, this.age, messgae)
}

const user1 = {
  name: '小明',
  age: '19'
}

const user2 = {
  name: '小行明',
  age: '11'
}

getUser.myCall(user1, '用户1')
getUser.myCall(user2)
let out = getUser.myBind(user1, '用户2');