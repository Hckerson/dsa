class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(7);
let node2 = new Node(11);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(9);
let node6 = new Node(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

for (let i = 0; i < length; i++) {
    let currentNode = node1;
    let start = true;
    while (currentNode.next) {
        if (currentNode.data > currentNode.next.data) {
            const popped = currentNode.next;
            currentNode.next = currentNode.next.next;
            if (start) {
                popped.next = currentNode;
                currentNode = popped;
            } else {
                popped.next = currentNode.next;
                currentNode.next = popped;
            }
        }
        start = false;
        currentNode = currentNode.next;
    }
}
