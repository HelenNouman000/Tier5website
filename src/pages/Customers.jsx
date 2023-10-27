import { Container } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/customers.css'
import ReactPlayer from 'react-player'

function Customers() {
  return (
    <section className='customers'>
        <section className='landing'>

            <Container>
                <NavBar />
            <div className='info'>
            <h2>Trusted And Loved By More Than 7000 <br />
Users Worldwide</h2>
<p>Tier5 is known for delivering customer-centric products and is trusted and loved by successful entrepreneurs, market leaders and the startup companies globally for their innovative and high utility software, reliable customer support and the zeal to upgrade themselves to higher standards.</p>
            </div>
            </Container>
        </section>

        <section className='text-center videos'>
          <Container>
          <ReactPlayer url={'//www.youtube.com/embed/exJfBZgTBgs'} controls={true} />
            <section className='flex nested mb-16'>

            <div><ReactPlayer url={'//www.youtube.com/embed/Jg86sdD5bf8'} controls={true} /></div>

            <div className='cardd'>
                <p>
                I actually saw Jon Vaughn's promo for text in bulk a while ago when he was selling it as a white label opportunity. It was one of those situations where, I'll just save this info somewhere and you forget where that info went. Since, then I have been ... <a target='_blank' href='https://www.facebook.com/tier5development'>Read More</a>
                </p>
                <span>Guy Purdy, via Facebook</span>

            </div>

         <div>   <ReactPlayer url={'//www.youtube.com/embed/6JN7jLxetEg'} controls={true} /></div>

<div className='cardd'>
    <p>Get on this while you can because it won't be available for long. Money loves speed and Tier5 helps you go really really fast.</p>
    <span>Ryan Hansel, via Facebook</span>
</div>
<div><ReactPlayer url={'//www.youtube.com/embed/vgoxgk3a_34'} controls={true} /></div>
<div className='cardd'>
    <p>I think this is one of the best investment that I have made. This not a class, but you get training, this is not just software, you have the option to use and sell. This is a real once in a lifetime opportunity. Don't be stupid get in now or miss out and tell your kids I had</p>
    <span>Bobby Taylor, via Facebook</span>
</div>

            </section>
          </Container>
        </section>
<Footer />
    </section>
  )
}

export default Customers