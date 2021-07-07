/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]

Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

Input: head = [1,2,3,4,5], k = 1
Output: [1,2,3,4,5]

Input: head = [1], k = 1
Output: [1]

Constraints:

The number of nodes in the list is in the range sz.
1 <= sz <= 5000
0 <= Node.val <= 1000
1 <= k <= sz

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
*/
const reverseList = (head, k) => {
  // let tailNode = new ListNode();
  // tailNode = head;
  if (k === 1) {
    return head;
  } else {
    reverseList(head.next, k - 1).next = head;
    return head;
  }
};

var reverseKGroup = function (head, k) {
  let reverseTailNode = new ListNode();
  let currentNode = new ListNode();
  let reverseHeadNode = new ListNode();
  let groupIterater = k;
  currentNode = head;

  while (groupIterater > 1 && currentNode) {
    currentNode = currentNode.next;
    groupIterater--;
  }

  if (groupIterater === 1 && currentNode) {
    reverseHeadNode = currentNode;
    let nextListHead = new ListNode();
    nextListHead = reverseKGroup(currentNode.next, k);
    reverseTailNode = reverseList(head, k);
    reverseTailNode.next = nextListHead;
    return reverseHeadNode;
  } else {
    return head;
  }
};