import React from 'react';
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

    const mockCard = {
      id: '1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nam placerat mi eget dolor efficitur',
      description: 'Donec ipsum dui, pharetra nec dignissim sit amet, dignissim ac dolor. Nulla facilisi. Cras ut hendrerit nunc. Aenean lobortis congue magna id aliquam. Ut eu odio in ante tincidunt varius at vel sapien.',
      category: 'Programs, Company',
      link: 'http://www.google.com.au',
      featured: false,
      documentSize: '112KB'
    };
    const mockCard2 = { ...mockCard };
    mockCard2.featured = true;
    this.mockCards = [mockCard2, mockCard, mockCard, mockCard, mockCard, mockCard];
  }
  componentDidMount() {
    //call api
  }
  render() {

    const PrintCards = this.mockCards.map((card, index) => {
      return (
        <div key={index} className={`card ${card.featured ? 'featured' : ''}`}>
          <div className="card-inner">
            <h2>
              {card.title}
            </h2>
            {card.featured &&
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
            <div className="arrow-link">
              <ArrowRight />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="cards">
        {PrintCards}
      </div>
    );

  }

}

export default CardsPage;