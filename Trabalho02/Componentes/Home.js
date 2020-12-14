import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            cidades: [
                {cidade: "Senador Pompeu", votos: 0},
                {cidade: "Quixadá", votos: 0},
                {cidade: "Fortaleza", votos: 0},

            ]
        }
    }

    somar(index){
       // console.log(this.state.cidades[index].votos);
        let array = [...this.state.cidades];
        array[index].votos = this.state.cidades[index].votos + 1;
        this.setState({
            cidades: array,
        })


    }

    render() {

        let cidades = [];
        let botoes = [];
        let maior  = Math.max.apply(null, this.state.cidades.map((busca)=>(busca.votos)));
        let menor = Math.min.apply(null, this.state.cidades.map((busca)=>(busca.votos)));
        let maisVotadas = [];
        let menosVotadas = [];
        console.log(maior+ "," +menor)

        this.state.cidades.map((busca, index) =>{
           cidades.push (<Text key={index}>{busca.cidade}: {busca.votos} votos </Text>)
           botoes.push(<Button key={index} title = {busca.cidade} onPress = {()=>{this.somar(index)}}> </Button>)
            
           if (busca.votos == maior && maior > 0){
               maisVotadas.push(busca.cidade)
           }
           if (busca.votos == menor && menor != maior){
               menosVotadas.push(busca.cidade)
           }
        })


        return (
            <View>
                {cidades}
                
                <Text>
                    MAIS VOTADA(S):
                    {maisVotadas}

                </Text>

                <Text>
                    MENOS VOTADA(S):
                    {menosVotadas}
                </Text>

               {botoes}
            </View>
        )
    }
}

export default Home
