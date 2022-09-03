import { useRouter } from 'next/router'
import Head from 'next/head'
const Detail = ({themeDetail}) => {
  const links = themeDetail.data.attributes.Downloadlinks
  const selectText = function (ele) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(ele);
    selection.removeAllRanges();
    selection.addRange(range);
};
  // const router = useRouter()
  return (
    <>
     <Head>
     <script src="https://cdn.tailwindcss.com"></script>
     </Head>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto ">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={themeDetail.data.attributes.imageUrl} />
      </div>
 
        <div className="sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          {Object.keys(links).map((key, i) => (
         
       
          <li key={i} className='list-disc text-gray-800 font-semibold'>{links[key]}</li>
        
  
      
      ))}
      
          <a className="text-white rounded-md cursor-pointer hover:bg-indigo-500 mt-5 inline-flex items-center p-2 bg-indigo-600">DEMO
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
</section>
    </>
  )
}

export const getServerSideProps = async (context) => {
  console.log(`http://localhost:1337/api/scripts${context.params.id}`)
  const res = await fetch(`http://localhost:1337/api/scripts/${context.params.id}`,{
    method:"get",
    headers : {
      'Authorization': 'Bearer 37b623cc0e796af8e579a3d2021b3bdf4ebf1046e49c327a50cc45277a0d95332d1aff78b9d5e60560d927b8880100454341c546906d6b5de206076b202b506131019ad25a484aa7ca24e48e0e3e8f8edc15cc596b2a7291aa1a301867edda6f031f88f7b44d0a1ad2da220c92a0414c963eb296a73bd42c4f353a6706946f9d'
    }
  });
  const themeDetail = await res.json()
  console.log(themeDetail.data.attributes.Downloadlinks)
  return {
    props:{
      themeDetail
    }
  }
}


export default Detail