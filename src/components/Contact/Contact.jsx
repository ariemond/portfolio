import {React, useState, useEffect} from 'react';
import './contact.scss';
import superb from 'superb';
import emailjs from 'emailjs-com';
import Typing from 'react-typing-animation';

function Contact() {
    const [drop, setDrop] = useState(false);
    const [send, setSent] = useState(false);
    const [superbWord, setSuperb] = useState("superb");
    const date = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const day = weekday[date.getDay()];

    useEffect(() => {
        setInterval(() => {
            setSuperb(superb.random())
        }, 7000);
    }, []);

    
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_xq550hn', 'template_tu5s009', e.target, 'user_HKD83RT49yxmPpOLFBAwp')
          .then((result) => {
              console.log(result.text);
            setDrop(true);
            setSent(true);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };
    
    return (
        <section className="contact" id="contact">
            <div className={drop === true ? 'div drop' : ''}></div>
            <div className={drop === true ? 'div wave' : ''}></div>
            <div className="contact__headers">
                <h2 className="contact__title">{send === false ? `Let's chat...` : 'Thanks for...'}</h2>
                <h2 className="contact__title">{send === false ? 'Drop me a line.' : 'Dropping by.'}</h2>
            </div>
            <div className="contact__form-div">
                <form onSubmit={sendEmail} className="contact__form">
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Name" 
                        className="contact__input"/>
                    <input  
                        name="email" 
                        type="text" 
                        placeholder="Email" 
                        className="contact__input"/>
                    <textarea 
                        wrap="hard"
                        name="message" 
                        className="contact__input" 
                        placeholder="Message"/>
                    <button type="submit" className="contact__button">{send === false ? 'SEND' : 'SENT!'}</button>
                </form>
            </div>
            <div className="contact__superb">
                <div className="contact__superb-text">Hope your {day} is 
                    <Typing loop={true} delay={3000} speed={50}>
                    <span>{superbWord}!</span>
                    <Typing.Backspace count={200} delay={2000}/>
                    <Typing.Reset delay={1000}/>
                    </Typing>
                </div>
            </div>
        </section>
    )
}

export default Contact
