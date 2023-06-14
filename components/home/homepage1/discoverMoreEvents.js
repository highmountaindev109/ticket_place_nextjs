import classes from './discoverMoreEvents.module.css'

export default function DiscoverMoreEvent(props) {
    const { DiscoverMoreEvents } = props
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                <div className={classes.concertsField}>
                    <h1 className={classes.title}>Discover More Events</h1>
                    <div className={classes.borderHor}></div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {DiscoverMoreEvents.map((DiscoverMoreEvent) => (
                    <div key={DiscoverMoreEvent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={DiscoverMoreEvent.url} />
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{DiscoverMoreEvent.title}</h4>
                            <span className={classes.cardText}>{DiscoverMoreEvent.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            