import Link from 'next/link'
import styles from '../styles/Home.module.css'


const Navbar = () => (
    <div className="relative h-32 w-32">
        <h1  className="absolute inset-x-0 top-0 h-16">Students Information</h1>
        <Link href="/"><a> Home </a></Link> |
        <Link href="/showStudents"><a> Students </a></Link> |
        <Link href="/register"><a> Register </a></Link>  |
        <Link href="/login"><a> Login </a></Link> |
        <Link href="/profile"><a> Profile </a></Link> | 
        <Link href="/getConfig"><a> Config </a></Link> |  
        <Link href="/logout"><a> Logout </a></Link> |
        
    </div>
)

export default Navbar