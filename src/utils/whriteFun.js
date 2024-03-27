// call 实现
Function.prototype.myCall = function (content) {
  if (typeof this !== 'function') {
    console.error('类型出错')
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
getUser.myCall()