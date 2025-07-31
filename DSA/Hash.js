class HashTable {
    constructor(size=5){
        this.keyMap = new Array(size)
    }
    _hasFunction(key){
        let sum = 0;
        let PRIME_NUMBERS = 31;
        key= key.toLowerCase()
        for (let i =0 ; i < Math.min(key.length , 100) ; i++){
            let charCode = key.charCodeAt(0) - 96
            sum = (sum * PRIME_NUMBERS + charCode) % this.keyMap.length
        }
        console.log(sum)
        return sum;
    }

    set(key, value){
       let index = this._hasFunction(key)
       if(!this.keyMap[index]) this.keyMap[index] = [];
       this.keyMap[index].push([key,value])
       return this
    }

    get(prop){
        let index = this._hasFunction(prop)
        for(let i in this.keyMap[index]){
            if(this.keyMap[index][i][0] === prop) return this.keyMap[index][i][1]
        }
    }
    getAllKeys (){
        let keys = []
        for(let i in this.keyMap){
            if(this.keyMap[i]){
                for(let j in this.keyMap[i]){
                    keys.push(this.keyMap[i][j][0])
                }
            }
        }
        return keys
    }

    getAllValues (){
        let values = []
        for(let i in this.keyMap){
            if(this.keyMap[i]){
                for(let j in this.keyMap[i]){
                    values.push(this.keyMap[i][j][1])
                }
            }
        }
        return values
    }
}
// let myHash = new HashTable()
// myHash.set("Satyam" , 2019614578)
// myHash.set("shivam" , 2019614578)
// myHash.set("sundaram" , 2019614578)
// console.log(myHash)
// console.log(myHash.getAllKeys())
// console.log(myHash.getAllValues())


function wordCounter(text) {
    text= text.toLowerCase()
    let wordMap = {}
    let TextArr = text.split(/\s+/)
    for (let i in TextArr){
        if(!wordMap[TextArr[i]]){
            wordMap[TextArr[i]] = 1
        } else {
            wordMap[TextArr[i]] =parseInt(wordMap[TextArr[i]]) + 1
        }
    }
    return wordMap
}

// console.log(wordCounter('My name name is is is Satyam'))


function twoSum(arr, target) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];
        console.log("array element" , arr[i])
        console.log("complement" , complement)
        if (complement in map) {
            return [map[complement], i];
        }
        map[arr[i]] = i;
        console.log("map",map)
    }
}

// console.log(twoSum([2, 7, 5, 4], 9))