import { Container } from '@mui/material'
import React from 'react'
import '../styles/partners.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
function Partners() {
  return (
    <section className='partners'>
          <section>
        <Container>
            <NavBar />
          
              <section className='pb-24 relative flex mb-12 '>
              <div className=' div-one'>
                <img src='/assets/p1.png' alt='' />
                <img src='/assets/p2.png' alt='' />
                <img src='/assets/p3.png' alt='' />
                <img src='/assets/p4.png' alt='' />
              </div>
                <div className='div-two'>
                    <h2>Become a Partner</h2>
                    <p className='mb-6'>We consider our partners as the pillar of our company . Tier5 is a professional software engineering firm and that provides enterprise level software to small and medium sized businesses. As a partner you will get all the software you need to run and grow your business online. As a partner you get unlocked access to all our software. You get access to our private support group where you will find other Tier5 partners, get help, make meaningful connections with other like minded Tier5 Partners. You never know what just one of these connections can do for your business. We have more than 300 active Tier5 Partners!!!</p>
                    <p className='mb-4'>The Tier5 Partner Program is the only way into our software reseller program. As Tier5 Reseller Partner you can sell Tier5 Software and keep 100% of the revenue. You have the freedom to price how you want, make your own offers. We do all the tech support, you keep 100% of the revenue you generate. Only Tier5 Partners are able to sign up for our software reseller program and resell Tier5 Software. </p>
                    <p className='mb-4'>You get the opportunity to work directly with Tier5 and our amazing engineering team to build the software you need. Don't wait months for the features you want. Partners get it first.</p>
                    <p className='mb-20'>You also get 1 on 1 priority support from our support team and group training to help you grow and scale your company.</p>

                    <a className='learn-more2' href='https://partnership.tier5.us'>Join The Tier5 Family</a>
                </div>
                <div className=' div-three'>
                <img src='/assets/p5.png' alt='' />
                <img src='/assets/p6.png' alt='' />
                <img src='/assets/p7.png' alt='' />
                <img src='/assets/p8.png' alt='' />
              </div>
              </section>
          
        </Container>
        </section>
        <Footer />
    </section>
  )
}

export default Partners