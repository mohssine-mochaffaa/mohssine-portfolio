import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';
import { ParallaxBanner,ParallaxBannerLayer, useParallax } from 'react-scroll-parallax'
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import db from "../public/firebase"
import { collection, getDocs } from "firebase/firestore";
import Carousel from 'nuka-carousel/lib/carousel'
import { BsFillBrightnessHighFill,BsFillCloudMoonFill } from "react-icons/bs";
import { FaInstagram,FaTiktok,FaWhatsapp,FaFacebook} from "react-icons/fa";
import ReactSwitch from 'react-switch';

export default function Home() {
  const [projects,setProjects] = useState([]);
  const [val,setVal] = useState(false)

  const getVideos=async()=>{
    const array = [];
    const querySnapshot = await getDocs(collection(db, "projects"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
array.push(doc);
});
setProjects(array);
  }
  useEffect(()=>{
    getVideos();
  },[]);
const style = {
  color:'white',
  bg:'#0c0b12',
  navBg:"rgba(31, 31, 31, 0.22)",
  bord:"1px solid rgb(197, 197, 197) ",

}
const style2 = {
  color:'black',
  bg:'white',
  navBg:"white",
  bord:"1px solid black",

}

const [design,setDesign] = useState(style)

useEffect(()=>{
  if(val){
    setDesign(style2)
  }
  else if(!val){
    setDesign(style)

  }
},[val])
  return (
    <div style={{backgroundColor:design.bg}} className={styles.container}>
      <Head>
        <title>Mochaffaa Mohssine</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={{backgroundColor:style.navBg}} className={styles.navBar}>
        <h3 className={styles.logo} style={{color:"white"}}>MOCHAFFAA</h3>

        <ReactSwitch
        checked={val}
        onChange={()=> setVal(!val)}
        checkedHandleIcon={<center style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}><BsFillBrightnessHighFill/></center>}
        uncheckedHandleIcon={<center style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}}><BsFillCloudMoonFill/></center>}
        checkedIcon={""}
        uncheckedIcon={""}
        height={22}
        handleDiameter={30}
      />

      </div>
      <div style={{backgroundColor:design.bg}} className={styles.intro}>
        <div className={styles.introBox}>
          <div style={{zIndex:0}}>
          <Image alt='intro' src="/assets/intro.jpeg" layout="fill" objectFit="cover"/>
          </div>
          <div className={styles.introText}>
          <div><span style={{color:"white",marginRight:"10px",fontWeight:"bold"}}>MOCHAFFAA MOHSSINE</span></div>
          <ReactTypingEffect className={styles.typing}
          speed={200}
          eraseDelay={300}
          typingDelay={500}
        text={[
          "a web developer",
          "an app programmer",
          "a full stack developer",
        ]}  
      />
          
          </div>
          
        </div>
        
      </div>
      <center className={styles.infos}>
        <Image alt='mohssine mochaffaa' width={150} height={150} style={{borderRadius:"100px"}} src="/assets/mohssine.png"/>
        <p className={styles.parag} style={{color:design.color}}>My name is MOHSSINE MOCHAFFAA I'm a junior programmer, from Casablanca Morocco, I have 5 years of experience in web development as a frontend and backend programmer with React js & Firebase, and 3 years of experiance in mobile app development, hosting and integrating projects to the web network,I specialize in designing and programming e-commerce sites and private profile sites, as well as programming management sites, I'm the creator of this website.</p>
      </center>
      <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
  <ParallaxBannerLayer style={{width:"100%"}} className="myParallax" image="/assets/image1.jpg" speed={-50} />
  <ParallaxBannerLayer style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <span className={styles.chap}>Experiences</span>
  </ParallaxBannerLayer>
</ParallaxBanner>
<div>
  <br />
  <span style={{color:design.color,fontWeight:"bold",marginLeft:"20px",textDecorationLine:"underline",fontSize:"25px"}}>Javascript stack</span>
</div>
<div className={styles.infos2}>
  <div className={styles.circle}>
  <center>
  <p style={{color:design.color}}>React js</p>
  <div className={styles.circleBox}>
  <CircularProgressbar value={90} text={`${90}%`} />
  </div>
  </center>
  </div>

  <div className={styles.circle}>
  <center>
  <p style={{color:design.color}}>React native</p>
  <div className={styles.circleBox}>
  <CircularProgressbar styles={buildStyles({pathColor: 'purple',})} value={84} text={`${84}%`} />
  </div>
  </center>
  </div>

  <div className={styles.circle}>
  <center>
  <p style={{color:design.color}}>Next js</p>
  <div className={styles.circleBox}>
  <CircularProgressbar value={75} text={`${75}%`} />
  </div>
  </center>
  </div>

  <div className={styles.circle}>
  <center>
  <p style={{color:design.color}}>Firebase</p>
  <div className={styles.circleBox}>
  <CircularProgressbar styles={buildStyles({pathColor: 'orange',})} value={80} text={`${80}%`} />
  </div>
  </center>
  </div>

  <div className={styles.circle}>
  <center>
  <p style={{color:design.color}}>Css</p>
  <div className={styles.circleBox}>
  <CircularProgressbar value={78} text={`${78}%`} />
  </div>
  </center>
  </div>
  
  <div className={styles.circle}>
  <center>
  <p style={{color:design.color}}>Node js</p>
  <div className={styles.circleBox}>
  <CircularProgressbar styles={buildStyles({pathColor: 'green',})} value={65} text={`${65}%`} />
  </div>
  </center>
  </div>
