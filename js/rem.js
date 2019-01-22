
//rem第二种写法
(function (doc, win) {
    var docEl = doc.documentElement, //html
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', //事件名称
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 1200) {
                docEl.style.fontSize = '100px';
            }
            else {
                docEl.style.fontSize = 100 * (clientWidth / 1200) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    //doc.addEventListener('DOMContentLoaded', recalc, false);
    recalc();
})(document, window);


