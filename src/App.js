import React, { Component } from "react";
import CryptoCard from "./components/crypto-card";

class App extends Component {
    state = {
        coinData: [
            {
                name: "Bitcoin",
                symbol: "BTC"
            },
            {
                name: "Ethereum",
                symbol: "ETH"
                // image: "/btc.png"
            },
            {
                name: "Litecoin",
                symbol: "LTC"
                // image: "/btc.png"
            }
        ]
    };

    render() {
        return (
            <div>
                {this.state.coinData.map(coin => (
                    <CryptoCard
                        key={coin.name}
                        name={coin.name}
                        symbol={coin.symbol}
                        logo={coin.image}
                    />
                ))}
            </div>
        );
    }
}

export default App;
