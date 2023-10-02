import { Outlet } from "react-router-dom"

export function Layout() {

    return (
        <section>
            <h1>Star Wars</h1>
            <Outlet />
        </section>
    )
}
