/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test9
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:50
 * Version(版本): 1.0
 * Description(描述)： 7、不允许使用八进制数
 */

"use strict";

var x = 010; // 此处报错：Uncaught SyntaxError: Octal literals are not allowed in strict mode.
console.log(x);