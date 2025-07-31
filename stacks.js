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


// solved using stacks

const isValid = (str) => {
    let stacks = [];
    let brackets = {
        "{": "}",
        "[": "]",
        "(": ")"
    }

    for (let i of str) {
        if(brackets[i]){
            stacks.push(i)
        }else{
            let top = stacks.pop()
            if(!top || brackets[top] !== i){
                return false
            }
        }
    }
    return stacks.length==0
}

// console.log(isValid("({})"))
// console.log(isValid("({)}"))
// console.log(isValid("(){}"))

const reverse = (str) => {
    let stacks = [];
    let reversed = ""
    for (let i of str){
        stacks.push(i);
    }
    // console.log("-----" , stacks)
    while(stacks.length>0){
        reversed += stacks.pop()
    }
    return reversed;
}

// console.log(reverse("hello world"))