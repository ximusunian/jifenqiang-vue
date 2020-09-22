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

export default Checkers;
