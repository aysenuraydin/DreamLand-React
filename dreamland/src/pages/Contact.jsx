import React, { useRef, useContext } from 'react';
// import { DreamContext } from '../contexts/DreamContext';
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';

export const Contact = () => {
  const items = useLoaderData();
  const errors = useActionData();
  
  const state = useSelector((state) => state.info);
  const dispatch = useDispatch(); 
  const contact = state.contact;
  const formRef = useRef(null); 

  const add = (event) => {
    event.preventDefault(); 

    const name = event.target.elements.name.value;
    const surname = event.target.elements.surname.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;
    const content = event.target.elements.content.value;

    if(name && surname && email && phone && content){
        dispatch({ 
          type: "ADD_MESSAGE",
          payload:  {
              fullname:  name+' '+surname,
              email:email,
              phone:phone,
              content:content
          }
        });
    }
    formRef.current.reset();
}
  return(
    <div className="p-10">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="relative isolate overflow-hidden px-6 lg:px-8 text-xl leading-[3rem] flex justify-center">
          <div className="rounded-[2rem] m-10 bg-gray-100 border border-gray-300 p-14 shadow-xl max-w-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance font-semibold tracking-tight text-[#1f3f96a2] text-4xl">Contact</h2>
            </div>
            <div className="mx-auto max-w-2xl p-2 px-12 pt-10">
              <div className="mt-2 text-sm text-gray-600 grid grid-cols-3 gap-2">
                <div className="font-semibold">Email:</div> 
                <div className="col-span-2">
                  <FontAwesomeIcon icon={faEnvelope}  className='pr-2 text-gray-500'/>
                  {contact.email}
                </div>
                <div className="font-semibold">Phone Number:</div> 
                <div className="col-span-2">
                  <FontAwesomeIcon className='pr-2 text-gray-500' icon={faPhone} />
                  {contact.phone}
                </div>
                <div className="font-semibold">Address:</div> 
                <div className="col-span-2">
                  <FontAwesomeIcon icon={faLocationDot}  className='pr-2 text-gray-500'/>
                  {contact.address}
                </div>
              </div>
            </div>
            <Form onSubmit={add} ref={formRef} className="mt-3 max-w-xl sm:mt-10 border border-gray-300 mx-10 p-5 bg-white rounded-xl">
              <div className="grid grid-cols-[1fr,auto] gap-x-8 gap-y-2 sm:grid-cols-2">
                <div className="">
                  <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">First name *
                  </label>
                  <div className="">
                    <input type="text" name="name" id="name" className="content-input"/>
                  </div>
                </div>
                <div  className="">
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">Last name *
                  </label>
                  <div className="">
                    <input type="text" name="surname" id="surname" className="content-input"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email *
                  </label>
                  <div className="sm:col-span-2">
                    <input type="email" name="email" id="email" className="content-input"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm/6 font-semibold text-gray-900">Phone number *
                  </label>
                  <div className="sm:col-span-2">
                      <input type="text" name="phone" id="phone" className="content-input" placeholder="123-456-7890"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="content" className="block text-sm/6 font-semibold text-gray-900">Message *
                  </label>
                  <div className="">
                    <textarea rows="4" name="content" id="content" className="content-input"
                    ></textarea>
                  </div>
                </div>
                <div className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <input  type="checkbox" className="content-input" placeholder="123-456-7890" />
                  </div>
                  <label className="text-sm/6 text-gray-600" id="switch-1-label">
                    <div>By selecting this, you agree to our
                    <a href="#" className="font-semibold text-gray-600">privacy&nbsp;policy.</a></div>
                  </label>
                </div>
              </div>
              <div className="mt-5">
                <button type="submit"
                className="block w-full rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 cursor-pointer" >Let's talk</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}
// Eğer <Contact/> bileşeninde bir form varsa ve bu form submit edildiğinde, contactAction fonksiyonu çağrılır.
export const contactAction = async ({ request }) => {
  // const data = await request.formData();
  // const email = data.get("email");
  // const message = data.get("message");
  // const errors = {};
  // if (typeof email !== "string" || !email.includes("@")) {
  //     errors.email = "email girmelisiniz";
  // }
  // if (typeof message!== "string" || message.length < 10) {
  //     errors.message = "mesaj için en az 10 karakter girmelisiniz";
  // }
  // if(Object.keys(errors).length) {
  //     return errors;
  // }
  // await sendMessage(email, message);

  return redirect("/");
}
export const contactLoader = async () => {
  return;
}