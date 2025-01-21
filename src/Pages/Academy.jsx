import React, { useState } from 'react'
import { Link } from "react-router-dom"
const Academy = () => {
  const [academy, setAcademy] = useState([
    {
      city: "Bhavnagar (HO)",
      address: "Girikandra Plazza” 1935-A, 1st Floor",
      location: "Opp. Ravi Gym. SBI Road, Sardarnagar, Bhavnagar.",
      tel: [7575060404],
      maplocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3097.6899310909257!2d72.151256!3d21.755177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQ1JzE4LjYiTiA3MsKwMDknMDQuNSJF!5e1!3m2!1sen!2sin!4v1737451940757!5m2!1sen!2sin"
    },
    {
      city: "Surendranagar",
      address: "Labh - 1 Complex, Above Atithi Hotel",
      location: "Opp. M.P.Shah Arts & Science College, Surendranagar.",
      tel: [7575061313],
      maplocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3076.3557255491733!2d71.643374!3d22.723540000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzI0LjciTiA3McKwMzgnMzYuMiJF!5e1!3m2!1sen!2sin!4v1737452041203!5m2!1sen!2sin"
    },
    {
      city: "Gandhinagar",
      address: "Shanti Arcade” 2nd Floor, Above Patanjali Store",
      location: "Nr.Gha-2 Circle, Sector-6, Gandhinagar.",
      tel: [8238238787, 8238238989],
      maplocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3065.278449378579!2d72.63636699999999!3d23.21122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDEyJzQwLjQiTiA3MsKwMzgnMTAuOSJF!5e1!3m2!1sen!2sin!4v1737452106805!5m2!1sen!2sin"
    },
    {
      city: "Rajkot",
      address: "Ambition Building, Above Indian Bank,",
      location: "Indira Circle",
      tel: [7575060303],
      maplocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3086.065753800146!2d70.766257!3d22.287752999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE3JzE1LjkiTiA3MMKwNDUnNTguNSJF!5e1!3m2!1sen!2sin!4v1737452148087!5m2!1sen!2sin"
    },
    {
      city: "Anand - Vidhyanagar",
      address: "Second Floor, Jalu Arcade",
      location: " Nr. Bank Of Baroda, Nana Bazar",
      tel: [7575062323],
      maplocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3086.065753800146!2d70.766257!3d22.287752999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE3JzE1LjkiTiA3MMKwNDUnNTguNSJF!5e1!3m2!1sen!2sin!4v1737452148087!5m2!1sen!2sin"
    },
    {
      city: "Junagadh",
      address: "Second Floor, Gunatit Plaza,",
      location: " Opp. Motibaugh Gate No.2,",
      tel: [7575003111],
      maplocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3086.065753800146!2d70.766257!3d22.287752999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE3JzE1LjkiTiA3MMKwNDUnNTguNSJF!5e1!3m2!1sen!2sin!4v1737452148087!5m2!1sen!2sin"
    },
    {
      city: "Godhara",
      address: "Second Floor, Mangalmurti Complex,",
      location: " Opp. Vodafone Office, Church Road, Godhara.",
      tel: [7573801717],
      maplocation: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3086.065753800146!2d70.766257!3d22.287752999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE3JzE1LjkiTiA3MMKwNDUnNTguNSJF!5e1!3m2!1sen!2sin!4v1737452148087!5m2!1sen!2sin"
    }
  ]);

  const [gmap, setgmap] = useState('https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3086.065753800146!2d70.766257!3d22.287752999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE3JzE1LjkiTiA3MMKwNDUnNTguNSJF!5e1!3m2!1sen!2sin!4v1737452148087!5m2!1sen!2sin');
  return (
    <>
      <div className=' bg-main2 p-5 px-[15%] border border-none  my-10'>
        <p>
          WORLD INBOX ACADEMY, established in 2012. 9 More branches apart from Bhavnagar i.e Gandhinagar, Himmatnagar, Mehsana, Ahmedabad, Surendranagar, Rajkot, Anand, Junagadh and Godhara. We are rooting deeper with experience and excellence. The academy took its students’ performance and results as the merit to success. Exactitude of getting through in any exams without distractions dispersing in the surroundings is exceptionally & immensely emphasized here. Precision behind every aspect (from classroom activities, material, tests, faculties to other areas off the class) of organization to fetch the result is what something people drop in for. Well disciplined working climate and trained human resource proves to be icing on the cake.
        </p>
      </div>

      <div className='flex flex-col md:flex-row  my-5 px-[5%]'>
        <div className=' xl:h-[80vh] xl:overflow-y-scroll xl:scrollbar-none '>
          <h1 className='text-3xl mb-3 font-extrabold flex justify-center'>Our Locations</h1>
          <div className=' grid grid-cols-1 xl:grid-cols-2 place-items-center xl:place-items-end'>
            {
              academy.map((item) => {
                return (
                  <div className="bg-main3 w-[15rem] h-[20rem] hover:bg-main2 hover:shadow-custom-big-light transition-all p-6 rounded-lg flex flex-col shadow-md m-3 justify-between">
                    <h2 className="text-2xl font-bold mb-2 justify-start items-start">
                      {item.city}
                    </h2>
                    <p className="text-white-700">
                      {item.address}
                    </p>
                    <p className="text-white  mb-2">
                      {item.location}
                    </p>
                    <p className="text-white-100  mb-4">
                      <p className='font-bold'> Phone Numbers:</p>
                      <ul className="list-disc ml-2">

                        {item.tel.map((tt) => {
                          return <a href={`tel:${tt}`}>
                            <li className='list-none'>{tt}</li>
                          </a>
                        })}
                      </ul>
                    </p>
                    <button className=" items-end bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        setgmap(item.maplocation)
                      }}
                    >
                      view in map
                    </button>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className=''>
          <div className='h-[80vh] flex items-center justify-center xl:w-[50vw]'>
            <iframe src={gmap} className='w-[90%] h-[100%]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>


    </>
  )
}

export default Academy