import React from 'react'
import bigbluefountain from './assets/bigbluefountain.JPEG'
import coronado from './assets/coronado.JPG'
import georgetown1 from './assets/georgetown1.JPG'
import georgetown2 from './assets/georgetown2.JPG'
import hawksbilltrail from './assets/hawksbilltrail.JPG'
import lanternfest from './assets/lanternfest.JPG'
import lanternfestwater from './assets/lanternfestwater.JPG'
import philippinesgolf from './assets/philippinesgolf.JPG'
import rock from './assets/rock.JPG'
import { Box } from '@mui/material'
import { Carousel } from 'react-responsive-carousel';
import Image from 'mui-image'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


function Home() {

  return (
    <Box
        component='body'
        sx={{ 
            margin: '0.5rem 0rem', 
            padding: '1rem 2rem'
          }}
        >

        <Carousel
          dynamicHeight={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={100}
          showStatus={false}
          transitionTime={850}
          >
            <div>
              <Image src={bigbluefountain} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={coronado} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={georgetown1} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={georgetown2} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={hawksbilltrail} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={lanternfest} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={lanternfestwater} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={philippinesgolf} width='100%' height='auto' duration={0}/>
            </div>
            <div>
              <Image src={rock} width='100%' height='auto' duration={0}/>
            </div>
        </Carousel>



    </Box>
  )
}

export default Home