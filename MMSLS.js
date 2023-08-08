/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=1d957b940f12e06d8332e05f64c037c7&tid=48a4b9128541d17f6b884ab0fbf58889",
    "https://www.maimemo.com/share/page?uid=22661175&pid=1d957b940f12e06d8332e05f64c037c7&tid=48a4b9128541d17f6b884ab0fbf58889",
    "https://www.maimemo.com/share/page?uid=22661175&pid=1d957b940f12e06d8332e05f64c037c7&tid=48a4b9128541d17f6b884ab0fbf58889",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=1d957b940f12e06d8332e05f64c037c7&tid=48a4b9128541d17f6b884ab0fbf58889",
    "https://www.maimemo.com/share/page?uid=22661175&pid=1d957b940f12e06d8332e05f64c037c7&tid=48a4b9128541d17f6b884ab0fbf58889",
    "https://www.maimemo.com/share/page?uid=22661175&pid=1d957b940f12e06d8332e05f64c037c7&tid=48a4b9128541d17f6b884ab0fbf58889",
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
