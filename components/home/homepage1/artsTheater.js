import classes from './artsTheater.module.css';

export default function ArtsTheater(props) {
    const { ArtsTheaters } = props
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                {/* <div className="d-flex flex-column justify-content-between width100"> */}
                    <div className={classes.concertsField}>
                        <span className={classes.title}>Arts & Theater</span>
                        <div className={classes.dFlex}>
                            <button className={classes.seeAllBtn}>See All</button>
                            <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className={classes.cardsBody}>
                {ArtsTheaters.map((ArtsTheater) => (
                    <div key={ArtsTheater.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={ArtsTheater.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {ArtsTheater.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{ArtsTheater.events} Events</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{ArtsTheater.title}</h4>
                            <span className={classes.cardText}>{ArtsTheater.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            