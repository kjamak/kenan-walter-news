import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changeArticle } from "../../features/articleSlice";
import noImage from "./no_image.jpg";
import "./articlecard.css";

function ArticleCard({ title, image, description, article }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const setArticle = () => {
    dispatch(changeArticle(article));
    history.push("/article");
  };

  return (
    <div className="articlecard">
      <div
        className="articlecard__image"
        style={{
          backgroundImage: image != null ? `url(${image})` : `url(${noImage})`,
        }}
      ></div>
      <h4>{title}</h4>
      <p>{description?.substring(0, 150)}...</p>
      <button onClick={setArticle}>Read Full Article</button>
    </div>
  );
}

export default ArticleCard;
