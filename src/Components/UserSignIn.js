import React, { useRef } from "react"

export default function UserSignIn(props) {
    const { context } = props

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = () => {
        // context.actions.signIn()
    }

    return (
        <main>
            <div className="form--centered">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" ref={emailRef} />
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" ref={passwordRef} />
                    <button className="button" type="submit">Sign In</button>
                    <button className="button button-secondary" onClick={() => { props.history.push("/") }}>Cancel</button>
                </form>
            </div>
        </main>
    )
}
