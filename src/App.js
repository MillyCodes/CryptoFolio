import React, { Component } from "react";
import CryptoCard from "./components/crypto-card";
import Search from "./components/search"


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

    constructor(props) {
        super(props);
        console.log(props);
        console.log("App - Constructor");
    }

    componentDidMount() {
        setInterval(this.pollPrice, 10000);
    }

    handlepollPrice() {
        console.log("polling for new price");
        const { symbol } = this.state;
        fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=${symbol},USD`
        )
            .then(resp => resp.json())
            .then(json => {
                this.setState(prevState => ({
                    price: json.USD,
                    lastPrice:
                        prevState.price !== json.USD
                            ? prevState.price
                            : prevState.lastPrice
                }));
            });
    }

    handlepriceChange(lastPrice, price) {
        const diff = lastPrice - price;
        const change = diff / lastPrice;
        const percent = change * 100;
        return (change === -Infinity ? 0 : percent).toFixed(3);
    }

    render() {
        return (
            <div>
                <Search />
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
