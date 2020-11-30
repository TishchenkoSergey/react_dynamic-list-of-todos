import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const SearchContent = memo(({ tracks }) => (
  <div className="search-reasult">
    {tracks.length < 1
      ? (<div className="spinner-border text-primary" />)
      : (
        <ul>
          {tracks.map(track => (
            <li key={track.ContentID}>
              <a href="#!">
                <img
                  src={
                    track.image.replace('<$size$>', '300')
                  }
                  alt=""
                />
                <span>{track.Artist}</span>
                {' - '}
                {track.title}
              </a>
            </li>
          ))}
        </ul>
      )}
  </div>
));

SearchContent.propTypes = {
  tracks: PropTypes.arrayOf({
    ContentID: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    Artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}.isRequired;
