/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=8dec44c609a537d108b6909d2d0600a1&tid=788ed4a96a0178ddbb5dd35b0a596de5",
    "https://www.maimemo.com/share/page?uid=22661175&pid=8dec44c609a537d108b6909d2d0600a1&tid=788ed4a96a0178ddbb5dd35b0a596de5",
    "https://www.maimemo.com/share/page?uid=22661175&pid=8dec44c609a537d108b6909d2d0600a1&tid=788ed4a96a0178ddbb5dd35b0a596de5",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=8dec44c609a537d108b6909d2d0600a1&tid=788ed4a96a0178ddbb5dd35b0a596de5",
    "https://www.maimemo.com/share/page?uid=22661175&pid=8dec44c609a537d108b6909d2d0600a1&tid=788ed4a96a0178ddbb5dd35b0a596de5",
    "https://www.maimemo.com/share/page?uid=22661175&pid=8dec44c609a537d108b6909d2d0600a1&tid=788ed4a96a0178ddbb5dd35b0a596de5",
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
