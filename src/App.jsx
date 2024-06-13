import './App.css';
import {fetchCandidateInfo, fetchCandidates} from './apiCalls';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [candidateData, setCandidateData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCandidateInfo = async () => {
      try {
        const data = await fetchCandidates(); // use the candidateId you want
        setCandidateData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getCandidateInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Candidate Information</h1>
      <pre>{JSON.stringify(candidateData, null, 2)}</pre>
    </div>
  );
};

export default App;
