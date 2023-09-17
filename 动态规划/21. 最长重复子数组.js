const findLength = (A, B) => {
    const m = A.length;
    const n = B.length;
    const dp = new Array(m + 1);
    for (let i = 0; i <= m; i++) { // 初始化整个dp矩阵，每个值为0
      dp[i] = new Array(n + 1).fill(0);
    }                                
    let res = 0;
    // i=0或j=0的base case，初始化时已经包括
    for (let i = 1; i <= m; i++) {    // 从1开始遍历
      for (let j = 1; j <= n; j++) {  // 从1开始遍历
        if (A[i - 1] == B[j - 1]) {     
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }                             // A[i-1]!=B[j-1]的情况，初始化时已包括了
        res = Math.max(dp[i][j], res);
      }
    }
    return res;
  };
  