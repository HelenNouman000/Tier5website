import { Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/HelpingHands.css'
function HelpingHands() {
  return (
    <section className='helping-hands'>
     
            <section className='landing'>
            <Container>
                <NavBar />
                <section className='flex flex-row-reverse main  justify-between pt-12 pb-24 mb-10'>
                

                       <div className='pt-24'>
                       <img src='/assets/helping.png' alt='' />
                       <a className='learn-more2'>LEARN MORE</a>
                       </div>
                 
                    <div>
                        <h1>Helping Hands</h1>
                        <p>
                       <span > The Tier5 Helping Hands</span> Program is a special non-profit program created by Tier5 to be able to create a positive impact in <span>the lives of orphan children</span> by leveraging the power of Tier5 enterprise level software. It's our way of giving back and doing good outside of <span>just creating enterprise level software</span> to help business owners manage, grow, and scale their businesses.
                       <br />
                       <br />

The Tier5 Helping Hands Program offers enterprise software to businesses in exchange for a <span>small monthly donation. </span>We use the donations to power orphanages all over <span>Kolkata, West Bengal, India</span> where Tier5's main development headquarters is located. The Tier5 Helping Hands Program allows businesses to get a <span>huge discount on Tier5 enterprise level software</span> and at the same time create positive impact in the lives of children that need it the most. It is a win win for everyone involved, but mostly a huge win for the children that are <span>housed, clothed, fed, and educated</span> through the Tier5 Helping Hands Program.
                        </p>
                    </div>
                </section>
                </Container>
            </section>
    
        <Footer />
    </section>
  )
}

export default HelpingHands