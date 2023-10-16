import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'

const Turmas = ({ navigation }) => {

    const [turmas, setTurmas] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('turmas').then(resultado => {
            
            resultado = JSON.parse(resultado) || []

            console.log(resultado)
            setTurmas(resultado)
        })
    }, [])

    return (
        <>

            {turmas.map(item => (
                <Text>{item.nome}</Text>
            ))}

            <Button
                icon='plus'
                mode='contained'
                onPress={() => navigation.push('turmas-form')}
            >
                Novo
            </Button>
        </>
    )
}

export default Turmas