import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Cabecalho extends Component {
  constructor(props){
    super(props);
}

  render() {
    return (
      <View>
        <Text>
          {this.props.nome}
        </Text>

        <Text>
          {this.props.curso}
        </Text>
      </View>
    )
  }
}

export default Cabecalho