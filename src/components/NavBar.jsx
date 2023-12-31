import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    const [sideMenu , setSide] = useState(false);
  return (
    <>
    <section className='flex items-center justify-between navBar py-10' >
           <Link to='/'>
           <img src='/assets/5fe632ff51e03_tier5_logo_white.png' alt='' />
           </Link>
            <div className='ef cursor-pointer' onClick={()=>setSide(true)}>
            <img src='/assets/5fe6368d7c98c_ham_menu.png'  alt='' />

            </div>
         
          </section>
             <div className={`bg-white  text-black  sidemenu ${sideMenu ? 'menuactive' : 'menunoactive'}`} >
             <div  onClick={()=> setSide(false)} className='cursor-pointer'>
             <img src='/assets/close.png' />
             </div>
               <ul>
                   <li><HashLink  to='/company'>Company</HashLink></li>
                   <li><HashLink to='/company#journy'>The Journy</HashLink></li>
                   <li><HashLink to='/company#products'>Products</HashLink></li>
                   <li><HashLink to='/company#leaders'>Leaders</HashLink></li>
                   <li><HashLink to='/technology'>Technology</HashLink></li>
                   <li><HashLink to='/helping_hands'>Helping Hands</HashLink></li>
                   <li><HashLink to='/internship'>Internship</HashLink></li>
                   <li><a href='https://career.tier5.in/'>Career</a></li>
                   <li><HashLink to='/partners'>Partners</HashLink></li>
                   <li><HashLink to='/customers'>Customers</HashLink></li>
                   <li><a href='https://blogs.tier5.in/'>Blogs</a></li>
                   <li><HashLink to='/newsletters'>NewsLetters</HashLink></li>
               </ul>
               <div className='number'>
                   <span>CALL US AT:</span>
                   <h3>+1-3177512232</h3>
               </div>
               <ul className='flex items-center gap-7 justify-center pt-5'>
     <li><a target='_blank' href='https://www.facebook.com/tier5development'><img src='/assets/facebookd.png'/></a></li>
     <li><a  target='_blank' href='https://www.linkedin.com/company/tier5-technology-solutions'><img src='/assets/linkedind.png'/></a></li>
     <li><a target='_blank' href="https://www.youtube.com/watch?v=DlJwoQKzJYw&list=PLgwAAY-aCn6c7FDA4ssXmvrZyOVC6k0nR"><img src='/assets/youtubed.png'/></a></li>
    
   </ul>
           </div>
           </>
  )
}

export default NavBar