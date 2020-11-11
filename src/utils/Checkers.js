/*
 * @Description: 
 * @version: 
 * @Author: ximusunian
 * @Date: 2020-09-09 11:31:36
 * @LastEditors: ximusunian
 * @LastEditTime: 2020-11-11 20:24:09
 */
function Checkers() {}
Checkers.isPhone = function(str) {
  let phone_reg = /^1[3456789]\d{9}$/;
  return phone_reg.test(str);
};
Checkers.isUserName = function(str) {
  let name_reg = /^[\u4E00-\u9FA5]{2,4}$/;
  return name_reg.test(str);
};

Checkers.isWechart = function() {
  let ua = navigator.userAgent.toLowerCase()
  return ua.match(/MicroMessenger/i) == "micromessenger"
}

Checkers.isApp = function() {
  let ua = navigator.userAgent
}

export default Checkers;
