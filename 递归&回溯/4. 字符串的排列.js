
// 描述
// 输入一个长度为 n 字符串，打印出该字符串中字符的所有排列，你可以以任意顺序返回这个字符串数组。
// 例如输入字符串ABC,则输出由字符A,B,C所能排列出来的所有字符串ABC,ACB,BAC,BCA,CBA和CAB。
// 输入：
// "ab"
// 复制
// 返回值：
// ["ab","ba"]
// 复制
// 说明：
// 返回["ba","ab"]也是正确的    



//通过在原数组进行交换的方式，实现全排列

function Permutation(str)
{
    let Str=[...str];//转为数组才能实现交换操作
    dfs(Str,0);
    return res;
}
let res=[];
function dfs(str,index){
    if(index===str.length-1){//递归到最后一位就不需要交换了，因为最多也只能同自己交换，值没变化
        //push是通过地址操作的，而我们的str是定义在外部的，没有随for循环改变,如果直接push(str)，结果是每个值都相同，
        //只能存到另一个变量中来避免
        let c=[...str];
        res.push(c.join(''));//转为字符串，返回结果
        return;
    }
    let tmp=new Set();//set对象存储任何类型的唯一值,每一个for循环都新建一个，只保证当前index不相同值交换
    for(let i=index;i<str.length;i++){
        if(tmp.has(str[i]))  continue;//如果有相同的，跳过，不进行交换
        tmp.add(str[i]);
        swap(str,index,i);
        dfs(str,index+1);
        swap(str,index,i);//因为是在原字符串交换，所以递归之后还要换回来
    }
}

function swap(str,l,r){
    let tmp=str[l];
    str[l]=str[r];
    str[r]=tmp;
}
module.exports = {
    Permutation : Permutation
};
