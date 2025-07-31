class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null
    }
}

class BTS{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)
        if (!this.root) this.root = newNode;
        if(this.root.right && this.left){
            
        }
    }
}