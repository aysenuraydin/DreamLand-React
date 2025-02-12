import React from "react";
import { Search } from "../components/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useLoaderData} from "react-router-dom";
import { AboutForm } from "../components/aboutForm";
import { ContactForm } from "../components/contactForm";
import { FaqsForm } from '../components/faqsForm';
import { SocialMediaForm } from "../components/socialMediaForm";
import { FaqsList } from "../components/faqsList";

export const Informations = ({ about, contact, socialMedias, infoDispatch, faq, faqs, faqDispatch}) => {
  const items = useLoaderData();
  return(
    <div className="p-8">
      <div className="flex justify-between border-b-2 border-gray-300 text-gray-400 pb-[0.6rem] px-4">
        <h1 className="text-3xl">Informations
          <FontAwesomeIcon icon={faCircleInfo} className={'admin-icons ml-4 text-2xl'}/>
        </h1>
        <div className="flex items-center relative">
          <Search/>
        </div>
      </div>
      <ul>
        <li className="mt-10">
            <AboutForm about={about} infoDispatch={infoDispatch}/>
        </li>
        <li className="mt-10">
          <div  className="bg-white p-10 rounded-2xl border border-gray-300 shadow-lg mx-10 px-10  pt-10">
            <FaqsForm faq={faq} faqDispatch={ faqDispatch }/>
            <FaqsList faqs = {faqs} faqDispatch={ faqDispatch }/>
          </div>
        </li>
        <li className="mt-10">
          <ContactForm contact={contact} infoDispatch={infoDispatch}/>
        </li>
        <li className="mt-10">
          <SocialMediaForm socialMedias={socialMedias} infoDispatch={infoDispatch}/>
        </li>
      </ul>
    </div>
  )
}
export const informationsLoader = async () => {
  return;
}