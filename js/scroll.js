/*
 * @Author: your name
 * @Date: 2021-12-11 21:50:58
 * @LastEditTime: 2021-12-13 13:32:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \蹦达旅游\js\scroll.js
 */

function  show(id){
    id.style.display = "block";
}

function  hide(id){
    id.style.display = "none";
}

function scroll() {
    if (window.pageYOffset != null) {
        /*
         * window.pageYOffset　有效
         * */
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    } else if (document.compatMode === "CSS1Compat") {
        /*
         * chrome 浏览器中虽然标准一致, 但是document.documentElement.scrollTop 等于０
         * firefox 有效
         * */
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    } else {
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}