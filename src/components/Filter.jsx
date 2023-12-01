import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <div style={{ marginBottom: '8px' }}>
        <label htmlFor="filterInput">Find contacts by name</label>
      </div>
      <div>
        <input
          type="text"
          id="filterInput"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filter;
