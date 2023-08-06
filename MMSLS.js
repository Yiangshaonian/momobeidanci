/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=c5d6fc5069a75d3afac8621a19108534&tid=7e762afb66d953d2031e421aa5844a25",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c5d6fc5069a75d3afac8621a19108534&tid=7e762afb66d953d2031e421aa5844a25",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c5d6fc5069a75d3afac8621a19108534&tid=7e762afb66d953d2031e421aa5844a25",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=c5d6fc5069a75d3afac8621a19108534&tid=7e762afb66d953d2031e421aa5844a25",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c5d6fc5069a75d3afac8621a19108534&tid=7e762afb66d953d2031e421aa5844a25",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c5d6fc5069a75d3afac8621a19108534&tid=7e762afb66d953d2031e421aa5844a25",
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
