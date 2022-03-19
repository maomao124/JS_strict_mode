/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:40
 * Version(版本): 1.0
 * Description(描述)： 1、不允许使用未声明的变量
 */

"use strict";
s = 1;        // 此处报错：Uncaught ReferenceError: v is not defined
for (i = 0; i < 3; i++)
{ // 此处报错：Uncaught ReferenceError: i is not defined

}