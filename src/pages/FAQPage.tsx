import React, { useEffect, useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Questions | BrightSmile Dental Clinic';
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Sample FAQ data
  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'How often should I visit the dentist?',
      answer: 'For most patients, we recommend a check-up and cleaning every six months. However, some patients with specific dental conditions might need more frequent visits. During your initial exam, we\'ll create a personalized care plan that includes how often you should visit.',
      category: 'General',
    },
    {
      id: 2,
      question: 'At what age should my child first see a dentist?',
      answer: 'We recommend scheduling your child\'s first dental visit after their first tooth appears or by their first birthday. Early dental visits help establish good oral hygiene habits and can prevent future problems.',
      category: 'Pediatric',
    },
    {
      id: 3,
      question: 'How can I whiten my teeth?',
      answer: 'We offer several teeth whitening options, including in-office professional whitening and take-home kits. Professional whitening provides the most dramatic results in the shortest time. During your consultation, we\'ll recommend the best option based on your specific needs and goals.',
      category: 'Cosmetic',
    },
    {
      id: 4,
      question: 'What should I do in a dental emergency?',
      answer: 'For any dental emergency, contact our office immediately. For a knocked-out tooth, keep it moist in milk or between your cheek and gums (if possible) and come in right away. For severe pain, broken teeth, or dental trauma, we offer same-day emergency appointments.',
      category: 'Emergency',
    },
    {
      id: 5,
      question: 'Do you accept dental insurance?',
      answer: 'Yes, we accept most major dental insurance plans. Our team will verify your benefits before your appointment and file claims on your behalf. Please bring your insurance card to your first visit so we can provide you with the most accurate coverage information.',
      category: 'Insurance & Billing',
    },
    {
      id: 6,
      question: 'What payment options do you offer?',
      answer: 'We accept cash, check, and all major credit cards. We also offer flexible payment plans and work with CareCredit® to provide financing options for larger treatments. Our goal is to make quality dental care accessible to all our patients.',
      category: 'Insurance & Billing',
    },
    {
      id: 7,
      question: 'How long do dental implants last?',
      answer: 'With proper care and maintenance, dental implants can last a lifetime. The crown portion typically lasts 10-15 years before it might need replacement due to normal wear and tear. Regular dental check-ups and good oral hygiene are essential for the longevity of your implants.',
      category: 'Procedures',
    },
    {
      id: 8,
      question: 'Is teeth whitening safe?',
      answer: 'Professional teeth whitening supervised by a dentist is safe for most patients. We carefully evaluate your oral health before recommending any whitening treatment to ensure it\'s appropriate for you. Some patients may experience temporary sensitivity, which typically resolves quickly.',
      category: 'Cosmetic',
    },
    {
      id: 9,
      question: 'How long will my appointment take?',
      answer: 'A routine check-up and cleaning typically takes 45-60 minutes. More complex procedures will require additional time. We value your time and strive to stay on schedule, but we also ensure each patient receives the thorough care they deserve.',
      category: 'General',
    },
    {
      id: 10,
      question: 'Why are X-rays necessary?',
      answer: 'Dental X-rays allow us to see problems that aren\'t visible during a visual examination, such as decay between teeth, issues below the gum line, and bone loss. We use digital X-rays, which emit up to 90% less radiation than traditional X-rays and provide highly detailed images.',
      category: 'Procedures',
    },
    {
      id: 11,
      question: 'How can I prevent cavities?',
      answer: 'Preventing cavities involves a combination of good home care and regular professional cleanings. Brush twice daily with fluoride toothpaste, floss daily, limit sugary foods and drinks, and visit us for regular check-ups and cleanings. We may also recommend additional preventative measures like dental sealants or fluoride treatments.',
      category: 'General',
    },
    {
      id: 12,
      question: 'What causes bad breath and how can I prevent it?',
      answer: 'Bad breath (halitosis) can be caused by poor oral hygiene, gum disease, dry mouth, certain foods, tobacco use, or underlying health conditions. To prevent bad breath, brush and floss regularly, clean your tongue, stay hydrated, avoid tobacco, and visit us for regular cleanings. If persistent, it might indicate a more serious condition that needs attention.',
      category: 'General',
    },
    {
      id: 13,
      question: 'How long do braces or Invisalign treatments take?',
      answer: 'Treatment time varies depending on individual needs. On average, traditional braces are worn for 18-24 months, while Invisalign treatment typically takes 12-18 months. During your consultation, our orthodontist will provide a more accurate timeline based on your specific case.',
      category: 'Orthodontics',
    },
    {
      id: 14,
      question: 'Is it normal for my gums to bleed when I brush?',
      answer: 'No, bleeding gums are not normal and often indicate gingivitis or early-stage gum disease. This condition is usually reversible with improved oral hygiene and professional cleaning. If you experience bleeding gums, schedule an appointment for an evaluation.',
      category: 'General',
    },
    {
      id: 15,
      question: 'What should I do if I have dental anxiety?',
      answer: 'We understand dental anxiety is common and take it very seriously. We offer a range of comfort options including sedation dentistry, noise-canceling headphones, weighted blankets, and breaks during treatment. Let us know about your concerns so we can make your visit as comfortable as possible.',
      category: 'Patient Care',
    },
  ];
  
  // Generate unique categories
  const categories = ['All', ...new Set(faqs.map(faq => faq.category))];
  
  // Filter FAQs based on search term and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  
  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-cyan-100">
              Find answers to common questions about our dental services, procedures, and policies.
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filter */}
      <section className="py-10 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="input pl-10 py-3"
                />
                <div className="absolute left-3 top-3.5 text-gray-400">
                  <Search size={20} />
                </div>
              </div>
            </div>
            
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategorySelect(e.target.value)}
                className="input py-3"
              >
                <option value="">Filter by Category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ List */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Common Questions"
            subtitle={filteredFAQs.length ? "Browse answers to our most frequently asked questions." : "No questions found matching your criteria."}
            centered
          />
          
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 mb-6">No questions found matching your search criteria.</p>
                <Button 
                  variant="primary" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <h3 className="text-lg font-bold pr-6">{faq.question}</h3>
                      {openFAQ === faq.id ? (
                        <ChevronUp size={20} className="text-cyan-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown size={20} className="text-cyan-600 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === faq.id && (
                      <div className="px-6 pb-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-gray-700">{faq.answer}</p>
                          <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-500">Category: {faq.category}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Browse by Category"
            subtitle="Explore frequently asked questions by topic."
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.filter(cat => cat !== 'All').map((category, index) => {
              const count = faqs.filter(faq => faq.category === category).length;
              return (
                <button
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition-shadow"
                  onClick={() => handleCategorySelect(category)}
                >
                  <h3 className="text-xl font-bold mb-2">{category}</h3>
                  <p className="text-gray-500">{count} questions</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Still Have Questions */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-cyan-700 text-white rounded-xl shadow-md p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              We\'re here to help. Contact our team for answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
              <Link to="/appointment">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;