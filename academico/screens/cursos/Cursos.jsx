import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'

const Cursos = ({ navigation }) => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('cursos').then(resultado => {
            
            resultado = JSON.parse(resultado) || []

            console.log(resultado)
            setCursos(resultado)
        })
    }, [])

    return (
        <>
            <Text>Cursos</Text>

            {cursos.map(item => (
                <Text>{item.nome}</Text>
            ))}

            <Button
                icon='plus'
                mode='contained'
                onPress={() => navigation.push('cursos-form')}
            >
                Novo
            </Button>
        </>
    )
}

export default Cursos