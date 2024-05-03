/*1-- > 2-- > 3-- > 4-- > 5-- > null;

let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;

    this.length = 1;
  }


insertLast(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this
  }
insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this
    }
insertRandom( index, value) {
        if( index >= this.length){
            throw new Error ("Index out of bounds");
        }
    const newNode = new Node(value);
    const holdPointer = this.getIndex(index);
    const previousPointer = this.getIndex(index-1);
    previousPointer.next = newNode;
    newNode.next = holdPointer;

    if (index === this.length-1){
        this.tail = newNode;
    };
    this.length++;
    return this;
    }

getIndex(index){
    if (index < 0 || index >= this.length ){
        throw new Error("Index out of bounds");
    }
    let counter = 0;
    let currentNode = this.head;

    for (let i = 0; i < index; i++){
        currentNode = currentNode.next;
    }
    // while (counter != index){
    // currentNode = currentNode.next;
    // counter++;
    // }
    return currentNode;
    }
}    

let myLinkedList = new MySinglyLinkedList(1);

myLinkedList.insertFirst(2);
myLinkedList.insertFirst(3);
myLinkedList.insertFirst(4);
myLinkedList.insertRandom(2,5);

console.log(myLinkedList)