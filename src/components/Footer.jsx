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
  <li><a target='_blank' href='href="https://www.tier5.in/events.html"'>Events</a></li>
  <li><a target='_blank' href="https://www.tier5.in/faq.html">FAQ</a></li>
  <li><a target='_blank' href="https://www.tier5.in/contact.html">Contact Us</a></li>
  <li><a target='_blank' href="https://www.tier5.in/privacy-policy.html">Privacy Policy</a></li>
  <li><a target='_blank' href="https://www.tier5.in/chrome-extension-privacy-policies.html">Chrome Extension</a></li>
  <li><a target='_blank' href="https://www.tier5.in/terms-conditions.html"> Terms and Conditions
</a></li>
        
</ul>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a target='_blank' href='https://www.facebook.com/tier5development'><img src='/assets/facebook.png'/></a></li>
  <li><a target='_blank' href='https://www.linkedin.com/company/tier5-technology-solutions'><img src='/assets/linkedin.png'/></a></li>
  <li><a target='_blank' href="https://www.youtube.com/watch?v=DlJwoQKzJYw&list=PLgwAAY-aCn6c7FDA4ssXmvrZyOVC6k0nR"><img src='/assets/youtube.png'/></a></li>
 
</ul>
      </section>
    </Container>
   </footer>
  )
}

export default Footer