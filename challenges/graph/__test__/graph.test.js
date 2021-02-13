'use strict';

const {Graph, Vertex} = require('../graph')

describe('Happy Path', ()=>{
    it('Node can be successfully added to the graph', ()=>{
        const graph = new Graph();
        const two = new Vertex(2);
        graph.addNode(two);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.size());
        expect(consoleSpy).toHaveBeenCalledWith(1)
    })
    it('An edge can be successfully added to the graph', ()=>{
        const graph = new Graph();
        const two = new Vertex(2);
        const three = new Vertex(3);
        graph.addNode(two);
        graph.addNode(three);
        graph.addEdge(two, three, 11);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.getNeighbours(two));
        expect(consoleSpy).toHaveBeenCalledWith([{ vertex: { value: 3 }, weight: 11 } ])
    })
    it('A collection of all nodes can be properly retrieved from the graph', ()=>{
        const graph = new Graph();
        const two = new Vertex(2);
        const three = new Vertex(3);
        graph.addNode(two);
        graph.addNode(three);
        graph.addEdge(two, three, 11);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.getNodes());
        expect(consoleSpy).toHaveBeenCalledWith([{ vertex: { value: 3 }, weight: 11 } ])
    })
    it('All appropriate neighbors can be retrieved from the graph', ()=>{
        const graph = new Graph();
        const two = new Vertex(2);
        const three = new Vertex(3);
        graph.addNode(two);
        graph.addNode(three);
        graph.addEdge(two, three, 11);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.getNeighbours(two));
        expect(consoleSpy).toHaveBeenCalledWith([{ vertex: { value: 3 }, weight: 11 } ])
    })
    it('Neighbors are returned with the weight between nodes included', ()=>{
        const graph = new Graph();
        const two = new Vertex(2);
        const three = new Vertex(3);
        graph.addNode(two);
        graph.addNode(three);
        graph.addEdge(two, three, 30);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.getNeighbours(two));
        expect(consoleSpy).toHaveBeenCalledWith([{ vertex: { value: 3 }, weight: 30 } ])
    })
    it('The proper size is returned, representing the number of nodes in the graph', ()=>{
        const graph = new Graph();
        const two = new Vertex(2);
        const three = new Vertex(3);
        const four = new Vertex(4);
        const five = new Vertex(5);
        graph.addNode(two);
        graph.addNode(three);
        graph.addNode(four);
        graph.addNode(five);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.size());
        expect(consoleSpy).toHaveBeenCalledWith(4)
    })
    it('A graph with only one node and edge can be properly returned', ()=>{
        const graph = new Graph();
        const two = new Vertex(2);
        graph.addNode(two);
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.size());
        expect(consoleSpy).toHaveBeenCalledWith(1)
    })
})

describe('Happy Path', ()=>{
    it('An empty graph properly returns null', ()=>{
        const graph = new Graph();
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(graph.getNodes());
        expect(consoleSpy).toHaveBeenCalledWith(null)
    })
})