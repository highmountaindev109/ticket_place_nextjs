import { BsFillChatSquareDotsFill, BsLockFill } from "react-icons/bs";
import classes from './index.module.css'

const SignIn = () => {
    return (
        <div className={classes.signIn}>
            <div className={classes.left}>
                <a href="/" className={classes.logo}>
                    <img className={classes.logo_img} src='/images/signIn/logo 1.png' />
                </a>
                <div className={classes.body}>
                    <div className={classes.title}>
                        Sign In
                    </div>
                    <div className={classes.input_field}>
                        <div className={classes.name_field}>
                            <BsFillChatSquareDotsFill color="#373F51" />
                            <div className={classes.name}>
                                Email Address
                            </div>
                        </div>
                        <input type="text" placeholder='yourgmail123@gmail.comn' className={classes.input} />
                    </div>
                    <div className={classes.input_field}>
                        <div className={classes.name_field}>
                            <BsLockFill color="#373F51" />
                            <div className={classes.name}>
                                Enter password
                            </div>
                        </div>
                        <input type="text" placeholder='Enter password' className={classes.input} />
                    </div>
                    <div className={classes.forgotPassword_field}>
                        <div className={classes.remember_field}>
                            <input type="checkbox" className={classes.checkBox} />
                            <div className={classes.remember_name}>Remember Me</div>
                        </div>
                        <a className={classes.forgot_name}>Forgot Password?</a>
                    </div>
                    <div className={classes.btn_field}>
                        <button className={classes.signIn_btn}>Sign in</button>
                    </div>
                    <div className={classes.comment}>
                        By continuing past this page, you agree to the <span className={classes.font_red}>Terms of Use</span> and understand that information will be used as described in our <sapn className={classes.font_red}>Privacy Policty.</sapn>
                    </div>
                    <div className={classes.signUp_field}>
                        don't have a account? <a href='/signUp' className={classes.footer_signUp_btn}>Sign up</a>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.right_bgField}>
                    <img className={classes.right_bg} src='/images/signIn/Group 89.png' />
                </div>                
                <div className={classes.rigth_body}>
                    <div className={classes.rigth_title}>
                        Welcome Back
                    </div>
                    <div className={classes.right_text}>
                        Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn