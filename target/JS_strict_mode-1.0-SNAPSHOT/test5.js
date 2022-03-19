/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test5
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:42
 * Version(版本): 1.0
 * Description(描述)： 3、函数中不允许有同名的参数
 */

"use strict";

function square(a, a)
{     // 此处报错：Uncaught SyntaxError: Duplicate parameter name not allowed in this context
    return a * a;
}

function f()
{
    var c=1;
    var c=2;
}