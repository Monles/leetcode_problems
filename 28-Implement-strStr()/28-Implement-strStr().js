var strStr = function (haystack, needle) {
  if (!needle.length) return 0;
  for (let i in haystack) {
    if (
      haystack[i] === needle[0] &&
      haystack.substring(i, Number(i) + needle.length) === needle
    ) {
      return i;
    }
  }
  return -1;
};
