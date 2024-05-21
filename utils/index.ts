/**
 * 生成随机整数 [n,m]
 */
export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 获取assets静态资源
 */
export function getAssetsFile(url: string) {
  return new URL(`../assets/${url}`, import.meta.url).href;
}

/**
 * 防抖
 */
let timeout: number | null;
export function debounce(func: Function, wait = 300, immediate = false) {
  // 清除定时器
  if (timeout !== null) {
    clearTimeout(timeout);
  }
  // 立即执行
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow) typeof func === "function" && func();
  } else {
    timeout = setTimeout(() => {
      typeof func === "function" && func();
    }, wait);
  }
}
