import React, { useState } from 'react';
import classes from './eventsHeader.module.css'
const EventsHeader = (props) => {
    const { event, state, setState, eventDates } = props
    return (
        <div className={classes.header}>
            <div className={classes.headerBody}>
                <img className={classes.headerBodyBg} src="/images/Events/banner.png" /> 
                <div className={classes.headerTextField}>
                    <h1 className={classes.headerTitle}>{ event.title }</h1>
                    <div className={`${classes.dFlex} ${classes.mt1}`}>
                        <h5 className={classes.headerText}>{ event.artist.name }</h5>
                        <div className={classes.headerStar}>
                            <img className={classes.starImg} src="/images/events/.png" />
                            <span className={classes.starText}>{event.rate}</span>
                        </div>
                    </div>
                </div>
                <div className={classes.headerBottom}>
                    <div className={classes.headerBottomBody}>
                        <div onClick={() => setState("Events")} className={classes.cursorPointer}>
                            <span className={ state === 'Events' ? `${classes.skyColor} ${classes.headerBottomText}` : classes.headerBottomText }>Events ({eventDates.length})</span>
                            <div className={ state === 'Events' ? classes.borderBottom : "" }></div>
                        </div>
                        <div onClick={() => setState("Reviews")} className={classes.cursorPointer}>
                            <span className={ state === 'Reviews' ? `${classes.skyColor} ${classes.headerBottomText}` : classes.headerBottomText}>Reviews (10000)</span>
                            <div className={ state === 'Reviews' ? classes.borderBottom : ""}></div>
                        </div>
                        <div onClick={() => setState("Bio")} className={classes.cursorPointer}>
                            <span className={ state === 'Bio' ? `${classes.skyColor} ${classes.headerBottomText}` : classes.headerBottomText}>Bio</span>
                            <div className={ state === 'Bio' ? classes.borderBottom : ""}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsHeader;