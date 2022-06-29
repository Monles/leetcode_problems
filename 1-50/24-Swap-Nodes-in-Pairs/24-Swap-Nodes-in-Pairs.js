let swapPairs = function (head) {
  let dummy = new ListNode();
  dummy.next = head;
  let result = dummy;
  while (dummy.next && dummy.next.next) {
    let p = dummy.next,
      q = dummy.next.next;
    dummy.next = q;
    p.next = q.next;
    q.next = p;
    dummy = p;
  }
  return result.next;
};
