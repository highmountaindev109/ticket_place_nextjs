
import classes from './browseCategory.module.css'

export default function BrowseCategory(props) {
    const { BrowseCategories } = props
    return (
        <div className={classes.browseCategory}>
            <div className={classes.titleField}>
                <div className={classes.dFlex}>
                    <h1 className={classes.title}>Browse by Category</h1>
                    <div className={classes.borderHor}></div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {BrowseCategories.map((browseCategory) => (
                    <div key={browseCategory.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={browseCategory.url1} />
                            <div className={classes.ItemPosition}>
                                <div className={classes.concertsItem}>
                                    <img className={classes.ItemImg} src={browseCategory.url2} />
                                    {browseCategory.title}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            