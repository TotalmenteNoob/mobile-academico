import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Cursos = ({ navigation }) => {

    const [cursos, setCursos] = useState([])

    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem('cursos').then(resultado => {

                resultado = JSON.parse(resultado) || []

                console.log(resultado)
                setCursos(resultado)
            })
        }, [])
    );

    return (
        <>
            <ScrollView style={{ padding: 10 }}>

                {cursos.map((item, i) => (
                    <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
                        <Card.Content >
                            <Text variant="titleLarge">{item.nome}</Text>
                            <Text variant="bodyMedium">Duração: {item.duracao} semestres</Text>
                            <Text variant="bodyMedium">Modalidade: {item.modalidade}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton icon='pencil' />
                            <IconButton icon='delete' />
                        </Card.Actions>
                    </Card>
                ))}

            </ScrollView>
            <FAB
                mode='elevated'
                icon="plus"
                style={{ position: 'absolute', right: 10, bottom: 10 }}
                onPress={() => navigation.push('cursos-form')}
            />
        </>
    )
}

export default Cursos