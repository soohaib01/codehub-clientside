import { Button,Spinner } from '@fluentui/react-components';
import Head from 'next/head';
import ThemeCard from '../components/Home/cards';
import { Container,Grid, Box,SimpleGrid} from '@chakra-ui/react'
import SideCard from '../components/Home/sideCard';

export default function Home({themes}) {
  return (

    <div>
          <Head>
            <title>Home</title>
          </Head>
       <div className='container'>
        <div className='left'>
        {themes.data.map(item => <div key={item.id}>
        <ThemeCard id={item.id} name={item.attributes.Name} description={item.attributes.description} image={item.attributes.imageUrl}/>
        </div>)}
          </div>
          <div className='right'>
           <SideCard/>
           <SideCard/>
          </div>
       </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:1337/api/scripts',{
  method:"get",
  headers : {
    'Authorization': 'Bearer 37b623cc0e796af8e579a3d2021b3bdf4ebf1046e49c327a50cc45277a0d95332d1aff78b9d5e60560d927b8880100454341c546906d6b5de206076b202b506131019ad25a484aa7ca24e48e0e3e8f8edc15cc596b2a7291aa1a301867edda6f031f88f7b44d0a1ad2da220c92a0414c963eb296a73bd42c4f353a6706946f9d'
  }
});
const themes = await res.json();
return {
props:{
  themes
}
}
}