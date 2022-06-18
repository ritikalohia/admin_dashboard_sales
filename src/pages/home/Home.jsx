import React from 'react'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import Chart from '../../components/chart/Chart'
import './home.css'
import {userData} from "../../dummyData"
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
        <Featuredinfo/>
        <Chart data={userData} title="Profit Charts" grid dataKey="Sales" />
        <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
        </div>
    </div>
  )
}
