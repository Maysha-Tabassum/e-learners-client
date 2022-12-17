import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TearmsAndConditions from "../../Pages/Others/TearmsAndConditions/TearmsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://e-learners-server.vercel.app/course')
            },
            {
               path: '/courses/:id',
               element: <Category></Category>,
               loader: ({params}) => fetch(`https://e-learners-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course-details/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://e-learners-server.vercel.app/course/${params.id}`)
                
            },
     
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TearmsAndConditions></TearmsAndConditions>
            },
            {
                path: '*',
                element: <Error></Error>
            }

        ]
    }
])