import Cookies from "js-cookie";

//*:系统token key
const TOKEN_KEY = "token";
// *:token 有效期
const TOKEN_TIME = 1;

/* 获取token */
export function getToken() {
  return Cookies.get(TOKEN_KEY);
}

/* 设置token */
export function setToken(token) {
  Cookies.set(TOKEN_KEY, token, { expires: TOKEN_TIME });
}

/* 删除token */
export function removeToken() {
  Cookies.remove(TOKEN_KEY);
}

/**
 * 设置 key
 * @param key 存储的key
 * @param val 存储的val
 * @param expires 有效事件expires, 默认时间:TOKEN_TIME
 * @returns {*}
 */
export function setKeyCookie(key, val, expires) {
  Cookies.set(key, val, { expires: expires ? expires : TOKEN_TIME });
}

export function getCookieKey(key) {
  return Cookies.get(key);
}

export function getCookieJsonKey(key) {
  return Cookies.getJSON(key);
}

export function removeCookieKey(key) {
  Cookies.remove(key);
}
