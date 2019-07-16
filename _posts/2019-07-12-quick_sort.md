---
layout: post
title: 快速排序
date: 2019-07-12
tags: [js, 算法, 排序, 快速, 快排]
---

js 实现快速排序

>```javascript
>function quickSort(arr, compareFn) {
>  quick(arr, 0, arr.length - 1, compareFn)
>}
>
>function quick(arr, start, end, compareFn) {
>  if (start >= end) return
>  let pivot = partition(arr, start, end, compareFn)
>  quick(arr, start, pivot - 1, compareFn)
>  quick(arr, pivot + 1, end, compareFn)
>}
>
>function partition(arr, start, end, compareFn) {
>  let value = arr[end]
>  let i = start
>  for (let j = start; j < end; j++) {
>  if (compareFn(arr[j], value)) {
>    swap(arr, i, j)
>    i++
>  }
>  }
>  swap(arr, i, end)
>  return i
>}
>
>function swap(arr, i, j) {
>  if (i === j) return
>  let temp = arr[i]
>  arr[i] = arr[j]
>  arr[j] = temp
>}
>
>function compareFn(a, b) {
>  if (a < b) return 1
>  return 0
>}
>```

最好时间复杂度O(nlogn)

最坏时间复杂度O(n^2)

平均时间复杂度O(nlogn)

是原地排序，由于 **partition** 存在元素交换，所以不是稳定排序。


> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