</div>

<ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
  <ParallaxBannerLayer style={{width:"100%"}} className="myParallax" image="/assets/simage.jpg" speed={-50} />
  <ParallaxBannerLayer style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <span className={styles.chap}>Projects</span>
  </ParallaxBannerLayer>
</ParallaxBanner>
<div style={{padding:"10px"}} className="infos">
<br />
<span style={{color:design.color}}>Take a look at some of our clients successful projects that were designed and programmed according to their requests in a short time and hight quality.</span>
<center>
<br />
<span style={{color:design.color,fontWeight:"bold",marginLeft:"20px",textDecorationLine:"underline",fontSize:"25px"}}>Websites</span><br /><br />

  <div style={{width:"100%"}} className="caro">
<Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={3500}>
{projects.map((pro)=>{
        return(
          <center>
            <video controls muted  src={pro.data().imageUrl}/>
          </center>
        )
      })}
      </Carousel>
</div>
</center>

<center>
<br />
<span style={{color:design.color,fontWeight:"bold",marginLeft:"20px",textDecorationLine:"underline",fontSize:"25px"}}>Mobile apps</span>
<br /><br />
  <div style={{width:"100%",height:"500px"}}>
<Carousel wrapAround={true} slidesToShow={1} autoplay={true} autoplayInterval={3500}>
          <center style={{display:"flex",justifyContent:"center"}}>
            <div className={styles.phone}>
            <Image fill objectFit='contain' src="/assets/p1.png"/>
            </div>
            <div className={styles.phone}>
            <Image fill objectFit='contain' src="/assets/p2.png"/>
            </div>
          </center>
          <center style={{display:"flex",justifyContent:"center"}}>
          <div className={styles.phone}>
            <Image layout='fill' objectFit='contain'  src="/assets/p3.png"/>
            </div>
            <div className={styles.phone}> 
            <Image layout='fill' objectFit='contain' src="/assets/p4.png"/>
            </div>
            <div className={styles.phone}>
            <Image layout='fill' objectFit='contain' src="/assets/p5.png"/>
            </div>

          </center>
         
          
      </Carousel>
</div>
</center>

</div>
<ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
  <ParallaxBannerLayer style={{width:"100%"}} className="myParallax" image="/assets/image1.jpg" speed={-50} />
  <ParallaxBannerLayer style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <span className={styles.chap}>Contact me!</span>
  </ParallaxBannerLayer>
</ParallaxBanner>
<div>
<p style={{marginLeft:"10px",color:design.color,fontSize:"18px"}}>Text me by using these social media accounts. Have a nice day.</p>
<br />
  <center className={styles.joke} style={{justifyContent:"flex-start",flexWrap:"wrap"}}>
    <div style={{border:design.bord}} className={styles.tags}><FaInstagram color={design.color} size={25} /><a style={{color:design.color}} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mohssine_mochaffaa/">Mohssine mochaffaa</a></div>
    <div style={{border:design.bord}} className={styles.tags}><FaTiktok color={design.color} size={25} /><a style={{color:design.color}} target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@mohssine_dev/">Mohssine mochaffaa</a></div>
    <div className={styles.tags} style={{paddingLeft:"8px",paddingRight:"8px",border:design.bord}}><FaWhatsapp color={design.color} size={25}/><a style={{color:design.color}}>0687226112</a></div>
    <div style={{border:design.bord}} className={styles.tags}><FaFacebook color={design.color} size={25} /><a style={{color:design.color}} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mouhcine.mochaffaa">Mohssine mochaffaa</a></div>
  </center>
  <center className={styles.joke2} style={{justifyContent:"flex-start",flexWrap:"wrap"}}>
    <div style={{border:design.bord}} className={styles.tags}><FaInstagram color={design.color} size={18} /><a style={{color:design.color}} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mohssine_mochaffaa/">Mohssine mochaffaa</a></div>
    <div style={{border:design.bord}} className={styles.tags}><FaTiktok color={design.color} size={18} /><a style={{color:design.color}} target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@mohssine_dev/">Mohssine mochaffaa</a></div>
    <div className={styles.tags} style={{paddingLeft:"8px",paddingRight:"8px",border:design.bord}}><FaWhatsapp color={design.color} size={18}/><a style={{color:design.color}}>0687226112</a></div>
    <div style={{border:design.bord}} className={styles.tags}><FaFacebook color={design.color} size={18} /><a style={{color:design.color}} target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mouhcine.mochaffaa">Mohssine mochaffaa</a></div>
  </center>
</div><br /><br />

<footer>
  <center>
    <span style={{color:design.color,fontSize:"20px"}}>Mochaffaa Mohssine</span><br />
  </center>
</footer><br />
    </div>
  )
}
