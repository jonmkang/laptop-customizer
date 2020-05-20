import React from 'react';
import SingleFeature from '../SingleFeature/SingleFeature'

class Feature extends React.Component{
    render(){
        const options = this.props.options.map((item, idx) => 
            <SingleFeature 
                feature={this.props.feature} 
                item={item} key={item + ' ' + idx} 
                updateFeature={this.props.updateFeature} 
                selected={this.props.selected} />
        )

        return (
            <fieldset className="feature" key={this.props.feature + '-' + this.props.idx}>
              <legend className="feature__name">
                <h3>{this.props.feature}</h3>
              </legend>
              {options}
            </fieldset>
        );
    }
}

export default Feature;