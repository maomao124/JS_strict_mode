/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test11
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:54
 * Version(版本): 1.0
 * Description(描述)： 9、禁止使用 this 表示全局对象
 */

"use strict";

function test()
{
    console.log(this);
}

test();