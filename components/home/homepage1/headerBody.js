import { useState } from "react";
import classes from './headerBody.module.css'
import { BiSearch } from "react-icons/bi";

const HeaderBody = (props) => {
    const { event } = props;
    const [ state, setState ] = useState("01");

    return (
        <div className={classes.headerBody}>
            {event ? (
            <a href={`/events/${event.artist.id}/${event.id}`}>
                <img className={classes.headerBodyBg} src={event.bigImage} />
                <div className={classes.headerTextField}>
                    <h1 className={classes.headerTitle}>{event.title}</h1>
                    <h2 className={classes.headerText}>{event.text}</h2>
                    <button className={classes.headerBtn}>See Tickets</button>
                </div>
            </a>
            ) : null}

            <div className={classes.headerSlider}>
                <span onClick={() => setState('01')} className={ state === "01" ? classes.sliderItem : classes.sliderItemActive }>01</span> 
                <img className={classes.headerSliderImg} src="/images/Line 1.png" />
                <span onClick={() => setState('02')} className={ state === "02" ? classes.sliderItem : classes.sliderItemActive  }>02</span> 
                <img className={classes.headerSliderImg} src="/images/Line 1.png" />
                <span onClick={() => setState('03')} className={ state === "03" ? classes.sliderItem : classes.sliderItemActive  }>03</span> 
            </div>
            <div className={classes.headerFooter}>
                <h3 className={classes.headerFooterTitle}>Let&apos;s Make Live Happen</h3>
                <span className={classes.headerFooterText}>Shop millions of live events and discover can&apos;t-miss concerts, games, theater and more.</span>
                <div className={classes.headerToolBar}>
                    <div className={classes.cityInputField}>
                        <input className={classes.cityInput} type="text" placeholder="City or Zip Code"/>
                        <img className={classes.cityInputIcon} src="/images/Homepage1/city-location.png" />
                    </div>
                    <div className={classes.borderVertical}></div>
                    <div className={classes.selectField}>
                        <select className={classes.select}>
                            <option value="0">All Dates</option>
                            <option value="1">Date1</option>
                            <option value="2">Date2</option>
                            <option value="3">Date3</option>
                        </select>
                    </div>
                    <div className={classes.borderVertical}></div>
                    <div className={classes.searchBarField}>
                        <div className={classes.searchBar}>
                            <BiSearch color='#8a8989' size={18}/>
                            <input className={classes.searchBarInput} type="text" placeholder="Search for artists, venues and events"/>
                        </div>
                        <div className={classes.searchBtn}>Search</div>
                    </div>
                </div>

                <div className={classes.responsiveHeaderToolBar}>
                    <div className={classes.cityTool}>
                        <div className={classes.cityInputField}>
                            <input className={classes.cityInput1} type="text" placeholder="City or Zip Code"/>
                            <img className={classes.cityInputIcon} src="/images/Homepage1/city-location.png" />
                        </div>
                        <div className={classes.selectField}>
                            <select className={classes.select}>
                                <option style={{color:"blue"}} value="0">All Dates</option>
                                <option value="1">Date1</option>
                                <option value="2">Date2</option>
                                <option value="3">Date3</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.searchTool}>
                        <div className={classes.responsiveSearchBar}>
                            <div className={classes.searchBar}>
                                <BiSearch color='#8a8989' size={18}/>
                                <input className={classes.searchBarInput} type="text" placeholder="Search for artists, venues and events"/>
                            </div>
                            <div className={classes.searchBtn}>Search</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  export default HeaderBody