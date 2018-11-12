import React, { Component } from "react";
import "./App.css";
import axios from "axios";
var NumberFormat = require("react-number-format");

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cryptos: []
        };
    }

    componentDidMount() {
        axios
            .get(
                "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,VEN,PRL,SUB,DASH&tsyms=USD,BTC"
            )

            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({ cryptos: cryptos });
            });
    }

    render() {
        return (
            <div className="App">
                <div id="crypto-title" class="rounded">
                    <h4>Top Cryptos</h4>
                </div>

                {Object.keys(this.state.cryptos).map(key => (
                    <div
                        key={key.toString()}
                        id="crypto-container"
                        className="rounded"
                    >
                        <span className="left badge badge-pill badge-primary">
                            {key}
                        </span>
                        <span className="right badge badge-pill badge-primary">
                            <NumberFormat
                                value={this.state.cryptos[key].USD}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </span>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;
