import React from "react";

class CartItem extends React.Component {
    constructor () {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.this.increaseQuantity.bind(this);
    }

    increaseQuantity = () => {
        console.log('this.state', this.state)
    }
    render () {
        const { price, title, qty } = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: '#777' } }>Rs: {price}</div>
                    <div style={ { color: '#777' } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            onClick={this.increaseQuantity}
                            src="https://cdn-icons-png.flaticon.com/512/10302/10302634.png" 
                            alt="increase" 
                            className="action-icons" />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/1665/1665765.png" 
                            alt="decrease" 
                            className="action-icons" />
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/6096/6096937.png" 
                            alt="delete" 
                            className="action-icons" />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;