import axios from "axios";

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWE2NjdhOTRiMGU1Mjk1ZTlkOTc4ODQ2NGE2Nzc3YSIsInN1YiI6IjY0MzVlMTQ3OTQ2MzE4MDBiZGZmMWVmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7uqrm0XsKu4ef4P5HTMg9FuC7qjMhRP5gsHYHkZuh8M'
    }
})

export default apiFilmes