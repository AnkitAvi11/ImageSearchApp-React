import React, {Component} from 'react';

class SearchBar extends Component {

    state = {
        term : '', 
        placeholder : 'Search keywords here'
    }

    onSearchChange = (event) => {
        this.setState({
            term : event.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form action="" className="ui form" onSubmit = {this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="">Image search</label>
                        <input type="text" name="" id="" autoFocus onChange={this.onSearchChange} value={this.state.term} placeholder={this.state.placeholder.toUpperCase()}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;