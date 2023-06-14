import { FaListUl, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import classes from './eventsAllConcerts.module.css';
import Link from 'next/link';

const EventsAllConcerts = (props) => {
    const {eventDates} = props
    return (
        <div className={classes.eventsBody}>
            <div className={classes.concertsHeader}>
                <div className={classes.concertsTitle}>
                    <h4 className={classes.concertsTitleH4}>No Concerts Near</h4>
                    <span className={classes.concertsTitleSpan}>(select your city)</span>
                </div>
                <div className={classes.dFlex}>
                    <div>
                        <select className={classes.select}>
                            <option value="0">Select your dates</option>
                            <option value="1">Date1</option>
                            <option value="2">Date2</option>
                            <option value="3">Date3</option>
                        </select>
                    </div>
                    <div className={classes.rightBar}>
                        <div className={classes.listings}>
                            <FaListUl color="white"/>
                            <span className={classes.listingsText}>Listings</span>
                        </div>
                        <div className={classes.calendar}>
                            <FaCalendarAlt />
                            <span className={classes.calendarText}>Calendar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.allConcertsbody}>
                <h5 className={classes.allConcertsTitle}>All Concerts</h5>
                <div>
                    { eventDates.map((eventDate) => (
                        <div key={eventDate.title} className={classes.concertsItem}>
                            <div className={classes.titleField}>
                                <FaChevronDown color="#545454" size={10}/>
                                <div className={classes.ml1}>
                                    <h6 className={classes.concertTitle}>{eventDate.date}</h6>
                                    {/* <span className={classes.concertTime}>{eventDate.venue}</span> */}
                                </div>
                            </div>
                            <div className={classes.city}>
                                <h6 className={classes.concertText}>{eventDate.city}</h6>
                                <span className={classes.concertComment}>{eventDate.venue}</span>
                            </div>
                            <div className={classes.seeTickets}>
                                <a
                                    style={{
                                        border: "none",
                                        width: 70,
                                        padding: "4px 5px",
                                        borderRadius: 3,
                                        outline: 'none',
                                        background: "#DAA49A",
                                        color: "white",
                                        fontSize: "12px",
                                        textDecoration: "none",
                                    }}
                                    href={`/events/${eventDate.artistId}/${eventDate.eventId}/${eventDate.date}`}
                                >
                                    See Tickets
                                </a>
                            </div>
                        </div>
                    )) }
                </div>
                <div className={classes.loadMore}>
                    { eventDates.length > 10 ? <button className={classes.loadMoreBtn}>Load More</button> : "" }
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsAllConcerts;