
function capitalizarString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

const gradeDeNotas = [
    { id: 1, nome: `Gabriel`, notaP1: 7.5, notaP2: 9.5},
    { id: 2, nome: `Matheus`, notaP1: 6.25, notaP2: 6.75},
    { id: 3, nome: `Ronaldo`, notaP1: 10.0, notaP2: 10.0},
]

function incluirMediaFinal(gradeDeNotas) {
    return gradeDeNotas.map(aluno => ({
        ...aluno,
        mediaFinal: Math.ceil((aluno.notaP1 + aluno.notaP2) / 2)
    }))
}

function calcularMediaDaTurma(gradeDeNotas) {
    return gradeDeNotas.map(aluno => ({
        resultado
    }))
  }


console.log(calcularMediaDaTurma(gradeDeNotas))


