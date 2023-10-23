import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import '../styles/internship.css'
import Footer from '../components/Footer'
import ModelPopUp from '../components/PopUp'
import ReactPlayer from 'react-player'

function InternShip() {
    const [video1 , setVideo1] = useState(false);
    const [name , setName] = useState('');
    const [read , setRead] = useState(false);
    const [text , setText] = useState('');
const video11 = 'https://www.youtube.com/embed/CaiWH5PQnZ4?rel=0&autoplay=1&mute=0&loop=1';
const video2 = 'https://www.youtube.com/embed/z1XktSJL-Rg?rel=0&autoplay=1&mute=0&loop=1';
const video3 = 'https://www.youtube.com/embed/XHgwV1IiakM?rel=0&autoplay=1&mute=0&loop=1';
const video4 = 'https://www.youtube.com/embed/deQUa9z2imk?rel=0&autoplay=1&mute=0&loop=1';
const video5 = 'https://www.youtube.com/embed/v2df8p8iUqk?rel=0&autoplay=1&mute=0&loop=1';
const video6 = 'https://www.youtube.com/embed/5YsaIVaOWq0?rel=0&autoplay=1&mute=0&loop=1';
const video7 = 'https://www.youtube.com/embed/TFcXqnSSF1M?rel=0&autoplay=1&mute=0&loop=1';
const video8 = 'https://www.youtube.com/embed/8Q_ffGrmQVU?rel=0&autoplay=1&mute=0&loop=1';
const video9 = 'https://www.youtube.com/embed/V31dc1rmT_I?rel=0&autoplay=1&mute=0&loop=1';
const video10 = 'https://www.youtube.com/embed/VW50YiaXMZw?rel=0&autoplay=1&mute=0&loop=1';
const video12 = 'https://www.youtube.com/embed/xUScqdK1qm4?rel=0&autoplay=1&mute=0&loop=1';
const video13= 'https://www.youtube.com/embed/M8ExoshH2Vs?rel=0&autoplay=1&mute=0&loop=1';
    console.log('name' ,name);

  return (
  <>

<ModelPopUp  check={video1} cl='thetop' >
          <form method="dialog" >

    <div className="content">
      <div className="head"  >
        
    
      <label htmlFor="my-modal-1" className="close" onClick={()=> setVideo1(false)} >
        <img src='/assets/closepopup.png' />
      </label>
      {name == 'Aditi' && <ReactPlayer url={video11}  controls={true} />}
      {name == 'Agnibh' && <ReactPlayer url={video2}  controls={true} />}
      {name == 'Aakash' && <ReactPlayer url={video3}  controls={true} />}
      {name == 'Ankita' && <ReactPlayer url={video4}  controls={true} />}
      {name == 'Doyel' && <ReactPlayer url={video5}  controls={true} />}
      {name == 'Jyoti' && <ReactPlayer url={video6}  controls={true} />}
      {name == 'Manisha' && <ReactPlayer url={video7}  controls={true} />}
      {name == 'Raunok' && <ReactPlayer url={video8}  controls={true} />}
      {name == 'Rohan' && <ReactPlayer url={video9}  controls={true} />}
      {name == 'Subhadip' && <ReactPlayer url={video10}  controls={true} />}
      {name == 'Sibasish' && <ReactPlayer url={video12}  controls={true} />}
      {name == 'Souvik' && <ReactPlayer url={video13}  controls={true} />}

     </div>
    </div>
          </form>
     
        </ModelPopUp>

        <ModelPopUp  check={read} cl='editpop'>

          <form method="dialog" >

    <div className="content">
      <div className="head"  >
        
    
      {/* <label htmlFor="my-modal-1" className="close" onClick={()=> setRead(false)} >
        <img src='/assets/closepopup.png' />
      </label> */}
      {text == 'Aditi' &&    <div className='boxpop relative flex items-center gap-8' >
                           <div className=''>
                       <img src='/assets/inter1.png' alt='' />
                            <button  onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Aditi' /> </button>
                           </div>
                           <div>
                               <p>"First of all, I would like to show my gratitude towards Tier5. I have heard a lot about the internship program from several companies, but, I am certain that no other company will spend their resource’s valuable bandwidth to enhance technical knowledge and soft skills to the interns."</p>
                               <div>
                                   <span>Aditi Ghosh</span>
                                   <button id='Aditi' onClick={()=> setRead(false)}>Read Less</button>
                               </div>
                           </div>
                       </div>}

      {text == 'Agnibh' &&      <div className='boxpop relative flex items-center gap-8  ' >
                           <div className=''>
                       <img src='/assets/inter2.png' alt='' />
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Agnibh' /> </button>
                           </div>
                           <div>
                               <p>" This internship has taught me a lot which are very helpful to raise my skills as well as my knowledge beyond our subjects. Overall, it was a great experience and I'm very grateful being an intern of this program. "</p>
                               <div>
                                   <span>Agnibh Sinha</span>
                                   <button id='Agnibh'  onClick={()=> setRead(false)}>Read Less</button>
                               </div>
                           </div>
                       </div>}

      {/* {name == 'Aakash' && <ReactPlayer url={video3}  controls={true} />} */}
      {text == 'Ankita' &&   <div className='boxpop relative flex items-center gap-8  '>
                           <div className=''>
                       <img src='/assets/inter4.png' alt='' />
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Ankita' /> </button>
                           </div>
                           <div>
                               <p>" From the internship in Tier5, I have learned a lot and developed a lot of skills. Every mentor taught us every topic with fun and I enjoyed it very much. I am very happy to be a part of Tier5's internship program. "</p>
                               <div>
                                   <span>Ankita Mondal</span>
                                   <button  id='Ankita'  onClick={()=> setRead(false)}>Read Less</button>
                               </div>
                           </div>
                       </div>}

      {text == 'Doyel' &&   <div className='boxpop relative flex items-center gap-8  '>
                           <div className=''>
                       <img src='/assets/inter5.png' alt='' />
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Doyel' /> </button>
                           </div>
                           <div>
                               <p>" During my internship with Tier5, I was able to develop my skills. I particularly found the experience to be useful in improving my skills. Overall, I totally enjoyed all the sessions and I'm very obliged and also thankful for all the helpful exertion. "</p>
                               <div>
                                   <span>Doyel Bhowmik</span>
                                   <button  id='Doyel'  onClick={()=> setRead(false)}>Read Less</button>
                               </div>
                           </div>
                       </div>}


      {text == 'Jyoti' && <div className='boxpop relative flex items-center gap-8 '>
                           <div className=''>
                       <img src='/assets/int11.png' alt='' />
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Jyoti' /> </button>
                           </div>
                           <div>
                               <p>" From this valuable internship program, I improved & accelerated my technical skills & developed my personality as well. From my personal experience, I can say Tier5 is a very good place to work. Each and everyone was very helpful. I'm very thankful to get this opportunity as an intern of Tier5 family. "</p>
                               <div>
                                   <span>Jyoti Prakash Chakraborty</span>
                                   <button  id='Jyoti'  onClick={()=> setRead(false)}>Read Less</button>
                               </div>
                           </div>
                       </div>}
      {text == 'Manisha' && <div className='boxpop relative flex items-center gap-8 '>
<div className=''>
<img src='/assets/inter12.png' alt='' />
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Manisha' /> </button>
</div>
<div>
   <p>" From this Internship Program, I have learned a lot of things which helped me develop my technical skills as well as my soft skills. Even though Tier5 is a company, it felt more like a family. "</p>
   <div>
       <span>Manisha Dey</span>
       <button  id='Manisha' onClick={()=> setRead(false)}>Read Less</button>
   </div>
</div>
</div>}
      {text == 'Raunok' &&<div className='boxpop relative flex items-center gap-8 '>
<div className=''>
<img src='/assets/inter6.png' alt='' />
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Raunok' /> </button>
</div>
<div>
   <p>" Since the last few months, I have learned a lot of new things which helped me improve my personality and technical skills. The Tier5 team members were very helpful whenever someone needed them. Tier5 is like a family and I am glad to be a part of this family. "</p>
   <div>
       <span>Raunok Mukherjee</span>
       <button  id='Raunok' onClick={()=> setRead(false)}>Read Less</button>
   </div>
</div>
</div>}
      {text == 'Rohan' && <div className='boxpop relative flex items-center gap-8 '>
<div className=''>
<img src='/assets/inter7.png' alt='' />
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Rohan' /> </button>
</div>
<div>
   <p>"By doing the internship in Tier5, I've gained a lot of technical knowledge and soft skills which are required in an organiztion as well as in our daily lives. Everyone was very frank and extremely helpful. I am very happy that I got a chance to be a part of this internship program. "</p>
   <div>
       <span>Rohan Mukherjee</span>
       <button id='Rohan'  onClick={()=> setRead(false)}>Read Less</button>
   </div>
</div>
</div>}

      {text == 'Subhadip' && <div className='boxpop relative flex items-center gap-8 '>
<div className=''>
<img src='/assets/inter8.png' alt='' />
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Subhadip' /> </button>
</div>
<div>
   <p>" In my opinion, Tier5 is a wonderful place to work & learn. I'm actually very happy to be a part of this internship. I learnt a lot of things from this Internship program & from the mentors, who guided us very well. "</p>
   <div>
       <span>Subhadip Nandi</span>
       <button id='Subhadip'  onClick={()=> setRead(false)}>Read Less</button>
   </div>
</div>
</div>}
      {text == 'Sibasish' &&<div className='boxpop relative flex items-center gap-8 '>
<div className=''>
<img src='/assets/inter9.png' alt='' />
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Sibasish' /> </button>
</div>
<div>
   <p>" The internship program has provided me with a newfound confidence in myself and my abilities strengthening my career development. As I go into the "real world", having this internship experience was good for me to start out as a professional. Each and every mentor was very helpful and the sessions were very interactive. Tier5 is more than a company, it's a family. "</p>
   <div>
       <span>Sibasish Sinha</span>
       <button id='Sibasish'  onClick={()=> setRead(false)}>Read Less</button>
   </div>
</div>
</div>}
      {text == 'Souvik' && <div className='boxpop relative flex items-center gap-8 '>
<div className=''>
<img src='/assets/inter10.png' alt='' />
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Souvik' /> </button>
</div>
<div>
   <p>" I would like to start off by saying that I could not have asked for a better internship experience. This experience has only gotten me more excited to continue in this field for my career.  It also helped me to learn and gain so much knowledge. A very big thanks to Tier5 for making this possible for me. "</p>
   <div>
       <span>Souvik Ghosh</span>
       <button id='Souvik'  onClick={()=> setRead(false)}>Read Less</button>
   </div>
</div>
</div>}

     </div>
    </div>
          </form>
     
        </ModelPopUp>
    <section className='internship'>
       
       <section className='landing'>
       <Container>
           <NavBar />
           <section className='text-white flex items-center justify-between gap-20 py-16 main-sec'>
               <div>
                   <h2>Internship</h2>
                   <p className='mb-4'>
                   The Tier5 Internship Program offers high-potential young people an incredible opportunity to learn through interactive sessions and training. This carefully curated experiential program’s rigor matches our value-driven culture of practice, aiming at our interns’ holistic growth to help them develop as global citizens. It is a Launchpad for young people to prepare themselves to thrive in their life and their future careers.
                   </p>
                   <p>
                   If you’re empathetic, curious, and creative; keen to take small steps as well as big leaps; ready to ask lots of questions and find just as many answers, we’d love to have you with us! Tier5 is a progressive and open-minded space. As an equal opportunity employer.
                   </p>
               </div>

               <div>
                   <h3>How to Apply</h3>
                   <p>If you are interested in the internship you can enroll your name by clicking this button</p>
                   <a className='learn-more2' href='https://www.cognitoforms.com/RecruitmentManager1/Tier5InternshipForm'>APPLY NOW</a>
               </div>
           </section>
           </Container>
       </section>

       <section className='py-16 mt-4 testimonial'>
           <Container>
               <section className='text-center'>
                   <h3>Testimonial</h3>
                   <p>The Tier5 Internship Program offers high-potential young people an incredible opportunity to learn through interactive sessions and training.</p>

                   <section className='boxes flex gap-12 py-16 justify-center'>
                       <div className='box relative flex items-center gap-8' >
                           <div className=''>
                     <div>  <img src='/assets/inter1.png' alt='' /></div>
                            <button  onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Aditi' /> </button>
                           </div>
                           <div>
                               <p>"First of all, I would like to show my gratitude towards Tier5. I have heard a lot about the internship program from several companies, but, I am certain that no other company will spend their resource’s valuable bandwidth to enhance technical knowledge and soft skills to the interns."</p>
                               <div>
                                   <span>Aditi Ghosh</span>
                                   <button id='Aditi' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
                               </div>
                           </div>
                       </div>

                       <div className='box relative flex items-center gap-8  ' >
                          <div>
                          <div className=''>
                       <img src='/assets/inter2.png' alt='' />
                           </div>
                           <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Agnibh' /> </button>

                          </div>
                           <div>
                               <p>" This internship has taught me a lot which are very helpful to raise my skills as well as my knowledge beyond our subjects. Overall, it was a great experience and I'm very grateful being an intern of this program. "</p>
                               <div>
                                   <span>Agnibh Sinha</span>
                                   <button id='Agnibh' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
                               </div>
                           </div>
                       </div>



                       <div className='box relative flex items-center gap-8  '>
                           <div className=''>
                      <div> <img src='/assets/inter3.png' alt='' /></div>
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Aakash' /> </button>
                           </div>
                           <div>
                               <p>" My first internship program and an exhilarating experience with one of the finest professionals in the IT industry. " Thank you Tier5."</p>
                               <div>
                                   <span>Aakash Pandey</span>
                                   {/* <button id='Aakash' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button> */}
                               </div>
                           </div>
                       </div>



                       <div className='box relative flex items-center gap-8  '>
                           <div className=''>
                   <div>    <img src='/assets/inter4.png' alt='' /></div>
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Ankita' /> </button>
                           </div>
                           <div>
                               <p>" From the internship in Tier5, I have learned a lot and developed a lot of skills. Every mentor taught us every topic with fun and I enjoyed it very much. I am very happy to be a part of Tier5's internship program. "</p>
                               <div>
                                   <span>Ankita Mondal</span>
                                   <button  id='Ankita' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
                               </div>
                           </div>
                       </div>



                       <div className='box relative flex items-center gap-8  '>
                           <div className=''>
                      <div> <img src='/assets/inter5.png' alt='' /></div>
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Doyel' /> </button>
                           </div>
                           <div>
                               <p>" During my internship with Tier5, I was able to develop my skills. I particularly found the experience to be useful in improving my skills. Overall, I totally enjoyed all the sessions and I'm very obliged and also thankful for all the helpful exertion. "</p>
                               <div>
                                   <span>Doyel Bhowmik</span>
                                   <button  id='Doyel' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
                               </div>
                           </div>
                       </div>


                       
                       <div className='box relative flex items-center gap-8 '>
                           <div className=''>
                    <div>   <img src='/assets/int11.png' alt='' /></div>
                            <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Jyoti' /> </button>
                           </div>
                           <div>
                               <p>" From this valuable internship program, I improved & accelerated my technical skills & developed my personality as well. From my personal experience, I can say Tier5 is a very good place to work. Each and everyone was very helpful. I'm very thankful to get this opportunity as an intern of Tier5 family. "</p>
                               <div>
                                   <span>Jyoti Prakash Chakraborty</span>
                                   <button  id='Jyoti' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
                               </div>
                           </div>
                       </div>
   

<div className='box relative flex items-center gap-8 '>
<div className=''>
<div><img src='/assets/inter12.png' alt='' /></div>
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Manisha' /> </button>
</div>
<div>
   <p>" From this Internship Program, I have learned a lot of things which helped me develop my technical skills as well as my soft skills. Even though Tier5 is a company, it felt more like a family. "</p>
   <div>
       <span>Manisha Dey</span>
       <button  id='Manisha' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
   </div>
</div>
</div>

<div className='box relative flex items-center gap-8 '>
<div className=''>
<div><img src='/assets/inter6.png' alt='' /></div>
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Raunok' /> </button>
</div>
<div>
   <p>" Since the last few months, I have learned a lot of new things which helped me improve my personality and technical skills. The Tier5 team members were very helpful whenever someone needed them. Tier5 is like a family and I am glad to be a part of this family. "</p>
   <div>
       <span>Raunok Mukherjee</span>
       <button  id='Raunok' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
   </div>
</div>
</div>

<div className='box relative flex items-center gap-8 '>
<div className=''>
<div><img src='/assets/inter7.png' alt='' /></div>
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Rohan' /> </button>
</div>
<div>
   <p>"By doing the internship in Tier5, I've gained a lot of technical knowledge and soft skills which are required in an organiztion as well as in our daily lives. Everyone was very frank and extremely helpful. I am very happy that I got a chance to be a part of this internship program. "</p>
   <div>
       <span>Rohan Mukherjee</span>
       <button id='Rohan' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
   </div>
</div>
</div>

<div className='box relative flex items-center gap-8 '>
<div className=''>
<div><img src='/assets/inter8.png' alt='' /></div>
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Subhadip' /> </button>
</div>
<div>
   <p>" In my opinion, Tier5 is a wonderful place to work & learn. I'm actually very happy to be a part of this internship. I learnt a lot of things from this Internship program & from the mentors, who guided us very well. "</p>
   <div>
       <span>Subhadip Nandi</span>
       <button id='Subhadip' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
   </div>
</div>
</div>

<div className='box relative flex items-center gap-8 '>
<div className=''>
<div><img src='/assets/inter9.png' alt='' /></div>
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Sibasish' /> </button>
</div>
<div>
   <p>" The internship program has provided me with a newfound confidence in myself and my abilities strengthening my career development. As I go into the "real world", having this internship experience was good for me to start out as a professional. Each and every mentor was very helpful and the sessions were very interactive. Tier5 is more than a company, it's a family. "</p>
   <div>
       <span>Sibasish Sinha</span>
       <button id='Sibasish' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
   </div>
</div>
</div>

<div className='box relative flex items-center gap-8 '>
<div className=''>
<div><img src='/assets/inter10.png' alt='' /></div>
   <button onClick={(e)=> {setVideo1(true); setName(e.currentTarget.children[0].id)}}>   <img src='/assets/play.png' alt='' id='Souvik' /> </button>
</div>
<div>
   <p>" I would like to start off by saying that I could not have asked for a better internship experience. This experience has only gotten me more excited to continue in this field for my career.  It also helped me to learn and gain so much knowledge. A very big thanks to Tier5 for making this possible for me. "</p>
   <div>
       <span>Souvik Ghosh</span>
       <button id='Souvik' onClick={(e)=> {setRead(true); setText(e.target.id)}}>Read More</button>
   </div>
</div>
</div>
                   </section>
               </section>
           </Container>
       </section>
<Footer />
</section>
  </>
  )
}

export default InternShip