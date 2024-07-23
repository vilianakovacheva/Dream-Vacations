import styles from './Register.module.css'

export default function Register() {
    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="john@abv.bg" />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="****" />
                <br />
                <br />
                <label htmlFor="repass">Repeat password:</label>
                <input type="password" id="repass" name="repass" placeholder="****" />
                <br />
                <br />
                <input type="submit" defaultValue="Register" />
            </form>
            <p className={styles.account}>
                Already have an account? <a href="#">Log in</a>
            </p>
        </div>

    );
}