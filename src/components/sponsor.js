import React, { Fragment } from 'react'
import '../styles/styles.css'
import rosenfeld from '../sponsorsLogo/rosenfeld.png'
import wolfram from '../sponsorsLogo/wolfram.png'
import balsamiq from '../sponsorsLogo/balsamiq-logo-noborder-screen.svg'
import replit from '../sponsorsLogo/replit.png'
import password from '../sponsorsLogo/1password.jpg'
import proto from '../sponsorsLogo/proto.jpg'
import edtimes from '../sponsorsLogo/Edtimes.jpg'

const Sponsors = (props) => { 
return (
  <section style={{ padding:10, textAlign:"center",backgroundColor:"#fff", }}>

    <div className="container" style={{ padding: 30, paddingTop:0}}>
  <div className="image-container" style={{ textAlign:"center", padding: 10 }}> 
  <p style={{ textAlign:"center", fontSize:30, fontWeight:700 }} >OUR SPONSORS 😍 </p>
    <a href="https://balsamiq.cloud/" target="_blank" >
      <img src={balsamiq} className="image"/>
    </a>
    <a href="https://dare2compete.com/" target="_blank" >
      <img src="https://d8it4huxumps7.cloudfront.net/images/d2c-logo/d2clogo.svg" alt="Dare2Compete" className="image"/>
    </a>
    <a href="https://www.wolfram.com/hackathons/" target="_blank">
      <img src={wolfram} alt="wolfram" className="image"/>
    </a>
    <a href="https://rosenfeldmedia.com/" target="_blank" >
      <img src={rosenfeld} alt="rosenfeld" className="image"/>
    </a>
    <a href="https://repl.it//" target="_blank" >
      <img src={replit} alt="replit" className="image"/>
    </a>
    <a href="https://1password.com/?gclid=Cj0KCQjw6PD3BRDPARIsAN8pHuGFKTd6Lb755fCq_YegAYQ6UiApCo3QpboyOvRroGuNFk9BLnnCRmEaAjAsEALw_wcB&gclsrc=aw.ds" target="_blank">
      <img src={password} alt="password" className="image"/>
    </a>
    <a href="https://edtimes.in/" target="_blank" >
      <img src={edtimes} alt="edtimes" className="image"/>
    </a>
    <a href="https://proto.io/" target="_blank" >
      <img src={proto} alt="proto" className="image"/>
    </a>

  </div>
  </div>
</section>
    )}
export default Sponsors;
