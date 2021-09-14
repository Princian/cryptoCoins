import React, { Component } from 'react';
import Ticker from './Ticker.js'
import footerStyles from './footerStyles.css';

export default class Footer extends Component {
    

    render(){
        var stocks = this.props.coins;
        if (JSON.stringify(this.props.coins[0]) == null){
            console.log("waiting for data...");
            return(
                <div></div>
            );
        }
        var names = "";
        this.props.coins.forEach(coin => {
            names += coin.id + " ";
        });
        //Object.keys(this.props.coins[0]).forEach((key) => { console.log(key);});
        return(
            <div className="footer">
                {this.props.coins.map(coin => {
                    return(
                        <Ticker coin={coin}/>
                    );
                })}
            </div>
        )
    }
}