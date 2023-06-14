import Layout from '../layout/Layout';
import Home from '../../components/home';


const HomePage = () => {

  return (
      <Layout>
        <Home />
      </Layout>
  ) 
};

export default HomePage;
export async function getServerSideProps() {
  console.log("fdsfsdfsd")
  const HeaderEvents = await getHeaderEvents();

  // const featuredArtists = insertLinks(await getFeaturedArtists(), 'artists');
  // const featuredVenues = insertLinks(await getFeaturedVenues(), 'venues');
  return {
    props: { HeaderEvents },
  };
}