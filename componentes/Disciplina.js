import React, { Component } from 'react'
import { Text, View } from 'react-native'


export class Disciplina extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View>
                <Text>
                    {this.props.disciplina}
                </Text>
            </View>
        )
    }
}

export default Disciplina
