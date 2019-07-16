function quickSort(arr, compareFn) {
  quick(arr, 0, arr.length - 1, compareFn)
}

function quick(arr, start, end, compareFn) {
  if (start >= end) return
  let pivot = partition(arr, start, end, compareFn)
  quick(arr, start, pivot - 1, compareFn)
  quick(arr, pivot + 1, end, compareFn)
}

function partition(arr, start, end, compareFn) {
  let value = arr[end]
  let i = start
  for (let j = start; j < end; j++) {
    if (compareFn(arr[j], value)) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, end)
  return i
}

function swap(arr, i, j) {
  if (i === j) return
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function compareFn(a, b) {
  if (a < b) return 1
  return 0
}

function partSort(arr) {
  const { length } = arr
  let i = 0
  let j = 0
  let x = length - 1
  let y = length - 1
  while (x >= i || j <= y) {
    if (x >= i) {
      if (isSmall(arr[j])) {
        swap(arr, i, j)
        ++i
      }
      ++j
    }
    if (j <= y) {
      if (isBig(arr[x])) {
        swap(arr, x, y)
        --y
      }
      --x
    }
  }
}

function isBig(str) {
  let reg = /^[A-Z]$/
  return reg.test(str)
}

function isSmall(str) {
  let reg = /^[a-z]$/
  return reg.test(str)
}

function swap(arr, i, j) {
  if (i === j) return
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function searchFirst(arr, value) {
  let low = 0
  let high = arr.length - 1
  let n = high
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] >= value) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  if (low < n && arr[low] == value) {
    return low
  } else {
    return -1
  }
}

function searchLast(arr, value) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = low + ((high - low) >> 1)
    if (arr[mid] <= value) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  if (high >= 0 && arr[high] == value) {
    return high
  } else {
    return -1
  }
}
