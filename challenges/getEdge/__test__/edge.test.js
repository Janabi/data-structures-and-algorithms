'use strict';

const { Graph, Vertex, Edge } = require('../../graph/graph');
const getEdge = require('../get-edge');

const graph = new Graph()

const pandora = new Vertex('Pandora')
const metroville = new Vertex('Metroville')
const arendelle = new Vertex('Arendelle')
const monstropolis = new Vertex('Monstropolis')
const naboo = new Vertex('Naboo')
const narnia = new Vertex('Narnia')

graph.addNode(pandora)
graph.addNode(metroville)
graph.addNode(arendelle)
graph.addNode(monstropolis)
graph.addNode(naboo)
graph.addNode(narnia)

graph.addEdge(pandora, metroville, 82);
graph.addEdge(metroville, pandora, 82);
graph.addEdge(pandora, arendelle, 150);
graph.addEdge(arendelle, pandora, 150);
graph.addEdge(arendelle, monstropolis, 42);
graph.addEdge(monstropolis, arendelle, 42);
graph.addEdge(metroville, arendelle, 99);
graph.addEdge(monstropolis, metroville, 105);
graph.addEdge(metroville, monstropolis, 105);
graph.addEdge(monstropolis, naboo, 73);
graph.addEdge(naboo, monstropolis, 73);
graph.addEdge(metroville, naboo, 26);
graph.addEdge(naboo, narnia, 250);
graph.addEdge(narnia, naboo, 250);
graph.addEdge(metroville, naboo, 37);
graph.addEdge(naboo, metroville, 37);

describe('Happy Path', ()=>{
    it('Successfully returning a total direct flight', ()=>{
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(getEdge(graph, ['Metroville', 'Pandora']))
        expect(consoleSpy).toHaveBeenCalledWith(true+', $82')
    })
})

describe('Bad Result', ()=>{
    it('Successfully returning a total zero of undirect flight', ()=>{
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(getEdge(graph, ['Naboo', 'Pandora']))
        expect(consoleSpy).toHaveBeenCalledWith(false+', $0')
    })
    it('Successfully returning a total zero of a one element of flight array', ()=>{
        const consoleSpy = jest.spyOn(console, 'log');
        console.log(getEdge(graph, ['Naboo']))
        expect(consoleSpy).toHaveBeenCalledWith(false+', $0')
    })
})