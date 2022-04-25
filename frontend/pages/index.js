import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
export default function Home({ token }) {
 
  return (
  
    <Layout>
       
    <Head>
        <title> First Page</title>
    </Head>
    
    <div >
        <Navbar/>
    </div>

  <div classname="flex flex-col" >
    <h1 classname=" text-center" >Welcome Home</h1>
    </div>
       
</Layout>

  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
