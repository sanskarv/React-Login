import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useEffect } from 'react';

const Pop = () => {
    const fun = () => {
        document.body.style.overflow="visible";
        const show = document.querySelector('.pop');
        show.style.display = "none";
        
    }
    
    return (
        <div className='pop'>
            <div className="pop-child">
                <MdCancel style={{ fontSize: "2em", position: "absolute", top: "2rem", right: "2rem", cursor: "pointer" }} onClick={() => fun()} />

                <div className="pop-head">
                    <h1>Save your engineering bandwidth</h1>
                    <h4>Outsource your interviews in just 2 simple steps</h4>
                </div>

                <div className="pop-search">
                    <div className='searchprofile' >
                        <FaSearch />
                        <input className='search' type="text" name="Search Profile" id="" placeholder='search job' />
                    </div>
                </div>

                <div className="box-papa">
                    <div className="box">
                        <div className="ele">
                            <img src="src/assets/frontend.svg" alt="" />
                            <h5>frontend</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/backend.svg" alt="" />
                            <h5>backend</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/fullstack.svg" alt="" />
                            <h5>fullstack</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/android.svg" alt="" />
                            <h5>android</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/data-science.svg" alt="" />
                            <h5>data-science</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/sdet.svg" alt="" />
                            <h5>Automation QA</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/ml-ai.svg" alt="" />
                            <h5>ML/AI</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/flutter.svg" alt="" />
                            <h5>Flutter</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/react (1).svg" alt="" />
                            <h5>React Native</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/adobe-aem.svg" alt="" />
                            <h5>AEM</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/project-manager.svg" alt="" />
                            <h5>Project Manager</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/data-engineering.svg" alt="" />
                            <h5>Data Engineering</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/database.svg" alt="" />
                            <h5>Database administrator</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/drupal.svg" alt="" />
                            <h5>Drupal developer</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/microsoft-business-app.svg" alt="" />
                            <h5>Microsoft Business Apps</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/project-manager.svg" alt="" />
                            <h5>Project Manager</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/sap.svg" alt="" />
                            <h5>Sap</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/salesforce.svg" alt="" />
                            <h5>Salesforce developer</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/scrum.svg" alt="" />
                            <h5>Scrum Master</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/service-now.svg" alt="" />
                            <h5>ServiceNow Devloper</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/sharepoint.svg" alt="" />
                            <h5>Share Point</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/site-reliability.svg" alt="" />
                            <h5>Site reliability engineer</h5>
                        </div>
                        <div className="ele">
                            <img src="src/assets/ios.svg" alt="" />
                            <h5>IOS</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pop
