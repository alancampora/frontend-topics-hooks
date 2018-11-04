import React, { useState, useEffect } from "react";

export function usePagination(
  endpoint,
  offsetPropName,
  limitPropName,
  mainProp,
  maxEntries
) {

  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);

  const nextData = () => setOffset(offset + maxEntries);
  const getAPIURL = () => `${endpoint}?${offsetPropName}=${offset}&${limitPropName}=${maxEntries}`;

  useEffect(
    () =>
      fetch(getAPIURL())
        .then(data => data.json())
        .then(response => setData(response[mainProp])),
    [offset]
  );

  return [
    data, 
    nextData,
  ]
}

export default function QuotesListRefactor() {
  const API_URL = "https://opinionated-quotes-api.gigalixirapp.com/v1/quotes";
  const OFFSET_PROP = "offset";
  const LIMIT_PROP = "n";
  const MAIN_PROP = "quotes";
  const MAX = 10;

  const [quotes, nextQuotes] = usePagination(
    API_URL, 
    OFFSET_PROP, 
    LIMIT_PROP,
    MAIN_PROP,
    MAX,
  )

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
