import React, { Component } from 'react';
import './LoadIndicator.css';


const LoadIndicator = (WrappedComponent2) => {

    return class LoadIndicator extends Component {

        render() {
            return (
                <WrappedComponent2 {...this.props} />
            )
        }
    }
}
export default LoadIndicator;