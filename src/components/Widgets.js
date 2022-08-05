import React from 'react'
import '../styles/Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) =>
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Programming", "Learn code wherever you are")} {newsArticle("Programming", "Learn code wherever you are")} {newsArticle("Programming", "Learn code wherever you are")} {newsArticle("Programming", "Learn code wherever you are")} {newsArticle("Programming", "Learn code wherever you are")} {newsArticle("Programming", "Learn code wherever you are")} {newsArticle("Programming", "Learn code wherever you are")} {newsArticle("Programming", "Learn code wherever you are")}
        </div>
    )
}

export default Widgets
