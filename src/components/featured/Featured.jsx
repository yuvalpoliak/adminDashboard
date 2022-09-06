import React from 'react'
import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
                <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>$460</p>
            <p className='description'>Some of the revenue not included fee and or shipping</p>
            <div className='summary'>
                <div className='item'>
                    <div className='itemTitle'>Target</div>
                    <div className='itemResult negative'>
                    <KeyboardArrowDown fontSize='small'/>
                    <div className='resultAmount'>$12.8</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Last Week</div>
                    <div className='itemResult positive'>
                    <KeyboardArrowDown fontSize='small'/>
                    <div className='resultAmount'>$19.2</div>
                    </div>
                </div>
                <div className='item'>
                    <div className='itemTitle'>Last Month</div>
                    <div className='itemResult positive'>
                    <KeyboardArrowDown fontSize='small'/>
                    <div className='resultAmount'>$34.8</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured