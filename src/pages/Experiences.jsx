import React from "react";
import { useNavigate } from "react-router-dom";

const Experiences = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-16 text-brand flex flex-col items-center w-full overflow-x-hidden font-["Cinzel"] text-2xl'>

      {/* ─── Hero ─── */}
      <section
        title="Experiences"
        className="relative bg-[url('./src/assets/experiences.jpg')] w-full flex justify-center items-center p-16 bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute w-full inset-0 bg-black/75"></div>
        <h1 className="font-['Playfair'] uppercase z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide text-white font-normal text-center px-4">
          Bisht Homestay - Peaceful and Devotional
        </h1>
      </section>

      {/* ─── Intro ─── */}
      <section className="w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 max-w-3xl mb-8">
          <h3 className="font-['Playfair'] font-normal tracking-normal uppercase text-base md:text-lg lg:text-xl text-brand">
            Atithi Devo Bhava
          </h3>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 text-center leading-relaxed">
            Constructed with a view of giving tourists a budget friendly &amp;
            authentic experience, giving employment to locals and promoting
            local culture.
          </p>
        </div>

        {/* Feature Images Grid */}
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-4">
          <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center">
            <img
              src="./src/assets/mountain.jpg"
              alt="Mountain Views"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center">
            <img
              src="./src/assets/chitai-temple-golu-devta.jpg"
              alt="Temple Experience"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center sm:col-span-2 md:col-span-1">
            <img
              src="./src/assets/dhokaney-waterfall.jpg"
              alt="Waterfall Trek"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ─── Homestay Overview ─── */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-8 md:gap-12">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Your Mountain Retreat
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full">
            <div className="md:w-1/2 overflow-hidden rounded-lg shadow-xl w-full h-64 md:h-80 lg:h-96">
              <img
                className="w-full h-full object-cover"
                src="./src/assets/homestay.jpg"
                alt="our homestay"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 text-left w-full">
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                Nestled in the serene Shivalik foothills, Bisht Homestay offers
                an authentic mountain experience where tradition meets comfort.
                Wake up to breathtaking sunrise views over peaks, breathe in the
                pure mountain air, and immerse yourself in the warm hospitality
                of Uttarakhand.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                Our homestay provides the perfect base for exploring the
                spiritual and natural wonders of the region, from ancient
                temples to pristine trekking trails. Experience local culture,
                savor traditional Pahari cuisine, and create memories that will
                last a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Spiritual Journeys ─── */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Spiritual Journeys
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Discover the divine essence of Uttarakhand through sacred temples
            and spiritual experiences
          </p>

          <div className="overflow-hidden rounded-lg shadow-xl max-w-4xl w-full">
            <img
              src="./src/assets/kainchi-dham.jpg"
              alt="Temple Experience"
              className="w-full h-56 md:h-72 lg:h-96 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {/* Temple Visits */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
              <div className="text-brand">
                {/* Temple / Diya icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7h20L12 2z"/>
                  <path d="M5 7v13h14V7"/>
                  <path d="M9 7v13"/>
                  <path d="M15 7v13"/>
                  <path d="M12 4v3"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Temple Visits
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Explore ancient temples including nearby Kainchi Dham, Golu
                Devta Temple, and local village shrines. Experience morning
                aarti ceremonies and witness age-old spiritual traditions.
              </p>
            </div>

            {/* Yoga & Meditation */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
              <div className="text-brand">
                {/* Lotus / meditation pose */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="5" r="1.5"/>
                  <path d="M6 11c1-2 3-3 6-3s5 1 6 3"/>
                  <path d="M6 11c0 3 2 5 4 6l2-2 2 2c2-1 4-3 4-6"/>
                  <path d="M10 17l2-2 2 2"/>
                  <path d="M8 20h8"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Yoga &amp; Meditation
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Start your day with sunrise yoga sessions overlooking the
                mountains. Evening meditation sessions help you find inner peace
                amidst nature's tranquility.
              </p>
            </div>

            {/* Pilgrimage Tours */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 sm:col-span-2 md:col-span-1">
              <div className="text-brand">
                {/* Compass / journey icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Pilgrimage Tours
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Join guided tours to local destinations. We can arrange
                transportation and knowledgeable local guides for your spiritual
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Nature & Adventure ─── */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Nature &amp; Adventure
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            For the adventurous souls seeking thrills in the lap of the Shivalik Range
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
            <div className="overflow-hidden rounded-lg shadow-xl h-64 md:h-80 lg:h-full flex items-center justify-center">
              <img
                src="./src/assets/dhokaney-waterfall.jpg"
                alt="Waterfall Trail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Trekking */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand flex-shrink-0">
                    {/* hiking boot outline */}
                    <path d="M3 18h18v2H3z"/>
                    <path d="M5 18V10l4-4h6l2 4v8"/>
                    <path d="M9 6V4"/>
                    <path d="M5 14h6"/>
                  </svg>
                  <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                    Trekking Trails
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Karkotak Trek:</strong> Easy 2-3 hour trek through pine forests and terraced fields
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Waterfall Trail:</strong> Moderate trek to Dhokane Waterfall, perfect for nature photography
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Summit Peaks:</strong> Challenging day treks for experienced hikers with panoramic mountain views
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Village Walks:</strong> Gentle walks through local villages to experience rural life
                    </span>
                  </li>
                </ul>
              </div>

              {/* Outdoor */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-brand flex-shrink-0">
                    {/* tent icon */}
                    <path d="M3 21l9-16 9 16H3z"/>
                    <path d="M12 5v16"/>
                    <path d="M9 21l3-6 3 6"/>
                  </svg>
                  <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                    Outdoor Activities
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Bird Watching:</strong> Spot mountain birds including colorful pheasants and species
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Camping:</strong> Organized camping experiences under the stars with bonfire evenings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Photography Tours:</strong> Capture stunning landscapes, wildlife, and cultural moments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Star Gazing:</strong> Clear mountain skies offer spectacular views of constellations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Cultural Immersion ─── */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Cultural Immersion
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Experience the rich traditions and warm hospitality of Uttarakhand
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
            <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center">
              <img src="./src/assets/museum.jpg" alt="Cultural Heritage" className="w-full h-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center">
              <img src="./src/assets/chitai-temple-golu-devta.jpg" alt="Local Traditions" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">

            {/* Local Cuisine */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-brand">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                  <path d="M7 2v20"/>
                  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Local Cuisine</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Learn to cook authentic Pahari dishes like Kafuli, Bhatt ki Churkani, and Bal Mithai.
                Participate in traditional cooking sessions using local ingredients.
              </p>
            </div>

            {/* Folk Art & Craft */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-brand">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Folk Art &amp; Craft</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Visit local artisans and learn traditional crafts like wood carving, wool weaving,
                and Aipan (floor art). Take home handmade souvenirs.
              </p>
            </div>

            {/* Village Life */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-brand">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Village Life</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Experience daily village routines, participate in farming activities,
                and interact with friendly locals who share their stories and traditions.
              </p>
            </div>

            {/* Folk Music & Dance */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-brand">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"/>
                  <circle cx="6" cy="18" r="3"/>
                  <circle cx="18" cy="16" r="3"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Folk Music &amp; Dance</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Enjoy traditional Kumaoni folk performances during festivals. Learn local dance
                forms and musical instruments like Dhol and Damau.
              </p>
            </div>

            {/* Local Markets */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-brand">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Local Markets</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Explore bustling village markets selling organic produce, traditional jewelry,
                woolen garments, and authentic Himalayan herbs and spices.
              </p>
            </div>

            {/* Festival Celebrations */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-brand">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10"/>
                  <path d="M12 6v6l3 3"/>
                  <path d="M17 3l2 2-2 2"/>
                  <path d="M21 3l-2 2 2 2"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Festival Celebrations</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Join in traditional celebrations like Harela, Phool Dei, and Ghee Sankranti
                with vibrant rituals, music, and community feasts.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Nearby Attractions ─── */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Nearby Attractions
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Explore the stunning natural and spiritual wonders within reach
          </p>

          {/* Reusable distance/time row */}
          {[
            {
              img: "./src/assets/kainchi-dham.jpg",
              alt: "Kainchi Dham",
              title: "Kainchi Dham",
              desc: "Visit nearby ancient temples including Kainchi Dham (Steve Jobs visited before iPhone launch), Binsar temple, Chitai temple, and Golu devta ghorakhal. Each temple offers unique spiritual experiences and stunning mountain scenery.",
              distance: "12km",
              time: "15-20 minutes",
              reverse: false,
            },
            {
              img: "./src/assets/vivekananda-tree.jpg",
              alt: "Vivekananda Tree",
              title: "Vivekananda Tree",
              desc: "Vilva Tree: There is a Vilva tree adjacent to the right-side stairs leading to the Om temple. On the same spot stood the original Vilva tree under which Swamiji used to sit.",
              distance: "8 km",
              time: "10 minutes",
              reverse: true,
            },
            {
              img: "./src/assets/ranikhet-binsar.jpg",
              alt: "ranikhet Binsar",
              title: "Binsar Mahadev Temple, Ranikhet",
              desc: "Amidst the thick deodar is situated the holy temple of Binsar Mahadev. Along with its divinity and spiritual ambiance, this place is famed for its impeccable nature's beauty. Built in the 9/10th Century, it is an important religious place in Uttarakhand.",
              distance: "28-30 km",
              time: "1 hour (approx.)",
              reverse: false,
            },
            {
              img: "./src/assets/chitai-temple-golu-devta.jpg",
              alt: "Chitai Golu Devta Temple",
              title: "Chitai Golu Devta Temple",
              desc: "The famous Temple of Chitai Almora is dedicated to Gollu or Goljyu Devta, an incarnation of Lord Shiva. It is reputed to make every wish come true, provided the worshipper asks with a clear conscience.",
              distance: "30 km",
              time: "1 hour",
              reverse: true,
            },
            {
              img: "./src/assets/golu-devta-temple.jpg",
              alt: "Ghorakhal Golu Devta Temple",
              title: "Ghorakhal Golu Devta Temple",
              desc: "Golu Devta, the presiding deity of the temple is said to be an incarnation of Lord Shiva and the temple is one of the main attractions in Ghorakhal.",
              distance: "15 km",
              time: "25-30 minutes",
              reverse: false,
            },
          ].map((place) => (
            <div
              key={place.title}
              className={`bg-gray-50 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col ${place.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-4 md:gap-6 items-center`}
            >
              <div className="md:w-1/3 overflow-hidden rounded-lg w-full">
                <img src={place.img} alt={place.alt} className="w-full h-48 md:h-56 object-cover" />
              </div>
              <div className="md:w-2/3 flex flex-col gap-2 md:gap-3">
                <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">{place.title}</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{place.desc}</p>
                <p className="text-xs md:text-sm text-gray-600 flex flex-wrap gap-4 mt-1">
                  <span className="flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    <strong>Distance:</strong> {place.distance}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <strong>Travel Time:</strong> {place.time}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Seasonal Experiences ─── */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Year-Round Experiences
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Each season brings its own unique charm and activities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">

            {/* Spring */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 flex flex-col items-center gap-3">
              <div className="text-green-500">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12"/>
                  <path d="M12 12C12 7 7 5 7 5s1 5 5 7z"/>
                  <path d="M12 12c0-5 5-7 5-7s-1 5-5 7z"/>
                  <path d="M12 12c-5 0-7-5-7-5s5 1 7 5z"/>
                  <path d="M12 12c5 0 7-5 7-5s-5 1-7 5z"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Spring (Mar-May)</h3>
              <ul className="text-gray-700 text-sm flex flex-col gap-2">
                <li>• Rhododendron blooms</li>
                <li>• Pleasant trekking weather</li>
                <li>• Bird migration season</li>
                <li>• Local festivals</li>
              </ul>
            </div>

            {/* Summer */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 flex flex-col items-center gap-3">
              <div className="text-blue-500">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Summer (Jun-Aug)</h3>
              <ul className="text-gray-700 text-sm flex flex-col gap-2">
                <li>• Escape plains heat</li>
                <li>• Green valleys &amp; waterfalls</li>
                <li>• Monsoon magic</li>
                <li>• Cool mountain retreat</li>
              </ul>
            </div>

            {/* Autumn */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 flex flex-col items-center gap-3">
              <div className="text-orange-500">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Autumn (Sep-Nov)</h3>
              <ul className="text-gray-700 text-sm flex flex-col gap-2">
                <li>• Clear mountain views</li>
                <li>• Perfect trekking season</li>
                <li>• Harvest celebrations</li>
                <li>• Photography paradise</li>
              </ul>
            </div>

            {/* Winter */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500 flex flex-col items-center gap-3">
              <div className="text-cyan-500">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <line x1="12" y1="2" x2="12" y2="22"/>
                  <path d="M20 16l-4-4 4-4"/>
                  <path d="M4 8l4 4-4 4"/>
                  <path d="M16 4l-4 4-4-4"/>
                  <path d="M8 20l4-4 4 4"/>
                </svg>
              </div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">Winter (Dec-Feb)</h3>
              <ul className="text-gray-700 text-sm flex flex-col gap-2">
                <li>• Snowfall experiences</li>
                <li>• Cozy bonfire evenings</li>
                <li>• Winter photography</li>
                <li>• Serene tranquility</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-brand text-white flex justify-center items-center">
        <div className="max-w-4xl flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-center">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center px-4">
            Whether you seek spiritual enlightenment, adventure thrills, or
            peaceful relaxation, Bisht Homestay offers the perfect experience
            tailored to your dreams.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Experiences;