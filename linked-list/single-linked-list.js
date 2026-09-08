class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.next = node2
node2.next = node3
node3.next = node4

let currentNode = node1

while (currentNode) {
    console.log(`Current node data ${currentNode.data}`)
    currentNode = currentNode.next
}

console.log("next")