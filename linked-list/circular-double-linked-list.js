class CircularDoubleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const node1 = new CircularDoubleNode(1);
const node2 = new CircularDoubleNode(2);
const node3 = new CircularDoubleNode(3);
const node4 = new CircularDoubleNode(4);

node1.next = node2;
node1.prev = node4;

node2.next = node3;
node2.prev = node1;

node3.next = node4;
node3.prev = node2;

node4.next = node1;
node4.prev = node3;

console.log("Traversing forward");
let currentNode = node1;
let startNode = node1;
let endNode = node4;
console.log(`Current node data ${currentNode.data}`);
currentNode = currentNode.next;

while (currentNode !== startNode) {
    console.log(`Current node data ${currentNode.data}`);
    currentNode = currentNode.next;
}

console.log("Traversing backward");
currentNode = node4;
console.log(`Current node data ${currentNode.data}`);
currentNode = currentNode.prev

while (currentNode !== endNode) {
    console.log(`Current node data ${currentNode.data}`);
    currentNode = currentNode.prev;
}
