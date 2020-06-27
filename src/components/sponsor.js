import React, { Fragment } from 'react'
import '../styles/styles.css'
import { Link } from 'gatsby'
import rosenfeld from '../sponsorsLogo/rosenfeld.png'
import wolfram from '../sponsorsLogo/wolfram.png'
import balsamiq from '../sponsorsLogo/balsamiq-logo-noborder-screen.svg'

const Sponsors = (props) => { 
return (
  <section style={{ padding:10, textAlign:"center",backgroundColor:"#fff", }}>

    <div className="container" style={{ padding: 30, paddingTop:0}}>
  <div className="imgage-container" style={{ textAlign:"center", padding: 10 }}> 
  <p style={{ textAlign:"justify", fontSize:30, fontWeight:700 }} >😍OUR SPONSORS</p>
    <a className="underLine"  href="https://balsamiq.cloud/" target="_blank">
      <img src={balsamiq} className="imgage"/>
    </a>
    <a className="underLine" href="https://dare2compete.com/" target="_blank" >
      <img src="https://d8it4huxumps7.cloudfront.net/images/d2c-logo/d2clogo.svg" alt="Dare2Compete" className="imgage"/>
    </a>
    <a className="underLine" href="https://www.wolfram.com/hackathons/" target="_blank" rel="noopener noreferrer">
      <img src={wolfram} alt="wolfram" className="imgage"/>
    </a>
    <a className="underLine" href="https://rosenfeldmedia.com/" target="_blank" rel="noopener noreferrer">
      <img src={rosenfeld} alt="rosenfeld" className="imgage"/>
    </a>

  </div>
  </div>
</section>
    )}
export default Sponsors;
