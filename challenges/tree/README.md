# Trees
**Building A Binary Search Tree**

## Challenge
**Creating a class to build up a binary tree where we can insert a new node to the tree or traverse on the three well-known methods called pre-order, in-order, and post-order. Also, we can check if the node conatin a certain value of node or not.**

## Approach & Efficiency
***Traversing methods ->***
**Big(o) -> Time -> o(1)**
**Big(o) -> Space -> o(n)**

***add method ->***
**Big(o) -> Time -> o(1)**
**Big(o) -> Space -> o(n)**

## API
- **preOrder()**
using to traverse throughout the binary search tree starting from the root node through the left node until reaching the right one.

- **inOrder()**
using to traverse throughout the binary search tree starting from the left node through the root node until reaching the right one.

- **postOrder()**
using to traverse throughout the binary search tree starting from the left node through the right node until reaching the root one.

- **contains(value)**
traverse using one the three methods that we mentioned them previously and check if they contain this value.

- **add(value)**
a method to add a node to the existing binary search tree.