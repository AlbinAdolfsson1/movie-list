import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Movie = () => {
  const { movie } = useParams()
  return (
    <Layout>
      <h1>{movie}</h1>
    </Layout>
  )
}

export default Movie