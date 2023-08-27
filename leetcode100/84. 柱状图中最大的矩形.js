/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
     // 记录左边界数组，所有元素初始化为-1
     let leftBorder=new Array(heights.length).fill(-1),
     // 记录右边界数组，所有元素初始化为数组长度
     rightBorder=new Array(heights.length).fill(heights.length), 
     // 栈
     stack=[],
     // 最大面积
     maxArea=0;
 
     // 从左到右遍历高度，获取左/右边界
     for(let i=0;i<heights.length;i++){
         
         // 当栈顶元素大于等于当前元素，证明栈顶元素不是当前元素的左边界，
         // 而当前元素则是栈顶元素的右边界，记录栈顶元素右边界，然后出栈
         while(stack.length>0&&heights[stack[stack.length - 1]]>=heights[i]){
              rightBorder[stack[stack.length - 1]]=i
              stack.pop()
         }
         // 当栈不为空，则此时栈顶元素是小于当前元素的，为当前元素的左边界
         if(stack.length>0)leftBorder[i]=stack[stack.length - 1];
         // 否则栈为空，证明当前元素左边界超出数组范围，需要置为-1，
         // 由于默认值为-1，因此无需重新赋值
 
         // 给栈添加当前元素
         stack.push(i);
     }
     // 遍历左右边界，计算面积，获取最大面积
     for(let i=0;i<heights.length;i++){
         let area=(rightBorder[i]-leftBorder[i]-1)*heights[i]
         if(area>maxArea)maxArea=area;
     }
     // 返回最大面积
     return maxArea
};