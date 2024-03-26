关闭prettier/prettier 警告

resolve : 找到项目里的.eslintrc.js文件，在rules里面添加一句"prettier/prettier": "off"，重启项目；


## eslint报错
##### Unexpected aliasing of 'this' to local variable  @typescript-eslint/no-this-alias
情况  let _this = this;
原因  eslint 为了防止this变量和局部变量混淆
resolve 在.eslintrc.js中的rules添加 "@typescript-eslint/no-this-alias": ["off"]