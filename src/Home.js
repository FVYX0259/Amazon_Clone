import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img 
        className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="" 
        />
        <div className="home__row">
            <Product 
            id = "6383938"
            title="iQOO Z6 Lite 5G by vivo (Stellar Green, 4GB RAM, 64GB Storage) | World's First Snapdragon 4 Gen 1 | 120Hz Refresh Rate | 5000mAh Battery | Travel Adapter to be Purchased Separately"
            price={14.74}
            image="https://m.media-amazon.com/images/I/4105IiC5tDL._SY300_SX300_.jpg"
            rating={5}/>
            <Product 
            id = "51278136"
            title="Vibez by Lifelong Ornate Smartwatch For Women with HD Display|Body Temprature |24x7 Heart Rate & SpO2 Tracking|8 Sports Mode|Sleep Monitor|IP67|7 days Battery Backup (VBSWW450, 1 Year Manufacturer Warranty, Gold)"
            price={50.670}
            image="https://m.media-amazon.com/images/I/71YcPlrli5L._UX522_.jpg"
            rating={4}/>
        </div>
        <div className="home__row">
        <Product 
            id = "53728928"
            title="Samsung 28 L Convection Microwave Oven with Moisture Sensor (MC28A5145VK/TL, Black, SlimFry)"
            price={700.40}
            image="https://m.media-amazon.com/images/I/31RGWO6V5iL._SX342_SY445_.jpg"
            rating={3}/>
            <Product 
            id = "8236873"
            title="Samsung Galaxy Buds Live Bluetooth Truly Wireless in Ear Earbuds with Mic, Upto 21 Hours Playtime, Mystic Black"
            price={1000}
            image="https://m.media-amazon.com/images/I/61G5JoU9tTL._SX522_.jpg"
            rating={5}/>
            <Product 
            id = "123452411"
            title="Lalhaveli Mosaic Glass Tealight Candle Holders for Home Decoration Outdoor Indoor Decor Light 1 Piece"
            price={500}
            image="https://m.media-amazon.com/images/I/61273AWlxLL._SX569_.jpg"
            rating={4}/>
        </div>
        <div className="home__row">
        <Product 
        id = "123451"
            title="Dell Vostro 3401 Intel i3-1115G4 Laptop, 8GB DDR4, 256GB SSD, 14 Inches(35cm) FHD Display, Integrated Graphics, Windows 10 + MSO, Black (D552190WIN9BE), 1.59Kg"
            price={41500}
            image="https://m.media-amazon.com/images/I/6159jl0NvnL._SX679_.jpg"
            rating={4}/>
        </div>
      </div>
    </div>
  )
}

export default Home
