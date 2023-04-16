import { Routes, Route } from 'react-router-dom'
import BookLayout from './BookLayout'
import Book from "./Book"
import NewBook from './NewBook'
import BookList from './BookList'


const BookContent = () => {
    return (
        <>
            <Routes>
                <Route element={<BookLayout />}>
                    <Route index element={<BookList />} />
                    {/* here index basically means the parent routers path */}
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route>
            </Routes>
        </>
    )
}

export default BookContent