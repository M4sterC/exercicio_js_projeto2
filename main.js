const form = document.getElementById('form')
const Contatos = []
const Telefones = []
let Linhas = ''


form.addEventListener("submit",function(e){
    e.preventDefault();
    AdicionaLinha()
    AtualizaTabela()
    rodape()
})


function AdicionaLinha () {
    const InputNome = document.getElementById('Nome')
    const InputTel = document.getElementById('Telefone')

    if(Contatos.includes(InputNome.value)){
        alert(`O Contato ${InputNome.value} ja foi Cadastrado`)
    }else{
        Telefones.push(InputTel.value)
        Contatos.push(InputNome.value)
        
        const TelFormatado = InputTel.value.split('')
    
        let linha = '<tr>';
        linha += `<td>${InputNome.value}</td>`
        linha += `<td> (${TelFormatado[0]}${TelFormatado[1]}) ${TelFormatado[2]}${TelFormatado[3]}${TelFormatado[4]}${TelFormatado[5]}${TelFormatado[6]}-${TelFormatado[7]}${TelFormatado[8]}${TelFormatado[9]}${TelFormatado[10]}</td>`
        linha += '</tr>'
        Linhas += linha
        InputNome.value = ''
        InputTel.value = ''
    }
}
function AtualizaTabela() {
    const CorpoTb = document.querySelector("tbody")
    CorpoTb.innerHTML = Linhas
}
function rodape(){
    const Cadastros = Contatos.length
    const Ultimo = Contatos.length -1
    const Ultimo1 = Contatos[Ultimo]

    document.getElementById('Clientes').innerHTML = `Voce tem ${Cadastros} Contato(s) salvo(s)`
    document.getElementById('UltimoCadastro').innerHTML = `${Ultimo1} foi o ultimo contato cadastrado`
}