import { BsFillChatSquareDotsFill, BsLockFill } from "react-icons/bs";
import {BiWorld} from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import classes from './index.module.css'

const SignUp = () => {
    return (
        <div className={classes.signUp}>
            <div className={classes.left}>
                <a href="/" className={classes.logo}>
                    <img className={classes.logo_img} src='/images/signIn/logo 1.png' />
                </a>
                <div className={classes.body}>
                    <div className={classes.title}>
                        Sign Up
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
                    <div className={classes.full_name}>
                        <div className={classes.first_field}>
                            <div className={classes.first_name_field}>
                                <FaUserAlt />
                                <div className={classes.first_name}>
                                    First Name
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input className={classes.first_input} type="text" placeholder="Jon" />
                            </div>
                        </div>
                        <div className={classes.first_field}>
                            <div className={classes.first_name_field}>
                                <FaUserAlt />
                                <div className={classes.first_name}>
                                    Last Name
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input className={classes.first_input} type="text" placeholder="Doe" />
                            </div>
                        </div>
                    </div>
                    <div className={classes.country}>
                        <div className={classes.country_field}>
                            <div className={classes.first_name_field}>
                                <BiWorld />
                                <div className={classes.country_name}>
                                    Country of Residence
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input className={classes.first_input} type="text" placeholder="Doe" />
                            </div>
                        </div>
                        <div className={classes.country_field}>
                            <div className={classes.first_name_field}>
                                <FaUserAlt />
                                <div className={classes.country_name}>
                                    Zip/Postal Code
                                </div>
                            </div>
                            <div className={classes.first_name_input}>
                                <input className={classes.first_input} type="text" placeholder="Doe" />
                            </div>
                        </div>
                    </div>
                    
                    <div className={classes.btn_field}>
                        <button className={classes.signUp_btn}>Sign Up</button>
                    </div>
                    <div className={classes.comment}>
                        By continuing past this page, you agree to the <span className={classes.font_red}>Terms of Use</span> and understand that information will be used as described in our <sapn className={classes.font_red}>Privacy Policty.</sapn>
                    </div>
                    <div className={classes.signUp_field}>
                        Had a account? <a href='/signIn' className={classes.footer_signUp_btn}>Sign In</a>
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <div className={classes.right_bgField}>
                    <img className={classes.right_bg} src='/images/signIn/Group 89.png' />
                </div>                
                <div className={classes.rigth_body}>
                    <div className={classes.rigth_title}>
                        Your All-Access Pass
                    </div>
                    <div className={classes.right_text}>
                        This is it - millions of live events. Up to the minute alerts for your favorite artists and teams and, of course, always safe, secure ticketing.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp