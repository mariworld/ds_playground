class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    if (!this.head) {
      return count;
    }

    if (!this.head.next) {
      return 1;
    }
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next;
      count++;
    }
    return count;
  }

  insertAtEnd(node) {
    let currentNode = this.head;
    if (!currentNode.next) {
      currentNode.next = node;
      // console.log(this)
      return;
    }
    
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this.head;
  }

  getFirst() {
    if (!this.head) {
      return;
    }
    return this.head;
  }

  getLast() {
    if (!this.head.next) {
      return this.head;
    }
    let pointer = this.head;
    let last = this.head;
    while(pointer.next) {
      // console.log(pointer, "pointer")
      pointer = pointer.next;
      if (!pointer.next) {
        last = pointer;
      }
    }
    return last;
  }

}

let node1 = new Node(8)
let node2 = new Node(19)
let node3 = new Node(25)
let node4 = new Node(70)
let node5 = new Node(80)
let l1 = new LinkedList(node1)

l1.insertAtEnd(node2)
l1.insertAtEnd(node3)
l1.insertAtEnd(node4)
l1.insertAtEnd(node5)

console.log(l1.size())
// l1.getLast()
// let l1 = new Node(8)
// let l2 = new Node(31)
// let l3 = new Node(23)
// l1.next = l2
// l2.next = l3
// l3.next = null

const containsCycle = (head) => {
  let slowNode = head;
  let fastNode = head;
  while (fastNode && fastNode.next) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
    if (slowNode === fastNode) {
      return true;
    } 
  }
  return false;
}

