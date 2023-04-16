import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()
    /*
     useNavigate will return the function that we can access. we setting timeout on navigation after 1s it will navigate to the home page. you can use useNavigate to navigate user to login page to main page. 
     1. why we are using useEffect? 
     -> The reason we are using useEffect is we want to run the setTimeout function one time when component is renders (when our document gets loaded).
    */

    useEffect(() => {
        setTimeout(() => { (navigate('/')) }, 1000) // instead of path ('/') you can also put (-1) to go back to the previous page.
    }, [])

    return (
        // <Navigate to='/'>404 Not Found</Navigate>
        <h1>Not Found</h1>
    )
}
export default NotFound