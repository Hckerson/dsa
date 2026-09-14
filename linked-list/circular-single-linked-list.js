class CircularSingleNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new CircularSingleNode(1);
const node2 = new CircularSingleNode(2);
const node3 = new CircularSingleNode(3);
const node4 = new CircularSingleNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

let currentNode = node1;
let startNode = node1
console.log(`Current node data ${currentNode.data}`);
currentNode = currentNode.next;

while (currentNode !== startNode) {
    console.log(`Current node data ${currentNode.data}`);
    currentNode = currentNode.next;
}

console.log("next");
