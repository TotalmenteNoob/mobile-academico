import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput, Picker } from 'react-native-paper'

const DisciplinasForm = ({ navigation }) => {
    const [dados, setDados] = useState({
        nome: '',
        curso_id: null,
    })

    const cursos = [] // Carregue os cursos de alguma fonte de dados, como AsyncStorage ou uma API

    function handleChange(valor, campo) {
        setDados({ ...dados, [campo]: valor })
    }

    function salvar() {
        AsyncStorage.getItem('disciplinas').then(resultado => {
            const disciplinas = JSON.parse(resultado) || []

            disciplinas.push(dados)
            console.log(disciplinas)

            AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

            navigation.goBack()
        })
    }

    return (
        <>
            <ScrollView style={{ margin: 15 }}>
                <Text>Formulário de Disciplinas</Text>

                <TextInput
                    style={{ margin: 10 }}
                    mode='outlined'
                    label='Nome'
                    value={dados.nome}
                    onChangeText={(valor) => handleChange(valor, 'nome')}
                />

                <Picker
                    selectedValue={dados.curso_id}
                    onValueChange={(valor) => handleChange(valor, 'curso_id')}
                    style={{ margin: 10 }}
                >
                    <Picker.Item label="Selecione um curso" value={null} />
                    {cursos.map(curso => (
                        <Picker.Item key={curso.id} label={curso.nome} value={curso.id} />
                    ))}
                </Picker>

                <Button onPress={salvar}>Salvar</Button>
            </ScrollView>
        </>
    )
}

export default DisciplinasForm
