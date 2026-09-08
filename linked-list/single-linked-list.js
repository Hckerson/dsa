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
    let minVale = head.data;
    let currentNode = head.next;
    while (currentNode) {
        if (minVale > currentNode.data) {
            minVale = currentNode.data;
        }
        currentNode = currentNode.next;
    }
    return minVale;
}

function deleteSpecificNode(head, candidate) {
    if (head == nodeToDelete) return head.next
    
    let currentNode = head
    while (currentNode.next) {
        
    }
}

const node1 = new Node(7);
const node2 = new Node(11);
const node3 = new Node(3);
const node4 = new Node(2);
const node5 = new Node(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log("Before deletion")
traverseAndPrint(node1)

deleteSpecificNode(head, nodeToDelete)

console.log("After deletion")
traverseAndPrint(node1)
