// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let previousNode = new ListNode();
  const headNode = previousNode;

  while (l1 || l2 || carry) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    const sum = val1 + val2 + carry;
    const carry = math.floor(sum / 10);
    const digit = sum % 10;
    const currentNode = new ListNode(digit);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }
  return headNode.next;
};
