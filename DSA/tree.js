class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BTS {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value)
        if (!this.root) return this.root = newNode;
        let temp = this.root;

        while (true) {
            if (newNode.value < temp.value) {
                if (!temp.left) {
                    temp.left = newNode
                    return this
                } else {
                    temp = temp.left
                }
            } else {
                if (newNode.value > temp.value) {
                    if (!temp.right) {
                        temp.right = newNode
                        return this
                    } else {
                        temp = temp.right
                    }
                }

            }
        }
    }
    includes(value) {
        if (!this.root) return false
        let temp = this.root;
        while (temp) {
            if (value < temp.value) {
                temp = temp.left
            } else if (value > temp.value) {
                temp = temp.right
            } else if (value === temp.value) {
                return true
            }
        }
        return false
    }
    bfs() {
        if (!this.root) return null
        let data = [];
        let queue = []
        queue.push(this.root)
        while (queue.length > 0) {
            let current = queue.shift();
            data.push(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return data
    }

    dfsPreOrder(node = this.root, data = []) {
        if (!node) return data;
        data.push(node.value)

        if (node.left) this.dfsPreOrder(node.left, data)
        if (node.right) this.dfsPreOrder(node.right, data)
        return data
    }

    dfsPostOrder(node = this.root, data = []) {
        if (!node) return data;

        if (node.left) this.dfsPostOrder(node.left, data)
        if (node.right) this.dfsPostOrder(node.right, data)
        data.push(node.value)
        return data
    }

    dfsInOrder(node = this.root, data = []) {
        if (!node) return data;

        if (node.left) this.dfsInOrder(node.left, data)
        data.push(node.value)
        if (node.right) this.dfsInOrder(node.right, data)
        return data
    }

}

const tree = new BTS()
// console.log("before insert", tree)

tree.insert(5)
tree.insert(3)
tree.insert(8)
tree.insert(1)
tree.insert(7)
tree.insert(9)

// console.log("after insert")
// console.log(JSON.stringify(tree, null, 2));
// console.log(tree.includes(0));
