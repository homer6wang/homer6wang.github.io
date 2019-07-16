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
>  let low = 0
>  let high = arr.length - 1
>  let n = high
>  while (low <= high) {
>  let mid = low + ((high - low) >> 1)
>  if (arr[mid] >= value) {
>    high = mid - 1
>  } else {
>    low = mid + 1
>  }
>  }
>  if (low < n && arr[low] >= value) { // 如果查找精确值，则使用 arr[low] == value 判断
>    return low
>  } else {
>    return -1
>  }
>}
>```

查找最后一个小于等于 **value** 的值

>```javascript
>function searchLast(arr, value) {
>  let low = 0
>  let high = arr.length - 1
>  while (low <= high) {
>    let mid = low + ((high - low) >> 1)
>    if (arr[mid] <= value) {
>      low = mid + 1
>    } else {
>      high = mid - 1
>    }
>  }
>  if (high >= 0 && arr[high] <= value) { // 如果查找精确值，则使用 arr[low] == value 判断
>    return high
>  } else {
>    return -1
>  }
>}
>```

分析时，画一根数轴辅助判断分界点条件。元素大于一个时，区间循环至最后都会判断只有两个元素的情况，再进一步判断只有一个元素的情况。所以可以直接使用只有 **low** 和 **high** 两点的极简数轴开始分析。

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
