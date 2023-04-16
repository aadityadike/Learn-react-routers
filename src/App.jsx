import { Routes, Route, useLocation } from "react-router-dom"
// import { useRoutes } from "react-router-dom"
import { NavLink } from "react-router-dom"
import Home from "./Home"
import NotFound from "./NotFound"
import BookContent from "./BookContent"
import Book from "./Book"
import Books from "./Books"

const App = () => {
  // let element = useRoutes([
  //   { path: '/', element: <Home /> },
  //   { path: '*', element: <NotFound /> },
  //   { path: '/Books', element: <Books /> }
  // ])

  const location = useLocation()
  const l = location.key
  console.log(l)
  
  return (
    <>
      <Routes location={'/Books'}>
        <Route path="/Books" element={<h1>Hello Aditya!</h1>} />
      </Routes>

      <nav>
        <ul>
          {/* Replace property is used to go two step back. e.g if i am on page1 and i go to page 2 then i go to page 3 and now press the back button but instead of going on page 2 to will be redirected to page1. */}
          <li><NavLink style={({ isActive }) => { color: "green" }} to='/' replace reloadDocument >Home</NavLink></li>
          {/* is Active is by default property we can also use in our stylesheet, NavLink has class of active so we can use to style it. */}

          we can pass state from navlink and we can asses the state via useLocation.
          <li><NavLink to='/Books' state="Hi">Books</NavLink></li>
        </ul>
      </nav >
      {/* {element} */}
      <Routes Routes >
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Books/*" element={<BookContent />} />
      </Routes >
    </>
  )
}

export default App