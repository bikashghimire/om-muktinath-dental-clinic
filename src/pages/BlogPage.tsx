import React, { useEffect, useState } from 'react';
import { Search, Calendar, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Blog | BrightSmile Dental Clinic';
    window.scrollTo(0, 0);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '5 Tips for Naturally Whiter Teeth',
      excerpt: 'Discover simple ways to keep your smile bright and white without expensive treatments or harsh chemicals.',
      date: 'May 12, 2025',
      author: 'Dr. Jennifer Miller',
      image: 'https://images.pexels.com/photos/3845741/pexels-photo-3845741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Dental Tips',
    },
    {
      id: 2,
      title: 'Teaching Kids Good Dental Habits',
      excerpt: 'Learn how to make oral hygiene fun and establish lifelong healthy habits for your children from an early age.',
      date: 'April 25, 2025',
      author: 'Dr. Sofia Rodriguez',
      image: 'https://images.pexels.com/photos/4269693/pexels-photo-4269693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Pediatric',
    },
    {
      id: 3,
      title: 'The Complete Guide to Dental Implants',
      excerpt: 'Everything you need to know about dental implants: the procedure, recovery, maintenance, and benefits.',
      date: 'April 10, 2025',
      author: 'Dr. Michael Chen',
      image: 'https://images.pexels.com/photos/6627411/pexels-photo-6627411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Procedures',
    },
    {
      id: 4,
      title: 'Understanding Gum Disease: Causes and Prevention',
      excerpt: 'Learn about the causes of periodontal disease, how to recognize the symptoms, and effective prevention strategies.',
      date: 'March 28, 2025',
      author: 'Dr. James Thompson',
      image: 'https://images.pexels.com/photos/3845775/pexels-photo-3845775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Oral Health',
    },
    {
      id: 5,
      title: 'Choosing the Right Toothbrush and Toothpaste',
      excerpt: 'Navigate the overwhelming options with our guide to selecting the best toothbrush and toothpaste for your specific needs.',
      date: 'March 15, 2025',
      author: 'Rachel Green',
      image: 'https://images.pexels.com/photos/3952042/pexels-photo-3952042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Dental Tips',
    },
    {
      id: 6,
      title: 'The Connection Between Oral Health and Overall Wellness',
      excerpt: 'Research shows strong links between oral health and conditions like heart disease, diabetes, and more. Learn why dental care matters for your whole body.',
      date: 'February 28, 2025',
      author: 'Dr. Jennifer Miller',
      image: 'https://images.pexels.com/photos/4386521/pexels-photo-4386521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Oral Health',
    },
    {
      id: 7,
      title: 'Invisalign vs. Traditional Braces: Which is Right for You?',
      excerpt: 'Compare the benefits, costs, treatment time, and lifestyle considerations for both Invisalign and traditional braces.',
      date: 'February 10, 2025',
      author: 'Dr. James Thompson',
      image: 'https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Orthodontics',
    },
    {
      id: 8,
      title: 'Dealing with Dental Anxiety: Tips for Nervous Patients',
      excerpt: 'Practical strategies to overcome dental anxiety and make your visits to the dentist more comfortable and stress-free.',
      date: 'January 25, 2025',
      author: 'Dr. Sofia Rodriguez',
      image: 'https://images.pexels.com/photos/3845749/pexels-photo-3845749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Patient Care',
    },
    {
      id: 9,
      title: 'Nutrition for Healthy Teeth: Foods to Embrace and Avoid',
      excerpt: 'Discover which foods promote dental health and which ones contribute to decay and other oral health problems.',
      date: 'January 12, 2025',
      author: 'Rachel Green',
      image: 'https://images.pexels.com/photos/3872435/pexels-photo-3872435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'Dental Tips',
    },
  ];
  
  // Generate unique categories
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="animate-fade-in pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dental Health Blog</h1>
            <p className="text-xl text-cyan-100">
              Stay informed with our latest articles, dental tips, and oral health information.
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
                  placeholder="Search articles..."
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
      
      {/* Featured Article */}
      <section className="section">
        <div className="container-custom">
          <SectionHeading
            title="Latest Article"
            subtitle="Our most recent publication on dental health."
          />
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].category}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
                <p className="text-gray-600 mb-6">By {blogPosts[0].author}</p>
                <div>
                  <Button variant="primary">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Articles */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="All Articles"
            subtitle={filteredPosts.length ? "Browse our collection of dental health articles." : "No articles found matching your criteria."}
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="card group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <span className="bg-cyan-100 text-cyan-700 px-2 py-1 rounded-md">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">By {post.author}</span>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-cyan-600 font-medium group-hover:text-cyan-700"
                    >
                      Read more
                      <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination - would be dynamic in a real app */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" className="px-4 py-2">
                Previous
              </Button>
              <a href="#" className="px-4 py-2 bg-cyan-600 text-white rounded-md">1</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">2</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">3</a>
              <span className="px-2">...</span>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 rounded-md">9</a>
              <Button variant="outline" className="px-4 py-2">
                Next
              </Button>
            </nav>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="section">
        <div className="container-custom">
          <div className="bg-cyan-700 rounded-xl shadow-md p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Stay up to date with the latest dental tips, health information, and clinic news.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow input py-3 px-4"
                  required
                />
                <Button
                  type="submit"
                  variant="accent"
                  className="bg-white text-cyan-700 hover:bg-gray-100"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-cyan-200 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;