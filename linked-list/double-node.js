class DoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const node1 = new DoubleNode(1);
const node2 = new DoubleNode(2);
const node3 = new DoubleNode(3);
const node4 = new DoubleNode(4);

node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;
node3.next = node4;

node4.prev = node3;

console.log("Traversing forward");
let currentNode = node1;
while (currentNode) {
    console.log(`Current node data ${currentNode.data}`);
    currentNode = currentNode.next;
}

console.log("Traversing backward");
currentNode = node4;
while (currentNode) {
    console.log(`Current node data ${currentNode.data}`);
    currentNode = currentNode.prev;
}
