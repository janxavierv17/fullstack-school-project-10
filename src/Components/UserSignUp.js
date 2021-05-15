import React from "react";

export default class UserSignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        errors: [],
    };


    render() {
        console.log(this.state)
        const {
            firstName,
            lastName,
            emailAddress,
            password,
            confirmPassword,
            errors,
        } = this.state;

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

    handleSubmit = (event) => {
        event.preventDefault();
        const { context } = this.props
        const { firstName, lastName, emailAddress, password } = this.state;

        // ES6 Destructuring. This variable creates an object to pass to our createUser method.
        const user = {
            firstName,
            lastName,
            emailAddress,
            password
        }

        context.data.createUser(user)
            .then(errors => {
                if (errors.length) {
                    this.setState({ errors });
                } else {
                    context.actions.signIn(emailAddress, password).then(() => {
                        this.props.history.push("/")
                    })
                    console.log(`${user.firstName} is successfully signed up and authenticated.`)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    // onChange Handler
    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => {
            return {
                [name]: value,
            };
        });
    };
}

