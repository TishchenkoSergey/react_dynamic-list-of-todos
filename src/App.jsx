import React, { useCallback, useMemo, useState } from 'react';
import debounce from 'lodash.debounce';

import { LoadError } from './components/LoadError';
import { trackList } from './api/api';
import { Search } from './components/Search';
import { SearchContent } from './components/SearchContent';

const App = () => {
  const [loadError, setLoadError] = useState(false);
  const [loadTracks, setLoadTracks] = useState([]);
  const [query, setQuery] = useState('');
  const [visibleSearchBar, setVisibleSearchBar] = useState(false);

  async function tracksFromServer() {
    try {
      const response = await trackList();

      setLoadTracks(response.Track.data);
    } catch (error) {
      setLoadError(true);
    }
  }

  const getTracks = useMemo(() => loadTracks.filter(track => (
    track.Artist.toLowerCase().includes(query.toLowerCase())
      || track.title.toLowerCase().includes(query.toLowerCase())
  )), [query, loadTracks]);

  const loadData = useCallback(debounce(tracksFromServer, 1000), []);

  const handleChange = (track) => {
    const { value } = track.target;

    setQuery(value);
    loadData();
    value === ''
      ? setVisibleSearchBar(false)
      : setVisibleSearchBar(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setQuery('');
    setVisibleSearchBar(false);
  };

  return (
    <>
      <div className="src d-none d-md-block">
        <form>
          {loadError
            ? <LoadError />
            : (
              <Search
                handleClose={handleClose}
                handleChange={handleChange}
                query={query}
              />
            )
          }
        </form>
      </div>
      {visibleSearchBar && <SearchContent tracks={getTracks} />}
    </>
  );
};

export default App;
