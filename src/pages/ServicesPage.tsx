import React, { useEffect } from 'react';
import { Bluetooth as Tooth, ScanFace, Stethoscope, Syringe, Smartphone, Baby, HeartPulse, Microscope } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Our Services | BrightSmile Dental Clinic';
    window.scrollTo(0, 0);
  }, []);
  
  const services = [
    {
      title: 'General Dentistry',
      description: 'Regular check-ups, cleanings, and preventative care to maintain your oral health and detect issues early.',
      icon: <Tooth size={32} />,
      link: '/services#general',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with teeth whitening, veneers, and other aesthetic dental procedures.',
      icon: <ScanFace size={32} />,
      link: '/services#cosmetic',
    },
    {
      title: 'Orthodontics',
      description: 'Straighten your teeth with traditional braces or clear aligners for a perfectly aligned smile.',
      icon: <Stethoscope size={32} />,
      link: '/services#orthodontics',
    },
    {
      title: 'Oral Surgery',
      description: 'Expert extraction of wisdom teeth, dental implant placement, and other surgical procedures.',
      icon: <Syringe size={32} />,
      link: '/services#surgery',
    },
    {
      title: 'Emergency Care',
      description: 'Immediate dental care for urgent situations like severe pain, broken teeth, or dental trauma.',
      icon: <Smartphone size={32} />,
      link: '/services#emergency',
    },
    {
      title: 'Pediatric Dentistry',
      description: 'Child-friendly dental care designed to make dental visits enjoyable for our youngest patients.',
      icon: <Baby size={32} />,
      link: '/services#pediatric',
    },
    {
      title: 'Restorative Dentistry',
      description: 'Repair damaged teeth with fillings, crowns, bridges, and dentures to restore function and appearance.',
      icon: <HeartPulse size={32} />,
      link: '/services#restorative',
    },
    {
      title: 'Periodontal Care',
      description: 'Specialized treatment for gum disease and maintaining the health of tissues supporting your teeth.',
      icon: <Microscope size={32} />,
      link: '/services#periodontal',
    },
  ];
  
  const serviceDetails = [
    {
      id: 'general',
      title: 'General Dentistry',
      description: 'Our general dentistry services focus on prevention and maintenance of your oral health. Regular check-ups allow us to detect and address issues before they become more serious.',
      procedures: [
        'Comprehensive dental examinations',
        'Professional teeth cleaning',
        'Digital X-rays',
        'Cavity fillings',
        'Fluoride treatments',
        'Oral cancer screenings',
        'Custom mouthguards',
      ],
      image: 'https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Our cosmetic dental services can help you achieve the smile you\'ve always wanted. We offer a range of treatments to enhance the appearance of your teeth and boost your confidence.',
      procedures: [
        'Professional teeth whitening',
        'Porcelain veneers',
        'Dental bonding',
        'Tooth contouring',
        'Smile makeovers',
        'Gum contouring',
      ],
      image: 'https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'orthodontics',
      title: 'Orthodontics',
      description: 'Our orthodontic treatments help align your teeth for improved function and aesthetics. We offer both traditional braces and modern clear aligner options to suit your preferences.',
      procedures: [
        'Traditional metal braces',
        'Ceramic braces',
        'Clear aligners (Invisalign®)',
        'Retainers',
        'Early intervention orthodontics',
        'Adult orthodontic treatments',
      ],
      image: 'https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'surgery',
      title: 'Oral Surgery',
      description: 'Our skilled oral surgeons perform procedures ranging from simple extractions to more complex surgeries. We prioritize your comfort and safety throughout the entire process.',
      procedures: [
        'Tooth extractions',
        'Wisdom teeth removal',
        'Dental implant placement',
        'Bone grafting',
        'Treatment of jaw disorders',
        'Biopsy of suspicious lesions',
      ],
      image: 'https://images.pexels.com/photos/3846009/pexels-photo-3846009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'emergency',
      title: 'Emergency Care',
      description: 'Dental emergencies require prompt attention. Our team is ready to provide immediate care for unexpected dental issues to relieve pain and prevent further complications.',
      procedures: [
        'Treatment for severe toothaches',
        'Repair of broken or chipped teeth',
        'Re-cementing of loose crowns or bridges',
        'Treatment for dental infections',
        'Care for dental injuries from accidents',
      ],
      image: 'https://images.pexels.com/photos/4172254/pexels-photo-4172254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'pediatric',
      title: 'Pediatric Dentistry',
      description: 'We make dental visits fun and stress-free for children. Our pediatric dental services focus on establishing good oral hygiene habits early and ensuring positive dental experiences.',
      procedures: [
        'Child-friendly dental check-ups',
        'Gentle cleanings',
        'Fluoride treatments',
        'Dental sealants',
        'Early orthodontic assessment',
        'Education on proper brushing and flossing',
      ],
      image: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      description: 'Our restorative treatments repair damaged teeth and replace missing ones. We use high-quality materials to restore both function and aesthetics to your smile.',
      procedures: [
        'Fillings (tooth-colored)',
        'Dental crowns',
        'Bridges',
        'Dentures (full and partial)',
        'Inlays and onlays',
        'Root canal therapy',
      ],
      image: 'https://images.pexels.com/photos/6627411/pexels-photo-6627411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 'periodontal',
      title: 'Periodontal Care',
      description: 'Healthy gums are essential for overall oral health. Our periodontal services focus on preventing, diagnosing, and treating gum disease and other conditions affecting the supporting structures of your teeth.',
      procedures: [
        'Deep cleaning (scaling and root planing)',
        'Gum disease assessment',
        'Periodontal maintenance',
        'Antibiotic treatments',
        'Surgical gum treatments',
        'Gum grafting',
      ],
      image: 'https://images.pexels.com/photos/3845775/pexels-photo-3845775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];
  
  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Dental Services</h1>
            <p className="text-xl text-cyan-100 mb-4">
              We offer comprehensive dental care services to keep your smile healthy and beautiful.
            </p>
            <p className="text-cyan-100">
              From routine check-ups to advanced cosmetic procedures, our team provides personalized care for patients of all ages.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Comprehensive Dental Care"
            subtitle="Explore our range of services designed to meet all your dental needs."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Descriptions */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Detailed Service Information"
            subtitle="Learn more about each of our specialized dental services."
          />
          
          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <div key={index} id={service.id} className="scroll-mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    
                    <h4 className="text-xl font-semibold mb-3">Our {service.title} Procedures:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.procedures.map((procedure, i) => (
                        <li key={i} className="flex items-start">
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
                          <span className="text-gray-700">{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-md w-full h-auto"
                    />
                  </div>
                </div>
                
                {index < serviceDetails.length - 1 && <hr className="my-16 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Insurance & Payment */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Insurance & Payment Options</h3>
                <p className="text-gray-700 mb-6">
                  We work with most major dental insurance providers and offer flexible payment options to make dental care accessible for everyone.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">We Accept:</h4>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  <li className="flex items-center">
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
                    <span className="text-gray-700">Delta Dental</span>
                  </li>
                  <li className="flex items-center">
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
                    <span className="text-gray-700">Cigna</span>
                  </li>
                  <li className="flex items-center">
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
                    <span className="text-gray-700">Aetna</span>
                  </li>
                  <li className="flex items-center">
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
                    <span className="text-gray-700">MetLife</span>
                  </li>
                  <li className="flex items-center">
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
                    <span className="text-gray-700">Guardian</span>
                  </li>
                  <li className="flex items-center">
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
                    <span className="text-gray-700">United Healthcare</span>
                  </li>
                  <li className="flex items-center">
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
                    <span className="text-gray-700">Humana</span>
                  </li>
                  <li className="flex items-center">
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
                    <span className="text-gray-700">Many more...</span>
                  </li>
                </ul>
                
                <p className="text-gray-700">
                  Contact our office to verify your insurance coverage or discuss our payment options.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Financing Options</h3>
                <p className="text-gray-700 mb-6">
                  We believe financial considerations shouldn\'t be a barrier to quality dental care. We offer several ways to manage the cost of your treatment.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Flexible Payment Plans</h4>
                    <p className="text-gray-700">
                      Customized payment schedules to fit your budget, with no interest options available for qualifying treatments.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Credit Cards</h4>
                    <p className="text-gray-700">
                      We accept all major credit cards including Visa, MasterCard, American Express, and Discover.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Healthcare Financing</h4>
                    <p className="text-gray-700">
                      We partner with CareCredit® to offer special financing options for dental procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;