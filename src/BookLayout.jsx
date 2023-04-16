import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Link, Outlet } from "react-router-dom"

const BookLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
    const number = searchParams.get('n')
    return (
        <>
            <Link to='/Books/1'>Books1</Link>
            <br />
            <Link to='/Books/2'>Books2</Link>
            <br />
            <Link to={`/Books/${number}`}>Books {number}</Link>
            <br />
            <Link to='/Books/new'>NewBooks</Link>
            <br />
            <Outlet context={{ hello: "world" }} />

            <input type="number" value={number} onChange={e => setSearchParams({ n: e.target.value })} />
        </>
    )
}

export default BookLayout