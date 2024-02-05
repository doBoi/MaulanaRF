import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pg1rlap', 'template_l1n0tpq', form.current, 'tarG1FcK9dcq6CyAe')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="Contact" className="h-full bg-zinc-500">
      <div className="container  mx-auto py-2">
        <h1 className="text-3xl text-center underline underline-offset-2 font-semibold">Contact</h1>
        <form ref={form} onSubmit={sendEmail} method="get">

          <div className="grid place-content-center my-5">
            <input className=" max-auto sm:w-96 h-10 p-3 bg-gray-300  rounded-md ring ring-gray-300 hover:ring-gray-700 my-5" type="text" placeholder="Name" name="user_name" />

            <input className=" max-auto sm:w-96 h-10 p-3 bg-gray-300  rounded-md ring ring-gray-300 hover:ring-gray-700 my-5" type="email" placeholder="Email" name="user_email" />

            <textarea className="max-auto sm:w-96  p-3 bg-gray-300  rounded-md ring ring-gray-300 hover:ring-gray-700 my-5" name="message" id="" cols="30" rows="10"></textarea>

            <button type="submit" value="Send" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-1/3 ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div >
  )
}
