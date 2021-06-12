import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {createClient} from 'contentful';
import HomePage from '../components/Layout/components/page_component/HomePage';


export async  function getStaticProps()
{
  const client = createClient({
   space:process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY,
  })
  const res=await client.getEntries({content_type:'lodhaGoup'})
  console.log(res);
  return {
    props:{
      articles:res.items
    }
  }
}

export default function Home({articles}) {
  console.warn(articles)
  return (
    <div>
   {articles.map((article,index)=>
      <HomePage key={index} article={article} />
      
    )}
    </div>
  )
}
