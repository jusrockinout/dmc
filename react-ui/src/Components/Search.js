import React from "react";

class Search extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Explore</h2>
          <h3>Search by location or dispensary name.</h3>
          <div className="search">
            <input
              type="text"
              className="form-control input-sm"
              maxLength={64}
              placeholder="Search"
            />
            <button type="submit" className="btn btn-primary btn-sm">
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
