import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Test from '../components/Test'

export default function Home({ token }) {
 
  return (
    <Layout>
    <Head>
        <title>เที่ยวด้วยกันนะ.com</title>
    </Head>
          <div >        
                <Navbar />        
          </div>

          

          <div >        
                < Test />        
          </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
