var cards = [  ['1', 'Quem já deu PT bebe'],
['2', 'Todos os jogadores que já ficaram com alguém na mesma festa bebem'],
['3', 'Quem não tem namorado(a) bebe'],
['4', 'Quem já dormiu mais de 12h seguidas bebe'],
['5', 'Quem já beijou alguém do mesmo sexo bebe'],
['6', 'Quem nunca deu PT bebe'],
['7', 'Todos os jogadores que já perderam o celular ou a carteira bebem'],
['8', 'Quem tem o maior número de irmãos bebe'],
['9', 'Quem nunca beijou na boca bebe'],
['10', 'Todos os jogadores que já levaram multa bebem'],
['11', 'Quem já acordou em outro país bebe'],
['12', 'Quem já foi a um show de rock bebe'],
['13', 'Quem já participou de uma manifestação bebe'],
['14', 'Todos os jogadores que já fizeram uma tatuagem bebem'],
['15', 'Quem nunca usou drogas bebe'],
['16', 'Quem já perdeu a virgindade bebe'],
['17', 'Todos os jogadores que já foram presos bebem'],
['18', 'Quem nunca saiu do país bebe'],
['19', 'Quem já levou um fora bebe'],
['20', 'Todos os jogadores que já pularam de paraquedas bebem'],
['21', 'Quem já fez uma viagem sozinho bebe'],
['22', 'Quem já chorou por amor bebe'],
['23', 'Todos os jogadores que já foram traídos bebem'],
['24', 'Quem já se arrependeu de ter feito algo bebe'],
['25', 'Quem nunca foi a um festival de música bebe'],
['26', 'Todos os jogadores que já foram ao cinema sozinhos bebem'],
['27', 'Quem já passou mais de um dia sem tomar banho bebe'],
['28', 'Quem nunca passou a noite em claro bebe'],
['29', 'Todos os jogadores que já dirigiram bêbados bebem'],
['30', 'Quem já foi assaltado bebe'],
['31', 'Quem nunca fez uma festa em casa bebe'],
['32', 'Todos os jogadores que já foram demitidos bebem'],
['33', 'Quem já comeu um inseto bebe'],
['34', 'Quem nunca acordou de ressaca bebe'],
['35', 'Todos os jogadores que já foram expulsos de algum lugar bebem'],
['36', 'Quem já passou mal por causa de bebida bebe'],
['37', 'Quem nunca mentiu para os pais bebe'],
['38', 'Todos os jogadores que já foram a um jogo de futebol bebem'],
['39', 'Quem já fez algo ilegal bebe'],
['40', 'Quem nunca fez uma viagem de carro bebe'],
['41', 'Todos os jogadores que já comeram fast-food no café da manhã bebem'],
['42', 'Quem já dormiu em um lugar público bebe'],
['43', 'Quem nunca teve um animal de estimação bebe'],
['44', 'Todos os jogadores que já ficaram com alguém do trabalho bebem'],
['45', 'Quem já dirigiu sem carteira de motorista bebe'],
['46', 'Quem nunca assistiu um filme pornô bebe'],
['47', 'Todos os jogadores que já fizeram uma dieta maluca bebem'],
['48', 'Quem já passou mal em uma montanha-russa bebe'],
['49', 'Quem nunca assistiu um episódio de série completo em um dia bebe'],
['50', 'O jogador à sua direita bebe'],
['51', 'Todos os jogadores devem trocar de lugar. O último a chegar no novo lugar bebe'],
['52', 'Escolha um jogador para ser seu parceiro. Cada vez que um de vocês beber, o outro também deve beber'],
['53', 'O jogador à sua esquerda bebe'],
['54', 'Todos os jogadores do sexo masculino bebem'],
['55', 'Todos os jogadores que já beberam antes bebem novamente'],
['56', 'O jogador mais novo bebe'],
['57', 'O jogador à sua direita escolhe o que você bebe'],
['58', 'Todos os jogadores contam até 3. Quem falar um número que seja múltiplo de 3 ou conter o número 3, bebe'],
['59', 'O jogador à sua esquerda escolhe o que você bebe'],
['60', 'Todos os jogadores bebem'],
['61', 'Todos os jogadores apontam para quem eles acham que bebe mais. Quem tiver mais votos bebe'],
['62', 'Todos os jogadores do sexo feminino bebem'],
['63', 'O jogador à sua direita deve beber antes de você'],
['64', 'Escolha um jogador para ser seu mestre. Toda vez que ele beber, você também deve beber'],
['65', 'Todos os jogadores contam até 3. Quem falar um número que seja múltiplo de 5 ou conter o número 5, bebe'],
['66', 'O jogador à sua esquerda deve beber antes de você'],
['67', 'Escolha um jogador para ser seu escravo. Toda vez que você beber, ele também deve beber'],
['68', 'Todos os jogadores bebem e colocam a mão na cabeça. O último a colocar a mão na cabeça bebe novamente'],
['69', 'Todos os jogadores contam até 3. Quem falar um número que seja múltiplo de 7 ou conter o número 7, bebe'],
['70', 'O jogador à sua direita deve escolher o que você bebe'],
['71', 'Escolha um jogador para ser seu parceiro. Cada vez que um de vocês beber, o outro também deve beber'],
['72', 'O jogador à sua esquerda escolhe o que você bebe'],
['73', 'Todos os jogadores do sexo masculino bebem'],
['74', 'Escolha um jogador para jogar pedra, papel e tesoura com você. Quem perder, bebe'],
['75', 'Todos os jogadores bebem e colocam a mão na mesa. O último a colocar a mão na mesa bebe novamente'],
['76', 'O jogador à sua direita bebe'],
['77', 'Escolha um jogador para ser seu mestre. Toda vez que ele beber, você também deve beber'],
['78', 'Todos os jogadores contam até 3. Quem falar um número que seja múltiplo de 4 ou conter o número 4, bebe']]
  


    
function sorteia(cards, max){
    var random = Math.floor(Math.random() * max)
    var valores = cards[random]
    return valores
}

var noRepeat = []

var num = document.getElementById('numero')
var des = document.getElementById('desafio')

function sortfunction(a, b){
    return (a - b)
}

function jogo(){
    var valores = sorteia(cards, 78)
    if(noRepeat.length>=78){num.textContent='FIM DE JOGO'
        des.textContent='REINICIE A PÁGINA PARA JOGAR NOVAMENTE'} else {
        while(noRepeat.includes(parseInt(valores[0]))===true){var valores = sorteia(cards, 78); console.log('Houve repetição')}
        num.textContent=valores[0]
        des.textContent=valores[1]
        noRepeat.push(parseInt(valores[0]))
        noRepeat.sort(sortfunction)
        console.log(noRepeat)
        console.log(noRepeat.length)}
}

