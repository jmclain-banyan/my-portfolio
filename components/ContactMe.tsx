import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:joshmclain45@gmail.com?subject=${data.subject}
    &body=Hi my name is ${data.name},\n${data.message}\n\n${data.email}`
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center pt-10 sm:pt-0">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-1xl sm:text-2xl">
        Contact me
      </h3>
      <div className="flex flex-col space-y-5 md:space-y-10">
        <h4 className="text-[1.1rem] md:text-4xl font-semibold text-center">
          I&apos;ve got just what you need.{" "}
          <span className="decoration-[#88d498]/50 underline">Lets talk.</span>
        </h4>
        <div className="space-y-4 md:space-y-10 text-">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#88d498] h-5 w-5 sm:w-7 sm:h-7 animate-pulse" />
            <p className="text-md sm:text-base md:text-2xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#88d498] h-5 w-5 sm:w-7 sm:h-7 animate-pulse" />
            <p className="text-md sm:text-base md:text-2xl">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#88d498] h-5 w-5 sm:w-7 sm:h-7 animate-pulse" />
            <p className="text-md sm:text-base md:text-2xl">{pageInfo?.address}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-[360px] sm:w-fit mx-auto">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register('message')} placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#88d498]/50 py-3 px-6 sm:py-5 sm:px-10 rounded-md text-black hover:text-gray-300 font-bold text-lg hover:border-b hover:border-gray-300 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
