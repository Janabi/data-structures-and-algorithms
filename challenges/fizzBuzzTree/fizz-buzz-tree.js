function Node(data) {
    this.value = data;
    this.children = [];
}

function KaryTree(data) {
    this.root = data;
}

function fizzBuzzTree(tree) {
    if(!tree.root) return 'This k-ary tree is empty!'
    
    let karyTree = new KaryTree();

    const _tree = (node) =>{
        let newNode = new Node();
        newNode.value = fizzbuzz(node.value)
        for(let i = 0; i < node.children.length; i++) {
            newNode.children.push(_tree(node.children[i]))
        }
        return newNode;
    }
    karyTree.root = _tree(tree.root)
    return karyTree;
}

function fizzbuzz(value) {
    if (value % 3 == 0 && value % 5 == 0) return 'FizzBuzz';
    if (value % 3 == 0) return 'Fizz';
    if (value % 5 == 0) return 'Buzz';
    if (value % 3 != 0 && value % 5 != 0) return value.toString();
}

// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);

// one.children.push(three);
// one.children.push(two);
// one.children.push(four);
// three.children.push(five)
// three.children.push(six)
// var tree = new KaryTree(one);

// console.log(tree.root.children);
// let ktree = fizzBuzzTree(tree);
// console.log(ktree.root.children)

module.exports = {
    node: Node,
    karyTree: KaryTree,
    fizzBuzzTree: fizzBuzzTree,
    fizzbuzz: fizzbuzz
}