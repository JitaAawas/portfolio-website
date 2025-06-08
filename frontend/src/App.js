import React, { useState } from 'react';
import './App.css';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3746952/pexels-photo-3746952.jpeg" 
          alt="Jitaaawas Girls Hostel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/70 to-emerald-900/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent">
            Jita Aawash
          </span>
          <br />
          <span className="text-3xl md:text-5xl font-semibold">Girls Hostel</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed">
          Safe, Homely & Peaceful Environment<br />
          <span className="text-lg">Your Home Away From Home in Kathmandu</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Now - Call Us
          </a>
          <a href="#about" className="inline-block border-2 border-green-200 text-green-100 hover:bg-green-100 hover:text-green-900 font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300">
            Learn More
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-200 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Why Choose Jita Aawash?
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
            A perfect blend of safety, comfort, and convenience for girls in Kathmandu
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-4">Central Location</h3>
            <p className="text-green-700">Located at Milan Chowk, Balbhadra Marga - perfectly connected to colleges and amenities</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-4">Homely Environment</h3>
            <p className="text-green-700">Feel at home with our warm, caring atmosphere and supportive community</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-4">Peaceful Atmosphere</h3>
            <p className="text-green-700">Quiet, serene environment perfect for studying and personal growth</p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-900 mb-4">Healthy Food</h3>
            <p className="text-green-700">Nutritious, home-cooked meals that keep you healthy and energized</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Facilities Section Component
const FacilitiesSection = () => {
  const facilities = [
    {
      icon: "📶",
      title: "High-Speed WiFi",
      description: "24/7 reliable internet connectivity for studies and entertainment",
      image: "https://images.pexels.com/photos/11873895/pexels-photo-11873895.jpeg"
    },
    {
      icon: "👕",
      title: "Laundry Service",
      description: "Professional laundry services to keep your clothes fresh and clean",
      image: "https://images.pexels.com/photos/8533140/pexels-photo-8533140.jpeg"
    },
    {
      icon: "📚",
      title: "Study Areas",
      description: "Quiet, well-lit study spaces designed for focused learning",
      image: "https://images.unsplash.com/photo-1521920592574-49e0b121c964"
    },
    {
      icon: "🎥",
      title: "24/7 CCTV",
      description: "Complete security monitoring for your safety and peace of mind",
      image: "https://images.pexels.com/photos/8533133/pexels-photo-8533133.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            World-Class Facilities
          </h2>
          <p className="text-xl text-green-700 max-w-3xl mx-auto">
            Everything you need for a comfortable and productive stay
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="text-2xl font-bold text-green-900 mb-4">{facility.title}</h3>
                  <p className="text-green-700 leading-relaxed">{facility.description}</p>
                </div>
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Rooms Section Component
const RoomsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comfortable Accommodation
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Choose the perfect room that suits your needs and budget
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Single Seater Room */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1646236731457-18f0c8a6d188" 
                alt="Single Seater Room"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Single Seater Room</h3>
            <ul className="space-y-3 mb-6 text-green-100">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Complete privacy
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Personal workspace
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Individual storage
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
              Contact for Pricing
            </button>
          </div>
          
          {/* Double Seater Room */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
            <div className="mb-6">
              <img 
                src="https://images.pexels.com/photos/8533140/pexels-photo-8533140.jpeg" 
                alt="Double Seater Room"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Double Seater Room</h3>
            <ul className="space-y-3 mb-6 text-green-100">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Shared accommodation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Budget-friendly option
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Companion living
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300">
              Contact for Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Safety Section Component
const SafetySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-green-700 leading-relaxed">
              We understand that safety is the top concern for parents and students. That's why we've implemented comprehensive security measures.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">24/7 CCTV Monitoring</h3>
                  <p className="text-green-700">Complete surveillance of all common areas and entrances for maximum security</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Secure Entry System</h3>
                  <p className="text-green-700">Controlled access with proper entry and exit protocols for all residents</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Trained Security Staff</h3>
                  <p className="text-green-700">Professional security personnel available round the clock for your protection</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2283494/pexels-photo-2283494.jpeg" 
              alt="Safe Environment"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Ready to make Jitaaawas your home? Contact us today!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-100">Phone Number</h4>
                    <a href="tel:+9779861728083" className="text-xl font-bold hover:text-green-300 transition-colors">
                      +977 9861728083
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-100">Email Address</h4>
                    <a href="mailto:jitaaawash@gmail.com" className="text-xl font-bold hover:text-green-300 transition-colors">
                      jitaaawash@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-100">Address</h4>
                    <p className="text-xl font-bold">
                      Kathmandu 34<br />
                      Milan Chowk, Balbhadra Marga<br />
                      <span className="text-green-300">Kathmandu, Nepal</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-4">Why Call Us?</h4>
              <ul className="space-y-2 text-green-100">
                <li>• Immediate response to your queries</li>
                <li>• Schedule a visit to see our facilities</li>
                <li>• Get personalized room recommendations</li>
                <li>• Discuss pricing and availability</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-green-100 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-green-300/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-green-100 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-green-300/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-green-100 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-green-300/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-green-100 font-semibold mb-2">Preferred Room Type</label>
                <select
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-green-300/30 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                  value={formData.roomType}
                  onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                >
                  <option value="">Select room type</option>
                  <option value="single">Single Seater</option>
                  <option value="double">Double Seater</option>
                </select>
              </div>
              
              <div>
                <label className="block text-green-100 font-semibold mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-green-300/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-green-950 text-green-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Jita Aawash Girls Hostel</h3>
            <p className="text-green-200 leading-relaxed">
              Providing safe, comfortable, and homely accommodation for girls in Kathmandu since our establishment.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#rooms" className="hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p>📍 Milan Chowk, Balbhadra Marga</p>
              <p>📞 +977 9861728083</p>
              <p>✉️ jitaaawash@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-300">
          <p>&copy; 2025 Jitaaawas Girls Hostel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <RoomsSection />
      <SafetySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;