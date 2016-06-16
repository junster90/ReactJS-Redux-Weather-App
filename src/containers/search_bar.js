import React, { Component } from 'react';
import connect from 'react-redux';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ""
    };

    this._onInputChange = this._onInputChange.bind(this)
  }

  _onInputChange(event){
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <form className="input-group">
        <input className="form-control" type="text" placeholder="Get a 5 day forecase in your favorite cities" value={this.state.term} onChange={this._onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
