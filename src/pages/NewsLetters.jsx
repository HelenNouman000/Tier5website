import { Container } from '@mui/material'
import React from 'react'
import '../styles/newsletters.css'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
function NewsLetters() {
  return (
    <section className='newsletters'>
      <section className='landing'>
        <Container>
          <NavBar />
        </Container>
      </section>
     <Container>
      <section className='py-16 text-center mb-12 '>
        <h2 className='relative'>Our Newsletters</h2>
        <section className='letters'>
          <a href='https://drive.google.com/file/d/1Y5Gt7sjP1VW90a3cHCCCeuV0cCd0Dt32/view?usp=sharing'>
            <img src='/assets/letter1.png' alt='' />
            <h3><a href='https://drive.google.com/file/d/1Y5Gt7sjP1VW90a3cHCCCeuV0cCd0Dt32/view?usp=sharing'>Tier5 Talks</a></h3>
            <span>April - May 2022</span>
          </a>
          <a href='https://drive.google.com/file/d/1B1cbbQDbnEE0BaloMn0_VmyaJbkXRbwv/view?usp=sharing'>
            <img src='/assets/letter2.png' alt='' />
            <h3><a href='https://drive.google.com/file/d/1B1cbbQDbnEE0BaloMn0_VmyaJbkXRbwv/view?usp=sharing'>Tier5 Talks</a></h3>
            <span>June 2022</span>
          </a>
          <a href='https://drive.google.com/file/d/1FHOHQ2eJw5WKEx4aGPItYnNweBPuN-I_/view?usp=sharing'>
            <img src='/assets/letter3.png' alt='' />
            <h3><a href='https://drive.google.com/file/d/1FHOHQ2eJw5WKEx4aGPItYnNweBPuN-I_/view?usp=sharing'>Tier5 Talks</a></h3>
            <span>July - August 2022</span>
          </a>
          <a href='https://drive.google.com/file/d/1QyeTbK-bmfnoz_lLIEFKIMr_jy7TJ_sC/view?usp=share_link'>
            <img src='/assets/letter4.png' alt='' />
            <h3><a href='https://drive.google.com/file/d/1QyeTbK-bmfnoz_lLIEFKIMr_jy7TJ_sC/view?usp=share_link'>Tier5 Talks</a></h3>
            <span>September - October 2022</span>
          </a>
          <a href='https://drive.google.com/file/d/11_nJ31_vZy1bN2pc-RCjdCS6t3kT0Wkk/view'>
            <img src='/assets/letter5.png' alt='' />
            <h3><a href='https://drive.google.com/file/d/11_nJ31_vZy1bN2pc-RCjdCS6t3kT0Wkk/view'>Tier5 Talks</a></h3>
            <span>November 2022 - February 2023</span>
          </a>
          <a href='https://drive.google.com/file/d/1bHU_aTfhN1QMFmy5O9ZgJ4XhgpAflzPQ/view?usp=drive_link'>
            <img src='/assets/letter6.png' alt='' />
            <h3><a href='https://drive.google.com/file/d/1bHU_aTfhN1QMFmy5O9ZgJ4XhgpAflzPQ/view?usp=drive_link'>Tier5 Talks</a></h3>
            <span>March - May 2023</span>
          </a>
        </section>
      </section>
     </Container>
      <Footer />
    </section>
  )
}

export default NewsLetters