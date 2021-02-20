'use strict';

const { Graph, Vertex, Edge } = require('../graph/graph');

const graph = new Graph()

// const pandora = new Vertex('Pandora')
// const metroville = new Vertex('Metroville')
// const arendelle = new Vertex('Arendelle')
// const monstropolis = new Vertex('Monstropolis')
// const naboo = new Vertex('Naboo')
// const narnia = new Vertex('Narnia')

// graph.addNode(pandora)
// graph.addNode(metroville)
// graph.addNode(arendelle)
// graph.addNode(monstropolis)
// graph.addNode(naboo)
// graph.addNode(narnia)

// graph.addEdge(pandora, metroville, 82);
// graph.addEdge(metroville, pandora, 82);
// graph.addEdge(pandora, arendelle, 150);
// graph.addEdge(arendelle, pandora, 150);
// graph.addEdge(arendelle, monstropolis, 42);
// graph.addEdge(monstropolis, arendelle, 42);
// graph.addEdge(metroville, arendelle, 99);
// graph.addEdge(monstropolis, metroville, 105);
// graph.addEdge(metroville, monstropolis, 105);
// graph.addEdge(monstropolis, naboo, 73);
// graph.addEdge(naboo, monstropolis, 73);
// graph.addEdge(metroville, naboo, 26);
// graph.addEdge(naboo, narnia, 250);
// graph.addEdge(narnia, naboo, 250);
// graph.addEdge(metroville, naboo, 37);
// graph.addEdge(naboo, metroville, 37);
// console.log("pandora>>>", pandora)
// console.log(graph.getNeighbours(pandora))
// console.log(graph.getNodes())
// console.log(getEdge(graph, ['Metroville', 'Pandora']))
// console.log(getEdge(graph, ['Arendelle', 'Monstropolis', 'Naboo']))
// console.log(getEdge(graph, ['Naboo', 'Pandora']))

function getEdge(graph, arr) {
    if(arr.length < 2) return false + ', $0';
    let counter = 0;
    let total = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        let list = graph.getEdge(arr[i]);
        // console.log("list", list)
        for (let j = 0; j < list.length; j++) {
            if(list[j].vertex.value == arr[i+1]) {
                counter++;
                total += list[j].weight;
            }
        }

    }
    // console.log("counter", counter)
    if (counter == (arr.length -1)) {
        return true + ', $'+ total;
    } else {
        return false + ', $0';
    }
}

module.exports = getEdge;