import { useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { Container } from '@mui/material'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function MainPage() {
const [sideMenu , setSide] = useState(false);
// const menu = document.getElementById('#menu');


  return (
    <section className='mainpage'>
      <section className='landing relative bg-slate-500 text-white text-center'  >
        <Container>
     <NavBar />
          <section>
          <h1 className='land-header font-bold'>Explore our Powerful Tools</h1>
            <p className='text-2xl'>Building a better business with Tier5</p>
            <button className='sec-btn'>Learn more</button>
          </section>
        </Container>
  

      </section>

{/* experince */}
      <section className='experince py-20 text-black text-center'  >
        <Container>
         <section className='ex-up'>
         <h3 className='ex-header'>Experience our Software </h3>
          <p className='ex-parag pb-5'>Stay on the cutting edge with new solutions, customers haven’t seen before. Experience our supremely innovative and remarkably effective software's.</p>
          <a className='learn-more-btn'>Learn More</a>
         </section>
         <section className='item-list flex items-center gap-4 justify-between mt-24'>
          <a className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe6444d16fda_ch.png' alt='' />
            <h5 className='mt-4'>Chirply</h5>
          </a>
          <a className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe64478bec45_dl.png' alt='' />
            <h5 className='mt-4'>Domain Leads</h5>
          </a>
          <a className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe644906771f_mz.png' alt='' />
            <h5 className='mt-4'>Magic Zap</h5>
          </a>
          <a className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe644adabddf_iy.png' alt='' />
            <h5 className='mt-4'>Invoicing You</h5>
          </a>
          <a className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe644c17751d_sr.png' alt='' />
            <h5 className='mt-4'>Sticky Reviews</h5>
          </a>
          <addEventListener className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe644f7a19be_rc (1).png' alt='' />
            <h5 className='mt-4'>Robo Contact</h5>
          </addEventListener>
          <a className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe6450f83c4b_lw.png' alt='' />
            <h5 className='mt-4'>Link Wizard</h5>
          </a>
          {/* <div className='item' style={{width: 'fit-content'}}>
            <img src='/assets/5fe6444d16fda_ch.png' alt='' />
            <h5 className='mt-4'>Chirply</h5>
          </div> */}
         </section>
         </Container>
         <section className='count-section'>
          <div>
            <span>TOTAL USERS</span>
            <h3>5747</h3>
          </div>
          <div>
            <span>SMS SENT & RECEIVED</span>
            <h3>1717447</h3>
          </div>
          <div>
            <span>TOTAL PHONE CALLS</span>
            <h3>368126</h3>
          </div>
          <div>
            <span>TOTAL CONTACTS</span>
            <h3>5853236</h3>
          </div>
         </section>
      
      </section>
   
{/* business owner */}
   <section className='owner-up'>
   <div className='overImg'>
   <img src='/assets/5ff224e1a6c25_index_g.png' alt='' className='rightSideImg' />
   </div>
   <section className='owners flex flex-row-reverse items-start justify-between'>
      <Container>
  <section className='text-center owner-info'>
  <h2>Trusted by <b>15000+</b> business owners</h2>
<p>Tier5 has proved to be devoted & incorruptible by successful entrepreneurs, market leaders and startup companies globally  for it's spirituous and high  serviceable software's, user-friendly products, dependable customer support and the zeal for upgrading themselves to raise standards. </p>
<img src='/assets/6151a8e113aee_aaaa.png' alt='' />
<a className='learn-more-btn'>Learn more</a>
  </section>
      </Container>
      <img src='/assets/5ff21b8761e92_graphic_home_.png' alt='' className='leftSideImg' />
    </section>
   </section>


   {/* partner */}
   <section className='partner pt-32 pb-24'>
    <Container>
      <section className='flex flex-row-reverse items-center'>
        <img src='/assets/5fef4b537c5c9_Graphic_partner.png' />
        <section>
            <img src='/assets/5ff1f3b3ee46a_download.png' alt='' />
            <h3 className='part-header'>Become a <b>Partner</b></h3>
            <p>You will actually own a part of Tier5 and <b>once you are a partner of Tier5, you start earning</b>.</p>
            <button className='sec-btn'>I'm intersted</button>
        </section>
      </section>
    </Container>
   </section>
<Footer />
    </section>
  )
}

export default MainPage
