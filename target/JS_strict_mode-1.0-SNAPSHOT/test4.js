/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test4
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:42
 * Version(版本): 1.0
 * Description(描述)： 2、不允许删除变量或函数
 */

"use strict";
var person = {name: "Peter", age: 28};
delete person;  // 此处报错：Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
function sum(a, b)
{
    return a + b;
}

delete sum;  // 此处报错：Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.