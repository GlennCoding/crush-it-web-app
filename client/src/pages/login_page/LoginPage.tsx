import React, { useContext, useState } from 'react'
import styles from './LoginPage.module.scss'
import { Link } from 'react-router-dom'
import ButtonBackLarge from '../../components/button_back_large/ButtonBackLarge'
import LoginForm from './login_form/LoginForm'
import { TokenContext } from '../../context/token_context'

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.buttonBackWrapper}>
                <ButtonBackLarge linkDirection="/landing-page" />
            </div>
            <h1 className={styles.pageHeader}>Login</h1>
            <p className={styles.createAccountNotice}>
                New here? <Link to="/register">Create an account</Link>.
            </p>
            <LoginForm  />
        </div>
    )
}
export default LoginPage
