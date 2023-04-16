import { useOutletContext, useParams } from 'react-router'

const Book = () => {
    // this is taking value from url localhost:5173/book/:value.
    const { id } = useParams()
    // this is taking value from outlet this works like context.
    const obj = useOutletContext()
    return (
        <h1>Book {id} {obj.hello}</h1>
    )
}

export default Book