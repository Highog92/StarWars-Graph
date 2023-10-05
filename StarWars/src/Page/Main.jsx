import { useQuery } from "@tanstack/react-query"
import { getPersons } from "../Queries/GetPersons";
import { request } from 'graphql-request'
import { BarLoader } from 'React-spinners'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";


export function Main() {
    const [inputText, setInputText] = useState(" ")
    const [searchData, setSearchData] = useState()


    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsPeople'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getPersons)
    })

    function search() {
        let clone = data.allPeople.people.map((i) => i)
        let result = clone.filter((item) => item.name.toLowerCase().includes(inputText))
        setSearchData(result)
    }

    useEffect(() => {
        if (inputText == "") {
            setSearchData()
        }
    }, [inputText])

    if (isLoading) return <BarLoader color="#36d7b7" />
    if (error) return <p>Error.... {error.message}</p>

    return (
        <section>
            <input type="text" placeholder="Søg" onChange={(event) => setInputText(event.target.value)} />
            <button onClick={() => search()}>Search</button>
            <h1>Main page</h1>


            {!searchData ? data.allPeople.people.map((item, i) => {
                return <Link to={`/person/${item.id}`} key={i}> {item.name}</Link>
            }) : searchData.map((item) => {
                return <Link to={`/person/${item.id}`} key={item}> {item.name}</Link>
            })}
        </section>
    )
}
