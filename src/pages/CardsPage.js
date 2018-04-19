import React from 'react';
import CardsService from '../services/CardsService';
import '../scss/cards.scss';
import ArrowRight from '../../svg/arrow-right.svg';
import ArrowDown from '../../svg/arrow-down.svg';
import DocumentIcon from '../../svg/document.svg';


class CardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }
  componentDidMount() {
    CardsService.getCards()
      .then(data => {
        this.setState({ cards: data.items });
        console.log(this.state.cards);
      });
  }
  render() {
    const { cards } = this.state;

    const PrintCards = cards.map((card, index) => {
      const cardFeatured = card.featured === 'true';
      return (
        <div key={index} className={`card ${cardFeatured ? 'featured' : ''}`}>
          <div className="card-inner">
            <h1 className="card-title">
              {card.title}
            </h1>
            {cardFeatured &&
              <p>
                {card.description}
              </p>
            }
            {card.documentSize &&
              <div className="download-link">
                <DocumentIcon />
                <span>PDF ({card.documentSize})</span>
              </div>
            }
            <a href={card.link} target="_blank">
              <div className="arrow-link">
                {card.documentSize ? <ArrowDown /> : <ArrowRight />}
              </div>
            </a>
          </div>
        </div>
      );
    });

    if (cards.length) {
      return (
        <div className="cards">
          {PrintCards}
        </div>
      );
    } else {
      return (
        <p className="text-center">Loading...</p>
      );
    }

  }

}

export default CardsPage;