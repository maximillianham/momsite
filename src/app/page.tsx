import Image from "next/image";
import Roots from "./components/Straighttotheroot.svg";
import Certificate from "./components/2_SOSA_governingboard(transparent).png";
import blossommain from "./components/blossommain.jpg";
import blossomBG from "./components/AdobeStock_90133252.jpeg";
import mom from "./components/Carrie_Favorite_Website.jpg";
import petalsbg from "./components/AdobeStock_532705031.png";
import petalsbg2 from "./components/AdobeStock_789829685.png";
import Sunnyday from "./components/IMG_2884.jpg";
import sfembodiment from "./components/SFembodiment.png";
import wisdom from "./components/Asset 3.svg";
import tf from "./components/Asset 7.svg";
import { karma } from "@/app/fonts";
import AutoPlayVideo from "./components/AutoPlayVideo";

export default function Home() {
  return (
    <main
      className={`flex flex-col text-white bg-black min-h-screen ${karma.className}`}
    >
      <section className="relative w-full flex items-center justify-center bg-black overflow-hidden">
        {/* Section Background Image */}
        <Image
          className="object-cover z-0"
          src={blossommain}
          alt="Background Image"
          fill
          priority
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-black text-center px-4 sm:px-6 md:px-24 lg:px-40 xl:px-60 py-24 w-full">
          {/* Desktop Logomark */}
          <Image
            className="absolute mx-auto inset-0 z-10 flex flex-col justify-center items-center py-4"
            src={Roots}
            alt="logomark"
            height={75}
            width={75}
          />
          {/* Mobile (IOS) Logo Typeface */}
          <Image
            className="hidden md:block absolute inset-8 z-10 flex-col justify-center"
            src={tf}
            alt="logo typeface"
            height={275}
            width={275}
          />
          {/* Textblock Header */}
          <Image
            className="hidden xl:block max-w-3xl pt-56"
            src={wisdom}
            alt="header type"
            height={775}
            width={775}
          />

          {/* Textblock */}
          <h1 className="text-3xl font-normal pt-4">
            <p className="font-bold">
              What you are seeking is already alive within your body.
            </p>
            <p className="pt-4">
              Through gentle, embodied, practices and a trauma-informed,
              multi-modality approach, we create a sanctuary for your nervous
              system so you can reconnect with your inner wisdom and recieve the
              life thats been calling you home.
            </p>
            <p className="pt-24">
              Schedule a compliumentary somatic session and begin to learn the
              language your body speaks.
            </p>
          </h1>
        </div>
      </section>

      <h3
        className={`text-center text-4xl md:px-24 lg:px-40 xl:px-60 pb-8 pt-24 leading-loose ${karma.className}`}
      >
        About Me
        <p className="pt-8 pb-24 text-xl px-4">
          {" "}
          I am a Multi-modality Somatic Embodiment Coach and SoulFlow&trade;
          Master Practitioner. Through my own journey I've discovered true
          healing goes beyond shifting thoughts and beliefs. It also requires
          addressing trauma stored in our body and learning it's unique
          language. A mind/body approach. I believe the most important
          relationship we have, is the one with ourselves. Our inner world is a
          mirror and our life is the reflection. Having walked my own path of
          transformation, I feel deeply called to empower and support you as you
          reclaim your wholeness. Let's get to the root together and move into a
          life that excites you and feels good in your body!
        </p>
      </h3>
      <div className="flex flex-col mx-auto items-center items-justify">
        <Image
          className="absolute z-0 "
          src={petalsbg}
          alt="bg"
          height={1250}
          width={1250}
        />
        <Image
          className="relative z-10 border-white border-2"
          src={mom}
          alt="mom"
          height={250}
          width={250}
        />
        <div className="text-2xl py-4">Carrie Kurtz</div>
      </div>

      <div
        className={`flex flex-col text-3xl pt-64 pb-32 sm:px-6 md:px-24 lg:px-40 xl:px-60 z-10 justify-center text-center tracking-widest font-regular ${karma.className}`}
      >
        "For the record, I always want the long version when I ask how you're
        doing."
      </div>

      <AutoPlayVideo />
      <div className="relative pt-24 text-center">
        {/* Background Image */}
        <Image
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-0"
          src={petalsbg2}
          alt="bg2"
          height={1250}
          width={1250}
        />
        {/* Foreground Text */}
        <h3 className="relative text-4xl shadow-md z-10">What We'll Do...</h3>
        <div className="text-2xl relative z-10">
          <p className="pt-16">Inner Child Work</p>
          <p className="pt-8">
            Our parts through Internal Family Systems (IFS)
          </p>
          <p className="pt-8">Rewiring the Nervous System</p>
          <p className="pt-8">Attachment Theory</p>
          <p className="pt-8">Emotional Freedom Technique (EFT)</p>
          <p className="pt-8">The body's story through Somatic Experiencing.</p>
          <p className="pt-8">The Enneagram</p>
          <p className="pt-8">SoulFlow&trade;</p>
        </div>
      </div>

      <Image
        className="w-full pt-8 "
        src={sfembodiment}
        alt="sfe"
        height={200}
        width={350}
      />

      <h4 className="text-center text-3xl mx-72 pt-32">
        ITS BEEN FAR TOO LONG DARLING, TO NOT MOVE FROM INSIDE OF YOUR SOUL.
        <p className=" text-2xl pt-16 pb-8 mx-16">
          True embodiment is about embracing your wholeness & learning the
          language your body speaks. SoulFlow&trade; is deeeply rooted in the
          belief that the more embodied you become, the greater magnet you are
          to attracting what it is you desire in your life.
        </p>
        <p className="text-2xl mx-16">
          Through SoulFlow&trade; you can transcend trauma, release limitations,
          and embody your authentic self with confidence. When we get out of our
          minds and into our bodies, it is here where we begin to cultivate long
          term, sustainable success on our terms.
        </p>
      </h4>

      <Image
        className="mx-auto pt-32"
        src={Sunnyday}
        alt="SFDay"
        height={250}
        width={400}
      />
      <p className="mx-auto py-32 text-4xl tracking-widest">
        We Heal In Safe Community
      </p>

      <p className="mx-auto pt-50 text-3xl">Testimonials</p>

      <div className="grid grid-cols-3 text-center text-s pt-16 pb-16 shadow-md">
        <p className="px-16">
          Carrie goes above and beyond, I believe she will excel in any role
          that a client is facing. Carrie has displayed a strong work ethic,
          high standards and a genuine care for the well being of clients. She
          posseses above average emotional intelligence and excellent
          communication skills. - Dr. Morgan Anderson Psy.D
        </p>
        <p className="px-16">
          "Whatever you are trying to move through, you definitely want Carrie
          in your corner. She will make you feel seen, heard and loved; while
          not backing down on what you need to hear in order to move the needle.
          Carries loving, nurturing approach will really help you feel safe,
          looking at the uncomfortable stuff so that you can move through
          anything that is holding you back. There is no staying stuck with
          Carrie. She truly has a gift to help people and I feel so blessed to
          get to work with her. It has been breakthrough after breakthrough and
          my life is shifting in unbelievable ways because of her. - S, 55
        </p>
        <p className="px-16">
          Working with Carrie has been truly transformative. From our very first
          session, her guidance and unwavering support has helped me gain
          clarity and confidence in my personal and professional life. Her
          unique approach to coaching, combined with her genuine empathy, has
          empowered me to set and achieve meaningful goals. What I love most
          about working with Carrie is how she consistently validates my
          feelings and experiences, making me feel truly heard and understood.
          I'm constantly experiencing positive changes in my life daily, with
          the way I act, feel, and view life; Thanks to Carrie! - M, 21
        </p>
      </div>
      <p className="pt-36 pb-56 mx-auto text-center tracking-widest text-3xl px-64">
        "At any given moment you have the power to say: this is not how the
        story is going to end."
      </p>
      <div className="flex flex-col items-center justify-center">
        <Image
          className="absolute"
          src={Certificate}
          alt="cert"
          height={1100}
          width={1100}
        />
        <Image
          className="bg-cover w-auto"
          src={blossomBG}
          alt="BlossomsBG"
          height={500}
          width={1080}
        />
      </div>
      <footer className="bg-neutral-900">
        <div className="mx-auto pt-12 text-center text-xl text-neutral-600">
          HOW TO CONTACT ME
        </div>
        <div className="mx-auto pt-6 text-center text-lg text-neutral-600">
          <a
            href="https://www.soulflowembodiment.com/calendar/soulflow/carrie-kurtz-4-19-25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-pink-400"
          >
            Book Your First Class!
          </a>
        </div>

        <div className="grid grid-cols-3 text-center text-lg text-white shadow-inner pt-12">
          <p className="-mx-auto px-24">Text Me</p>

          <p className="px-24">Send Me An Email</p>

          <p className="px-24">Follow Me</p>
        </div>
        <div className="grid grid-cols-3 text-center text-lg text-white shadow-inner pb-28">
          <p className="px-24">(949) 433 - 9364</p>

          <p className="px-24">ckurtz85@gmail.com</p>

          <p className="px-24">@Carrie_kurtz</p>
        </div>
        <div className="bg-black pb-14"></div>
      </footer>
    </main>
  );
}
