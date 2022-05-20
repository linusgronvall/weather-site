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
        marginLeft: 50,
        background: 'white',
        width: 500,
        overflowX: 'hidden',
        overflowY: 'auto',
        height: '80vh',
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 10,
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
          <h2 style={{ marginBottom: 5 }}>Nyheter, {}</h2>
          {news?.map((article) => (
            <div
              style={{
                marginBottom: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <h3>{article?.title}</h3>
              <p>{article?.description}</p>
              <p
                style={{ marginTop: 6 }}
                onMouseOver={(e) => {
                  e.target.style.color = 'rgb(70, 70, 70)';
                  e.target.style.transition = '0.3s';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'black';
                }}
              >
                <a
                  href={article?.url}
                  target='_blank'
                  style={{
                    textDecoration: 'underline',
                    color: 'black',
                  }}
                >
                  Läs hela artikeln
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
