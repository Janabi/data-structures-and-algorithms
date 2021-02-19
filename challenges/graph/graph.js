'use strict';

const {queue} = require('../stacksAndQueues/stacks-and-queues')

class Vertex {
    constructor(value) {
        this.value = value;
    }
}

class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph {
    constructor() {
        this._adjacencyList = new Map();
    }

    addNode(vertex) {
        this._adjacencyList.set(vertex, []);
    }

    addEdge(startVertex, endVertex, weight) {
        if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
            console.log("NOT FOUND!");
            return;
        }

        const adjacencies = this._adjacencyList.get(startVertex);
        // add vertex and weight
        adjacencies.push(new Edge(endVertex, weight));
    }

    getNeighbours(vertex) {
        if (!this._adjacencyList.has(vertex)) {
            console.log("NOT FOUND!");
            return;
        }
        return this._adjacencyList.get(vertex);
    }

    getNodes() {
        let data = [];
        for (const [vertex, edge] of this._adjacencyList.entries()) {
            data.push([vertex, edge])
        }
        return data.length > 0 ? data : null;
    }

    size() {
        return this.getNodes().length;
    }

    breadthFrist(startingNode, graph) {
        let results = [];
        let node = new queue();
        node.enqueue(startingNode);
        let length = 0;
        while(length !== graph.size()) {
            let vertex = node.dequeueElement();
            console.log(vertex.value)
            console.log("startingNode",startingNode)
            console.log("vertex",vertex.value)
            // console.log("get", graph._adjacencyList.get(vertex.value))
            graph._adjacencyList.get(vertex.value).forEach(element => {
                console.log(element)
                node.enqueue(element.vertex)
            });
            if(!results.includes(vertex.value.value)) {
                results.push(vertex.value.value)
                length++;
            }
        }
        return results;
    }
}

const graph = new Graph();

const two = new Vertex(2);
const three = new Vertex(3);
const six = new Vertex(6);
const seven = new Vertex(7);
const eight = new Vertex(8);

graph.addNode(two);
graph.addNode(three);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(eight);

graph.addEdge(two, six, 11);
graph.addEdge(six, two); // the other direction
graph.addEdge(two, three, 19);
graph.addEdge(three, seven, 68);
graph.addEdge(eight, two, 123);
graph.addEdge(three, six, 55);

// console.log(graph.getNeighbours(two));
// console.log(graph.getNodes());
// console.log(graph.size());
console.log(graph.breadthFrist(eight, graph))

module.exports = {
    Graph: Graph,
    Vertex: Vertex
}