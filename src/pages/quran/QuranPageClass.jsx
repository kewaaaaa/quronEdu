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
      laoding: false,
    };
  }

  componentDidMount() {
    this.setState({ laoding: true });
    axios.get("http://api.alquran.cloud/v1/quran/ar.alafasy").then((res) => {
      const surahs = res.data.data.surahs;
      this.setState({ surahs: surahs, laoding: false });
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
