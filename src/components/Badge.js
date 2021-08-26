import React from 'react';

import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  //define cual va ser el resultado que vamos a ver en pantalla.
  render() {
    return (
      
      <article className="Badge">
        <header className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </header>

        <section className="Badge__section-name">
          <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </section>

        <section className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <p>@{this.props.twitter}</p>
        </section>

        <footer className="Badge__footer">#platziconf</footer>
      </article>
    );
  }
}

export default Badge;
