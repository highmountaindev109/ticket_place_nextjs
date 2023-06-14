import Image from 'next/image';
import classes from './ObjectsList.module.css';

function Card(props) {
  const { image, title, desc, href } = props;

  return (
    <div className={classes.card}>
      <a href={href}>
        {image && <Image src={`/images/${image}`} width={330} height={220} />}
        <h3>{title}</h3>
        <div>{desc}</div>
      </a>
    </div>
  );
}

export default function ObjectsList(props) {
  const { objs } = props;

  return (
    <div className={classes.cont}>
      {objs?.map((obj, i) => (
        <Card
          key={i}
          image={obj.smallImage}
          title={obj.title || obj.name}
          desc={obj.description}
          href={obj.link}
        />
      ))}
    </div>
  );
}
