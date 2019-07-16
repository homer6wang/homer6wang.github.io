---
layout: post
title: 二分法查找近似值
date: 2019-07-16
tags: [js, 算法, 二分查找, 变体, 查找近似值]
---

在数组中查找近似值分两种情况，一是查找第一个大于等于 **value** 的值，二是查找最后一个小于等于 **value** 的值。下面基于 js 分别实现。

查找第一个大于等于 **value** 的值

>```javascript
>function searchFirst(arr, value) {
>&nbsp;&nbsp;let low = 0
>&nbsp;&nbsp;let high = arr.length - 1
>&nbsp;&nbsp;let n = high
>&nbsp;&nbsp;while (low <= high) {
>&nbsp;&nbsp;let mid = low + ((high - low) >> 1)
>&nbsp;&nbsp;if (arr[mid] >= value) {
>&nbsp;&nbsp;&nbsp;&nbsp;high = mid - 1
>&nbsp;&nbsp;} else {
>&nbsp;&nbsp;&nbsp;&nbsp;low = mid + 1
>&nbsp;&nbsp;}
>&nbsp;&nbsp;}
>&nbsp;&nbsp;if (low < n && arr[low] >= value) { // 如果查找精确值，则使用 arr[low] == value 判断
>&nbsp;&nbsp;&nbsp;&nbsp;return low
>&nbsp;&nbsp;} else {
>&nbsp;&nbsp;&nbsp;&nbsp;return -1
>&nbsp;&nbsp;}
>}
>```

查找最后一个小于等于 **value** 的值

>```javascript
>function searchLast(arr, value) {
>&nbsp;&nbsp;let low = 0
>&nbsp;&nbsp;let high = arr.length - 1
>&nbsp;&nbsp;while (low <= high) {
>&nbsp;&nbsp;&nbsp;&nbsp;let mid = low + ((high - low) >> 1)
>&nbsp;&nbsp;&nbsp;&nbsp;if (arr[mid] <= value) {
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;low = mid + 1
>&nbsp;&nbsp;&nbsp;&nbsp;} else {
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;high = mid - 1
>&nbsp;&nbsp;&nbsp;&nbsp;}
>&nbsp;&nbsp;}
>&nbsp;&nbsp;if (high >= 0 && arr[high] <= value) { // 如果查找精确值，则使用 arr[low] == value 判断
>&nbsp;&nbsp;&nbsp;&nbsp;return high
>&nbsp;&nbsp;} else {
>&nbsp;&nbsp;&nbsp;&nbsp;return -1
>&nbsp;&nbsp;}
>}
>```

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
