//Função sem retorno
/*function imprimirSoma(a, b)
    {
        console.log(a+b)
    }
    imprimirSoma(2,3)

    //FUNCÃO COM RETORNO

    function soma(a, b = 1 )
    {
        return a + b
    }
    console.log(soma(2,3))
    console.log(soma(2))
    */

    //Armazenar uma função em uma variavel
     const imprimirSoma = function (a,b)
     {
         console.log(a+b )
     }
     imprimirSoma(2,3)

     //Armazenar uma função arrow em uma variavel

     const soma = (a,b) => {
         return a+b 
     }
     console.log(soma(100, 1023))

     // retorno implícito
     const subtracao = (a,b ) => a-b
     console.log(subtracao(2,-1))

       // const mensagem = 'Ola mundo'
       // console.log(mensagem)
