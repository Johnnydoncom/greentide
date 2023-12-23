"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { contactSchema } from "@/zodSchema/contact";
import countries from '@/public/countries.json';
import * as React from "react";
import toast from "react-hot-toast";

type FormData = z.infer<typeof contactSchema>;

export default function ContactForm() {

    const countryOptions = countries.map(function ({name,code}) {
        return {
            label: name,
            value: name
        }
    });

    // const router = useRouter();
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting, isSubmitted, isDirty, isValid },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(contactSchema),
    });

    async function onSubmit(data: FormData) {

        await fetch("/api/send", {
            body: JSON.stringify({
                email: data.email,
                name: data.name,
                phone: data.phone,
                company: data.company,
                country: data.country,
                message: data.message
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        }).then(() => {
            toast.success('Your email message has been sent successfully');
        });

        reset();
        // router.push("/contact");
    }

    return (
       <div>
           <h2 className={`font-bold text-3xl mb-8`}>Drop us a line.</h2>
           <form action=""
                 method="POST"
                 onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
               <div className="grid md:grid-cols-2 md:gap-6">
                   <div className="relative z-0 w-full mb-5 group">
                       <input type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " {...register('name', { required:true })}/>
                       <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>

                       {errors?.name && (
                           <p className="text-red-600 text-sm">
                               {errors?.name?.message}
                           </p>
                       )}
                   </div>
                   <div className="relative z-0 w-full mb-5 group">
                       <input type="tel" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " {...register('phone', {required:true})} />
                       <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>

                       {errors?.phone && (
                           <p className="text-red-600 text-sm">
                               {errors?.phone?.message}
                           </p>
                       )}
                   </div>
               </div>

               <div className="relative z-0 w-full mb-5 group">
                   <input type="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " {...register('email', {required:true})} />
                   <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>

                   {errors?.email && (
                       <p className="text-red-600 text-sm">
                           {errors?.email?.message}
                       </p>
                   )}
               </div>
               <div className="relative z-0 w-full mb-5 group">
                   <input type="text" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " {...register('company')}/>
                   <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>

                   {errors?.company && (
                       <p className="text-red-600 text-sm">
                           {errors?.company?.message}
                       </p>
                   )}
               </div>
               <div className="relative z-0 w-full mb-5 group">
                   <select id="country" defaultValue={`""`} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer" {...register('country', {required:true})}>
                       <option value="" className={`text-gray-200`}>Select country</option>
                       {countryOptions.map(c => (
                           <option key={`${c.value}`} value={c.label}>{c.label}</option>
                       )) }
                   </select>

                   <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-gray-500 italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>

                   {errors?.country && (
                       <p className="text-red-600 text-sm">
                           {errors?.country?.message}
                       </p>
                   )}
               </div>

               <div className="relative z-0 w-full mb-5 group">
                   <textarea id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary-600 peer" {...register('message')} ></textarea>

                   <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 italic duration-300 transform -translate-y-6 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message</label>

                   {errors?.message && (
                       <p className="text-red-600 text-sm">
                           {errors?.message?.message}
                       </p>
                   )}
               </div>

               <div className="flex flex-col lg:flex-row gap-6">
                   <button type="submit" className="btn btn-secondary" disabled={!isDirty || !isValid || isSubmitting}>{isSubmitting ? ('Submitting' ) : ('Submit')}</button>

                   {isSubmitted && (
                       <div className="lg:order-first text-green-600">Form submitted successfully</div>
                   )}
               </div>

           </form>
       </div>
    );
}