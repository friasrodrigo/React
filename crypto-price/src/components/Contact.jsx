import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './styles.css'


export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_id', 'template_id', form.current, {
        publicKey: 'public_key',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
        <section>
            <div className='container'>
                <h2 className='--text--center'>EMAIL</h2>
                <form ref={form} onSubmit={sendEmail}
                className='--form-control --card --flwx-center --dir-column'></form>
                    <input type='text'
                    placeholder='Nombre'
                    name='user_name' required/>
                    <input type='email'
                    placeholder='Email'
                    name='user_email' required/>
                    <input type='text'
                    placeholder='Subject'
                    name='subject' required/>
                    <textarea name='message'
                    cols='30' rows='10'></textarea>
                    <button type='submit' className='--btn--btn--primary'>Enviar Mensaje</button>
        
            </div>
        </section>
  )
}
