import React from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Users, Home, Award, Mountain, Coffee } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className=" pt-16 bg-white">
      {/* Hero Section */}
      <section
        title="About Us Header"
        className="relative bg-[url('./src/assets/about-header.jpg')] w-full h-[60vh] md:h-[70vh] flex justify-center items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      >
        <div className="absolute w-full inset-0 bg-black/55 animate-fadeIn"></div>
        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
          <h1 className="font-['Playfair'] uppercase text-4xl md:text-5xl lg:text-6xl tracking-wide text-white font-normal opacity-0 translate-y-8 animate-slideUp"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            About Bisht Homestay
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto font-light opacity-0 translate-y-8 animate-slideUp"
             style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Where Mountain Serenity Meets Warm Hospitality
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="flex justify-center items-center py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-['Cinzel'] text-brand">
                Our Story
              </h2>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Nestled in the serene Shiwalik range, Bisht Homestay began as a dream 
                  to share the beauty and tranquility of mountain life with travelers seeking 
                  an authentic escape from the chaos of city living.
                </p>
                <p>
                  What started as a family home has blossomed into a warm haven where guests 
                  become friends, and memories are woven into every corner. Our journey has 
                  been one of passion, dedication, and an unwavering commitment to providing 
                  an experience that feels like home—only better.
                </p>
                <p>
                  Today, we take pride in offering not just accommodation, but a gateway to 
                  the rich culture, breathtaking landscapes, and peaceful lifestyle of the 
                  Kumaon region.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="./src/assets/hero-carausel-03.jpg" 
                alt="Bisht Homestay" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="flex justify-center items-center py-16 md:py-24 px-6 lg:px-12 bg-[#FAF7F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center flex flex-col justify-center items-center pb-8 md:pb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-['Cinzel'] text-brand mb-4">
              What Makes Us Special
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Experience the perfect blend of comfort, nature, and authentic mountain hospitality
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Home className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-['Cinzel'] text-brand mb-3">
                Homely Comfort
              </h3>
              <p className="text-black/70 leading-relaxed">
                Every room is designed to make you feel at home, with cozy furnishings, 
                warm decor, and modern amenities that ensure a comfortable stay.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Mountain className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-['Cinzel'] text-brand mb-3">
                Scenic Location
              </h3>
              <p className="text-black/70 leading-relaxed">
                Wake up to panoramic mountain views and fresh Himalayan air. Our location 
                offers the perfect base to explore nearby attractions and natural wonders.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-['Cinzel'] text-brand mb-3">
                Personalized Care
              </h3>
              <p className="text-black/70 leading-relaxed">
                We treat every guest like family, offering personalized attention and local 
                insights to make your stay truly memorable and unique.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Coffee className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-['Cinzel'] text-brand mb-3">
                Local Cuisine
              </h3>
              <p className="text-black/70 leading-relaxed">
                Savor authentic Kumaoni delicacies prepared with love using fresh, 
                locally-sourced ingredients that capture the flavors of the mountains.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Users className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-['Cinzel'] text-brand mb-3">
                Community Connection
              </h3>
              <p className="text-black/70 leading-relaxed">
                Experience genuine local culture and traditions. We help you connect with 
                the community and discover the authentic spirit of mountain life.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Award className="text-brand" size={28} />
              </div>
              <h3 className="text-xl font-['Cinzel'] text-brand mb-3">
                Quality Service
              </h3>
              <p className="text-black/70 leading-relaxed">
                From clean, well-maintained rooms to prompt assistance, we ensure every 
                aspect of your stay meets the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="flex justify-center items-center py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img 
                src="./src/assets/hero-carausel-01.jpg" 
                alt="Our Values" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-['Cinzel'] text-brand">
                Our Values & Mission
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-['Cinzel'] text-lg text-brand mb-2">Sustainability</h4>
                  <p className="text-black/70 leading-relaxed">
                    We're committed to eco-friendly practices that protect our beautiful 
                    mountain environment for future generations.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-['Cinzel'] text-lg text-brand mb-2">Authenticity</h4>
                  <p className="text-black/70 leading-relaxed">
                    We showcase the genuine culture and traditions of the region, offering 
                    experiences that are real and meaningful.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-['Cinzel'] text-lg text-brand mb-2">Hospitality</h4>
                  <p className="text-black/70 leading-relaxed">
                    Our mission is to create a welcoming space where every guest feels 
                    valued, comfortable, and truly at home.
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h4 className="font-['Cinzel'] text-lg text-brand mb-2">Excellence</h4>
                  <p className="text-black/70 leading-relaxed">
                    We continuously strive to exceed expectations, ensuring every detail 
                    contributes to an unforgettable stay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex justify-center items-center py-16 md:py-24 px-6 lg:px-12 bg-brand text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-['Playfair'] mb-2">500+</div>
              <div className="text-white/80 font-light">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-['Playfair'] mb-2">10+</div>
              <div className="text-white/80 font-light">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-['Playfair'] mb-2">10+</div>
              <div className="text-white/80 font-light">Local Attractions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-['Playfair'] mb-2">100%</div>
              <div className="text-white/80 font-light">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex justify-center items-center py-16 md:py-24 px-6 lg:px-12">
        <div className="max-w-4xl flex flex-col justify-center items-center gap-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Cinzel'] pb-4 text-brand mb-6">
            Ready to Experience Mountain Serenity?
          </h2>
          <p className="text-black/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book your stay at Bisht Homestay and discover the perfect blend of comfort, 
            nature, and warm hospitality. Your peaceful retreat awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/rooms")}
              className="px-8 py-3 bg-brand text-white font-light rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105"
            >
              View Our Rooms
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3 bg-white border-2 border-brand text-brand font-light rounded-lg hover:bg-brand hover:text-white transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
