import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'


const Alunos = ({ navigation }) => {

    const [alunos, setAlunos] = useState([])
    const [idExcluir, setIdExcluir] = useState(0)

    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);


    useFocusEffect(
        React.useCallback(() => {
            AsyncStorage.getItem('alunos').then(resultado => {
                resultado = JSON.parse(resultado) || []
                setAlunos(resultado)
            })
        }, [])
    );

    function carregarDados() {
        AsyncStorage.getItem('alunos').then(resultado => {
            resultado = JSON.parse(resultado) || []
            setAlunos(resultado)
        })
    }

    function confirmarExclusao(id) {
        setIdExcluir(id)
        setVisible(true)
    }

    function excluir() {
        alunos.splice(idExcluir, 1)
        AsyncStorage.setItem('alunos', JSON.stringify(alunos))
        carregarDados()
        setVisible(false)
    }

    return (
        <>
            <ScrollView style={{ padding: 10 }}>

                {alunos.map((item, i) => (
                    <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
                        <Card.Content >
                            <Text variant="titleLarge">{item.nome}</Text>
                            <Text variant="bodyMedium">Cpf: {item.cpf}</Text>
                            <Text variant="bodyMedium">Matrícula: {item.matricula}</Text>
                            <Text variant="bodyMedium">Salário: {item.salario}</Text>
                            <Text variant="bodyMedium">E-mail: {item.email}</Text>
                            <Text variant="bodyMedium">Telefone: {item.telefone}</Text>
                            <Text variant="bodyMedium">Cep: {item.cep}</Text>
                            <Text variant="bodyMedium">Logradouro: {item.logradouro}</Text>
                            <Text variant="bodyMedium">Complemento: {item.complemento}</Text>
                            <Text variant="bodyMedium">Número: {item.numero}</Text>
                            <Text variant="bodyMedium">Bairro: {item.bairro}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <IconButton icon='pencil' iconColor='#009EFF' onPress={() => navigation.push('alunos-form', { id: i, aluno: item })} />
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
                onPress={() => navigation.push('alunos-form')}
            />
        </>
    )
}

export default Alunos