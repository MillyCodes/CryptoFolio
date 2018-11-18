import React, { Component } from 'react'
import axios from 'axios'

const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class Search extends Component {
    state = {
        query: '',
        results: []
    }

    getInfo = () => {
        axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
            .then(({ data }) => {
                this.setState({
                    results: data.data // MusicGraph returns an object named data, 
                    // as does axios. So... data.data                             
                })
            })
    }

    render() {
        return (
            <form className="searchbar">
                <input
                    title="Search" placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default Search
