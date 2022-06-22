class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0:
            return 0

        for h_idx in range(0, len(haystack)):
            if haystack[h_idx] == needle[0]:
                sub_hidx = h_idx
                idx_found = True
                for n_idx in range(0, len(needle)):
                    if sub_hidx >= len(haystack) or needle[n_idx] != haystack[sub_hidx]:
                        idx_found = False
                        break
                    else:
                        sub_hidx += 1
                if idx_found:
                    return h_idx
        return -1
