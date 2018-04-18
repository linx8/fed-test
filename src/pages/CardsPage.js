import React from 'react';
import '../scss/cards.scss';

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
                PDF ({card.documentSize})
              </div>
            }
            <div className="arrow-link">
              >
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