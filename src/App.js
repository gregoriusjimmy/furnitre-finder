import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/search-field/search-field.component';
import { CheckboxStyles } from './components/checkbox-styles/checkbox-styles.component';
import { CheckboxDeliveryTime } from './components/checkbox-delivery-time/checkbox-delivery-time.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      furnitureStyles: [],
      searchByName: '',
      searchByFurnitureStyles: [],
      deliveryTime: ['1 week', '2 weeks', '1 month', '2 months'],
      searchByTimeDelivery: [],
      displayedProduct: [],
    };
  }

  componentDidMount() {
    fetch('https://www.mocky.io/v2/5c9105cb330000112b649af8')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          products: data.products,
          furnitureStyles: data.furniture_styles,
        })
      );
  }

  handleChangeName = (e) => {
    this.setState({ searchByName: e.target.value });
  };

  filterProducts = () => {
    const {
      products,
      searchByName,
      searchByFurnitureStyles,
      searchByTimeDelivery,
    } = this.state;
    let styles = searchByFurnitureStyles;
    let convertedTimeDelivery = searchByTimeDelivery.length ? 0 : 111;
    searchByTimeDelivery.forEach((deliveryTime) => {
      if (deliveryTime === '1 week') {
        convertedTimeDelivery += 7;
      } else if (deliveryTime === '2 weeks') {
        convertedTimeDelivery += 14;
      } else if (deliveryTime === '1 month') {
        convertedTimeDelivery += 30;
      } else {
        convertedTimeDelivery += 60;
      }
    });

    const displayedProduct = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchByName.toLowerCase()) &&
        styles.every((style) => product.furniture_style.includes(style)) &&
        product.delivery_time <= convertedTimeDelivery
      );
    });

    return displayedProduct;
  };
  handleChangeCheckboxStyle = (e) => {
    let currentStyles = this.state.searchByFurnitureStyles;
    if (e.target.checked) {
      currentStyles.push(e.target.value);
    } else {
      currentStyles = currentStyles.filter((style) => style !== e.target.value);
    }
    this.setState({ searchByFurnitureStyles: currentStyles });
  };
  handleChangeCheckboxDeliveryTime = (e) => {
    let currentDeliveryTime = this.state.searchByTimeDelivery;
    if (e.target.checked) {
      currentDeliveryTime.push(e.target.value);
    } else {
      currentDeliveryTime = currentDeliveryTime.filter(
        (deliveryTime) => deliveryTime !== e.target.value
      );
    }
    this.setState({ searchByTimeDelivery: currentDeliveryTime });
  };

  render() {
    const { searchByName } = this.state;
    const filteredProducts = this.filterProducts();

    return (
      <div className='App'>
        <SearchField
          palceholder={searchByName}
          handleChange={this.handleChangeName}
        />
        <CheckboxStyles handleChange={this.handleChangeCheckboxStyle} />
        <CheckboxDeliveryTime
          handleChange={this.handleChangeCheckboxDeliveryTime}
        />
        <CardList products={filteredProducts} />
      </div>
    );
  }
}

export default App;
