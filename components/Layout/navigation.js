import Head from 'next/head'
import Link from 'next/link'
import MobileNavigation from '../mobile/mobileNavigation';
export default function Navigation() {
  return (
    <>
    <Head>
    <script src="https://cdn.tailwindcss.com"></script>

    </Head>

    <div className="min-h-full shadow-2xl">
  <nav className="bg-white-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link href="/">
            <img className="h-8 w-8" src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500' alt="Workflow" />
            </Link>

          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">

              <Link href="/phpscripts" className="text-gray-800 hover:bg-gray-800 hover:text-gray px-3 py-2 rounded-md text-sm font-medium">PHP Scripts</Link>

              <Link href="/mobile" className="text-gray-800 hover:bg-gray-700 hover:text-gray px-3 py-2 rounded-md text-sm font-medium">Mobile Scripts</Link>

              <Link href="/wordpress" className="text-gray-800 hover:bg-gray-700 hover:text-gray px-3 py-2 rounded-md text-sm font-medium">Wordpress</Link>

              <Link href="#" className="text-gray-800 hover:bg-gray-700 hover:text-gray px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"> Register</a>


      
            <div className="ml-3 relative">
              <div>
           
              </div>

             
              
          
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
        <MobileNavigation/>
        </div>
      </div>
    </div>
  </nav>
</div>
 </>
  );
}