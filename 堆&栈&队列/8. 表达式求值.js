// 将中缀表达式化为逆波兰表达式

// 借助两个栈，一个存放数字，一个存放操作符

// 思路：

// 初始化：

// 将运算符加入到map里面，设定优先级，注意(的优先级最低
// 将字符串的空格删除
// 遍历字符串：

// 数字：加入数组，注意数字可能占多位
// 左括号：直接push到ops栈
// 右括号：从nums栈pop两个数字，进行运算，运算的结果push回nums栈，直至碰到(
// 其他运算符：
// 如果当前运算符的优先级
// ≤
// ≤ops的最后一个，一直运算(例子：5*2+3，碰到+的时候计算5*2)
// 如果当前运算符的
// >
// >ops的最后一个，将运算符push到ops(例子：5+2*3，碰到*的时候将*push到ops栈)
// 注意：

// 必须
// ≤
// ≤才可以，不可以是<,比如1-2-3，如果碰到第二个减法依然不进行运算，那么之后回进行2-3的运算，出现错误

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */
function solve( s ) {
    let nums = [];
    let ops = [];
    let map = new Map();
    
    //初始化函数，设定运算符优先级，把字符串中的空格去除
    function init(){
      map.set('(', -1);
      map.set('+',1);
      map.set('-',1);
      map.set('*',2);
      s = s.replace(' ','');
    }
    
    function calc(){
      let right = nums.pop();
      let left = nums.pop();
      let sign = ops.pop();
      switch(sign){
          case'+':nums.push(left+right);break;
          case'-':nums.push(left-right);break;
          case'*':nums.push(left*right);break;
          case'/':nums.push(left/right);break;
      }
    }
      
      init();
      let i = 0;
      while(i<s.length){
        if( s[i]>='0' && s[i]<='9'  ){//处理数字
          let value = 0;
          while( s[i]>='0' && s[i]<='9' ){
            value = value*10 + parseInt(s[i]);
            i++;
          }
          nums.push(value);
        }else if( s[i]=='(' ){//碰到左括号近栈
          ops.push('(');
          i++;
        }else if( s[i]==')' ){//计算到最近的一个左括号为止
          while( ops[ops.length-1] != '(' ){
            calc();
          }
          ops.pop();//把左括号弹出
          i++;
        }else{//运算符
          if(ops.length==0){//栈为空时，遇到运算符，直接入栈
            ops.push( s[i] );
          }else if( map.get(s[i]) > map.get( ops[ops.length-1] ) ){//当前运算符优先级高于之前的  5+2*3
            ops.push( s[i] );
          }else{//当前运算符优先级<=之前的  5*2-3
            do{
              calc();
            }while( map.get(s[i]) <= map.get( ops[ops.length-1] ) );
            ops.push( s[i] );
          }
          i++;
        }
      }
      while(ops.length)
        calc();
    return nums[0];
  }

  













  function solve (s) {
    // 判断是否为数字
    const isNum = c => +c >= 0 && +c <= 9;
    // 计算的二次封装，迭代计算
    // 如果想终止迭代计算，请返回 false
    const iteratorCalc = (optStack, callback) => {
      // 依据内容进行计算，计算成功返回 true
      const calc = (nums, opts) => {
        // 我们在封装一个函数时，需要确保自己的安全性
        // 因为我们不能确保传入的 nums 或 opts 是合法的
        // 所以下面这两个 if 判断并不是非必要的
        if (nums.length < 2) return false;
        if (!opts.length || opts[opts.length - 1] === "(") return false;
        let num2 = nums.pop();
        let num1 = nums.pop();
        let opt = opts.pop();
        switch (opt) {
          case "+":
            num1 += num2;
            break;
          case "-":
            num1 -= num2;
            break;
          case "*":
            num1 *= num2;
            break;
          case "/":
            num1 = ~~(num1 / num2);
            break;
        }
        nums.push(num1);
        return true;
      };
      // 运算符优先级
      const optPrioMap = {
        "-": 1,
        "+": 1,
        "*": 2,
        "/": 2
      };
      while (optStack.length && callback(calc, optPrioMap));
    };
    // 预处理字符串，替换所有的 ' '
    s = s.replaceAll(' ', '');
    const n = s.length;
    // 这里 numStack 初始化时，添加了一个 0
    // 用于预防 + 1 或者 - 1 开头的情况， 添加 0 后就变为 0 + 1 或 0 - 1
    // 如果不是 + 1 或 - 1 开头的情况，由于我们是依据操作符进行计算，所以不会造成影响
    const numStack = [0];
    const optStack = [];
    for (let i = 0; i < n; i++) {
      if (s[i] === "(") { // 将左括号加入到栈中，后面进行右括号的清栈计算时，碰到左括号即可弹出
        optStack.push(s[i]);
      } else if (s[i] === ")") {
        // 我们每次碰到右括号都需要进行一次清栈，将与当前右括号匹配的左括号中的式子计算
        iteratorCalc(optStack, calc => {
          // 这里碰到左括号表明计算结束了，可以弹出
          if (optStack[optStack.length - 1] === '(') {
            optStack.pop();
            return false;
          }
          // 这里返回了 calc 是为了满足 iteratorCalc 的要求，calc 表示运算是否成功
          return calc(numStack, optStack)
        });
      } else if (isNum(s[i])) { // 取出当前整个数字
        let num = 0;
        while (i < n && isNum(s[i])) {
          num = num * 10 + +s[i];
          i++;
        }
        i--;
        numStack.push(num);
      } else { // + - * / 符号
        // 这里为什么需要推入个 0 呢？
        // 这是为了方便 calc 计算，如 (+1) || (-1)
        // 我们添个 0 就变为了 (0 + 1) || (0 - 1)
        if (i > 0 && s[i - 1] === '(' && (s[i] === "+" || s[i] === "-")) {
          numStack.push(0);
        }
        // 每当我们遇到一个运算符时，可以进行一次清栈计算
        // 这样如果是一连串相同优先级的运算符的运算，就可以全部计算完成，不会导致栈过大
        iteratorCalc(optStack, (calc, optPrioMap) => {
          let pre = optStack[optStack.length - 1];
          if (optPrioMap[pre] < optPrioMap[s[i]]) return false;
          return calc(numStack, optStack);
        });
        optStack.push(s[i]);  // 我们把推入操作的步骤放在，计算的后面，这是为了先计算前面的部分
      }
    }
    // 最后一次清栈运算，保证所有的运算符都使用了
    iteratorCalc(optStack, calc => calc(numStack, optStack));
    // 栈顶的元素就是我们的结果
    return numStack.pop();
  }