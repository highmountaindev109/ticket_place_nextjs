import classes from './ArtistBio.module.css';
import parse from 'html-react-parser';

export default function ArtistBio(props) {
  const { artistDetails } = props;

  return (
    <div className={classes.cont}>
      {artistDetails?.bio ? parse(artistDetails.bio) : 'No Bio'}
    </div>
  );
}
