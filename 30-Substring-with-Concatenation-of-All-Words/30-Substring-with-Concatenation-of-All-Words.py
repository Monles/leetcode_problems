class Solution:
    def findSubstring(self, s, words):
        wlen = len(words[0])
        total_wlen = wlen*len(words)

        word_to_index = {}
        idx = 0

        starts = {}
        r = []

        for word in words:
            if word not in word_to_index:
                word_to_index[word] = idx
                idx += 1

        all_words = []
        for i in range(len(s)):
            all_words.append(word_to_index.get(s[i:i+wlen], -1))

        counter_key = Counter([word_to_index[x] for x in words])

        for disp in range(wlen):
            tracker = Counter()
            a, b = disp, disp
            while b < len(s):
                if all_words[b] == -1:
                    tracker = Counter()
                    b += wlen
                    a = b
                    continue

                tracker.update((all_words[b],))
                b += wlen

                if b-a == (len(words)+1)*wlen:
                    tracker[all_words[a]] -= 1
                    a += wlen

                if tracker == counter_key:
                    r.append(a)

        return r
