/**
 * GO Music
 * Code By Hydrogen
 * 2021.06.14
 */

const default_name = "设备"
const display_name = document.getElementById("view_os");

display_name.innerHTML = getDisplaySystemName()

function getDisplaySystemName() {
    if (typeof navigator !== "object") return default_name;
    if (typeof navigator.userAgent === "string") {
        if (/.*?windows.*?/i.test(navigator.userAgent)) return "Windows";
        if (/.*?linux.*?/i.test(navigator.userAgent)) return "Linux";
        if (/.*?mac.*?/i.test(navigator.userAgent)) return "macOS";
        if (/.*?Litmus.*?/.test(navigator.userAgent)) return "Litmus OS";
        return default_name;
    } else return default_name;
}

function openEmail() {
    window.open(
        'mailto:?subject=%E8%AF%B7%E5%9C%A8%E6%AD%A4%E8%BE%93%E5%85%A5%E6%82%A8%E6%89%80%E8%A6%81%E5%8F%8D%E9%A6%88%E5%86%85%E5%AE%B9%E7%9A%84%E6%A0%87%E9%A2%98&amp;subject=%E4%B8%BB%E9%A2%98&amp;body=%E8%AF%B7%E8%BE%93%E5%85%A5%E6%89%80%E5%8F%8D%E9%A6%88%E7%9A%84%E5%86%85%E5%AE%B9&amp;bcc=kailunlark@aliyun.com;', '__blank')
}