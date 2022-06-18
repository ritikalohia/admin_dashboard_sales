import React from 'react'
import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

export default function Featuredinfo() {
  return (
    <div>
        <div className="featured">
            <div className="featuredItems">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,425</span>
                    <span className="featuredMoneyRate">-11.4<ArrowDownward className='featuredIcon negetive' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItems">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,425</span>
                    <span className="featuredMoneyRate">-11.4<ArrowDownward className='featuredIcon positive' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItems">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,425</span>
                    <span className="featuredMoneyRate">45.4<ArrowUpward className='featuredIcon' /></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    </div>
  )
}
