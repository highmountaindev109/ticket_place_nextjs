import Head from 'next/head';
import Layout from '../modules/layout/Layout';
import Header from "../components/home/homepage1/Header"
import HeaderBody from "../components/home/homepage1/headerBody";
import AmericanExpress from "../components/home/homepage1/americanExpress";
import BrowseCategory from "../components/home/homepage1/browseCategory";
import TopSelling from "../components/home/homepage1/topSelling";
import Sport from "../components/home/homepage1/sports";
import ArtsTheater from "../components/home/homepage1/artsTheater";
import Family from "../components/home/homepage1/family";
import DiscoverMoreEvent from "../components/home/homepage1/discoverMoreEvents";
import { useEffect, useState } from 'react';
import { getFeaturedVenues } from '../data';
import { getFeaturedArtists, getHeaderEvents, getBrowseCategory, getTopSelling, getSport, getArtsTheater, getFamily, getDiscoverMoreEvent, getAmericanExpress } from '../utils/db';
import { insertLinks } from '../utils/nav';

export default function HomePage(props) {
  const { HeaderEvents, AmericanExpresses, BrowseCategories, TopSellings, Sports, ArtsTheaters, Families, DiscoverMoreEvents, featuredArtists,  featuredVenues } = props;
  const [featEv, setFeatEv] = useState({ idx: 0, event: HeaderEvents[0] });

  useEffect(() => {
    setTimeout(() => {
      let nextFeatEv = featEv.idx + 1;
      if (nextFeatEv > 2) nextFeatEv = 0;
      setFeatEv({ idx: nextFeatEv, event: HeaderEvents[nextFeatEv] });
    }, 5000),
      [];
  });
  const event = featEv?.event;

  return (
    <div>
      <Head>
        <title>Backend</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Layout>
          <Header />
          <HeaderBody HeaderEvents = { HeaderEvents } event = { event } />
          <AmericanExpress AmericanExpresses = { AmericanExpresses } />
          <BrowseCategory BrowseCategories = { BrowseCategories } />
          <TopSelling TopSellings = { TopSellings } />
          <Sport Sports = { Sports } />
          <ArtsTheater ArtsTheaters = { ArtsTheaters } />
          <Family Families = { Families } />
          <DiscoverMoreEvent DiscoverMoreEvents = { DiscoverMoreEvents } />
        </Layout>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const HeaderEvents = await getHeaderEvents();
  const AmericanExpresses = await getAmericanExpress();
  const BrowseCategories = await getBrowseCategory();
  const TopSellings = await getTopSelling();
  const Sports = await getSport();
  const ArtsTheaters = await getArtsTheater();
  const DiscoverMoreEvents = await getDiscoverMoreEvent();
  const Families = await getFamily();
  const featuredArtists = insertLinks(
    await getFeaturedArtists(),
    'artists'
  ).map((artist) => {
    if (artist.currentTour)
      return {
        ...artist,
        link: `/events/${artist.id}/${artist.currentTour}#bio`,
      };
    return artist;
  });
  const featuredVenues = insertLinks(await getFeaturedVenues(), 'venues');
  return {
    props: { HeaderEvents, AmericanExpresses, BrowseCategories, TopSellings, Sports, ArtsTheaters, Families, DiscoverMoreEvents, featuredArtists, featuredVenues },
  };
}
