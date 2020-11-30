import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Search = memo(({ handleClose, handleChange, query }) => (
  <>
    <input
      name=""
      type=""
      value={query}
      onChange={handleChange}
      placeholder="Search artist, songs, videos..."
    />

    <button
      type="submit"
      className="btn-submit"
    >
      <i className="fa fa-search" />
    </button>

    <button
      type="submit"
      className="search-cancil"
      onClick={handleClose}
    >
      <img src="img/icon-cross.png" alt="" />
    </button>
  </>
));

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
}.isRequired;
