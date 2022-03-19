/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test6
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:45
 * Version(版本): 1.0
 * Description(描述)： 4、eval 语句的作用域是独立的
 */

"use strict";

eval
(
    "var x = 5; console.log(x);"
);
console.log(x);     // 此处报错：Uncaught ReferenceError: x is not defined