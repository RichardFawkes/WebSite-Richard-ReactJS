import React from 'react';
import emailjs from 'emailjs-com';
import './contact.css';




export default function ContactUs() {

    function handleClick(e) {
        alert('Email enviado com sucesso!.');
      }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_unwkzbo', 'template_8x0hctx', e.target, 'user_KfgjeRuATC8yMbI6chlki')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      handleClick();
  }

  return (
   
<div class="container" data-animate-effect="fadeInLeft">
				
				<div class="row">
					<div class="container">
						<h2 className="entrecontato">  ENTRE EM CONTATO </h2>
					</div>
          
				</div>
        <br /><br />
				<form className="contact-form container card text-center col-lg-10" onSubmit={sendEmail}>

<div class="form container">
  <input type="text" name="user_name" autocomplete="off" required />
  <label for="text" class="label-name">
    <span class="content-name">
    Nome
    </span>
  </label>
</div>
<div class="form container">
  <input type="email" name="user_email" autocomplete="off" required />
  <label for="text" class="label-name">
    <span class="content-name">
    Email
    </span>
  </label>
</div>
<div className="form container">
  <input  type="text" name="phone"  required />
  <label for="text" class="label-name">
    <span class="content-name">
    Telefone
    </span>
  </label>
  
</div>
<br></br>
<div >
    
  <textarea className="form-group  areatext" placeholder="   Conte-me o que precisa" name="message" required />
  <label for="text" class="label-name">
    <span class="content-name">
    </span>
  </label>
</div>
<button class="container col-lg-4 btn btn-success" type="submit" value="Enviar" >ENVIAR</button>

<br></br>

				
				</form>

                <br></br>
                
			</div>

  );
}