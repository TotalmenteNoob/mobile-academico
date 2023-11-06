import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native'
import { ScrollView } from 'react-native'

const Disciplinas = ({ navigation }) => {

    const [disciplinas, setDisciplinas] = useState([])
    const [idExcluir, setIdExcluir] = useState(0)

    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem('disciplinas').then(resultado => {
                resultado = JSON.parse(resultado) || []
                setDisciplinas(resultado)
            })
        }, [])
    );

    function carregarDados() {
        AsyncStorage.getItem('disciplinas').then(resultado => {
            resultado = JSON.parse(resultado) || []
            setDisciplinas(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        disciplinas.splice(idExcluir, 1)
        AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
        carregarDados()
        setVisible(false)
    }

    return (
        <>

            <ScrollView style={{ padding: 10 }}>

                {disciplinas.map((item, i) => (
                    <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
                        <Card.Content >
                            <Text variant="titleLarge">{item.nome}</Text>
                            <Text variant="bodyMedium">Id de curso: {item.cursos}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton icon='pencil' iconColor='#009EFF' onPress={() => navigation.push('disciplinas-form', { id: i, disciplina: item })} />
                            <IconButton icon='delete' iconColor='#E23F29' onPress={() => confirmarExclusao(i)} />
                        </Card.Actions>
                    </Card>
                ))}

                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Content>
                            <Text variant="bodyLarge">Deseja realmente excluir?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={excluir}>Sim</Button>
                            <Button onPress={hideDialog}>Não</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

            </ScrollView>
            <FAB
                mode='elevated'
                icon="plus"
                style={{ position: 'absolute', right: 10, bottom: 10 }}
                onPress={() => navigation.push('disciplinas-form')}
            />
        </>
    )
}

export default Disciplinas