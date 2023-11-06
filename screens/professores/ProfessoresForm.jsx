import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { View } from 'react-native-web'
import professorValidator from '../../validators/professorValidator'

const ProfessoresForm = ({ navigation, route }) => {

    let professor = {
        nome: '',
        cpf: '',
        matricula: '',
        salario: '',
        email: '',
        telefone: '',
        cep: '',
        logradouro: '',
        complemento: '',
        numero: '',
        bairro: '',
    }

    const id = route.params?.id

    if (id >= 0) {
        professor = route.params?.professor
    }

    function salvar() {

        AsyncStorage.getItem('professores').then(resultado => {

            const professores = JSON.parse(resultado) || []

            if (id >= 0) {
                professores.splice(id, 1, dados)
            } else {
                professores.push(dados)
            }

            AsyncStorage.setItem('professores', JSON.stringify(professores))

            navigation.goBack()
        })
    }

    return (
        <>
            <ScrollView style={{ margin: 15 }}>
                <Text>Formulário de Professores</Text>

                <Formik
                    initialValues={professor}
                    validationSchema={professorValidator}
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
                                label='CPF'
                                value={values.cpf}
                                onChangeText={handleChange('cpf')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.cpf}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Matrícula'
                                value={values.matricula}
                                onChangeText={handleChange('matricula')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.matricula}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Salário'
                                keyboardType='decimal-pad'
                                value={values.salario}
                                onChangeText={handleChange('salario')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.salario}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='E-mail'
                                value={values.email}
                                onChangeText={handleChange('email')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.email}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Telefone'
                                value={values.telefone}
                                onChangeText={handleChange('telefone')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.telefone}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='CEP'
                                value={values.cep}
                                onChangeText={handleChange('cep')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.cep}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Logradouro'
                                value={values.logradouro}
                                onChangeText={handleChange('logradouro')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.logradouro}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Complemento'
                                value={values.complemento}
                                onChangeText={handleChange('complemento')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.complemento}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Número'
                                value={values.numero}
                                onChangeText={handleChange('numero')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.numero}</Text>
                            }

                            <TextInput
                                style={{ margin: 10 }}
                                mode='outlined'
                                label='Bairro'
                                value={values.bairro}
                                onChangeText={handleChange('bairro')}
                            />
                            {(errors.nome && touched.nome) &&
                                <Text style={{ color: 'red', marginTop: 3 }}>{errors.bairro}</Text>
                            }

                            <Button onPress={handleSubmit}>Salvar</Button>

                        </View>

                    )}

                </Formik>

            </ScrollView>
        </>
    )
}

export default ProfessoresForm
