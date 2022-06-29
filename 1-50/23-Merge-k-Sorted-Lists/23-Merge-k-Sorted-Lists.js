var lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
var mergeKLists = function (lists) {
  let numsArr = [];
  lists.forEach((item) => {
    while (item && item.val !== null) {
      numsArr.push(item.val);
      item = item.next;
    }
  });
  numsArr = numsArr.sort((a, b) => b - a);
  let resultNode = null;
  numsArr.forEach((item) => {
    let tempNode = new ListNode(item);
    tempNode.next = resultNode;
    resultNode = tempNode;
  });
  return resultNode;
};

console.log(mergeKLists(lists));
