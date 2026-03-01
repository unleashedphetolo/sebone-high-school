import React from 'react';
import "../../styles/principal.css";

export default function Principal() {
  return (
    <section className="principal">
      <div className="container principal-inner">
        <div className="principal-text">
          <h2>From Our Principal</h2>
          <p>Welcome to M.O.M Sebone Secondary School. It is with great pleasure that I welcome you to M.O.M Sebone Secondary School. As your visionary Principal, Leadership starts with me, our SGB and our SMT. In this era of 4th Industrial revolution, we have taken a decision as a school to digitally transform and leverage technology to do more in order to seek better performance in all areas. Our school would not be left behind and we are therefore on a digital transformation journey and this requires the support, contribution, encouragement and participation of everyone.</p>
          <p className="sign">- Mr T. Sebone</p>
        </div>
        <div className="principal-photo">
          <img src="/images/principal.jpg" alt="principal" />
        </div>
      </div>
    </section>
  );
}
