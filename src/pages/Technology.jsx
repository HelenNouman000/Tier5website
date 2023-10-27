import React from 'react'
import '../styles/technology.css'
import NavBar from '../components/NavBar'
import { Container } from '@mui/material'
import Footer from '../components/Footer'
function Technology() {
  return (
    <section className='technology'>
    <section className='landing'>
       <Container>
       <NavBar />
        <div className='text-center text-white mt-28 main-section'>
            <h2 className=' font-bold'>The Advancement in Technology</h2>
            <p>We are all aware that emerging technologies are changing the way we work and interact with others. So, why should we lag behind? By staying up to date on the latest trends gives us a better understanding of your business.</p>
            <a target='_blank' href='https://partner.tier5.us/jrpartnership' className='learn-more2'>Learn more</a>
        </div>
       </Container>
    </section>
    <section className='info-main pt-32 pb-38'>
        <Container>
          <div className='flex gap-28'>

          <section>Initially, as a start, we picked up the smarter PHP framework like Laravel with the backend MySQL and PgSQL Database structure. That has helped us to develop the enterprise-level applications at ease! Gradually we have upgraded to a more functionally reach technology stack to enable a much better user experience.</section>
            <section>
                <span>In no time, we adapted to the latest technologies like</span>
                <h2>Angular JS, React JS, Express JS, Vue JS, Node JS, as the open-source, cross-platform with the MVC Framework. We scaled up to MongoDB, Amazon DynamoDB as NoSQL Database program, Redis as an in-memory data structure with the cloud computing platform AWS.</h2>
                <span>This all together gave us a cutting-edge advantage in the technology stack.</span>
                <p className='g-parag'>
                On the other side, we rebuild our APIs with a robust backend structure like Application Load Balancing to enable a smooth user experience with High Availability (HA). With this continuous upgradations, every time our server rendering and loading became much faster.
                </p>
                <p className='g-parag'>With the seasoned professional R&D Team, we have further enriched our software functionalities. The team is always on their toes for continuous Integration and continuous deployment (CI/CD) on the code structure to deliver values with enhanced feature and functionalities leading to better user experience (UX).</p>

                <p className='g-parag'>Our user community is our strength! They enrich us with the direction of our software advancement. So, in a nutshell, we always thrive towards excellence to deliver the user community with the most advanced features, unmatched functionalities, smooth browsing experience to be more competitive. Our ultimate aim is to deliver values to our beloved customers and community members.</p>
            </section>
          </div>

        </Container>
    </section>
    <Footer />
    </section>
  )
}

export default Technology