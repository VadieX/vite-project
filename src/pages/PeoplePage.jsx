import {useParams} from 'react-router-dom'
import { data } from '../data/module-data'
function PeoplePage(){
    const {id} = useParams()
    const person = data.find(person => person.id === parseInt(id))
    return (
        <>
            <h1>Szukane imię</h1>
            <p>{person ? person.name : 'Person not found'}</p>
        </>
    )
}
export default PeoplePage