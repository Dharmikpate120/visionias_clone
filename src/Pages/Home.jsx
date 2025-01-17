import React from "react";
import ClassRoom from "../Components/ClassRoom";
import ImageCarousel from "../Components/ImageCarousel";

function Home() {
  return (
    <>
      <div className="container flex justify-center items-center min-w-full">
        <ImageCarousel />
      </div>
      <div className="flex flex-col lg:flex-row xl:gap-10 xl:px-20 justify-center  items-center w-full my-5">
        <div className="w-[90%] sm:px-10">
          <h1 className="text-3xl font-bold mb-4">What's New</h1>
          <div className="bg-main1 h-[80vh]  lg:text-xl overflow-y-scroll p-4  rounded">
            <p>
              Your scrollable text goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Voluptas doloribus vel illo, omnis eveniet accusamus
              laboriosam facere accusantium, fugiat consectetur impedit a
              quibusdam repudiandae nostrum ut delectus distinctio, pariatur
              assumenda. Quisquam laborum iure, molestiae magni dolorem eius,
              doloremque veritatis quo quaerat quod, quos et. Maxime quod hic
              atque cumque. Repellendus nam, earum labore recusandae nesciunt ea
              incidunt illo praesentium ex. Beatae, reiciendis saepe itaque
              assumenda libero quibusdam labore porro doloribus nulla placeat
              fugit eos quia corrupti harum tenetur earum cumque iure rem
              expedita! Cupiditate libero, rerum veniam modi hic at. Obcaecati,
              pariatur corrupti cupiditate veritatis autem dolor tempore aliquam
              nemo quis quae temporibus provident soluta quas dicta eaque
              repellendus explicabo fuga ipsa cum atque ea placeat adipisci
              nesciunt. Dicta, fugiat. Voluptatum, consectetur ratione. Saepe,
              labore vel accusantium, deserunt nisi cumque amet sed sunt
              deleniti quod possimus optio expedita odit eius. Animi reiciendis
              facilis itaque molestias mollitia dignissimos exercitationem
              quidem tenetur. Sit, harum nam nostrum quod quas nobis ipsum
              doloremque voluptatibus perspiciatis, sed rem sint maiores magnam.
              Eos sint eius quos impedit perspiciatis culpa. Magnam voluptates
              iste eum asperiores voluptatem distinctio. Recusandae, at nisi
              quaerat ad quasi necessitatibus perspiciatis explicabo beatae
              laborum molestias non dignissimos aut iusto repudiandae natus
              facere corporis ab id suscipit dolorum architecto enim sint. Odio,
              corrupti itaque! Fuga fugit quam et laboriosam ipsa voluptas amet
              culpa delectus at aperiam praesentium quod labore ex alias cum
              doloremque necessitatibus, voluptates ratione neque adipisci
              deleniti minus harum temporibus! Tempora, quibusdam. Odit neque,
              enim architecto accusamus adipisci quisquam eligendi magnam eius
              culpa dolor recusandae laudantium minus earum beatae commodi
              dignissimos praesentium ipsum, dolores voluptates voluptas tempore
              ipsa quia. Quod, quia aliquid! Facere soluta repudiandae harum
              corrupti impedit necessitatibus esse est, voluptas enim quo
              officia reprehenderit fugiat odio ut? Omnis temporibus quis neque
              animi nesciunt perspiciatis adipisci minima, dolores similique
              maxime! Voluptate.
            </p>
          </div>
        </div>
        <div className="w-[90%] sm:px-10 sm:pt-5">
          <h1 className="text-3xl font-bold mb-4">Live And Latest Videos</h1>
          <div className="space-y-4">
            <iframe
              className="h-[15rem] sm:h-[18rem] lg:h-[15rem]"
              width="100%"
              src="https://www.youtube.com/embed/example1"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <iframe
              className="h-[15rem] sm:h-[18rem] lg:h-[15rem]"
              width="100%"
              src="https://www.youtube.com/embed/example2"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <section className="my-10 flex justify-center flex-col items-center ">
        <h2 className="text-2xl text-center text-light6 font-bold mb-4 w-full lg:mb-7 max-w-[80%]">
          India's Top Coaching Institute for UPSC CSE
        </h2>
        <p className=" text-center max-w-[80%]">
          We provide comprehensive General Studies Foundation Course, Prelims &
          Mains Test Series, One-to-One Mentorship, Current Affairs and much
          more to help you achieve your IAS Dream.
        </p>
      </section>
      <div className=" bg-main3 blue-400 pt-7">
        <h2 className="text-3xl font-bold mb-4 w-full flex justify-center lg:mb-7">
          Test Series
        </h2>
        <section className="mb-8 ">
          <div className="px-5 text-md lg:flex gap-10">
            <div className="w-full h-full px-5 py-3 mb-10">
              <p className="pb-5">
                Test series is the hallmark of the of Vision IAS. Every year
                thousands of students utilise Vision IAS test series based on
                INNOVATIVE ASSESSMENT SYSTEM™ to improve their scores. The
                immense response from the students and huge surge every year is
                a living testimony of our commitment to quality. The test series
                from Vision IAS has become an indispensable tool for every
                serious aspirant.
              </p>
              <h3 className="text-lg font-semibold mb-2">Program Objective:</h3>
              <p className="text-base">
                This is a comprehensive and intensive ‘interactive’ distance
                learning / online / class room program focusing on sincere IAS
                Aspirants who will appear in Civil Service Exam . Our experts
                provide step by step guidance to aspirants for understanding the
                concepts of the subject and prepare them for effective answer
                writing.
              </p>
              <h3 className="text-lg font-semibold mb-2">
                Approach & Strategy:
              </h3>
              <p className="text-base">
                Our simple, practical and focused approach will help aspirants
                understand the demand of UPSC exam effectively. Our strategy is
                to constantly innovate to keep the preparation process dynamic
                and give personalized attention to individual aspirants based on
                factors like core competence, availability of time and resource
                and the requirement of Civil Service Exam.
              </p>
            </div>
            <div className="w-full bg-main6 px-5 py-3 mb-10">
              <h3 className="text-lg font-semibold mb-2">
                We provide following modules for test series -
              </h3>
              <ul className="list-disc list-inside">
                <h4 className="font-bold text-gray-500">Mains - 2025</h4>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <h4 className="font-bold text-gray-500">Prelims - 2025</h4>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <h4 className="font-bold text-gray-500">Mains - 2024</h4>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <li>List Topic</li>
                <h4 className="font-bold text-gray-500">Prelims - 2024</h4>
                <li>List Topic</li>
                <li>List Topic</li>
              </ul>
              <button className="w-full bg-main3 text-main6 py-2 rounded-lg mt-2">
                Register
              </button>
            </div>
          </div>
        </section>
      </div>

      <ClassRoom />
    </>
  );
}

export default Home;
