import React from 'react';

class CheckoutItem extends React.Component {
    render(){
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        

        return (
            <div className="summary__option" key={this.props.key}>
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{this.props.selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(this.props.selectedOption.cost)}
                </div>
            </div>
        )
    }
}

export default CheckoutItem;