import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, ThumbsUp, Clock, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TeamMemberCard from '../components/TeamMemberCard';
import TestimonialCard from '../components/TestimonialCard';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | BrightSmile Dental Clinic';
    window.scrollTo(0, 0);
  }, []);
  
  const teamMembers = [
    {
      name: 'Dr. Jennifer Miller',
      role: 'Lead Dentist & Founder',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Miller has over 15 years of experience and specializes in cosmetic dentistry. She founded BrightSmile in 2010 with a vision of patient-centered care.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'twitter', url: 'https://twitter.com' },
      ],
    },
    {
      name: 'Dr. James Thompson',
      role: 'Orthodontist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Thompson is our orthodontics specialist with expertise in both traditional braces and clear aligners. He\'s passionate about creating beautiful smiles.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
      ],
    },
    {
      name: 'Dr. Sofia Rodriguez',
      role: 'Pediatric Specialist',
      image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Rodriguez has a special way with children, making dental visits stress-free and even fun. She specializes in pediatric dentistry and preventative care.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'facebook', url: 'https://facebook.com' },
      ],
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Oral Surgeon',
      image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Dr. Chen specializes in complex extractions, dental implants, and oral surgery procedures. He\'s known for his gentle approach and attention to detail.',
      socialLinks: [
        { platform: 'linkedin', url: 'https://linkedin.com' },
        { platform: 'twitter', url: 'https://twitter.com' },
      ],
    },
  ];
  
  const supportTeam = [
    {
      name: 'Rachel Green',
      role: 'Dental Hygienist',
      image: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Rachel has been with BrightSmile since the beginning. She\'s known for her thorough yet gentle cleanings and patient education.',
    },
    {
      name: 'David Wilson',
      role: 'Dental Assistant',
      image: 'https://images.pexels.com/photos/6232585/pexels-photo-6232585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'David assists our dentists in various procedures and helps ensure patients are comfortable throughout their visits.',
    },
    {
      name: 'Emma Martinez',
      role: 'Office Manager',
      image: 'https://images.pexels.com/photos/3783952/pexels-photo-3783952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      bio: 'Emma keeps everything running smoothly at BrightSmile. She handles scheduling, insurance, and makes sure every patient feels welcome.',
    },
  ];
  
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
    {
      name: 'Robert Taylor',
      date: 'March 30, 2025',
      rating: 5,
      text: 'The Invisalign treatment changed my life! Dr. Thompson explained everything clearly and the results exceeded my expectations.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Amanda Wilson',
      date: 'February 12, 2025',
      rating: 5,
      text: 'After years of being embarrassed about my smile, Dr. Miller\'s cosmetic work has given me so much confidence. The team is incredible!',
      image: 'https://images.pexels.com/photos/1980076/pexels-photo-1980076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'David Lopez',
      date: 'January 25, 2025',
      rating: 4,
      text: 'Had my wisdom teeth removed by Dr. Chen and the recovery was much easier than I expected. Everyone was so supportive throughout the process.',
      image: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  
  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BrightSmile Dental</h1>
            <p className="text-xl text-cyan-100 mb-4">
              We\'ve been providing exceptional dental care to our community since 2010.
            </p>
            <p className="text-cyan-100">
              Our mission is to deliver the highest quality dental services in a comfortable, welcoming environment where patients feel valued and cared for.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="How BrightSmile Dental Clinic came to be."
              />
              
              <p className="text-gray-700 mb-4">
                Founded in 2010 by Dr. Jennifer Miller, BrightSmile Dental Clinic began with a simple vision: to create a dental practice where exceptional clinical care meets compassionate patient experience.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small two-room office has grown into a modern, state-of-the-art facility with a team of specialists covering all areas of dentistry. Throughout our growth, we\'ve remained committed to our core values of excellence, integrity, compassion, and innovation.
              </p>
              <p className="text-gray-700 mb-6">
                Today, we\'re proud to be one of the most trusted dental clinics in the area, serving thousands of patients and families. Our team continues to advance their skills through ongoing education to bring the latest dental techniques and technologies to our community.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-3 mt-1">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Excellence</h4>
                    <p className="text-sm text-gray-600">We strive for excellence in every aspect of our practice.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-3 mt-1">
                    <ThumbsUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Integrity</h4>
                    <p className="text-sm text-gray-600">We always do what\'s right for our patients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-3 mt-1">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Compassion</h4>
                    <p className="text-sm text-gray-600">We care deeply about our patients\' comfort and well-being.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-cyan-100 text-cyan-600 p-3 rounded-lg mr-3 mt-1">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Innovation</h4>
                    <p className="text-sm text-gray-600">We embrace new technologies and techniques.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <img
                  src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dental clinic"
                  className="rounded-lg shadow-md object-cover w-full h-full"
                />
              </div>
              <div className="mt-8">
                <img
                  src="https://images.pexels.com/photos/3845754/pexels-photo-3845754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Dental equipment"
                  className="rounded-lg shadow-md object-cover w-full h-full"
                />
              </div>
              <div className="col-span-2">
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
      
      {/* Our Team */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Meet Our Dental Team"
            subtitle="Our experienced professionals are dedicated to providing exceptional dental care."
            centered
          />
          
          <h3 className="text-2xl font-bold mb-6">Our Dentists</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                socialLinks={member.socialLinks}
              />
            ))}
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Support Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportTeam.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Technology */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dental technology"
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div>
              <SectionHeading
                title="Advanced Dental Technology"
                subtitle="We invest in the latest equipment for better diagnosis, treatment, and patient comfort."
              />
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">Digital X-Rays</h4>
                  <p className="text-gray-700">
                    Our digital X-ray equipment reduces radiation exposure by up to 90% compared to traditional X-rays while providing highly detailed images for accurate diagnosis.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">Intraoral Cameras</h4>
                  <p className="text-gray-700">
                    These small cameras allow us to show you exactly what we see inside your mouth, helping you better understand your dental conditions and treatment options.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">3D Scanning</h4>
                  <p className="text-gray-700">
                    For procedures like crowns and bridges, our digital scanners create precise 3D models without the discomfort of traditional impressions.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">Laser Dentistry</h4>
                  <p className="text-gray-700">
                    Our dental lasers allow for more precise, comfortable treatments with reduced healing time for procedures like gum reshaping and cavity detection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="What Our Patients Say"
            subtitle="Read reviews from patients who have experienced our dental care."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>
      
      {/* CTA */}
      <section className="section bg-cyan-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Our Care?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Schedule your appointment today and see why our patients trust us with their smiles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointment">
              <Button variant="accent" size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
                Book an Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;