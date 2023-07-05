// 描述
// 大家都知道斐波那契数列，现在要求输入一个正整数 n ，请你输出斐波那契数列的第 n 项。
// 斐波那契数列是一个满足 fib(x)=\left\{ \begin{array}{rcl} 1 & {x=1,2}\\ fib(x-1)+fib(x-2) &{x>2}\\ \end{array} \right.fib(x)={ 
// 1
// fib(x−1)+fib(x−2)
// ​
  
// x=1,2
// x>2
// ​
//   的数列
// 数据范围：1\leq n\leq 401≤n≤40
// 要求：空间复杂度 O(1)O(1)，时间复杂度 O(n)O(n) ，本题也有时间复杂度 O(logn)O(logn) 的解法
// 输入描述：
// 一个正整数n
// 返回值描述：
// 输出一个正整数。
// 示例1
// 输入：
// 4
// 返回值：
// 3
// 说明：
// 根据斐波那契数列的定义可知，fib(1)=1,fib(2)=1,fib(3)=fib(3-1)+fib(3-2)=2,fib(4)=fib(4-1)+fib(4-2)=3，所以答案为3。  

function Fibonacci(n)
{
    if(n==1||n==2)return 1
    const arr = [1,1]
    let temp
    for(let i=2;i<n;i++){
        temp = arr[0]+arr[1]
        arr[1]=arr[0]
        arr[0]=temp
    }
    return arr[0]
}
module.exports = {
    Fibonacci : Fibonacci
};