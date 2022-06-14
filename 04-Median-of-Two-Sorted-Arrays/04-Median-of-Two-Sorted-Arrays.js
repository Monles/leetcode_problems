// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// merge sort
// complexity O(n + m)
function findMedianSortedArrays(nums1 = [], nums2 = []) {
  let i1 = 0;
  let i2 = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;

  if (len == 0) {
    return null;
  }

  const merged = [];
  while (i1 < len1 && i2 < len2) {
    if (nums1[i1] <= nums2[i2]) {
      merged.push(nums1[i1++]);
    } else {
      merged.push(nums2[i2++]);
    }
  }

  while (i1 < len1) {
    merged.push(nums1[i1++]);
  }

  while (i2 < len2) {
    merged.push(nums2[i2++]);
  }

  const isOdd = len % 2;
  if (isOdd) {
    return merged[(len - 1) / 2];
  } else {
    return (merged[len / 2] + merged[len / 2 - 1]) / 2;
  }
}

const nums1 = [1, 3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2));
