/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test10
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:52
 * Version(版本): 1.0
 * Description(描述)： 8、不能在 if 语句中声明函数
 */

"use strict";

//如果在if语句中声明函数，则会产生语法错误
if (true)
{
    function test()
    { // 此处报错：Uncaught ReferenceError: demo is not defined
    }
}
test();