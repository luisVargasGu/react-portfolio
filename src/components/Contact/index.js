import './index.scss';

const Contact = () => {
    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>
                    I am interested in all things coding related - especially
                    architectural design, web development, and data science.
                    If you have any questions or would like to work together,
                    don't hesitate to reach out!
                </p>
                <div className='contact-form'>
                    <form>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required>
                                </input>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required>
                                </input>
                            </li>
                            <li>
                                <input type='text' name='subject' placeholder='Subject' required>
                                </input>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' value='SEND' className='flat-button'></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
