import React from 'react'
import { Button, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {
    return (
        <>
            <Text>Cursos</Text>
            <Button
                icon='plus'
                mode='contained'
                onPress={()=>navigation.push('cursos-form')}
            >
                Novo
            </Button>
        </>
    )
}

export default Cursos