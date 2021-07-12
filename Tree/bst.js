class Node {
  constructor (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = node => {
        if (data < node.data) {
          if (node.left) {
            return searchTree(node.left);
          } else {
            node.left = new Node(data);
            return;
          }
        } else if (data > node.data) {
          if (node.right) {
            return searchTree(node.right);
          } else {
            node.right = new Node(data);
            return;
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }
  findMin() {
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }
  findMax() {
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (current.data === data) {
        return true;
      } else if (data > current.data) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) { // at the very bottom still can't find data
        return null;
      }

      if (data === node.data) { // has data we're looking for

        // node has no children
        if (!node.left && !node.right) {
          return null; // the relationship between target and its parent is removed
        }
        // node has right child
        if (!node.left) {
          return node.right;
        }
        // node has left child
        if (!node.right) {
          return node.left;
        }
        // node has both children
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data); // node.right becomes the root for the sub-tree
        return node;

      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;

      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }

    // going down the tree then up back to root
    this.root = removeNode(this.root, data);
  }
}