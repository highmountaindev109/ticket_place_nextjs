import classes from './eventsEricChurch.module.css';

const EventsEricChurch = () => {
    return (
        <div className={classes.ericChurch}>
            <h5 className={classes.ericChurchTitle}>From Eric Church</h5>
            <span className={classes.followText}>Follow</span>
            <div className={classes.socialIcon}>
                <img className={classes.socialIconImg} src="/images/Events/Group 43.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 47.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 44.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 46.png" />
                <img className={classes.socialIconImg} src="/images/Events/Group 45.png" />
            </div>
        </div>
    );
  };
  
  export default EventsEricChurch;