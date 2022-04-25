import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home({ token }) {
 
  return (
  
    <Layout>
       
    <Head>
        <title> First Page</title>
    </Head>
    
    <div >
        <Navbar />
    </div>

    <div>
    <div class="flex justify-center text-md" > 
  <p>
   
    I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings at
    <p class="flex justify-center  ">My Company, Inc </p> 
    <p class="flex justify-center text-md">watchpod-racing</p> 
    <p class="flex justify-center text-md">light-saber</p> 
  </p>

</div>
  
    <p className="flex justify-center text-md" >Welcome Home</p>
    <p className="flex justify-center text-md" >Home</p>
    </div>
</Layout>

  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
