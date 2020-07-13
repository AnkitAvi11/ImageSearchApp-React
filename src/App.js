import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';

class App extends Component {

    constructor () {
        super()
        this.state = {
            images : [],
        }
    }

    onSearchSubmit = (term) => {
        axios.get(`https://api.unsplash.com/search/photos`, {
            params : {
                query : term
            },
            headers : {
                Authorization : 'Client-ID wQRPIgrfxWQYX4FMjsKmpBaMtw_mUACKnfmIIRHoF5Y'
            }
        }).then(response => {
            console.log(response.data.results)
            this.setState({images:response.data.results})
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop : "20px"}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found : {this.state.images.length} images
                <ImageList images = {this.state.images}/>
            </div>
        )
    }

}

export default App;