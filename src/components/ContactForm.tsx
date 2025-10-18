'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("manpvkge");
  
  if (state.succeeded) {
    return (
      <div className="text-center py-8">
        <div className="mx-auto max-w-md">
          <div className="text-6xl mb-6">✅</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Thank You!
          </h3>
          <p className="text-gray-600">
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          placeholder="your.email@example.com"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          placeholder="John Doe"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          placeholder="How can we help you?"
        />
        <ValidationError 
          prefix="Subject" 
          field="subject"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
          placeholder="Tell us about your project or inquiry..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-red-600"
        />
      </div>

      <div>
        <button 
          type="submit" 
          disabled={state.submitting}
          className="w-full rounded-md bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
