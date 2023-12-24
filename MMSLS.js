/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22661175&pid=d31781bb791dc6af50f9890f83e28150&tid=d567e72c48ed283380d14dc2b2b0971c",
    "https://www.maimemo.com/page?sid=21d60cb5fcd6734d691016c5a920f4af&uid=22661175&pid=e496a4457360e5ca610e011988edbc4d&tid=71f5043a69ee783a635779f532cda70e&view_time=1692954151&bind_user=0&create_user=0&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit5gfIORsk7hlfipMjy2oka0&token=0ae8547425c94e7756e11cffdba9399855f3444a608aaeeed16ae9a4118ebcd7&expired_time=2024-08-24T17:02:31%2008:00
",
    "https://www.maimemo.com/share/page?uid=22661175&pid=f978670f7809da85f5992372b1407f13&tid=198ae2ba9abd43955c9d965784e38593",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=22661175&pid=f978670f7809da85f5992372b1407f13&tid=198ae2ba9abd43955c9d965784e38593"
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
