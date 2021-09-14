import React, { Component } from 'react';
import styles from './ticker.css'


export default class Ticker extends Component {

    render(){
        console.log(this.props.coin);
        //if(coin.price_change_percentage_24h > 0){

        //}
        var percentChange = ((this.props.coin.price_change_percentage_24h / this.props.coin.current_price) * 100).toString();
        var printChange = percentChange.substring(0, 4) + "%";
        return (
            <div className="ticker">
                <p>{this.props.coin.symbol.toUpperCase()} </p>
                <p>${this.props.coin.current_price} </p>

                {this.props.coin.price_change_percentage_24h < 0 ? (
                    <p className='ticker-percent red'>{this.props.coin.price_change_percentage_24h.toString().substring(0,4)}%</p>
                ) : (
                    <p className='ticker-percent green'>{this.props.coin.price_change_percentage_24h.toString().substring(0,4)}%</p>
                )}

                <p> </p>
            </div>
        );
    }
}