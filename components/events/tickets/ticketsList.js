import React, {useState, useEffect} from 'react'
import MultiRangeSlider from './MultiRangeSlider';
import classes from './ticketsList.module.css';
import TicketsListBody from './ticketsListBody';
import { getLowestLists, getSectionLists } from '../../../data';

const TicketsList = (props) => {
    const [ minState, setMin ] = useState(0);
    const [ maxState, setMax ] = useState(100);
    const [ lowestLists, setLowestLists ] = useState([])
    const [ sectionLists, setSectionLists ] = useState([])

    const handleChange = ({ min, max }) => {
        setMin(min)
        setMax(max) 
    }
    useEffect(() => {
        console.log(minState, maxState)
        const lowestList = getLowestLists(minState, maxState);
        const sectionList = getSectionLists(minState, maxState);
        setLowestLists(lowestList);
        setSectionLists(sectionList);
    }, [maxState, minState]); 

    return (
        <div className={classes.ticketsList}>
            <MultiRangeSlider
                min={0}
                max={1000}
                onChange={({ min, max }) => handleChange({ min, max })}
            />
            <div className={classes.divider}></div>
            <TicketsListBody lowestLists={lowestLists} sectionLists={sectionLists} />
        </div>
    )
}
export default TicketsList;