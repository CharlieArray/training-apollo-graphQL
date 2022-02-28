import React from "react";
import { useQuery, gql } from "@apollo/client";
import TrackCard from "../containers/track-card";
import {Layout, QueryResult } from "../components"
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
  const {loading, error, data } = useQuery(TRACKS);

  return (
   <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </QueryResult>
  </Layout>
  );
};

export default Tracks;
