import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bluetooth as Tooth, Stethoscope, ScanFace, Clock, Heart, Award, Calendar, ArrowRight, Phone } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'BrightSmile Dental Clinic - Your Trusted Dental Care Provider';
    window.scrollTo(0, 0);
  }, []);
  
  // Featured services
  const featuredServices = [
    {
      title: 'General Dentistry',
      description: 'Comprehensive dental care including check-ups, cleanings, and fillings to maintain your oral health.',
      icon: <Tooth size={32} />,
      link: '/services',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with teeth whitening, veneers, and other aesthetic dental procedures.',
      icon: <ScanFace size={32} />,
      link: '/services',
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with modern braces and clear aligners for a perfectly aligned smile.',
      icon: <Stethoscope size={32} />,
      link: '/services',
    },
    {
      title: 'Emergency Care',
      description: 'Immediate dental care for urgent situations like severe pain, broken teeth, or dental trauma.',
      icon: <Clock size={32} />,
      link: '/services',
    },
  ];
  
  // Testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      date: 'June 15, 2025',
      rating: 5,
      text: 'Dr. Miller and the entire team were exceptional. I was nervous about my root canal, but they made me feel comfortable and the procedure was painless!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Michael Rivera',
      date: 'May 2, 2025',
      rating: 5,
      text: 'I\'ve been coming to BrightSmile for years. The staff is always friendly and professional. My teeth have never looked better!',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Emily Chen',
      date: 'April 18, 2025',
      rating: 4,
      text: 'My daughter was terrified of dentists, but Dr. Thompson made her feel so at ease. Now she actually looks forward to her check-ups!',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] bg-gradient-to-r from-cyan-700 to-cyan-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3881445/pexels-photo-3881445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Dental clinic"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full container-custom flex flex-col justify-center pt-24">
          <div className="max-w-2xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Smile Deserves <span className="text-cyan-300">The Best Care</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience exceptional dental care in a comfortable and modern environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment">
                <Button variant="accent" size="lg">
                  Book an Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Quick Info Cards */}
        <div className="absolute -bottom-20 left-0 w-full px-4">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Extended Hours</h3>
                  <p className="text-gray-600">Open evenings & weekends for your convenience</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-4">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Patient-Centered</h3>
                  <p className="text-gray-600">Comfortable care tailored to your needs</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 flex items-start">
                <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-1">Top-Rated Clinic</h3>
                  <p className="text-gray-600">Award-winning dental care since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section bg-gray-50 pt-36 md:pt-40">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modern Dental Care <span className="text-cyan-600">With a Gentle Touch</span>
              </h2>
              <p className="text-gray-700 mb-4">
                At BrightSmile Dental Clinic, we combine state-of-the-art technology with compassionate care to provide the best possible experience for our patients. Our team of experienced dentists and dental hygienists are committed to keeping your smile healthy and bright.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you need a routine check-up, cosmetic procedure, or complex dental work, we\'re here to make your visit comfortable and stress-free.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <svg
                    className="text-cyan-600 h-5 w-5 mr-2"
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
                  <span className="text-gray-700">Expert Dentists</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="text-cyan-600 h-5 w-5 mr-2"
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
                  <span className="text-gray-700">Modern Equipment</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="text-cyan-600 h-5 w-5 mr-2"
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
                  <span className="text-gray-700">Gentle Procedures</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="text-cyan-600 h-5 w-5 mr-2"
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
                  <span className="text-gray-700">Family-Friendly</span>
                </div>
              </div>
              
              <Link to="/about">
                <Button variant="primary">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dental equipment"
                  className="rounded-lg shadow-md object-cover h-full w-full"
                />
              </div>
              <div className="relative mt-8">
                <img
                  src="https://images.pexels.com/photos/3845970/pexels-photo-3845970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dental procedure"
                  className="rounded-lg shadow-md object-cover h-full w-full"
                />
              </div>
              <div className="relative col-span-2">
                <img
                  src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dental clinic reception"
                  className="rounded-lg shadow-md object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Our Dental Services"
            subtitle="We offer a comprehensive range of dental services to meet all your oral health needs."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-cyan-700 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Schedule Your Next Dental Appointment?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                We make it easy to get the dental care you need with flexible scheduling and a patient-centered approach.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment">
                  <Button variant="accent" size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
                    <Calendar size={20} className="mr-2" />
                    Book an Appointment
                  </Button>
                </Link>
                <a href="tel:+11234567890">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Phone size={20} className="mr-2" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.pexels.com/photos/3845762/pexels-photo-3845762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dental appointment"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Our Patients Say"
            subtitle="Read testimonials from patients who have experienced our dental care."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                date={testimonial.date}
                rating={testimonial.rating}
                text={testimonial.text}
                image={testimonial.image}
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/about#testimonials">
              <Button variant="secondary">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Preview Section */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Latest Dental Tips & News"
            subtitle="Stay informed with our latest articles and dental health tips."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Teeth whitening"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">May 12, 2025</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">
                  5 Tips for Naturally Whiter Teeth
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover simple ways to keep your smile bright and white without expensive treatments.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-cyan-600 font-medium group-hover:text-cyan-700"
                >
                  Read more
                  <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="card group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Child brushing teeth"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 25, 2025</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">
                  Teaching Kids Good Dental Habits
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to make oral hygiene fun and establish lifelong habits for your children.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-cyan-600 font-medium group-hover:text-cyan-700"
                >
                  Read more
                  <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            
            <div className="card group">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6627411/pexels-photo-6627411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dental implant"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">April 10, 2025</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">
                  The Complete Guide to Dental Implants
                </h3>
                <p className="text-gray-600 mb-4">
                  Everything you need to know about dental implants: procedure, recovery, and benefits.
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-cyan-600 font-medium group-hover:text-cyan-700"
                >
                  Read more
                  <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="secondary">
                Browse All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;