import React from "react";
import { useNavigate } from "react-router-dom";

const Experiences = () => {
  const navigate = useNavigate();

  return (
    <div className='pt-16 text-brand flex flex-col items-center w-full overflow-x-hidden font-["Cinzel"] text-2xl'>
      <section
        title="Experiences"
        className="relative bg-[url('./src/assets/experiences.jpg')] w-full flex justify-center items-center p-16 bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute w-full inset-0 bg-black/75"></div>
        <h1 className="font-['Playfair'] uppercase z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide text-white font-normal text-center px-4">
          Bisht Homestay - Peaceful and Devotional
        </h1>
      </section>
      <section className="w-full flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 max-w-3xl mb-8">
          <h3 className="font-['Playfair'] font-normal tracking-normal uppercase text-base md:text-lg lg:text-xl text-brand">
            Atithi Devo Bhava
          </h3>
          <p className="text-sm md:text-base lg:text-xl text-gray-600 text-center leading-relaxed">
            Constructed with a view of giving tourists a budget friendly &
            authentic experience, giving employment to locals and promoting
            local culture.
          </p>
        </div>

        {/* Feature Images Grid */}
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4">
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
          <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center">
            <img
              src="./src/assets/dhokaney-waterfall.jpg"
              alt="Waterfall Trek"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </section>
      {/* Homestay Overview */}
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

      {/* Spiritual Experiences */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Spiritual Journeys
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Discover the divine essence of Uttarakhand through sacred temples
            and spiritual experiences
          </p>

          {/* Featured Spiritual Image */}
          <div className="overflow-hidden rounded-lg shadow-xl max-w-4xl w-full">
            <img
              src="./src/assets/kainchi-dham.jpg"
              alt="Temple Experience"
              className="w-full h-56 md:h-72 lg:h-96 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
              <div className="text-4xl text-brand">🙏</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Temple Visits
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Explore ancient temples including nearby Kainchi Dham, Golu
                Devta Temple, and local village shrines. Experience morning
                aarti ceremonies and witness age-old spiritual traditions.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
              <div className="text-4xl text-brand">🧘</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Yoga & Meditation
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Start your day with sunrise yoga sessions overlooking the
                mountains. Evening meditation sessions help you find inner peace
                amidst nature's tranquility.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3">
              <div className="text-4xl text-brand">⛰️</div>
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

      {/* Nature & Adventure */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Nature & Adventure
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            For the adventurous souls seeking thrills in the lap of the Shivalik
            Range
          </p>

          {/* Image and Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
            <div className="overflow-hidden rounded-lg shadow-xl h-64 md:h-80 lg:h-full flex items-center justify-center">
              <img
                src="./src/assets/dhokaney-waterfall.jpg"
                alt="Waterfall Trail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl">🥾</span>
                  <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                    Trekking Trails
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Karkotak Trek:</strong> Easy 2-3 hour trek through
                      pine forests and terraced fields
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Waterfall Trail:</strong> Moderate trek to Dhokane
                      Waterfall, perfect for nature photography
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Summit Peaks:</strong> Challenging day treks for
                      experienced hikers with panoramic mountain views
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Village Walks:</strong> Gentle walks through local
                      villages to experience rural life
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md flex flex-col gap-3 md:gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl md:text-3xl">🏕️</span>
                  <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                    Outdoor Activities
                  </h3>
                </div>
                <ul className="flex flex-col gap-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Bird Watching:</strong> Spot mountain birds
                      including colorful pheasants and species
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Camping:</strong> Organized camping experiences
                      under the stars with bonfire evenings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Photography Tours:</strong> Capture stunning
                      landscapes, wildlife, and cultural moments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand mr-2 font-bold">•</span>
                    <span className="text-sm md:text-base">
                      <strong>Star Gazing:</strong> Clear mountain skies offer
                      spectacular views of constellations
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Cultural Immersion
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Experience the rich traditions and warm hospitality of Uttarakhand
          </p>

          {/* Cultural Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
            <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center">
              <img
                src="./src/assets/museum.jpg"
                alt="Cultural Heritage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg h-48 md:h-56 lg:h-64 flex items-center justify-center">
              <img
                src="./src/assets/chitai-temple-golu-devta.jpg"
                alt="Local Traditions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-4xl">🍛</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Local Cuisine
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Learn to cook authentic Pahari dishes like Kafuli, Bhatt ki
                Churkani, and Bal Mithai. Participate in traditional cooking
                sessions using local ingredients.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-4xl">🎨</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Folk Art & Craft
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Visit local artisans and learn traditional crafts like wood
                carving, wool weaving, and Aipan (floor art). Take home handmade
                souvenirs.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-4xl">🏘️</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Village Life
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Experience daily village routines, participate in farming
                activities, and interact with friendly locals who share their
                stories and traditions.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-4xl">🎵</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Folk Music & Dance
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Enjoy traditional Garhwali folk performances during festivals.
                Learn local dance forms and musical instruments like Dhol and
                Damau.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-4xl">🛍️</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Local Markets
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Explore bustling village markets selling organic produce,
                traditional jewelry, woolen garments, and authentic Himalayan
                herbs and spices.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3">
              <div className="text-4xl">🎉</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Festival Celebrations
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                Join in traditional celebrations like Harela, Phool Dei, and
                Ghee Sankranti with vibrant rituals, music, and community
                feasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sightseeing Attractions */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Nearby Attractions
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Explore the stunning natural and spiritual wonders within reach
          </p>
          <div className="flex flex-col gap-6 md:gap-8 w-full">
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="md:w-1/3 overflow-hidden rounded-lg w-full">
                <img
                  src="./src/assets/kainchi-dham.jpg"
                  alt="Kainchi Dham"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col gap-2 md:gap-3">
                <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                  Kainchi Dham
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Visit nearby ancient temples including Kainchi Dham (Steve
                  Jobs visited before iphone launch), Binsar temple, Chitai
                  temple, and Golu devta ghorakhal. Each temple offers unique
                  spiritual experiences and stunning mountain scenery.
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Distance:</strong> 12km |{" "}
                  <strong>Travel Time:</strong> 15-20 minutes
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row-reverse gap-4 md:gap-6 items-center">
              <div className="md:w-1/3 overflow-hidden rounded-lg w-full">
                <img
                  src="./src/assets/vivekananda-tree.jpg"
                  alt="Vivekananda Tree"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col gap-2 md:gap-3">
                <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                  Vivekananda Tree
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Vilva Tree: There is a Vilva tree adjacent to the right-side
                  stairs leading to the Om temple. On the same spot stood the
                  original Vilva tree under which Swamiji used to sit.{" "}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Distance:</strong> 8 km |{" "}
                  <strong>Travel Time:</strong> 10 minutes
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="md:w-1/3 overflow-hidden rounded-lg w-full">
                <img
                  src="./src/assets/ranikhet-binsar.jpg"
                  alt="ranikhet Binsar"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col gap-2 md:gap-3">
                <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                  Binsar Mahadev Temple, Ranikhet
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Amidst the thick deodar is situated the holy temple of Binsar
                  Mahadev. Along with its divinity and spiritual ambiance, this
                  place is famed for its impeccable nature’s beauty. Binsar
                  Mahadev is said to have been built in 9/10th Century and thus
                  has been an important religious place in Uttarakhand since
                  ages. With idols of Ganesh, Har Gauri and Maheshmardini, this
                  temple is known for its architectural finesse. The idol of
                  Maheshmardini is engraved with texts in ‘ Nagarilipi ‘ that
                  dates back to 9th century. The shrine is believed to be built
                  by King Pithu in memory of his father Bindu and it is also
                  known as Bindeshwar temple.{" "}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Distance:</strong> 28-30 km |{" "}
                  <strong>Travel Time:</strong> 1 hour (approx.)
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row-reverse gap-4 md:gap-6 items-center">
              <div className="md:w-1/3 overflow-hidden rounded-lg w-full">
                <img
                  src="./src/assets/chitai-temple-golu-devta.jpg"
                  alt="Chitai Golu Devta Temple"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col gap-2 md:gap-3">
                <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                  Chitai Golu Devta Temple
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  The famous Temple of Chitai Almora is the Golu Devta Chitai
                  temple, dedicated to Gollu or Goljyu Devta an Avtar
                  (incarnation) of Lord Shiva in the form of Gaur Bhairav.
                  Although there are many temples of Golu Devta in Almora but
                  the Chitai Golu Devta Temple is the most sacred one. It is
                  reputed to make every wish come true, provided the worshipper
                  ask for it with a clear conscience.{" "}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Distance:</strong> 30 km |{" "}
                  <strong>Travel Time:</strong> 1 hour
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <div className="md:w-1/3 overflow-hidden rounded-lg w-full">
                <img
                  src="./src/assets/golu-devta-temple.jpg"
                  alt="Ghorakhal Golu Devta Temple"
                  className="w-full h-48 md:h-56 object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col gap-2 md:gap-3">
                <h3 className="font-['Playfair'] text-xl md:text-2xl text-brand">
                  Ghorakhal Golu Devta Temple
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Golu Devta, the presiding deity of the temple is said to be an
                  incarnation of Lord Shiva and the temple is one of the main
                  attractions in Ghorakhal.{" "}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  <strong>Distance:</strong> 15 km |{" "}
                  <strong>Travel Time:</strong> 25-30 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Experiences */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-gray-50 flex flex-col items-center">
        <div className="max-w-7xl w-full flex flex-col items-center gap-6 md:gap-8">
          <h2 className="uppercase font-['Playfair'] text-2xl md:text-3xl lg:text-4xl text-brand text-center">
            Year-Round Experiences
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl text-center px-4">
            Each season brings its own unique charm and activities
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-500 flex flex-col items-center gap-3">
              <div className="text-4xl">🌸</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Spring (Mar-May)
              </h3>
              <ul className="text-gray-700 text-sm flex flex-col gap-2">
                <li>• Rhododendron blooms</li>
                <li>• Pleasant trekking weather</li>
                <li>• Bird migration season</li>
                <li>• Local festivals</li>
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 flex flex-col items-center gap-3">
              <div className="text-4xl">☀️</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Summer (Jun-Aug)
              </h3>
              <ul className="text-gray-700 text-sm flex flex-col gap-2">
                <li>• Escape plains heat</li>
                <li>• Green valleys & waterfalls</li>
                <li>• Monsoon magic</li>
                <li>• Cool mountain retreat</li>
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-orange-500 flex flex-col items-center gap-3">
              <div className="text-4xl">🍂</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Autumn (Sep-Nov)
              </h3>
              <ul className="text-gray-700 text-sm flex flex-col gap-2">
                <li>• Clear mountain views</li>
                <li>• Perfect trekking season</li>
                <li>• Harvest celebrations</li>
                <li>• Photography paradise</li>
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-cyan-500 flex flex-col items-center gap-3">
              <div className="text-4xl">❄️</div>
              <h3 className="font-['Playfair'] text-lg md:text-xl text-brand">
                Winter (Dec-Feb)
              </h3>
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

      {/* Call to Action */}
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
          <button
            onClick={() => navigate("/reservation")}
            className="group relative bg-white text-brand px-6 md:px-8 py-2.5 md:py-3 rounded-md text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">Plan Your Visit</span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-white to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Experiences;
