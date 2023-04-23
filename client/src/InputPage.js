import React, { useState } from 'react';

function InputPage() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(`/api/search?keyword=${keyword}`);
    const data = await response.json();
    setResults(data);
  };

  return (
    <div>
      <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((item) => (
          <div key={item.headline}>
            <h3>{item.headline}</h3>
            <p>{item.primaryText}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputPage;
