import React, { useState } from "react";
import "./navbar.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./walter_logo.png";

import { useDispatch, useSelector } from "react-redux";
import {
  changeParam,
  changeValue,
  selectSearch,
  setGoBack,
} from "../../features/searchSlice";
import { Link, useHistory } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const [param, setParam] = useState("");
  const history = useHistory();

  const startSearch = (e) => {
    e.preventDefault();
    dispatch(changeParam(param));
    dispatch(setGoBack(true));
    history.push("/");
  };

  const showSearch = () => {
    if (search) {
      dispatch(changeValue(false));
    } else {
      dispatch(changeValue(true));
    }
  };

  return (
    <>
      <Container fluid className="navbar">
        <Container className="navbar__content">
          <Link to="/">
            <img src={logo} alt="walter-logo" className="navbar__logo" />
          </Link>
          <button className=" d-sm-none  navbar__button" onClick={showSearch}>
            <i className="  material-icons ">search</i>
          </button>

          <form
            onSubmit={startSearch}
            className="navbar__search d-none d-sm-flex"
          >
            <input
              type="text"
              placeholder="Search Articles"
              value={param}
              onChange={(e) => setParam(e.target.value)}
            />
            <button type="submit" className="navbar__button  ">
              <i className="material-icons ">search</i>
            </button>
          </form>
        </Container>
      </Container>

      <Container className="navbar__mobile">
        {/* Search Bar for less than 768px*/}
        <Row>
          {search ? (
            <Col>
              <form className="navbar__search d-sm-none" onSubmit={startSearch}>
                <input
                  type="text"
                  placeholder="Search Articles"
                  style={{ flex: 1 }}
                  value={param}
                  onChange={(e) => setParam(e.target.value)}
                />
                <button type="submit" className="navbar__mobileButton ">
                  <i className="material-icons ">search</i>
                </button>
              </form>
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Container>
      {/* end of search bar for 768px*/}
    </>
  );
}

export default NavBar;
