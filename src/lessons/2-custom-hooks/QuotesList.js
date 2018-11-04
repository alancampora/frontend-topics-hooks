import React, { useState, useEffect } from "react";

export default function QuotesList() {
  const [offset, setOffset] = useState(0);
  const [quotes, setQuotes] = useState([]);
  const API_URL = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes";

  const nextQuotes = () => setOffset(offset + 10);
  const getAPIURL = () => `${API_URL}?offset=${offset}&n=10`;

  useEffect(
    () =>
      fetch(getAPIURL())
        .then(data => data.json())
        .then(response => setQuotes(response.quotes)),
    [offset]
  );

  return (
    <div>
      <button onClick={nextQuotes}> next quotes </button>
      <div className="quotes-list">
        {quotes.map((q, key) => (
          <div className="quote" key={key}>
            <p className="quote__author"> {q.author}</p>
            <p className="quote__quote"> {q.quote}</p>
          </div>
        ))}
      </div>
    </div>
  ); 
}
