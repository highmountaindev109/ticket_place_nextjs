import classes from './ticketsListBody.module.css';
import React, {useState, useEffect} from 'react';

const Lowest = (props) => {
    const { lowestLists } = props
    return (
        <div className={classes.listHeight}>
        { lowestLists.map((lowestList) => (
            <div key={lowestList.title} className={classes.ticketsItem}>
                <div className={`${classes.dFlex} ${classes.width100}`}>
                    <div className={classes.dFlexColumn}>
                        <span className={classes.listSec}>{lowestList.title}</span>
                        <span className={classes.comoment}>{lowestList.comment}</span>
                    </div>
                    <div className={classes.dFlexColumn}>
                        <span className={classes.price}>${lowestList.price} USD</span>
                        <span className={classes.comoment}>{lowestList.type}</span>
                    </div>
                </div> 
                <div className={classes.borderBottom}></div>   
            </div>
        )) }
    </div>
    )
}

const Section = (props) => {
    const { sectionLists } = props
    return (
        <div className={classes.listHeight}>
            { sectionLists.map((sectionList) => (
                <div key={sectionList.title} className={classes.ticketsItem}>
                    <div className={`${classes.dFlex} ${classes.width100}`}>
                        <div className={classes.dFlexColumn}>
                            <span className={classes.listSec}>{sectionList.title}</span>
                            <span className={classes.comoment}>{sectionList.comment}</span>
                        </div>
                        <div className={classes.dFlexColumn}>
                            <span className={classes.price}>${sectionList.price}</span>
                            <span className={classes.comoment}>{sectionList.type}</span>
                        </div>
                    </div> 
                    <div className={classes.borderBottom}></div>   
                </div>
            )) }
        </div>
    )
}


const TicketsListBody = (props) => {
    const { lowestLists, sectionLists } = props
    const [ status, setStatus ] = useState("lowest");
    return (
        <div className={classes.ticketsListBody}>
            <div className={classes.TicketsListHeader}>
                <div onClick={() => setStatus("lowest")} className={classes.left}>
                    <span className={classes.lowestTitle}>Lowest Price</span>
                    <div className={ status==="lowest" ? classes.activeBorder : classes.ListHeaderborder }></div>    
                </div>
                <div onClick={() => setStatus("section")} className={classes.right}>
                    <span className={classes.sectionTitle}>Section</span>
                    <div className={ status==="section" ? classes.activeBorder : classes.ListHeaderborder }></div> 
                </div>
            </div>
            { status==="lowest" ? <Lowest lowestLists={lowestLists} /> : <Section sectionLists={sectionLists} />
            }
        </div>
    )
}

export default TicketsListBody;