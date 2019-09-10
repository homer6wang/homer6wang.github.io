---
layout: post
title: 累加递归法求两数之商（LeetCode【29】）
date: 2019-08-01
tags: [js, 算法, 递归]
---

题目来源是 LeetCode 第29题
要求：给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。返回被除数 dividend 除以除数 divisor 得到的商。

如果我们把除法运算，看作是寻找被除数最多可以包含多少个除数。那么很自然可以想到，我们可以从0开始，一个一个地累加除数，直到和大于等于被除数，即可求得结果。

然而逐个累加的方法，在极大值除以极小值的情况下是无效的，过程太漫长了。

那么进一步想，既然是累加，何不累加上一次累加的结果，以达到倍增的效果。

下边就是该方法的实现

>```javascript
>function divide (dividend, divisor) {
>  if (dividend === 0) return 0
>  if (divisor === 1) return dividend
>  const min = -2147483648
>  const max = 2147483647
>  if (dividend === min && divisor === -1) return max
>  if (divisor === -1) return -dividend
>  let isDiff = (dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)
>  // 消除异号，统一比较规则
>  dividend = Math.abs(dividend)
>  divisor = Math.abs(divisor)
>  if (divisor > dividend) {
>    return 0
>  }
>  let count = 0
>  count = curSum(dividend, divisor, count, 0)
>  return isDiff ? -(count - 1) : (count - 1)
>}
>```

下边是递归累加操作

>```javascript
>function curSum(dividend, divisor, count, total) {
>  let gap = dividend - total
>  let i = 1
>  let sum = divisor
>  while (true) {
>    if (sum + sum > gap) { // 这里的重复计算，可以再优化消除
>      break
>    }
>    sum += sum
>    i += i
>  }
>  count += i
>  total += sum
>  // 这里边界条件可以再精细化，提前退出递归
>  if ((total + divisor) > dividend) {
>    count += 1
>    return count
>  }
>  if (total + divisor === dividend) {
>    count += 2
>    return count
>  }
>  return curSum(dividend, divisor, count, total)
>}
>```

累加之法虽然不如位运算高效，但是也实现了倍增效果，可以轻松应付极限值的情况。

以上。

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
