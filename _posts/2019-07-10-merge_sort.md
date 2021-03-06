---
layout: post
title: 归并排序
date: 2019-07-10
tags: [js, 算法, 排序, 归并]
---

js 实现归并排序

>```javascript
> function mergeSort (arr, compareFn) {
>   const {length} = arr
>   if (length > 1) {
>     let middle = Math.ceil(length / 2)
>     let left = mergeSort(arr.slice(0, middle), compareFn)
>     let right = mergeSort(arr.slice(middle), compareFn)
>     arr = merge(left, right, compareFn)
>   }
>   return arr
> }
>
> function merge (left, right, compareFn) {
>   let i = 0
>   let j = 0
>   let res = []
>   while(i < left.length && j < right.length) {
>     res.push(compareFn(left[i], right[j]) ? left[i++] : right[j++])
>   }
>   return res.concat(i < left.length ? left.slice(i) : right.slice(j))
> }
>
> function compareFn (a, b) {
>   if(a < b) {return 1}
>   return 0
> }
>```

时间复杂度稳定为O(nlogn)

是稳定排序，由于 merge 函数里使用临时变量 res，所以不是原地排序

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
