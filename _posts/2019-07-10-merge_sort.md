---
layout: post
title: 归并排序
date: 2019-07-10
tags: [js, 算法, 排序, 归并]
---

js 实现归并排序

> function mergeSort (arr, compareFn) {
> &nbsp;&nbsp;const {length} = arr
> &nbsp;&nbsp;if (length > 1) {
> &nbsp;&nbsp;&nbsp;&nbsp;let middle = Math.ceil(length / 2)
> &nbsp;&nbsp;&nbsp;&nbsp;let left = mergeSort(arr.slice(0, middle), compareFn)
> &nbsp;&nbsp;&nbsp;&nbsp;let right = mergeSort(arr.slice(middle), compareFn)
> &nbsp;&nbsp;&nbsp;&nbsp;arr = merge(left, right, compareFn)
> &nbsp;&nbsp;}
> &nbsp;&nbsp;return arr
> }

> function merge (left, right, compareFn) {
> &nbsp;&nbsp;let i = 0
> &nbsp;&nbsp;let j = 0
> &nbsp;&nbsp;let res = []
> &nbsp;&nbsp;while(i < left.length && j < right.length) {
> &nbsp;&nbsp;&nbsp;&nbsp;res.push(compareFn(left[i], right[j]) ? left[i++] : right[j++])
> &nbsp;&nbsp;}
> &nbsp;&nbsp;return res.concat(i < left.length ? left.slice(i) : right.slice(j))
> }

> function compareFn (a, b) {
> &nbsp;&nbsp;if(a < b) {return 1}
> &nbsp;&nbsp;return 0
> }

时间复杂度稳定为O(nlogn)

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
