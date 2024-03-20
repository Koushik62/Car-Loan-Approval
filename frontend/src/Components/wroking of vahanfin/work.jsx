

import React from 'react';
import './work.css'
import Apply from '../Assets/1.png'
import getloandecision  from '../Assets/2.png'
import uploaddocument from '../Assets/upload documents.png'
import getyourloan from '../Assets/get your loan disbursedd.png'


const work=() =>{

    return(
        <div className='working'>
            <h1>How Vahnfin Works</h1>
            <hr/>
            <div className='work'>
                <div className='work-item'>
                    <img src={Apply} alt='' />
                    <div>Apply for vahanfin
                        </div>
                </div>
                <div className='work-item'>
                    <img src={getloandecision} alt='' />
                    <div>   Get Loan Decision<br/>
                           In 30 Seconds</div>
                </div>
                <div className='work-item'>
                    <img src={uploaddocument} alt='' />
                    <div>Upload Required<br/>
Documents</div>
                    
                </div>
                <div className='work-item'>
                    <img src={getyourloan} alt='' />
                    <div>Get Your Loan Disbursed
                    <br/>  
(No Physical Signature Or<br/> Docs)</div>
                </div>
            </div>
        </div>
    )
}
export default work