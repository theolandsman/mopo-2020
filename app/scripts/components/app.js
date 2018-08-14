'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { setAppDimensions, getHistoricalData } from '../actions';

class App extends React.Component {
  componentDidMount () {
    this.onResize();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  componentWillMount () {
    this.props.getHistoricalData();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResize);
  }

  onResize (e) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.props.setAppDimensions({ width, height });
  }

  render () {
    return (
      <div className='ds__app'>
        {this.props.children}
      </div>
    );
  }
}
export default connect(null, { setAppDimensions, getHistoricalData })(App);
