---
layout: post
title: 回溯法解数独（LeetCode【37】）
date: 2019-09-10
tags: [js, 算法, 回溯, 解数独]
---

题目来源是 LeetCode 第37题，求解数独

>```javascript
>const testInput = [
>  ['5','3','.','.','7','.','.','.','.'],
>  ['6','.','.','1','9','5','.','.','.'],
>  ['.','9','8','.','.','.','.','6','.'],
>  ['8','.','.','.','6','.','.','.','3'],
>  ['4','.','.','8','.','3','.','.','1'],
>  ['7','.','.','.','2','.','.','.','6'],
>  ['.','6','.','.','.','.','2','8','.'],
>  ['.','.','.','4','1','9','.','.','5'],
>  ['.','.','.','.','8','.','.','7','9'],
>]
>
>// 定义两个顶层变量，在循环中使用预存值
>const UNASSIGNED = '.'
>const correct = [0, '1', '2', '3', '4', '5', '6', '7', '8', '9']
>
>const solveSudoku = function (board) {
>  if (trySolve(board)) {
>    return board
>  }
>  return false
>};
>
>// 主方法
>function trySolve(board) {
>  let row = 0
>  let col = 0
>  let hasSpaces = false
>  // 寻找空白格并记录坐标
>  for (row = 0; row < board.length; ++row) {
>    for (col = 0; col < board[row].length; ++col) {
>      if (board[row][col] === UNASSIGNED) {
>        hasSpaces = true
>        break;
>      }
>    }
>    if (hasSpaces) {
>      break
>    }
>  }
>  // 求解成功
>  if (hasSpaces === false) {
>    return true
>  }
>  for (let num = 1; num <= 9; ++num) {
>    if (isSafe(board, row, col, correct[num])) {
>      // 找到可能的值即填入
>      board[row][col] = correct[num]
>      // 递归求解
>      if (trySolve(board)) {
>        return true
>      }
>      // 失败时的回溯点
>      board[row][col] = UNASSIGNED
>    }
>  }
>  return false
>}
>
>// 辅助方法，寻找合法值
>function isSafe(board, row, col, num) {
>  return (
>    !usedInRow(board, row, num)
>    && !usedInCol(board, col, num)
>    && !usedInBox(board, row - (row % 3), col - (col % 3), num) // 求所在梯度
>  )
>}
>
>function usedInRow(board, row, num) {
>  for (let col = 0; col < board.length; ++col) {
>    if (board[row][col] === num) {
>      return true
>    }
>  }
>  return false
>}
>
>function usedInCol(board, col, num) {
>  for (let row = 0; row < board.length; ++row) {
>    if (board[row][col] === num) {
>      return true
>    }
>  }
>  return false
>}
>
>function usedInBox(board, sRow, sCol, num) {
>  for (let row = 0; row < 3; ++row) {
>    for (let col = 0; col < 3; ++col) {
>      if (board[sRow + row][sCol + col] === num) {
>        return true
>      }
>    }
>  }
>  return false
>}
>```

可以看到，在主方法里寻找空白格时，每次都从左上角开始找，有一定的计算冗余，尝试过将上一次的空白格坐标传入递归函数，结果用时和内存消耗都出现一定的增长。

猜想：深层递归函数的参数，作为闭包变量被保存，增加了内存消耗。

> [原始链接]({{page.url}}) 版权声明：自由转载-非商用-非衍生-保持署名
