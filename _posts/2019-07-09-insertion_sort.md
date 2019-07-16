---
layout: post
title: 插入排序
date: 2019-07-09
tags: [js, 算法, 插入排序]
---

js 实现插入排序

>```javascript
> function insertionSort (arr) {
>   const n = arr.length
>   if (n <= 1) return
>   for(let i = 1; i < n; ++i) { // (一)默认数组首位为已排序
>     if (arr[i] > arr[i - 1]) continue // (三)优化循环
>     let value = arr[i]
>     let j = i
>     for(; j > 0; --j) { // (二)内层循环为倒序，并且注意边界条件
>       if (arr[j - 1] > value) {
>         arr[j] = arr[j - 1]
>       } else {
>         break
>       }
>     }
>     arr[j] = value
>   }
> }
>```

稳定的原地排序

最好时间复杂度O(n)

最坏时间复杂度O(n^2)

平均时间复杂度O(n^2)

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
