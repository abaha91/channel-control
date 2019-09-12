import React from 'react';

class Content extends React.Component {

    render () {
        return (
            <main className='main--content-wrapper'>
                <section className="advertise--list-block">
                    <div className="postInfo">
                        <div className="postDate">25.05.2019</div>
                        <div className="postItem">
                            <p className="name">Елена</p>
                            <p className="price info">Стоимость: <b>1500</b></p>
                            <p className="post info">Пост: <span className="postIndicator">+</span></p>
                            <p className="payment info">Оплата: <span className="paymentIndicator">+</span></p>
                        </div>
                        <div className="postItem">
                            <p className="name">Елена</p>
                            <p className="price info">Стоимость: <b>1500</b></p>
                            <p className="post info">Пост: <span className="postIndicator">+</span></p>
                            <p className="payment info">Оплата: <span className="paymentIndicator">+</span></p>
                        </div>
                    </div>
                    <div className="postInfo">
                        <div className="postDate">25.05.2019</div>
                        <div className="postItem">
                            <p className="name">Елена</p>
                            <p className="price info">Стоимость: <b>1500</b></p>
                            <p className="post info">Пост: <span className="postIndicator">+</span></p>
                            <p className="payment info">Оплата: <span className="paymentIndicator">+</span></p>
                        </div>
                        <div className="postItem">
                            <p className="name">Елена</p>
                            <p className="price info">Стоимость: <b>1500</b></p>
                            <p className="post info">Пост: <span className="postIndicator">+</span></p>
                            <p className="payment info">Оплата: <span className="paymentIndicator">+</span></p>
                        </div>
                    </div>
                </section>
                <section className="advertise--list-block"></section>
            </main>
        );
    }

}

export default Content;
