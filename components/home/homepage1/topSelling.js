import classes from './topSelling.module.css';

export default function TopSelling(props) {
    const { TopSellings } = props
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                <div className={classes.flexColumn}>
                    <div className={classes.dFlex}>
                        <h1 className={classes.topTitle}>Top Selling</h1>
                        <div className={classes.borderHor}></div>
                    </div>
                    <div className={classes.concertsField}>
                        <span className={classes.title}>Concerts</span>
                        <div className={classes.dFlex}>
                            <button className={classes.seeAllBtn}>See All</button>
                            <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {TopSellings.map((TopSelling) => (
                    <div key={TopSelling.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={TopSelling.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {TopSelling.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{TopSelling.events} Events</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{TopSelling.title}</h4>
                            <span className={classes.cardText}>{TopSelling.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            