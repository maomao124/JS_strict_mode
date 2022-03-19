/**
 * Project name(项目名称)：JS_strict_mode
 * File name(文件名): test8
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:48
 * Version(版本): 1.0
 * Description(描述)： 6、不允许写入只读属性
 */

"use strict";

var person = {name: "Peter", age: 18};
//静态方法Object.defineProperty()直接在对象上定义新属性，或修改对象上的现有属性，并返回该对象。
Object.defineProperty(person, "gender", {value: "male", writable: false});
person.gender = "female"; // 此处报错：Uncaught TypeError: Cannot assign to read only property 'gender' of object '#<Object>'