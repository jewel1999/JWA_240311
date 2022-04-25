
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.data.message)
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div className="flex flex-col item-center ">
            <div className="justify-center my-8">
                Username:
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Email:
            </div>
            <div>
                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                Password:
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>

        </div>
    )


    return (
        <Layout>
            <Head>
            
                <title>Register</title>
            </Head>
            <div >
                <Navbar />


                <div className ="flex flex-col fixed bg-amber-300 justify-center items-center border-4 h-screen w-screen">
                <div className="text-center divide-y-2 devide-black  text-2xl">
                

                <div className ="border-4 border-pink-500 ">
                        <h1>Register</h1>

                <div className="text-center divide-y-2 devide-black mt-10 text-2xl" >
<div >
                    <button className= "rounded-lg  text-orange-700" onClick={register}>Register</button>
                </div>
                <div className="flex flex-col fixed justify-start item-center ">
                    {registerForm()}
                </div>
               
                </div>
                </div>
            
                
            </div>

</div> 

</div>




        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
