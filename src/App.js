import React, { Component } from "react";
import CryptoCard from "./components/crypto-card";

class App extends Component {
    state = {
        coinData: [
            {
                id: 1,
                name: "Bitcoin",
                symbol: "BTC"
            },
            {
                id: 2,
                name: "Ethereum",
                symbol: "ETH"
                // image: "/btc.png"
            },
            {
                id: 3,
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
                        key={coin.id}
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
