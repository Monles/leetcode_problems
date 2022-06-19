var removeNthFromEnd = function (head, n) {
  const help = (root, count) => {
    if (root.next) count = help(root.next, count);

    if (count === n) root.next = root.next.next;
    return ++count;
  };
  const count = help(head, 0);
  return count === n ? head.next : head;
};
