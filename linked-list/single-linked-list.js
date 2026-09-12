class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function traverseAndPrint(node) {
    let currentNode = node;
    while (currentNode) {
        console.log(`Currently at ${currentNode.data}`)
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

    let currentNode = head;
    while (currentNode.next && currentNode.next !== candidate) {
        currentNode = currentNode.next;
    }

    if (!currentNode.next) {
        return head;
    }

    currentNode.next = currentNode.next.next;
    return head;
}

function insertNodeAtPosition(head, newNode, position) {
    if (position === 1) {
        newNode.next = head;
        return newNode;
    }

    let currentNode = head;

    for (let i = 0; i < position - 2; i++) {
        if (currentNode === null) break;
        currentNode = currentNode.next;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;
}

let node1 = new Node(7);
let node2 = new Node(11);
let node3 = new Node(3);
let node4 = new Node(2);
let node5 = new Node(9);
let node6 = new Node(10)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

traverseAndPrint(node1);

let start = insertNodeAtPosition(node1, node6, 3)
traverseAndPrint(start)

start = deleteSpecificNode(node1, node1);

traverseAndPrint(start);
