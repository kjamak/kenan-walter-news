import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectArticle } from "../../features/articleSlice";
import "./article.css";
import noImage from "../ArticleCard/no_image.jpg";

function Article() {
  const article = useSelector(selectArticle);
  const history = useHistory();

  useEffect(() => {
    if (article == null) {
      history.push("/");
    }
  }, []);

  return (
    <div className="article">
      <div
        className="article__image"
        style={{
          backgroundImage:
            article?.urlToImage != null
              ? `url(${article?.urlToImage})`
              : `url(${noImage})`,
        }}
      ></div>
      <h2>{article?.title}</h2>
      <h4>{article?.description}</h4>
      <div className="article__info">
        <div className="article__infoItem">
          <p>Source:&nbsp;</p>
          <p>{article?.source.name}</p>{" "}
        </div>
        <div className="article__infoItem">
          <p>Author:&nbsp;</p> <p>{article?.author}</p>
        </div>
        <div className="article__infoItem">
          <p>Time:&nbsp;</p> <p>{article?.publishedAt.substring(0, 10)}</p>
        </div>
      </div>
      <p>{article?.content}</p>
    </div>
  );
}

export default Article;
