class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function traverseAndPrint(node) {
    let currentNode = node;
    while (currentNode) {
        console.log(`Current node data ${currentNode.data}`);
        currentNode = currentNode.next;
    }
}

function findLowestValue(head) {
    let minValue = head.data;

    let currentNode = head.next;
    while (currentNode) {
        const value = currentNode.data;
        if (value < minValue) minValue = value;
        currentNode = currentNode.next;
    }

    console.log(`Lowest  is Node with the value of ${minValue}`);
}

function deleteSpecificNode(head, candidate) {
    if (head === candidate) return head.next;

    let currentNode = head.next;
    while (currentNode.next && currentNode.next !== candidate) {
        currentNode = currentNode.next;
    }

    if (!currentNode.next) {
        return head;
    }

    currentNode.next = currentNode.next.next;

    return head;
}

function insertNodeAtPosition() {}

let node1 = new Node(7);
let node2 = new Node(11);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("Before deletion");
traverseAndPrint(node1);
findLowestValue(node1);

node1 = deleteSpecificNode(node1, node3)
console.log(`New ${node1.data}`)

console.log("After deletion")
traverseAndPrint(node1)
