// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Singly LinkedList

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
        }
        this.tail = newNode
        this.length++
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp
            temp = prev.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }

    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++
    }
    shift() {
        if (!this.head) {
            return undefined
        }
        let temp = this.head
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
    }
    getFirst() {
        return this.head
    }

    getLast() {
        return this.tail
    }
    get(index) {
        let counter = 0
        let temp = this.head
        while (temp) {
            if (counter === index) {
                return temp
            }
            counter++
            temp = temp.next
        }
        return null
    }
    set(index, value) {
        let temp = this.get(index)
        return temp.data = value
    }
    insert(index, value) {
        if (index === 0) {
            return this.unshift(value)
        }
        if (index = this.length) {
            return this.push(value)
        }
        let temp = this.get(index - 1)
        const newNode = new Node(value)
        newNode.next = this.get(temp.next)
        temp.next = newNode;
        this.length++
        return true
    }
    size() {
        let counter = 0
        let temp = this.head
        while (temp) {
            counter++
            temp = temp.next
        }
        return counter
    }
    clear() {
        this.head = null
        this.next = null
        this.length = 0
    }
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;
        while (current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(2);
myLinkedList.unshift(0)
myLinkedList.set(1, 3)
myLinkedList.reverse()
console.log("MySinglyLinkedList")
console.log(myLinkedList)

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// Doubly LinkedLists

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

class DoublyNode {
    constructor(value) {
        this.data = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
        this.length++
    }

    pop() {
        if (!this.head) {
            return undefined
        }
        let temp = this.tail;
        let prev = temp.prev
        prev.next = null
        this.tail = prev
        temp.prev = null
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null
        }

    }

    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++
    }
    shift() {
        if (!this.head) {
            return undefined
        }
        let temp = this.head
        this.head = this.head.next;
        this.head.prev = null
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
    }
    getFirst() {
        return this.head
    }

    getLast() {
        return this.tail
    }
    get(index) {
        let counter = 0
        let temp = this.head
        while (temp) {
            if (counter === index) {
                return temp
            }
            counter++
            temp = temp.next
        }
        return null
    }
    set(index, value) {
        let temp = this.get(index)
        return temp.data = value
    }
    insert(index, value) {
        if (index === 0) {
            return this.unshift(value)
        }
        if (index = this.length) {
            return this.push(value)
        }
        let temp = this.get(index - 1)
        const newNode = new Node(value)
        newNode.next = this.get(temp.next)
        temp.next = newNode;
        this.length++
        return true
    }
    size() {
        let counter = 0
        let temp = this.head
        while (temp) {
            counter++
            temp = temp.next
        }
        return counter
    }
    clear() {
        this.head = null
        this.next = null
        this.length = 0
    }
}

const myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2);
myDoublyLinkedList.unshift(0)
myDoublyLinkedList.set(1, 3)
console.log("myDoublyLinkedList")
console.log(myDoublyLinkedList)


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

