import React from "react";
import { Form, redirect, useActionData, useLoaderData } from "react-router-dom";
export const Contact = ({contact}) => {
  const items = useLoaderData();
  const errors = useActionData();
  return(
    <div className="p-10">
      <div className="min-h-[80vh] max-w-6xl mx-auto">
        <div className="relative isolate overflow-hidden px-6 lg:px-8 text-xl leading-[3rem] flex justify-center">
          <div className="rounded-[2rem] m-10 bg-gray-100 border border-gray-300 p-14 shadow-xl max-w-2xl">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance font-semibold tracking-tight text-gray-900 text-4xl">Contact</h2>
            </div>
            <div className="mx-auto max-w-2xl p-2">
              <div className="mt-2 text-sm text-gray-600 grid grid-cols-3 gap-2">
                <div className="font-semibold">Email:</div> 
                <div className="col-span-2">{contact.email}</div>
                <div className="font-semibold">Phone Number:</div> <div className="col-span-2">{contact.phone}</div>
                <div className="font-semibold">Address:</div> 
                <div className="col-span-2">{contact.address}</div>
              </div>
            </div>
            <Form className="mx-auto mt-3 max-w-xl sm:mt-10">
              <div className="grid grid-cols-[1fr,auto] gap-x-8 gap-y-2 sm:grid-cols-2">
                <div className="">
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">First name *
                  </label>
                  <div className="">
                    <input type="text" className="content-input"/>
                  </div>
                </div>
                <div  className="">
                  <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">Last name *
                  </label>
                  <div className="">
                    <input type="text" className="content-input"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">Company</label>
                  <div className="">
                    <input type="text" className="content-input"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email *
                  </label>
                  <div className="">
                    <input type="email" className="content-input"/>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">Phone number *
                  </label>
                  <div className="">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-gray-600">
                      <input type="text" className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="123-456-7890"/>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">Message *
                  </label>
                  <div className="">
                    <textarea rows="4" className="content-input"
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