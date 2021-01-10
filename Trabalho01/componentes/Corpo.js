import React, { Component } from 'react'
import {Image,Viem} from 'react-native'

export class Corpo extends Component {
    render() {
        let foto = {
            uri: "https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg"
        }
        return (
           <Image source={foto} style={{width: 200, height: 200}}/>
        )
    }
}

export default Corpo
