import React, { Component } from 'react'
import { Text,View, TextInput, Button, StyleSheet } from 'react-native'
import IMCCalc from './IMCCalc'

export class IMCApp extends Component {
    constructor (props){
        super(props)
        this.state = {
            pesoEstado:0,
            alturaEstado: 0.0,
            pesoChange: 0,
            alturaChange: 0.0,
        }
    }

    calcular(){
        this.setState({
            alturaEstado: this.state.alturaChange,
            pesoEstado: this.state.pesoChange,
        })
    }

    render() {
        console.log(this.state)
        return (
            <View style = {style.container}> 
                 <Text style = {style.headerText}>
                    IMC
                 </Text>
                    <TextInput style = {style.textInput} placeholder="Peso (Kg)"
                    onChangeText={(peso) => this.setState({pesoChange:peso})}>
                    </TextInput>

                    <TextInput style = {style.textInput} placeholder="Altura (M)"
                    onChangeText={(altura) => this.setState({alturaChange:altura})}>
                    </TextInput>
                <View style = {style.viewButton}>
                    <Button title="Calcular" onPress={()=>this.calcular()}></Button>
                </View>

            <IMCCalc peso={this.state.pesoEstado} altura={this.state.alturaEstado}></IMCCalc>            
            </View>
        )
    }
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },

    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
        },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20
        },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"
    }
})



export default IMCApp
