import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import s from "./quranStyle.module.scss";
import Laoding from "../../components/laoding/Laoding";

export class QuranPageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      surahs: [],
      laoding: true,
    };
  }

  componentDidMount() {
    axios
      .get("https://api.alquran.cloud/v1/quran/ar.alafasy")
      .then((res) => {
        const surahs = res.data.data.surahs;

        this.setState({ surahs: surahs, laoding: false });
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        window.location.href = "errorPage.html"
      });
  }
  render() {
    return (
      <div className={s.cards + " container"}>
        {this.state.laoding ? (
          <Laoding />
        ) : (
          this.state.surahs.map((prod, key) => (
            <Link
              key={prod.nuber}
              to={`/posts/${prod.number}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className={s.card}>
                <span key={prod.nuber}>{prod.number}</span> {prod.englishName}
              </div>
            </Link>
          ))
        )}
      </div>
    );
  }
}

export default QuranPageClass;
