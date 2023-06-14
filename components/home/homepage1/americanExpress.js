
import classes from './americanExpress.module.css';

export default function AmericanExpress(props) {
    const { AmericanExpresses } = props
    return (
        <div className={classes.americanExpress}>
            <div className={classes.dFlex}>
                <div className={classes.flexColumn}>
                    <div className={classes.dFlex}>
                        <h1 className={classes.americanExpressTitle}>American Express R Presales</h1>
                        <div className={classes.borderHor}></div>
                    </div>
                    <span className={classes.americanExpressText}>Card Members get exclusive early access to tickets</span>
                </div>
                <button className={classes.americanExpressBtn}>See All</button>
            </div>

            <div className={classes.cardsBody}>
                {AmericanExpresses.map((AmericanExpress) => (
                    <div key={AmericanExpress.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={AmericanExpress.url} />
                            <div className={classes.cardPresale}>{AmericanExpress.time1}</div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h5 className={classes.cardTime}>{AmericanExpress.time2}</h5>
                            <h4 className={classes.cardTitle}>{AmericanExpress.title}</h4>
                            <span className={classes.cardComment}>{AmericanExpress.text}</span>
                        </div>
                    </div>
                ))}
                <div className={classes.cards}>
                    <div className={classes.relative}>
                        <img className={classes.cardImg} src="/images/Homepage1/Rectangle 18.png" />
                    </div>
                    <div className={classes.cardLearnMore}>
                        <span className={`${classes.cardComment} ${classes.mT1}`}>Card Members enjoy exclusive access to the best of live muisic.</span>
                        <button className={classes.leardMore}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
            