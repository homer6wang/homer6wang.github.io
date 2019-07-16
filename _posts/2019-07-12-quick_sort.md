---
layout: post
title: 快速排序
date: 2019-07-12
tags: [js, 算法, 排序, 快速, 快排]
---

js 实现快速排序

>function quickSort(arr, compareFn) {
>&nbsp;&nbsp;quick(arr, 0, arr.length - 1, compareFn)
>}

>function quick(arr, start, end, compareFn) {
>&nbsp;&nbsp;if (start >= end) return
>&nbsp;&nbsp;let pivot = partition(arr, start, end, compareFn)
>&nbsp;&nbsp;quick(arr, start, pivot - 1, compareFn)
>&nbsp;&nbsp;quick(arr, pivot + 1, end, compareFn)
>}

>function partition(arr, start, end, compareFn) {
>&nbsp;&nbsp;let value = arr[end]
>&nbsp;&nbsp;let i = start
>&nbsp;&nbsp;for (let j = start; j < end; j++) {
>&nbsp;&nbsp;if (compareFn(arr[j], value)) {
>&nbsp;&nbsp;&nbsp;&nbsp;swap(arr, i, j)
>&nbsp;&nbsp;&nbsp;&nbsp;i++
>&nbsp;&nbsp;}
>&nbsp;&nbsp;}
>&nbsp;&nbsp;swap(arr, i, end)
>&nbsp;&nbsp;return i
>}

>function swap(arr, i, j) {
>&nbsp;&nbsp;if (i === j) return
>&nbsp;&nbsp;let temp = arr[i]
>&nbsp;&nbsp;arr[i] = arr[j]
>&nbsp;&nbsp;arr[j] = temp
>}

>function compareFn(a, b) {
>&nbsp;&nbsp;if (a < b) return 1
>&nbsp;&nbsp;return 0
>}



是稳定排序，由于 merge 函数里使用临时变量 res，所以不是原地排序

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
