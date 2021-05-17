import React, { Component } from "react";

export default class UserSignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        errors: [],
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { context } = this.props;
        const { firstName, lastName, emailAddress, password, confirmedPassword } = this.state;
        const user = { firstName, lastName, emailAddress, password, confirmedPassword };

        context.data.createUser(user)
            .then(errors => {
                if (errors.length) {
                    this.setState({ errors });
                } else {
                    console.log(`${emailAddress} is successfully signed up and authenticated!`);
                    context.actions.signIn(emailAddress, password)
                        .then((user) => {
                            if (user === null) {
                                this.setState(() => {
                                    return { errors: ["User unable to login"] }
                                })
                            } else {
                                this.props.history.push('/')
                            }
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                this.props.history.push('/error');
            })
    }

    // onChange Handler
    handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;

        this.setState(() => {
            return {
                [name]: value,
            };
        });
    };

    render() {
        const { firstName, lastName, emailAddress, password, confirmPassword, errors, } = this.state;

        return (
            <main>
                <div className="form--centered">
                    <h2>Sign Up</h2>
                    {errors && errors.length > 0
                        ? <div className="validation--errors">
                            <h3>Validation Errors</h3>
                            {errors}
                        </div>
                        : null
                    }
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="firstName"> First Name </label>
                        <input id="firstName" name="firstName" type="text" onChange={this.handleChange} value={firstName} />

                        <label htmlFor="lastName" > Last Name </label>
                        <input id="lastName" name="lastName" type="text" onChange={this.handleChange} value={lastName} />

                        <label htmlFor="emailAddress"> Email Address </label>
                        <input id="emailAddress" name="emailAddress" type="email" onChange={this.handleChange} value={emailAddress} />

                        <label htmlFor="password"> Password </label>
                        <input id="password" name="password" type="password" onChange={this.handleChange} value={password} />

                        <label htmlFor="confirmPassword"> Confirm Password </label>
                        <input id="confirmPassword" name="confirmPassword" type="password" onChange={this.handleChange} value={confirmPassword} />

                        <button className="button" type="submit"> Sign Up </button>
                        <button className="button button-secondary" onClick={() => { this.props.history.push("/") }}> Cancel </button>
                    </form>
                </div>
            </main>
        )
    }
}

