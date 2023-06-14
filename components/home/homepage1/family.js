import classes from './family.module.css'

export default function Family(props) {
    const { Families } = props
    return (
        <div className={classes.family}>
            <div className={classes.dFlex}>
                <div className={classes.concertsField}>
                    <span className={classes.title}>Family</span>
                    <div className={classes.dFlex}>
                        <button className={classes.seeAllBtn}>See All</button>
                        <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                    </div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {Families.map((Family) => (
                    <div key={Family.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={Family.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {Family.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{Family.events} Events</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{Family.title}</h4>
                            <span className={classes.cardText}>{Family.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            