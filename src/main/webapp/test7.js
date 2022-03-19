/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test7
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:46
 * Version(版本): 1.0
 * Description(描述)： 5、不允许使用 with 语句
 */

"use strict";

var radius1 = 5;
var area1 = Math.PI * radius1 * radius1;
var radius2 = 5;
with (Math)
{        // 此处报错：Uncaught SyntaxError: Strict mode code may not include a with statement
    var area2 = PI * radius2 * radius2;
}