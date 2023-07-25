/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=8c560b5b434e5133c42c5cd115c97084",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=8c560b5b434e5133c42c5cd115c97084",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=8c560b5b434e5133c42c5cd115c97084",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=8c560b5b434e5133c42c5cd115c97084",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=8c560b5b434e5133c42c5cd115c97084",
    "https://www.maimemo.com/share/page?uid=22661175&pid=c0599c0cf6d175b10d24b92a06f38ca6&tid=8c560b5b434e5133c42c5cd115c97084",
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
