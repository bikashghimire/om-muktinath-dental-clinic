import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | BrightSmile Dental Clinic';
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (errors[name as keyof typeof formData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<typeof formData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-cyan-100">
              Have questions or need to get in touch with our team? We're here to help.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-cyan-100 text-cyan-600 p-4 rounded-full mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-700">
                123 Dental Street<br />
                Medical Center, NY 10001
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-cyan-600 font-medium hover:text-cyan-700"
              >
                Get Directions
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-cyan-100 text-cyan-600 p-4 rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone & Email</h3>
              <p className="text-gray-700 mb-2">
                <a href="tel:+11234567890" className="hover:text-cyan-600">(123) 456-7890</a>
              </p>
              <p className="text-gray-700">
                <a href="mailto:info@brightsmile.com" className="hover:text-cyan-600">info@brightsmile.com</a>
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <div className="bg-cyan-100 text-cyan-600 p-4 rounded-full mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Working Hours</h3>
              <p className="text-gray-700">Mon - Fri: 8:00 AM - 7:00 PM</p>
              <p className="text-gray-700">Saturday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Send Us a Message"
                subtitle="We'll get back to you as soon as possible."
              />
              
              {isSubmitted ? (
                <div className="bg-green-50 text-green-700 rounded-lg p-6 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 rounded-full p-2 mr-3">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
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
                    </div>
                    <h3 className="text-xl font-bold">Message Sent!</h3>
                  </div>
                  <p>
                    Thank you for contacting us. We've received your message and will respond as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="Your email address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`input ${errors.subject ? 'border-red-500' : ''}`}
                      >
                        <option value="">Select a subject</option>
                        <option value="Appointment">Appointment Inquiry</option>
                        <option value="Services">Services Information</option>
                        <option value="Insurance">Insurance Question</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`input ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    isLoading={isSubmitting}
                    icon={<Send size={18} />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
            
            <div>
              <SectionHeading
                title="Our Location"
                subtitle="We're conveniently located in the heart of the Medical District."
              />
              
              <div className="rounded-xl overflow-hidden shadow-md h-[400px] mb-6">
                {/* Replace with actual Google Maps embed */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 text-lg font-medium">Google Maps Embed</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Getting Here</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">By Public Transport</h4>
                    <p className="text-gray-700">
                      Bus routes 23, 42, and 56 stop directly in front of our clinic. The nearest subway station is Medical Center (Blue Line), a 5-minute walk away.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Parking</h4>
                    <p className="text-gray-700">
                      Free parking is available in our dedicated lot. Additional paid parking can be found at the Medical Center Garage across the street.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Accessibility</h4>
                    <p className="text-gray-700">
                      Our clinic is fully accessible with ramp access, elevator service, and accessible restrooms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Emergency Contact */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="bg-cyan-700 text-white rounded-xl shadow-md p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Dental Emergency?</h2>
                <p className="text-xl text-cyan-100 mb-6">
                  We offer same-day emergency appointments for severe pain, broken teeth, or other urgent dental issues.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+11234567890">
                    <Button
                      variant="accent"
                      size="lg"
                      className="bg-white text-cyan-700 hover:bg-gray-100"
                      icon={<Phone size={20} />}
                    >
                      Call Now: (123) 456-7890
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Common Dental Emergencies We Treat</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-300 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
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
                    <span>Severe toothache or dental pain</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-300 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
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
                    <span>Broken or chipped teeth</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-300 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
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
                    <span>Knocked-out tooth</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-300 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
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
                    <span>Lost filling or crown</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-300 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
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
                    <span>Dental abscess or swelling</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="text-cyan-300 h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
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
                    <span>Injuries to the gums or soft tissues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;