import { useQuery } from "@tanstack/react-query"
import { getPersons } from "../Queries/GetPersons";
import { request } from 'graphql-request'
import { BarLoader } from 'React-spinners'

export function Main() {
    const { data, isLoading, error } = useQuery({ queryKey: ['getStarWarsFilm'], 
    queryFn: async() => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getPersons) })
    console.log(data);

    if (isLoading) return <BarLoader color="#36d7b7" />
    if (error) return <p>Error.... {error.message}</p>

    return (
        <section>
            <h1>Main page</h1>

            {data.allPeople.people.map((item,i) => {
                return <p key={i}> {item.name}</p>
            })}
        </section>
    )
}
