/*
 * @Author: your name
 * @Date: 2021-12-11 21:50:58
 * @LastEditTime: 2021-12-13 13:31:52
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \蹦达旅游\js\addEvent.js
 */

function addEvent(elem, type, handler){
    if (elem.addEventListener){
        elem.addEventListener(type, handler, false);
        return;
    } else if (elem.attachEvent){
        elem.attachEvent("on" + type, handler);
        return;
    }
}

function removeEvent(elem, type, handler){
    if (elem.removeEventListener){
        elem.removeEventListener(type, handler, false);
        return;
    } else if (elem.detachEvent){
        elem.detachEvent("on" + type, handler);
        return;
    }
}
