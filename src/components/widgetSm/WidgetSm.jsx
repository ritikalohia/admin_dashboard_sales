import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@mui/icons-material'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Costumers</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img className='widgetSmImg' alt="img1" src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000" />
                <div className="widgetSmUser">
                    <div className="widgetSmUsername">Anna Keller</div>
                    <div className="widgetSmUserTitle">Software Engineer</div>
                </div>
                <button className="widgetSmButton">
                    < Visibility className='widgetSmIcon' />Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img className='widgetSmImg' alt="img2" src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000" />
                <div className="widgetSmUser">
                    <div className="widgetSmUsername">Anna Keller</div>
                    <div className="widgetSmUserTitle">Software Engineer</div>
                </div>
                <button className="widgetSmButton">
                    < Visibility className='widgetSmIcon' />Display
                </button>
            </li>
        </ul>
    </div>
  )
}
