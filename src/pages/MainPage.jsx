import { useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { Container } from '@mui/material'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function MainPage() {
const [sideMenu , setSide] = useState(false);
const [prod , setProd] = useState('Chirply');
// const menu = document.getElementById('#menu');
const handleClick = (e) => {
  e.preventDefault();

  setProd(e.currentTarget.id);

}

  return (
    <section className='mainpage'>
      <section className='landing relative bg-slate-500 text-white text-center'  >
        <Container>
     <NavBar />
          <section>
          <h1 className='land-header font-bold'>Explore our Powerful Tools</h1>
            <p className='text-2xl'>Building a better business with Tier5</p>
            <button className='sec-btn'>Learn more</button>
            <div className='flex items-center justify-center gap-8 mt-12 mb-5 awards'>
              <div className='pr-16 toborder'>
                <h3 className='underline mb-6 font-bold'>Awards & Recognitions :</h3>
                <img src='/assets/award1.png' />
              </div>
              <div className='pl-4'>
                <h3 className='underline mb-6 font-bold'>Proud Members :</h3>
                <img src='/assets/award2.png' />
              </div>
            </div>
          </section>
        </Container>
  

      </section>

{/* experince */}
      <section className='experince py-20 text-black text-center'  >
        <Container>
        <section className='ex-up'>
         <h3 className='ex-header'>Experience our Software </h3>
          <p className='ex-parag pb-5'>Stay on the cutting edge with new solutions, customers haven’t seen before. Experience our supremely innovative and remarkably effective software's.</p>
          <a className='learn-more-btn' href='https://partner.tier5.us/jrpartnership'>Learn More</a>
         </section>
         <section className='dy-items item-list flex items-center gap-4 justify-between mt-24'>
          <a className='item cursor-pointer' id='Chirply' onClick={handleClick} style={{width: 'fit-content'}}>
            <img src='/assets/5fe6444d16fda_ch.png' alt='' />
            <h5 className='mt-4'>Chirply</h5>
          </a>
          <a className='item cursor-pointer' id='Domain' onClick={handleClick} style={{width: 'fit-content'}}>
            <img src='/assets/5fe64478bec45_dl.png' alt='' />
            <h5 className='mt-4'>Domain Leads</h5>
          </a>
          <a className='item cursor-pointer' id='Magic' onClick={handleClick} style={{width: 'fit-content'}}>
            <img src='/assets/5fe644906771f_mz.png' alt='' />
            <h5 className='mt-4'>Magic Zap</h5>
          </a>
          <a className='item cursor-pointer' id='Invoicing' onClick={handleClick} style={{width: 'fit-content'}}>
            <img src='/assets/5fe644adabddf_iy.png' alt='' />
            <h5 className='mt-4'>Invoicing You</h5>
          </a>
          <a className='item cursor-pointer' id='Sticky' onClick={handleClick} style={{width: 'fit-content'}}>
            <img src='/assets/5fe644c17751d_sr.png' alt='' />
            <h5 className='mt-4'>Sticky Reviews</h5>
          </a>
          <a className='item cursor-pointer' id='Robo' onClick={handleClick} style={{width: 'fit-content'}}>
            <img src='/assets/5fe644f7a19be_rc (1).png' alt='' />
            <h5 className='mt-4'>Robo Contact</h5>
          </a>
          <a className='item cursor-pointer' id='Link' onClick={handleClick} style={{width: 'fit-content'}}>
            <img src='/assets/5fe6450f83c4b_lw.png' alt='' />
            <h5 className='mt-4'>Link Wizard</h5>
          </a>
     
         </section>
         </Container>
     {prod == 'Chirply' &&     <section className='count-section chir'>
          <div className='md:pr-5'>
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
         </section>}
         {prod == 'Domain' &&     <section className='count-section dom'>
          <div  className='md:pr-5'>
            <span>TOTAL USERS</span>
            <h3>3511</h3>
          </div>
          <div>
            <span>SMS SENT & RECEIVED</span>
            <h3>114803</h3>
          </div>
          <div>
            <span>TOTAL PHONE CALLS</span>
            <h3>37737497</h3>
          </div>
          <div>
            <span>TOTAL CONTACTS</span>
            <h3>43826</h3>
          </div>
         </section>}
         {prod == 'Magic' &&     <section className='count-section  mag'>
          <div  className='md:pr-9'>
            <span>TOTAL USERS</span>
            <h3>4430</h3>
          </div>
          <div  className='md:pr-9'>
            <span>TOTAL ZAPS</span>
            <h3>337</h3>
          </div>
          <div className='md:pr-6'>
            <span>TOTAL AUTOMATION</span>
            <h3>15303</h3>
          </div>
          <div>
            <span>TOTAL PAGE VIEWS</span>
            <h3>87435</h3>
          </div>
         </section>}

         {prod == 'Invoicing' &&     <section className='count-section inv'>
          <div>
            <span>TOTAL USERS</span>
            <h3>4625</h3>
          </div>
          <div>
            <span>GENERAL INVOICE</span>
            <h3>1046</h3>
          </div>
          <div>
            <span>GROUP INVOICE</span>
            <h3>122</h3>
          </div>
          <div>
            <span>PRODUCT INVOICE</span>
            <h3>767</h3>
          </div>
          <div>
            <span>ACH INVOICE</span>
            <h3>39</h3>
          </div>
          <div>
            <span>ASCENDING INVOICE</span>
            <h3>264</h3>
          </div>
         </section>}
      
         {prod == 'Sticky' &&     <section className='count-section sti'>
          <div>
            <span>TOTAL USERS</span>
            <h3>7596</h3>
          </div>
          <div className=''>
            <span>TOTAL STICKY REVIEWS</span>
            <h3>23312</h3>
          </div>
          <div className='md:pl-9'>
            <span>TOTAL REVIEWS FROM REVIEW LINKS</span>
            <h3>4574</h3>
          </div>
          <div>
            <span>TOTAL EMAILS COLLECTED FROM EXIT POPUPS</span>
            <h3>10074</h3>
          </div>
         </section>}
         {prod == 'Robo' &&     <section className='count-section rob'>
          <div className='md:pr-7'>
            <span>TOTAL USERS</span>
            <h3>3833</h3>
          </div>
          <div className='md:pr-2'>
            <span>TOTAL CONTACTS</span>
            <h3>244262</h3>
          </div>
          <div>
            <span>TOTAL CONTACT FORMS SUBMITTED</span>
            <h3>90890</h3>
          </div>
          <div>
            <span>TOTAL EMAIL SENT</span>
            <h3>93261</h3>
          </div>
         </section>}
         {prod == 'Link' &&     <section className='count-section lin'>
          <div>
            <span>TOTAL USERS</span>
            <h3>10176</h3>
          </div>
          <div>
            <span>TOTAL LINKS</span>
            <h3>496917</h3>
          </div>
          <div>
            <span>TOTAL CLICKS</span>
            <h3>3839443</h3>
          </div>
        
         </section>}
      </section>
   
{/* business owner */}
   <section className='owner-up'>
   <div className='overImg'>
   <img src='/assets/5ff224e1a6c25_index_g.png' alt='' className='rightSideImg' />
   </div>
   <section className='owners flex flex-row-reverse items-start justify-between flex-wrap-reverse md:flex-nowrap'>
      <Container>
  <section className='text-center owner-info'>
  <h2>Trusted by <b>15000+</b> business owners</h2>
<p>Tier5 has proved to be devoted & incorruptible by successful entrepreneurs, market leaders and startup companies globally  for it's spirituous and high  serviceable software's, user-friendly products, dependable customer support and the zeal for upgrading themselves to raise standards. </p>
<img src='/assets/6151a8e113aee_aaaa.png' alt='' />
<a className='learn-more-btn' href='https://partnership.tier5.us'>Learn more</a>
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
            <p className='mb-12'>You will actually own a part of Tier5 and <b>once you are a partner of Tier5, you start earning</b>.</p>
            <a className='sec-btn mt-5 py-3 px-16' href='https://partnership.tier5.us'>I'm intersted</a>
        </section>
      </section>
    </Container>
   </section>
<Footer />
    </section>
  )
}

export default MainPage
