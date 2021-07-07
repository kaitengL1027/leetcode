/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: l1 = [], l2 = []
Output: []

Input: l1 = [], l2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let head = new ListNode(0);
  let currentNode = head;

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val >= l2.val) {
        currentNode.next = new ListNode(l2.val);
        currentNode = currentNode.next;
        l2 = l2.next;
      } else {
        currentNode.next = new ListNode(l1.val);
        currentNode = currentNode.next;
        l1 = l1.next;
      }
    } else if (l1) {
      currentNode.next = new ListNode(l1.val);
      currentNode = currentNode.next;
      l1 = l1.next;
    } else {
      currentNode.next = new ListNode(l2.val);
      currentNode = currentNode.next;
      l2 = l2.next;
    }
  }

  return head.next;    
};

var mergeTwoLists2 = function(l1, l2) {
  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  } else {
    if (l1.val >= l2.val) {
      l2.next = mergeTwoLists2(l1, l2.next);
      return l2;
    } else {
      l1.next = mergeTwoLists2(l1.next, l2);
      return l1;
    }
  }
};