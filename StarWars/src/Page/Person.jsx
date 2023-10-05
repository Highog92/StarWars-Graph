import { useParams } from 'react-router-dom';
import { getOnePerson } from '../Queries/GetOnePerson';
import { BarLoader } from 'React-spinners'
import { request } from 'graphql-request'
import { useQuery } from "@tanstack/react-query"
import { Link } from 'react-router-dom'


export function Person() {
    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsPerson'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getOnePerson, { personId: id })
    })
    console.log(data);

    console.log("id", id);

    if (isLoading) return <BarLoader color="#36d7b7" />
    if (error) return <p>Error.... try again {error.message}</p>

    return (
        <section>
            <h4>Person Page</h4>
            <div>
                <h2>{data.person.name}</h2>
                <p>{data.person.gender}</p>
                <p>Born: {data.person.birthYear}</p>
                <p>Height: {data.person.height}</p>
                <p>Hair Color: {data.person.hairColor}</p>
                <p>Eye Color: {data.person.eyeColor}</p>

                <button><Link to={'/'}>Back</Link></button>
            </div>

        </section>
    )
}
