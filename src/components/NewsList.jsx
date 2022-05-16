import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const url =
    'https://newsapi.org/v2/top-headlines?' +
    'country=se&' +
    'apiKey=e0e91470dcc64a59bdd0c36ed17c41bf';
  useEffect(() => {
    const req = new Request(url);
    setLoading(true);
    fetch(req)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
    setLoading(false);
  }, []);

  return (
    <div
      style={{
        marginTop: 20,
        background: 'white',
        width: 500,
        overflowX: 'hidden',
        overflowY: 'auto',
        height: '78vh',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 15,
        boxShadow: '0px 0px 10px 1px #e0e0e0',
      }}
    >
      {loading ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ClipLoader color={'grey'} loading={loading} size={25} />
        </div>
      ) : (
        <div>
          {news?.map((article) => (
            <div style={{ marginBottom: 15 }}>
              <h3>{article.title}</h3>
              <p>{article?.description}</p>
              <p>
                <a href={article.url}></a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
