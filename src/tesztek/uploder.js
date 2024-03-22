// Fooldalimg.js
import React, { Component } from 'react';
import axios from 'axios';

class Fooldalimg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageList: []
        };
    }

    componentDidMount() {
        axios.get('tesztek/kepToltes.php')
            .then(response => {
                this.setState({ imageList: response.data });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        return (
            <div>
                <h1>Images from PHP directory:</h1>
                
                <ul>
                  <br/>
                    {this.state.imageList.map((imageName, index) => (
                        <li key={index}>
                            <img src={`../kep/${imageName}`} alt={imageName} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Fooldalimg;
