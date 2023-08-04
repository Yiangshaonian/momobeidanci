/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=368d4252eecd273b266c80502edc45f4&tid=fe22fe847b8209eee7ddf4a2cfc37ae7",
    "https://www.maimemo.com/share/page?uid=22661175&pid=368d4252eecd273b266c80502edc45f4&tid=fe22fe847b8209eee7ddf4a2cfc37ae7",
    "https://www.maimemo.com/share/page?uid=22661175&pid=368d4252eecd273b266c80502edc45f4&tid=fe22fe847b8209eee7ddf4a2cfc37ae7",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=13db032f5736ee8b095aed31bb00f37b",
    "https://www.maimemo.com/share/page?uid=22661175&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=13db032f5736ee8b095aed31bb00f37b",
    "https://www.maimemo.com/share/page?uid=22661175&pid=4ab5fc0f0af2e5ebfda6ce2ad84b201c&tid=13db032f5736ee8b095aed31bb00f37b",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
