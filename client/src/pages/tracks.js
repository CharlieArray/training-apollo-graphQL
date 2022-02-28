import React from "react";
import { Layout } from "../components";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
// import { Layout, QueryResult } from '../components';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      length
      thumbnail
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;

const Tracks = () => {
  const { error, loading, data } = useQuery(TRACKS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  return (
    <Layout grid>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </Layout>
  );
};

export default Tracks;
