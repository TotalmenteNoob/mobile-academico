import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native-paper'

const Disciplinas = ({ navigation }) => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('disciplinas').then(resultado => {
            
            resultado = JSON.parse(resultado) || []

            console.log(resultado)
            setDisciplinas(resultado)
        })
    }, [])

    return (
        <>

            {disciplinas.map(item => (
                <Text>{item.nome}</Text>
            ))}

            <Button
                icon='plus'
                mode='contained'
                onPress={() => navigation.push('disciplinas-form')}
            >
                Novo
            </Button>
        </>
    )
}

export default Disciplinas