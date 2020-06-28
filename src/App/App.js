import React from 'react';
import SelectList from '../Components/SelectList'
import apple from "../img/apple.png"
import berries from '../img/berries.png'
import grapefruit from '../img/grapefruit.png'
import pineapple from '../img/pineapple.png'
import buy from '../img/BUY.png'


function App() {
  return (
      <section className="products products-option">
        <div className="container">
          <div className="products-wrapper">
            <div className="products__title">CASSA</div>
            <div className="products__items">
              <div className="products__item">
                <div className="products__item-title">PINEAPPLE</div>
                <div className="products__item-img products__price">
                  <img className="img" src={pineapple} alt="pineapple"/>
                    <div className="products__price-wrapper">
                      <div className="products__price-items">
                        <div className="products__price-title">OFFERTA LIMITATA -50%</div>
                        <div className="products__price-subtitle">$8.50 <span className="discount-price">19.00$</span></div>
                        <div className="item-price">
                            <SelectList />
                          <div className="item-price__buy">
                            <div className="item-price__buy-wrapper">
                              <img className="item-price__buy-img" src={buy} alt="buy"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
              <div className="products__item">
                <div className="products__item-title"> berries</div>
                <div className="products__item-img">
                  <img className="img" src={berries} alt="berries"/>
                  <div className="products__price-wrapper">
                    <div className="products__price-items">
                      <div className="products__price-title">OFFERTA LIMITATA -50%</div>
                      <div className="products__price-subtitle">$8.50 <span className="discount-price">19.00$</span></div>
                      <div className="item-price">
                        <SelectList />
                        <div className="item-price__buy">
                          <div className="item-price__buy-wrapper">
                            <img className="item-price__buy-img" src={buy} alt="buy"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products__item">
                <div className="products__item-title">grapefruit</div>
                <div className="products__item-img">
                  <img className="img" src={grapefruit} alt="grapefruit"/>
                  <div className="products__price-wrapper">
                    <div className="products__price-items">
                      <div className="products__price-title">OFFERTA LIMITATA -50%</div>
                      <div className="products__price-subtitle">$8.50 <span className="discount-price">19.00$</span></div>
                      <div className="item-price">
                        <SelectList />
                        <div className="item-price__buy">
                          <div className="item-price__buy-wrapper">
                            <img className="item-price__buy-img" src={buy} alt="buy"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products__item">
                <div className="products__item-title">APPLE</div>
                <div className="products__item-img">
                  <img className="img" src={apple} alt="apple"/>
                  <div className="products__price-wrapper">
                    <div className="products__price-items">
                      <div className="products__price-title">OFFERTA LIMITATA -50%</div>
                      <div className="products__price-subtitle">$8.50 <span className="discount-price">19.00$</span></div>
                      <div className="item-price">
                        <SelectList />
                        <div className="item-price__buy">
                          <div className="item-price__buy-wrapper">
                            <img className="item-price__buy-img" src={buy} alt="buy"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default App;
