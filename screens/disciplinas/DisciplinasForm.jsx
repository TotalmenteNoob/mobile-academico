import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import disciplinaValidator from '../../validators/disciplinaValidator'
import { mask } from 'remask'

const DisciplinasForm = ({ navigation, route }) => {

    let disciplina = {
        nome: '',
        cursos: '',
    }

    const id = route.params?.id

    if (id >= 0) {
        disciplina = route.params?.disciplina
    }

    function salvar(dados) {

        AsyncStorage.getItem('disciplinas').then(resultado => {

            const disciplinas = JSON.parse(resultado) || []

            if (id >= 0) {
                disciplinas.splice(id, 1, dados)
            } else {
                disciplinas.push(dados)
            }

            AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

            navigation.goBack()
        })
    }

    return (
        <>
            <ScrollView style={{ margin: 15 }}>
                <Text>Formulário de Disciplinas</Text>

                <Formik
                    initialValues={disciplina}
                    validationSchema={disciplinaValidator}
                    onSubmit={values => salvar(values)}
                >
                    {({ values, handleChange, handleSubmit, errors, touched }) => (
                        <View>

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Nome'
                                value={values.nome}
                                onChangeText={handleChange('nome')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.nome}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode="outlined"
                                label='Curso'
                                keyboardType="decimal-pad"
                                value={values.cursos}
                                onChangeText={handleChange('cursos')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.cursos}</Text>
                            }

                            <Button onPress={handleSubmit}>Salvar</Button>

                        </View>
                    )}

                </Formik>

            </ScrollView>
        </>
    )
}

export default DisciplinasForm