import React, { useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'


const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    function carregar() {
        apiFilmes.get('/movie/popular/').then(resultado => {
            setFilmes(resultado.data.results)
        })
    }

    return (
        <>
            <Button onPress={carregar}>Carregar filmes</Button>

            {filmes.map(item => (
                <Card>
                    <Card.Cover source={{ uri: 'http://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
                    <Card.Content>
                        <Text variant="titleLarge">{item.title}</Text>
                        <Text variant="bodyMedium">{item.overview}</Text>
                    </Card.Content>
                </Card>
            ))}
        </>
    )
}

export default FilmesPopulares