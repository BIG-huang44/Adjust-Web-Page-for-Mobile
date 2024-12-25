// ==UserScript==
// @name         优化移动端浏览器使用PC界面显示效果
// @namespace    https://github.com/BIG-huang44/
// @version      0.2
// @description  调整页面以适应移动设备
// @author       BIGhuang-44
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 设置页面的缩放比例
    document.body.style.zoom = '0.5'; // 根据需要调整缩放比例

    // 确保页面的宽度和高度适应屏幕
    document.documentElement.style.width = '100%';
    document.documentElement.style.height = '100%';
    document.body.style.width = '100%';
    document.body.style.height = '100%';

    // 处理溢出问题
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
})();