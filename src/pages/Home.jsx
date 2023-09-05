import { useState } from 'react';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  console.log(apiDataError);

  const onSearch = async ({ q, searchOption }) => {
    try {
      setApiDataError(null);

      let result;

      if (searchOption == 'shows') {
        result = await searchForShows(q);
      } else {
        result = await searchForPeople(q);
      }
      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error Occured:{apiDataError.message}</div>;
    }
    if (apiData?.length == 0) {
      return <div>No Result</div>;
    }
    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
