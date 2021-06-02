import React from 'react';
import logo from '../Images/logo.png';
import image1 from '../Images/1.png';
import image2 from '../Images/2.png';
import image3 from '../Images/3.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlobe,faPhoneSquareAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


 const Home = () => {
     const footerData=[
         {
             item: 'Toll free 1800 200 1234',
             icon:    <FontAwesomeIcon icon={faPhoneSquareAlt} /> 
         },
         {
            link: 'www.facebook.com/cripumps',  
            icon:  <FontAwesomeIcon icon={faFacebook}/> 
        },
        {
            link: 'www.crigroups.com', 
            icon: <FontAwesomeIcon icon={faGlobe}/>   
        },
     ]
    return (
        <div className='home'>
               <header className='logo'>
                   <img src={logo} alt="logo"></img>
               </header>
               <section className='header-container'>
               
                  <div className="header-item-left crast">
                       <img className="img-fluid" src={image1} alt="crast" />
                   </div >
                   <div className="header-item-right"> 
                        
                            <p className='header-text-top'>
                            <span> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time. </span>
                            </p>
                            <li className='header-text-body'>
                                <span>
                                C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
                                </span>
                            
                            </li>
                             <li className='header-text-body'>
                            
                            
                            <span>
                                C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency     Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                            </span>
                            </li>
                            
                                 <img className="img-fluid" style={{width: '90%'}} src={image2} alt="Award" srcset="" />
                                   <br />
                                 <p className="Header-text-bottom">
                                 Government of India has awarded the  <span style={{fontWeight:'bold'}}>  "National Energy Conservation Award 2018" </span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                                 </p>  
                        </div>
                   
               </section>

                   <div className="body">
                       <p>
                           <span className="body-text">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                           </span>
                        </p>
                       <img className="img-fluid" style={{  width:'90%'}} src={image3} alt="Product" srcset="" />
                        <p className="body-text-bottom">
                           <span>
                            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
                           </span>
                        </p>
                    </div> 
                    <div className='container'>
                        <div className="nav-container">
                        
                            <p className="nav-header">
                            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                            </p>
                           
                            <p className="nav-body">
                              
                         CHEMICALS & PROCESS   <span>POWER</span> <span> WATER & WASTE WATER</span> 
                            <span> OILS & GAS </span> <span> PHARMA </span> <span> SUGARS & DISTILLERIES</span> 
                            <span> PAPER & PULP </span> <span> MARINE & DEFENCE </span> <span>METAL & MINING</span> 
                            <span>FOOD & BEVERAGE </span> <span>  PETROCHEMICAL & REFINERIES</span> <span> SOLAR</span>
                            <span>  BUILDING</span> <span>HVAC </span> <span> FIRE FIGHTING</span> <span> AGRICULTURE & RESIDENTIAL</span>
                             
                             
                            </p>
                    
                        </div> 
                    </div>   
                    <div className="footer">
                        {footerData.map(x=>
                            <div className="footer-item">{x.icon}&nbsp;
                            {
                                x.link?<a href={x.link}>{x.link}</a>:<span> {x.item} </span>
                            }
                            </div>
                        )}
                   </div>  
        </div>
    );
};

export default Home;