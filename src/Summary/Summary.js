import React from 'react';
import CheckoutItem from '../CheckoutItem/CheckoutItem'

class Summary extends React.Component{
    static defaultProps = { }

    render(){
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        );

        const summaryOfItems = Object.keys(this.props.selected).map((feature, idx) =>
        <CheckoutItem 
            feature={feature}
            key={feature + ' ' + idx}
            selectedOption = {this.props.selected[feature]}
            />)

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summaryOfItems}
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {total}
                </div>
                </div>
            </section>
        )
    }
}

export default Summary;