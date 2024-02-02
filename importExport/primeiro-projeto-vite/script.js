import axios from "axios"

console.log('Texxtano')


axios.get("https://random-data-api.com/api/v2/users")
    .then(response => console.log(response.data))