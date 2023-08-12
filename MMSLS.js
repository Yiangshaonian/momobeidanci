/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=e6258f92669a3d1531a77299453fc936",
    "https://www.maimemo.com/share/page?uid=22661175&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=e6258f92669a3d1531a77299453fc936",
    "https://www.maimemo.com/share/page?uid=22661175&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=e6258f92669a3d1531a77299453fc936",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=e6258f92669a3d1531a77299453fc936",
    "https://www.maimemo.com/share/page?uid=22661175&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=e6258f92669a3d1531a77299453fc936",
    "https://www.maimemo.com/share/page?uid=22661175&pid=2b7c1ecac6cfbdab50621ec07f792499&tid=e6258f92669a3d1531a77299453fc936",
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
