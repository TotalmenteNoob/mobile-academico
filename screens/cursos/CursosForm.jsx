import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import cursoValidator from '../../validators/cursoValidator'
import { mask } from 'remask'

const CursosForm = ({ navigation, route }) => {

    let curso = {
        nome: '',
        duracao: '',
        modalidade: ''
    }

    const id = route.params?.id

    if (id >= 0) {
        curso = route.params?.curso
    }

    function salvar(dados) {

        AsyncStorage.getItem('cursos').then(resultado => {

            const cursos = JSON.parse(resultado) || []

            if (id >= 0) {
                cursos.splice(id, 1, dados)
            } else {
                cursos.push(dados)
            }

            AsyncStorage.setItem('cursos', JSON.stringify(cursos))

            navigation.goBack()
        })
    }

    return (
        <>
            <ScrollView style={{ margin: 15 }}>
                <Text>Formulário de Cursos</Text>

                <Formik
                    initialValues={curso}
                    validationSchema={cursoValidator}
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
                                mode='outlined'
                                label='Duração'
                                keyboardType='decimal-pad'
                                value={values.duracao}
                                onChangeText={handleChange('duracao')}
                            />
                            {(errors.duracao && touched.duracao) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.duracao}</Text>
                            }
                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Modalidade'
                                value={values.modalidade}
                                onChangeText={handleChange('modalidade')}
                            />
                            {(errors.modalidade && touched.modalidade) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.modalidade}</Text>
                            }
                            <Button onPress={handleSubmit}>Salvar</Button>

                        </View>
                    )}

                </Formik>

            </ScrollView>
        </>
    )
}

export default CursosForm