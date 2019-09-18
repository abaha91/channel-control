import React from 'react';
import AppContext  from 'Context/AppContext/AppContext';
import './Forms.css';

class Content extends React.Component {



    render () {
        return (
            <AppContext.Consumer>
                {(context: any) => (
                    <main className='main--content-wrapper'>
                        {(!context.isRegistrationProcess && !context.isLoginProcess) &&
                            this.renderAuthorisedContent()
                        }
                        {(context.isRegistrationProcess && !context.isLoginProcess) &&
                            this.renderRegistrationForm()
                        }
                        {(!context.isRegistrationProcess && context.isLoginProcess) &&
                            this.renderAuthForm()
                        }
                    </main>
                )}
            </AppContext.Consumer>
        );
    }

    renderRegistrationForm() {
        return (
            <React.Fragment>
                <form action="" className='auth-form'>
                    <input type="text" className="auth--text-input" name="email" placeholder="Введите email"/>
                    <input type="text" className="auth--text-input" name="name" placeholder="Введите имя"/>
                    <input type="text" className="auth--text-input" name="password" placeholder="Введите пароль"/>
                    <input type="submit" className="auth--submit-button" value="Зарегистрироваться"/>
                </form>
            </React.Fragment>
        )
    }

    renderAuthForm() {
        return (
            <React.Fragment>
                авторизация
            </React.Fragment>
        )
    }


    renderAuthorisedContent() {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }

}

export default Content;
