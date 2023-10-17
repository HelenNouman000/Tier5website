import { Container } from '@mui/material'
import React from 'react'

 function Footer() {
  return (
    <footer className='text-center py-10'>
    <Container>
      <section>
<p>Copyright © 2022 Tier5. All rights reserved
</p>
<ul className='flex items-center gap-7 justify-center'>
  <li><a>Events</a></li>
  <li><a>FAQ</a></li>
  <li><a>Contact Us</a></li>
  <li><a>Privacy Policy</a></li>
  <li><a>Chrome Extension</a></li>
  <li><a> Terms and Conditions
</a></li>
        
</ul>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a href='https://www.facebook.com/tier5development'><img src='/assets/facebook.png'/></a></li>
  <li><a href='https://www.linkedin.com/company/tier5-technology-solutions'><img src='/assets/linkedin.png'/></a></li>
  <li><a href="https://www.youtube.com/watch?v=DlJwoQKzJYw&list=PLgwAAY-aCn6c7FDA4ssXmvrZyOVC6k0nR"><img src='/assets/youtube.png'/></a></li>
 
</ul>
      </section>
    </Container>
   </footer>
  )
}

export default Footer