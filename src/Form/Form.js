import React from 'react';
import Feature from '../Feature/Feature';

class Form extends React.Component{
    static defaultProps = { }

    render(){
        const list = Object.keys(this.props.features).map((feature, idx) => <Feature 
            feature={feature} 
            key={feature + ' ' + idx} 
            options={this.props.features[feature]} 
            selected={this.props.selected[feature]} 
            updateFeature={this.props.updateFeature} />)

        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {list}
            </form>
        )
        
    }
}

export default Form;