//      10
//   4     20
// 2  8  17  170

class fifthNode {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value) {
      const newNode = new fifthNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
    search(value) {
        if (!this.root) {
          return false;
        }
        let currentNode = this.root;
        while (currentNode) {
          if (value === currentNode.value) {
            return true;
          } else if (value < currentNode.value) {
            currentNode = currentNode.left;
          } else {
            currentNode = currentNode.right;
          }
        }
        return false;
      }
  }
  
const myTree = new BinarySearchTree();