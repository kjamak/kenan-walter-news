import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import NavBar from "../../components/NavBar/NavBar";
import { selectGoBack, selectParam } from "../../features/searchSlice";
import { changeSort, selectSort } from "../../features/sortSlice";
import "./homescreen.css";

function HomeScreen() {
  const [fetchedNews, setfetchedNews] = useState([]);
  const [news, setNews] = useState([]);
  const goBack = useSelector(selectGoBack);
  const searchInput = useSelector(selectParam);
  const sort = useSelector(selectSort);
  const [load, setLoad] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchInput !== null) {
      const fethchSearch = async () => {
        const response = await axios.get("/everything", {
          params: {
            q: searchInput,
            sortBy: sort,
            pageSize: 100,
          },
        });
        setfetchedNews(response.data.articles);
        const articles = response.data.articles.slice(0, 18);
        setNews(articles);
      };
      fethchSearch();
    }
    if (searchInput === null) {
      const fetchHeadlines = async () => {
        const response = await axios.get("/top-headlines?country=us", {
          params: {
            pageSize: 100,
          },
        });
        setfetchedNews(response.data.articles);
        const articles = response.data.articles.slice(0, 18);
        setNews(articles);
      };
      fetchHeadlines();
    }
  }, [searchInput, sort]);

  const performBack = () => {
    window.location.href = "/";
  };
  const renderNews = news.map((article) => {
    return (
      <Col sm={12} md={6} xl={4}>
        <ArticleCard
          title={article.title}
          image={article.urlToImage}
          description={article.description}
          article={article}
        />
      </Col>
    );
  });

  const loadMore = () => {
    var moreNews = fetchedNews;
    if (news.length + 18 > fetchedNews.length) {
      setLoad(false);
    } else {
      const snippetNews = moreNews.slice(news.length, news.length + 18);
      const newNews = news.concat(snippetNews);
      setNews(newNews);
    }
  };

  return (
    <>
      <NavBar />

      <Container className="homescreen__content">
        <Row>
          <Col>
            {goBack ? (
              <div className="homescreen__header">
                <div className="homescreen__goback" onClick={performBack}>
                  <i className="  material-icons nav__icon ">arrow_back</i>
                  <div>Go Back</div>
                </div>
                <div className="homescreen__right">
                  <div>Sort by: </div>
                  <select
                    value={sort}
                    onChange={(e) => dispatch(changeSort(e.target.value))}
                    className="homescreen__select"
                  >
                    <option value="relevancy"> Relevance</option>
                    <option value="popularity"> Popularity</option>
                    <option value="publishedAt"> Publish Date</option>
                  </select>
                </div>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row>{renderNews}</Row>
        <div className="d-flex justify-content-center mt-4">
          {load ? (
            <button onClick={loadMore} className="homescreen__loadMore">
              Load More
            </button>
          ) : (
            <p className="homescreen__loadText">No more News 😞</p>
          )}
        </div>
      </Container>
    </>
  );
}

export default HomeScreen;
