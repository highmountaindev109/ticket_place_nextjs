
  import classes from './index.module.css'

  const helpfulLinks = [
    { title: 'My Account' },
    { title: 'Ticket Your Event' },
    { title: 'Refunds and Exchanges' },
    { title: 'Get Help' },
    { title: 'Sell' },
    { title: 'Gift Cards' },
    { title: 'N.Y Registered Brokers' },
    { title: 'Do Not Sell My Information' },
  ]
const ourNetworks = [
    { title: 'Live Nation' },
    { title: 'House of Blues' },
    { title: 'Front Gate Tickets' },
    { title: 'Ticket Web' },
    { title: 'universe' },
    { title: 'NFL TicketWeb' },
    { title: 'NBATICKETS.com' },
    { title: 'NHL Ticket Exchange' },
]
const aboutUss = [
    { title: 'Whoe We Are' },
    { title: 'Ticketmaster Blog' },
    { title: 'Ticketing 101' },
    { title: 'Privacy Policy' },
    { title: 'Work With Us' },
    { title: 'Across the Globe' },
    { title: 'Innovation' },
]
const friendsPartners = [
    { title: 'American Express' },
    { title: 'Allianz' },
    { title: 'AWS' },
]

export default function Footer() {
    return (
        <div className={`${classes.footer} ${classes.footerBg}`}>
            <div className={classes.footerItemField}>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>Helpful Links</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {helpfulLinks.map((helpfulLink) => (
                        <div key={helpfulLink.title} className={classes.footerTextItem}>
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{helpfulLink.title}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>Our Network</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {ourNetworks.map((ourNetwork) => (
                        <div key={ourNetwork.title} className="d-flex jsutify-contnet-start align-items-center cursor-pointer footer-text-item">
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{ourNetwork.title}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>About Us</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {aboutUss.map((aboutUs) => (
                        <div key={aboutUs.title} className="d-flex jsutify-contnet-start align-items-center cursor-pointer footer-text-item">
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{aboutUs.title}</span>
                        </div>
                    ))}
                </div>
                <div className={classes.footerItem}>
                    <div className={classes.footerTitlefield}>
                        <h5 className={classes.footerTitle}>Friends & Partners</h5>
                        <img className={classes.footerTitleLine} src="/images/bottom-line.png" />
                    </div>
                    {friendsPartners.map((friendsPartner) => (
                        <div key={friendsPartner.title} className="d-flex jsutify-contnet-start align-items-center cursor-pointer footer-text-item">
                            <img className={classes.footerTextIcon} src="/images/select-allow.png" />
                            <span className={classes.footerText}>{friendsPartner.title}</span>
                        </div>
                    ))}
                    <div className="d-flex justify-content-start align-items-center footer-ourApp-text-title">
                        <h5 className={classes.footerTitle}>Get Our App</h5>
                        <img className={classes.ourAppIcon} src="/images/apple.png" />
                        <img className={classes.ourAppIcon} src="/images/Unity.png" />
                    </div>
                </div>
            </div>
            <img className={classes.divider} src="/images/Rectangle 40.png" />
            <div className={classes.footerLogoField}>
                <img className={classes.logoImg} src="/images/Homepage1/logo-white 1.png" />
                <div className={classes.socialIconField}>
                    <img className={classes.socialIcon} src="/images/Group 43.png" />
                    <img className={classes.socialIcon} src="/images/Group 47.png" />
                    <img className={classes.socialIcon} src="/images/Group 44.png" />
                    <img className={classes.socialIcon} src="/images/Group 46.png" />
                    <img className={classes.socialIcon} src="/images/Group 45.png" />
                </div>
            </div>
            <img className={classes.divider} src="/images/Rectangle 40.png" />
            <div className={classes.footerBottom}>
                <span className={classes.footerBottomText}>By continuing past this page, you agree to our Terms of Use.</span>
                <div className={classes.dFlex}>
                    <span className={classes.footerBottomText}>@Ticketmaster 2021</span>
                    <img className={classes.borderVertical} src="/images/Rectangle 42.png" />
                    <div className={classes.dFlex}>
                        <img className={classes.flagIcon} src="/images/image 2.png" />
                        <span className={classes.footerBottomText}>United States</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
            