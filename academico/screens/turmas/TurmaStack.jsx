import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Turmas from './Turmas';
import TurmasForm from './TurmasForm';

const Stack = createNativeStackNavigator();

const TurmaStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="turmas" component={Turmas} options={{ title: "Turmas" }} />
                <Stack.Screen name="turmas-form" component={TurmasForm} options={{ title: "Cadastro de Turma" }} />
            </Stack.Navigator>
        </>
    )
}

export default TurmaStack