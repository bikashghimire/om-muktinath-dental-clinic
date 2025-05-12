import React, { useEffect } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AppointmentForm from '../components/AppointmentForm';

const AppointmentPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Book an Appointment | BrightSmile Dental Clinic';
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Appointment</h1>
            <p className="text-xl text-cyan-100">
              Schedule your visit with our experienced dental team. We'll make sure your experience is comfortable and stress-free.
            </p>
          </div>
        </div>
      </section>
      
      {/* Appointment Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionHeading
                title="Schedule Your Visit"
                subtitle="Fill out the form below and we'll contact you to confirm your appointment."
              />
              
              <AppointmentForm />
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="text-cyan-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">123 Dental Street, Medical Center, NY 10001</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-cyan-600 mr-3 flex-shrink-0" size={20} />
                    <a href="tel:+11234567890" className="text-gray-700 hover:text-cyan-600 transition-colors">
                      (123) 456-7890
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-cyan-600 mr-3 flex-shrink-0" size={20} />
                    <a href="mailto:info@brightsmile.com" className="text-gray-700 hover:text-cyan-600 transition-colors">
                      info@brightsmile.com
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="text-cyan-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">Monday - Friday</p>
                      <p className="text-gray-600">8:00 AM - 7:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="text-cyan-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">Saturday</p>
                      <p className="text-gray-600">9:00 AM - 5:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="text-cyan-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-700 font-medium">Sunday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <p className="text-gray-700 mb-4">
                  During your first visit, our team will:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-600 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Review your dental and medical history</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-600 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Perform a comprehensive dental examination</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-600 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Take digital X-rays if necessary</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-600 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Discuss treatment options if needed</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-600 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Create a personalized dental care plan</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Please arrive 15 minutes before your scheduled appointment to complete any necessary paperwork.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Our Location"
            subtitle="Conveniently located in the heart of the Medical District."
            centered
          />
          
          <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
            {/* Replace with actual Google Maps embed */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600 text-lg font-medium">Google Maps Embed</p>
              {/* 
                In a real implementation, you would use:
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!..." 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy"
                ></iframe>
              */}
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Our Address</h3>
                  <p className="text-gray-600">123 Dental Street, Medical Center, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Office Hours</h3>
                  <p className="text-gray-600">Mon-Fri: 8AM-7PM</p>
                  <p className="text-gray-600">Sat: 9AM-5PM, Sun: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Contact</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-gray-600">info@brightsmile.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about appointments and procedures."
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">What should I bring to my first appointment?</h3>
                <p className="text-gray-700">
                  Please bring your ID, insurance card, completed new patient forms (available on our website), and a list of any medications you're currently taking. If you have recent dental X-rays from a previous dentist, those would be helpful as well.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">How far in advance should I schedule my appointment?</h3>
                <p className="text-gray-700">
                  We recommend scheduling routine check-ups at least 2-3 weeks in advance. For urgent care, we offer same-day emergency appointments when possible. The sooner you book, the more scheduling options you'll have.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">What if I need to reschedule?</h3>
                <p className="text-gray-700">
                  We understand that plans change. Please notify us at least 24 hours in advance if you need to reschedule or cancel your appointment. This allows us to offer your time slot to another patient who might need urgent care.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Do you accept dental insurance?</h3>
                <p className="text-gray-700">
                  Yes, we accept most major dental insurance plans. We'll verify your benefits before your appointment and file claims on your behalf. Please contact our office if you have specific questions about your insurance coverage.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">How long will my appointment take?</h3>
                <p className="text-gray-700">
                  A routine check-up and cleaning typically takes 45-60 minutes. More complex procedures will require additional time. We'll provide an estimated duration when you schedule your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;