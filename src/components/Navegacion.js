import React from "react";
import { Link } from "react-router-dom";
import Compartir3 from "../assets/images/compartir.jpg";
import Mate3 from "../assets/images/mate.jpg";
import Polvo3 from "../assets/images/polvo.jpg";
import Termo3 from "../assets/images/termo.jpg";
import Yerba3 from "../assets/images/yerba.jpg";

function Navegacion() {
  return (
  <div>
    <Link to="/Compartir">
      <figure>
        <img src={Compartir3} alt="" />
        <figcaption>Compartir</figcaption>
      </figure>
    </Link>
    <Link to="/Mate">
      <figure>
        <img src={Mate3} alt="" />
        <figcaption>Mate</figcaption>
      </figure>
    </Link>
    <Link to="/Polvo">
      <figure>
        <img src={Polvo3} alt="" />
        <figcaption>Polvo</figcaption>
      </figure>
    </Link>
    <Link to="/Termo">
      <figure>
        <img src={Termo3} alt="" />
        <figcaption>Termo</figcaption>
      </figure>
    </Link>
    <Link to="/Yerba">
      <figure>
        <img src={Yerba3} alt="" />
        <figcaption>Yerba</figcaption>
      </figure>
    </Link>
  </div>
  );
}

export default Navegacion;
