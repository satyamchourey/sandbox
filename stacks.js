class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value){
        this.first = new Node(value);
        this.length = 1;
    }
    push(value){
        let newNode = new Node(value);
        if(this.length !== 0 ){
            newNode.next = this.first;
        }
        this.first = newNode
        this.length++
        return this
    }
    pop(){
        if(!this.first){
            return null
        }
        let temp = this.first;
        this.first.next = null
        this.first = temp.next
        this.length--
        return temp
    }
    min(){
        let temp = this.first;
        let min = temp.value;
        while(temp.next){
            temp = temp.next
            min = Math.min(temp.value , min)
        }
        return min;
    }
}

const myStack = new Stack(1)
myStack.push(2)
myStack.push(3)
console.log(myStack)