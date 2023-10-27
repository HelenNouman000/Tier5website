import { Container } from '@mui/material'
import React, { useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/company.css'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation  ,Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Company() {
    const [name , setName] = useState('Chirply');
    const animation = document.querySelectorAll('.mySwiper a');
    

    const handleClick = (e) => {
        e.preventDefault();
    
        setName(e.currentTarget.id);
       
        for (let i = 0; i < animation.length; i++) {
            animation[i].className = "";           
           }
           e.currentTarget.className = 'ff';

    }

  return (
    <section className='company'>
            <section className='landing'>
                <Container>
                    <NavBar />
                    <div className='text-center text-white info py-10'>
                        <img src='/assets/companyicon.png' alt='' className='' />
                        <h2>Driven by passion</h2>
                        <p>At Tier5, we are driven by passion to provide the finest quality of software to our
esteemed customers. Your success is our satisfaction.</p>
<a target='_blank' href='https://partner.tier5.us/jrpartnership' className='learn-more2'>Learn more</a>
                    </div>
                </Container>
            </section>

            <section className='thecompany py-16 md:py-28'>
                <Container>
                <section className='flex items-start justify-between gap-16'>
                <section>
                    <h3 className='main-header mc'>The Company</h3>
                    <p className='mb-9'>Tier5 is considered to be the first ever community owned and operated software development firm. We specialize in making innovative, beautiful and user-friendly products that enable the business owners to attain more clients and grow their business simultaneously.</p>

                    <p className='mb-3'>
                    Tier5 started its journey way back in January 2016. In a short span of time, Tier5 is serving more than 7000 customers globally with a higher growth rate. We’re headquartered in Indiana, USA with an additional office in Kolkata, India.
                    </p>
                    <h3 className='main-header'>Our Vision</h3>
                    <p className='mb-3'>
                    Building an educated world with the help of technology, innovation, knowledge and creativity.
                    </p>
                    <h3 className='main-header'>Our Mission</h3>
                    <p className='mb-3'>Our mission is to explore the true power of education, leveraging technology and help the society for sustainable growth.</p>
                    <h3 className='main-header'>Core values</h3>
                        <div className='flex gap-16 uls'>
                            <ul>
                                <li>Open to learn & grow</li>
                                <li>Self development & evaluation</li>
                                <li>Customer obsession</li>
                                <li>Ownership</li>
                                <li>Invent & simplify</li>
                                <li>Hiring the best</li>
                                <li>Setting the highest standard</li>
                            </ul>
                            <ul>
                                <li>Goal - setting and meeting</li>
                                <li>Employees centric development</li>
                                <li>Earning trust</li>
                                <li>Deliver results</li>
                                <li>Humanity</li>
                                <li>Recognition & Appreciation</li>
                            </ul>
                        </div>
                    </section>
                    <img src='/assets/companySide.png' alt='' />
                </section>
                </Container>
            </section>
<section className='journey text-center py-16' id='journy'>
    <Container>
        <section>
        <img src='/assets/arrows.png' alt='' />
                    <h2>The Journey</h2>
                    <span>We are Growing every year - See our Journey Till now and Follow us to see How we become one of the Best Software Development firms in the world</span>

                    <div className='journey-line relative '>
                       <ul className='flex  justify-between mt-36 mb-24'>
                        <li className='three'>
                        <span className='text-sm' style={{marginLeft: '-68px'}}>Employee:2</span>
                        <div></div>
                            <span className="point"></span>
                            <div></div>
                            <span className='text-sm' style={{marginLeft: '-58px'}}>Year:    2016</span>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <span className='text-sm'>R&D</span>
                        </li>
                        <li className='three'>
                            <span className='text-sm'>37</span>
                        <div></div>

                            <span className="point"></span>
                            <div></div>
                            <span className='text-sm'>2019</span>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='http://robocontact.io/'><img src="/assets/jl1.png" alt="" /> <p>Robo Contact</p></a>
                           
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                           <a target='_blank'  href='https://www.domainleads.io/'>
                           <img src="/assets/jl2.png" alt="" />
                            <p>Domains Leads</p>
                           </a>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.invoicingyou.io/'>
                           <img src="/assets/jl3.png" alt="" />
                            <p>Invoiving You</p>
                           </a>
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.textinbulk.io/'>
                           <img src="/assets/jl4.png" alt="" />
                            <p>Text In Bulk</p>
                           </a>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.uselinkwizard.io/'>
                           <img src="/assets/jl5.png" alt="" />
                            <p>Link Wizard</p>
                           </a>
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.amagiczap.io/'>
                           <img src="/assets/jl6.png" alt="" />
                            <p>Magic Zap</p>
                           </a>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://usestickyreviews.com/'>
                           <img src="/assets/jl7.png" alt="" />
                            <p>Stickey Review</p>
                           </a>
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.chirply.io/'>
                           <img src="/assets/jl8.png" alt="" />
                            <p>Chirply</p>
                           </a>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://buy.friendconnector.io/'>
                           <img src="/assets/jl9.png" alt="" />
                            <p>Friend Connecter Pro</p>
                           </a>
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.geniuspages.io/'>
                           <img src="/assets/jl10.png" alt="" />
                            <p>Genius Pages</p>
                           </a>
                        </li>
                        <li className='three'>
                        <span className='text-sm'>50</span>
                        <div></div>
                            <span className="point"></span>
                            <div></div>
                            <span className='text-sm'>2020</span>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://buy.postfilter.io/about-post-filter'>
                           <img src="/assets/jl11.png" alt="" />
                            <p>Post Filter Pro</p>
                           </a>

                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.domainleads.io/'>
                           <img src="/assets/jl12.png" alt="" />
                            <p>Biggest Fan Pro</p>
                           </a>

                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.unlimitedbusinessleads.io/'>
                           <img src="/assets/jl13.png" alt="" />
                            <p>Unlimited Business Leads</p>
                           </a>

                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.birthdaywisher.io'>
                           <img src="/assets/jl14.png" alt="" />
                            <p>Birthday Wisher</p>
                           </a>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://buy.postprofits.io/about-post-profits'>
                           <img src="/assets/jl15.png" alt="" />
                            <p>Post Profit Pro</p>
                           </a>
                                </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.cfpagecloner.com/'>
                           <img src="/assets/jl16.png" alt="" />
                            <p>Easy CF Page Cloner Pro</p>
                           </a>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.groovecloner.com/o'>
                           <img src="/assets/jl17.png" alt="" />
                            <p>Groove Cloner</p>
                           </a>
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.engagementmonster.com/'>
                           <img src="/assets/jl19.png" alt="" />
                            <p>Engagement Monster</p>
                           </a>
                        </li>
                        <li className='three'>
                        <span className='text-sm'>65</span>
                        <div></div>
                            <span className="point"></span>
                            <div></div>
                            <span className='text-sm'>2021</span>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.postscheduler.io/'>
                           <img src="/assets/jl20.png" alt="" />
                            <p>Post Scheduler</p>
                           </a>
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.tweeter.ai/'>
                           <img src="/assets/jl21.png" alt="" />
                            <p>Tweeter AI</p>
                           </a>
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.mfenevan.com/'>
                           <img src="/assets/jl22.png" alt="" />
                            <p>MeFn Evan</p>
                           </a>  
                                                 </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.frienddisconnector.com/'>
                           <img src="/assets/jl23.png" alt="" />
                            <p>Friend Disconnecter</p>
                           </a> 
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.formfiller.io/'>
                           <img src="/assets/jl24.png" alt="" />
                            <p>Form Filler</p>
                           </a> 
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.grammywammy.com/'>
                           <img src="/assets/jl25.png" alt="" />
                            <p>Grammy Wammy</p>
                           </a>                         </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.madader.com/'>
                           <img src="/assets/jl26.png" alt="" />
                            <p>Mad Ader</p>
                           </a>   
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.winnerwinnerchickendinner.io/'>
                           <img src="/assets/jl27.png" alt="" />
                            <p>Winner Winner Chicken Dinner</p>
                           </a> 
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href='https://www.groupmonkey.io/'>
                           <img src="/assets/jl28.png" alt="" />
                            <p>Group Monkey</p>
                           </a> 
                        </li>
                        <li className='one'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href="https://www.unlimitedmapsleads.io/optin1625732211979">
                           <img src="/assets/jl29.png" alt="" />
                            <p>Color Grabber</p>
                           </a> 
                        </li>
                        <li className='two'>
                            <span className="point"></span>
                            <div></div>
                            <a target='_blank'  href="https://www.tier5.us/www.colorgrabber.io">
                           <img src="/assets/jl30.png" alt="" />
                            <p>Unlimited Maps Leads</p>
                           </a> 
                        </li>
                        <li className='one'>
                            <span className="arrow"></span>
            
                        </li>
                   
                       </ul>
                    </div>
        </section>
    </Container>
</section>

            <section className='products text-center' id='products'>
                <Container>
                   <section>
                   <img src='/assets/arrows.png' alt='' />
                    <h2>Our Products</h2>
                    <span>A Growing list of our softwares helping businesses Grow</span>


                 {name == 'Chirply' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider1.png' alt='' />
                       <span>Charply</span>
                       </div>
                       <div>
                        <p>
                        <b>Chirply</b> helps Businesses in contacting leads and Prospects with multiple touch points through Calls, SMS and Emails
                        </p>
                        <a target='_blank'  className='nav-link' href="https://chirply.io">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>}
                    {name == 'Domain' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider2.png' alt='' />
                       <span>Domain Leads</span>
                       </div>
                       <div>
                        <p>
                        <b>Domain Leads</b> helps businesses by providing access to a vast amount of leads for marketing their service and generate sales
                        </p>
                        <a target='_blank'  className='nav-link' href="https://domainleads.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>}

                    {name == 'Magic' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider3.png' alt='' />
                       <span>Magic Zap</span>
                       </div>
                       <div>
                        <p>
                        <b>Magic Zap</b> helps Businesses increase their Conversions rates by Personalizing, Tracking and Engaging their Website Visitors.
                        </p>
                        <a target='_blank'  className='nav-link' href="https://amagiczap.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>}

                    {name == 'InvoicingYou' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider4.png' alt='' />
                       <span>InvoicingYou</span>
                       </div>
                       <div>
                        <p>
                        <b>InvoicingYou</b>  is a simple and innovative Invoicing system helping Businesses to easily send invoices and sell products online.
                        </p>
                        <a target='_blank'  className='nav-link' href="https://invoicingyou.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>}

                    {name == 'Sticky' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider5.png' alt='' />
                       <span>Sticky Reviews</span>
                       </div>
                       <div>
                        <p>
                        <b>Sticky Reviews</b> is a Review Management tool helping Businesses collect and display reviews on their website to Increase Sales Conversions.
                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.usestickyreviews.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }

{name == 'Robo' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider6.png' alt='' />
                       <span>Robo Contact</span>
                       </div>
                       <div>
                        <p>
                        <b>Robo Contact</b>  is an automation software Generating Targeted Leads based on Geographic Location with ease of use.
                        </p>
                        <a target='_blank'  className='nav-link' href="https://app.robocontact.io/login">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }


{name == 'Link' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider8.png' alt='' />
                       <span>Link Wizard</span>
                       </div>
                       <div>
                        <p>
                        <b>Link Wizard</b> is one of the feature rich Link management tool which helps to shorten, track and optimize your links and much more.


                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.uselinkwizard.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }

{name == 'Friend' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider9.png' alt='' />
                       <span>Friend Connector Pro

</span>
                       </div>
                       <div>
                        <p>
                        If you don't have enough time to send friend request manually, then <b>Friend Connector Pro </b> is the right extension to use. Add your keywords and click a button! BOOM!! All done for you automatically.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://buy.friendconnector.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                    {name == 'Genius' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider10.png' alt='' />
                       <span>Genius Pages</span>
                       </div>
                       <div>
                        <p>
                        <b>Genius Pages</b> is the First Website and Funnel Builder Powered By TIER5


                        </p>
                        <a target='_blank'  className='nav-link' href="https://geniuspages.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }

{name == 'Post' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider11.png' alt='' />
                       <span>Post Filter Pro

</span>
                       </div>
                       <div>
                        <p>
                        <b>Post Filter Pro

</b>  is used to filter out posts or ads according to user preferences. Post Filter Pro also filter posts or ads or both based on various keywords given by the use.


                        </p>
                        <a target='_blank'  className='nav-link' href="https://buy.postfilter.io/about-post-filter">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                    {name == 'Biggest' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider12.png' alt='' />
                       <span>Biggest Fan Pro

</span>
                       </div>
                       <div>
                        <p>
                        <b>Biggest Fan Pro

</b> helps user to automate Facebook live video reactions and get noticed by the host.


                        </p>
                        <a target='_blank'  className='nav-link' href="http://www.biggestfan.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'Unlimited' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider13.png' alt='' />
                       <span>Unlimited Business Leads

</span>
                       </div>
                       <div>
                        <p>
                        <b>Unlimited Business Leads

</b> helps to Get Unlimited Verified Business Leads With The Click Of A Button.


                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.unlimitedbusinessleads.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'Birthday' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider14.png' alt='' />
                       <span>Birthday Wisher

</span>
                       </div>
                       <div>
                        <p>
                        LEVERAGE your friends birthday to get leads and sales with just a click!!!


                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.birthdaywisher.io/leverage">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }

{/* {name == 'Biggest' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider12.png' alt='' />
                       <span>Biggest Fan Pro

</span>
                       </div>
                       <div>
                        <p>
                        <b>Biggest Fan Pro

</b> helps user to automate Facebook live video reactions and get noticed by the host.


                        </p>
                        <a target='_blank'  className='nav-link' href="http://www.biggestfan.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    } */}
                      {name == 'Post-Profits' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider15.png' alt='' />
                       <span>Post Profits Pro

</span>
                       </div>
                       <div>
                        <p>
                        FB post engagement chrome extension. Drive Leads And Sales From Simple Facebook Posts Using <b>Post Profits Pro.</b> 


                        </p>
                        <a target='_blank'  className='nav-link' href="https://buy.postprofits.io/about-post-profits">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                    {name == 'Easy' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider16.png' alt='' />
                       <span>Easy CF Page Cloner Pro

</span>
                       </div>
                       <div>
                        <p>
                        <b>Easy CF Page Cloner Pro </b> 
                        helps to clone any funnel in a second.


                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.cfpagecloner.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'Groove' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider17.png' alt='' />
                       <span>Groove Cloner

</span>
                       </div>
                       <div>
                        <p>
                        <b>Groove Cloner </b> 
                        clones any funnel in a second. Information gathering and usage.


                        </p>
                        <a target='_blank'  className='nav-link' href="http://groovecloner.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'Engagement' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider18.png' alt='' />
                       <span>Engagement Monster

</span>
                       </div>
                       <div>
                        <p>
                        Discover how to effortlessly boost your organic facebook reach so you can get seen more, collect more leads, and make more sales.


                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.engagementmonster.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                     {name == 'Post-Scheduler' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider19.png' alt='' />
                       <span>Post Scheduler</span>
                       </div>
                       <div>
                        <p>
                        PRE-SCHEDULE your FB posts on your PERSONAL FACEBOOK PROFILE.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.postscheduler.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                     {name == 'Tweeter' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider20.png' alt='' />
                       <span>Tweeter AI</span>
                       </div>
                       <div>
                        <p>
                        <b>Tweeter AI</b> automatically create tweets based on AI and post them to your twitter account on your pre schedule time interval.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.tweeter.ai/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'MeFn' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider21.png' alt='' />
                       <span>MeFn Evan</span>
                       </div>
                       <div>
                        <p>
                        <b>MeFn Evan</b>  is a very first "chatbot" and broadcaster for your personal facebook profile

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.mfenevan.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                    {name == 'Disconnector' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider22.png' alt='' />
                       <span>Friend Disconnector </span>
                       </div>
                       <div>
                        <p>
                        <b>Friend Disconnector </b> remove inactive and deactivated friends from your Facebook.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.frienddisconnector.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'Form' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider23.png' alt='' />
                       <span>Form Filler </span>
                       </div>
                       <div>
                        <p>
                        <b>Form Filler </b>  saves your time by prefilling any form on the internet with your information.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.formfiller.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                       {name == 'Wammy' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider24.png' alt='' />
                       <span>Grammy Wammy  </span>
                       </div>
                       <div>
                        <p>
                        <b>Grammy Wammy  </b> automates and scale your Instagram engagement and relationship management on the fly.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.grammywammy.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                    {name == 'Mad' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider25.png' alt='' />
                       <span>Mad Ader </span>
                       </div>
                       <div>
                        <p>
                       The <b>Mad Ader </b>is your solution to creating proven profitable FB ads Place the name in the body content where ever it's needed.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.madader.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'Chicken' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider26.png' alt='' />
                       <span>Winner Winner Chicken Dinner </span>
                       </div>
                       <div>
                        <p>
                        <b>Winner Winner Chicken Dinner </b>turns your posts into viral giveaways and contests to get massive engagement, leads, and sales.

                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.winnerwinnerchickendinner.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                     {name == 'Monkey' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider27.png' alt='' />
                       <span>Group Monkey  </span>
                       </div>
                       <div>
                        <p>
                        <b>Group Monkey </b>helps you manage, grow, automate, and monetize your FB group.
                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.groupmonkey.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                    {name == 'Maps' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider28.png' alt='' />
                       <span>Unlimited Maps Leads  </span>
                       </div>
                       <div>
                        <p>
                        Get Unlimited Verified Maps Leads With The Click Of A Button From Google Map.
                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.unlimitedmapsleads.io/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                      {name == 'Simple' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/simple.png' alt=''  />
                       <span>My Simple Scripts  </span>
                       </div>
                       <div>
                        <p>
                        Save your notes and use them whenever needed!
                        </p>
                        <a target='_blank'  className='nav-link' href="https://www.mysimplescripts.com">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                    {name == 'GruFlu' &&  <div className='flex items-center gap-8 dynamic-sec'>
                       <div>
                       <img src='/assets/slider30.png' alt='' />
                       <span>GruFlu  </span>
                       </div>
                       <div>
                        <p>
                        <b>GruFlu</b> quickly finds the top influencers and top influential posts in any facebook group.
                        </p>
                        <a target='_blank'  className='nav-link' href="https://gruflu.com/">
                            <img src='/assets/link.png' alt='' />
                            Learn more
                        </a>
                       </div>
                    </div>
                    }
                <Swiper cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide>
         <div className='flex items-center justify-center gap-10'>
               <a target='_blank'  href='' id='Chirply' onClick={handleClick}> <img src='/assets/slider1.png' alt='' /></a>
               <a target='_blank'  href='' id='Domain'   onClick={handleClick}> <img src='/assets/slider2.png' alt='' /></a>
               <a target='_blank'  href='' id='Magic' onClick={handleClick}> <img src='/assets/slider3.png' alt='' /></a>
               <a target='_blank'  href='' id='InvoicingYou' onClick={handleClick}> <img src='/assets/slider4.png' alt='' /></a>
               <a target='_blank'  href='' id='Sticky' onClick={handleClick}> <img src='/assets/slider5.png' alt='' /></a>
               <a target='_blank'  href='' id='Robo' onClick={handleClick}> <img src='/assets/slider6.png' alt='' /></a>
               <a target='_blank'  href='' id='Link' onClick={handleClick}> <img src='/assets/slider8.png' alt='' /></a>
               
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex items-center justify-center gap-10'>
               <a target='_blank'  href='' id='Friend' onClick={handleClick}> <img src='/assets/slider9.png' alt='' /></a>
               <a target='_blank'  href='' id='Genius' onClick={handleClick}> <img src='/assets/slider10.png' alt='' /></a>
               <a target='_blank'  href='' id='Post' onClick={handleClick}> <img src='/assets/slider11.png' alt='' /></a>
               <a target='_blank'  href='' id='Biggest' onClick={handleClick}> <img src='/assets/slider12.png' alt='' /></a>
               <a target='_blank'  href='' id='Unlimited' onClick={handleClick}> <img src='/assets/slider13.png' alt='' /></a>
               <a target='_blank'  href='' id='Birthday' onClick={handleClick}> <img src='/assets/slider14.png' alt='' /></a>
               <a target='_blank'  href='' id='Post-Profits' onClick={handleClick}> <img src='/assets/slider15.png' alt='' /></a>
               
            </div>
        </SwiperSlide>
        <SwiperSlide>  <div className='flex items-center justify-center gap-10'>
               <a target='_blank'  href='' id='Easy' onClick={handleClick}> <img src='/assets/slider16.png' alt='' /></a>
               <a target='_blank'  href='' id='Groove' onClick={handleClick}> <img src='/assets/slider17.png' alt='' /></a>
               <a target='_blank'  href='' id='Engagement' onClick={handleClick}> <img src='/assets/slider18.png' alt='' /></a>
               <a target='_blank'  href='' id='Post-Scheduler' onClick={handleClick}> <img src='/assets/slider19.png' alt='' /></a>
               <a target='_blank'  href='' id='Tweeter' onClick={handleClick}> <img src='/assets/slider20.png' alt='' /></a>
               <a target='_blank'  href='' id='MeFn' onClick={handleClick}> <img src='/assets/slider21.png' alt='' /></a>
               <a target='_blank'  href='' id='Disconnector' onClick={handleClick}> <img src='/assets/slider22.png' alt='' /></a>
               
            </div></SwiperSlide>
        <SwiperSlide>
        <div className='flex items-center justify-center gap-10'>
               <a target='_blank'  href='' id='Form' onClick={handleClick}> <img src='/assets/slider23.png' alt='' /></a>
               <a target='_blank'  href='' id='Wammy' onClick={handleClick}> <img src='/assets/slider24.png' alt='' /></a>
               <a target='_blank'  href='' id='Mad' onClick={handleClick}> <img src='/assets/slider25.png' alt='' /></a>
               <a target='_blank'  href='' id='Chicken' onClick={handleClick}> <img src='/assets/slider26.png' alt='' /></a>
               <a target='_blank'  href='' id='Monkey' onClick={handleClick}> <img src='/assets/slider27.png' alt='' /></a>
               <a target='_blank'  href='' id='Maps' onClick={handleClick}> <img src='/assets/slider28.png' alt='' /></a>
               <a target='_blank'  href='' id='Simple' onClick={handleClick}> <img src='/assets/slider29.png' alt='' /></a>
               <a target='_blank'  href='' id='GruFlu' onClick={handleClick}> <img src='/assets/slider30.png' alt='' /></a>
               
            </div>
        </SwiperSlide>
  
      </Swiper>
                   </section>
                </Container>
            </section>

            <section className='leaders' id='leaders'>
                <Container>
                    <section className='text-center'>
                        <img src='/assets/companyleadersicon.png' alt='' />
                        <h2>Leaders</h2>
                        <p>The Leaders who are shaping Tier5 to the best</p>
                        <section className='cards mt-16'>
                            <div className='card'>
                                <img src='/assets/aunkita.png' />
                                <h3>Aunkita Nandi</h3>
                                <span>Managing Director</span>
                                <p>Even the greatest creations start from a small seed.
Aunkita is that seed for Tier5.
Born in a small town of West Bengal, since her childhood, she wanted to solve problems and help others. Growing up, she did exactly that. She co-founded Tier5, ideated innovative and user friendly software products, helped 100+ businesses by delivering the right kind of products for their growth.
A passionate professional and a philanthropist by heart, she endures positivity around her.
That is why, we at Tier5, lovingly call her our CHO - Chief Heart Officer.
Aunkita is a motivational speaker and recipient of multiple achievers’ awards for her contribution towards the industry and the society at large.
She is active on social network and you can get in touch with her directly.</p>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a target='_blank'  href='https://www.facebook.com/aunkita.nandi'><img src='/assets/facebook.png'/></a></li>
  <li><a target='_blank'  href="https://www.linkedin.com/in/aunkita-nandi/"><img src='/assets/linkedin.png'/></a></li>
  <li><a target='_blank'  href="https://twitter.com/aunkitanandi"><img src='/assets/twitter.png'/></a></li>
 
</ul>
                            </div>
                            <div className='card'>
                                <img src='/assets/rupanwita.png' />
                                <h3>Rupanwita Roy</h3>
                                <span>PR Specialist</span>
                                <p>Rupanwita is the PR Specialist of the company. Her role is to share information and inputs about Tier5 to the media and general public at large. She has more than 12 years of eexperience in the similar role. A passionate believer, Rupanwita loves to spread happiness and positivity around her.</p>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a target='_blank'  href="https://www.facebook.com/rupanwita/"><img src='/assets/facebook.png'/></a></li>
  <li><a target='_blank'  href="https://www.linkedin.com/in/rupanwita-roy-96003812/"><img src='/assets/linkedin.png'/></a></li>
 
</ul>
                            </div>
                            <div className='card'>
                                <img src='/assets/ankita.jpg' />
                                <h3>Ankita Sarkar</h3>
                                <span>HR Manager</span>
                                <p>Ankita is the peoples’ person of Tier5.
She has been an integral part of the company for the last 5 years and is responsible for taking care of daily HR operations and Administration of the company. Acting as a bridge between management and employees, coming across constructive solutions and resolving issues are the core areas of her work. She focuses on building relationships with employees and management for seamless coordination and bonding. This ever smiling lady strives to be an empathetic person rather than a sympathetic one.</p>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a target='_blank'  href="https://www.facebook.com/ankita.d.angel"><img src='/assets/facebook.png'/></a></li>
  <li><a target='_blank'  href="https://www.linkedin.com/in/ankita-sarkar-127618105/"><img src='/assets/linkedin.png'/></a></li>
 
</ul>
                            </div>


                            <div className='card'>
                                <img src='/assets/santanu.jpg' />
                                <h3>Santanu Dhar</h3>
                                <span>General Manager</span>
                                <p>Santanu has been with Tier5 since the very initial days. He specializes in setting the strategic direction and focuses on the sustainable growth of the company. He is creative, possesses experience and exposure in global perspective and very, very keen towards businesses and technologies fueling innovation. In short, he is the go to person for everyone at Tier5, who binds the team members of Tier5 in the same thread and ensures long term success of the company.</p>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a target='_blank'  href="https://www.facebook.com/santanu.dhar.5"><img src='/assets/facebook.png'/></a></li>
  <li><a target='_blank'  href="https://www.linkedin.com/in/santanudhar/"><img src='/assets/linkedin.png'/></a></li>
 
</ul>
                            </div>
                            <div className='card'>
                                <img src='/assets/abishek.png' />
                                <h3>Abishek Bose</h3>
                                <span>Sr Product Manager</span>
                                <p>Abhisek is the most composed leader of Tier5.
As the Product Manager, Senior Solution Architect and Operation Manager of the company, his major responsibilities include budgeting, design thinking, road-map, execution, data driven analytics, system design and customer obsession. With a proven track record of 12+ years, Abhisek loves to keep him updated by learning new technologies and actively contributes his knowledge in the field of Automation, Blockchain & AI.
Apart from his work, Abhisek is also known for his mentorship & witty one-liners in office.
</p>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a target='_blank'  href="https://www.facebook.com/iabhisekbosepm"><img src='/assets/facebook.png'/></a></li>
  <li><a target='_blank'  href="https://www.linkedin.com/in/abhisek-bose/"><img src='/assets/linkedin.png'/></a></li>
 
</ul>
                            </div>
                            <div className='card'>
                                <img src='/assets/kaushik.jpg' />
                                <h3>Kaushik Dey</h3>
                                <span>Talent Acquisition Manager</span>
                                <p>Kaushik is the internal search engine of Tier5.
A student of history from the University of Calcutta, Kaushik always found the spectrum of human resource interesting. So, when he pursued his career in HR & operations, his priority was to ensure that the office is a fun place to work. With a specialization in IT recruitment for more than 17 years, he knows exactly how to connect with the best talents, interviews them and assists in the overall operations of the company. He works closely with the Management and the leaders of the company to ensure the work process is absolutely seamless. This calm, composed and focused gentleman enjoys experimenting with his culinary skills and shares the outcome with everyone at the office. Kaushik is quite active in social media and an acclaimed poet of the current times.

 </p>
<ul className='flex items-center gap-7 justify-center pt-7'>
  <li><a target='_blank'  href="https://www.facebook.com/ankita.d.angel"><img src='/assets/facebook.png'/></a></li>
  <li><a target='_blank'  href="https://www.linkedin.com/in/ankita-sarkar-127618105/"><img src='/assets/linkedin.png'/></a></li>
 
</ul>
                            </div>
                        </section>
                    </section>
                </Container>
            </section>

            <Footer />
    </section>
  )
}

export default Company