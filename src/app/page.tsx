import Image from "next/image";
import Roots from "./components/straighttotheroot.svg";
import Certificate from "./components/governingboard.png";
import blossommain from "./components/blossommain.jpg";
import blossomBG from "./components/adobestock_90133252.jpeg";
import mom from "./components/carrie_favorite_website.jpg";
import petalsbg from "./components/adobestock_532705031.png";
import petalsbg2 from "./components/adobestock_789829685.png";
import Sunnyday from "./components/img_2884.jpg";
import sfembodiment from "./components/sf_embodiment.png";
import { karma, Rhd } from "@/app/fonts";
import AutoPlayVideo from "./components/AutoPlayVideo";

export default function Home() {
  return (
    <main className={`text-white bg-black min-h-screen ${karma.className}`}>
      <section className="relative w-full items-center justify-center bg-black overflow-hidden">
        {/* Section Background Image */}
        <Image
          className="object-cover z-0"
          src={blossommain}
          alt="Background Image"
          fill
          priority
        />

        {/*LogoMark*/}
        <Image
          className="relative mx-auto z-10 justify-center items-center py-4"
          src={Roots}
          alt="logomark"
          height={65}
          width={65}
        />
        {/* Mobile (IOS) Logo Typeface */}
        <div
          className={`relative hidden md:block text-black text-center text-2xl font-bold ${Rhd}`}
        >
          Straight To The Root
        </div>

        <div className="relative z-10 items-center justify-center text-black text-center px-4 sm:px-6 md:px-24 lg:px-40 xl:px-60 py-24 w-full">
          {/* Textblock */}
          <h1 className="text-2xl font-normal pt-14">
            <p
              className={`z-10 justify-center text-4xl tracking-widest font-bold ${Rhd}`}
            >
              There Is Wisdom In Your Roots...
            </p>
            <p className="pt-2">
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
          Master Practitioner. Through my own journey I&apos;ve discovered true
          healing goes beyond shifting thoughts and beliefs. It also requires
          addressing trauma stored in our body and learning it&apos;s unique
          language. A mind/body approach. I believe the most important
          relationship we have, is the one with ourselves. Our inner world is a
          mirror and our life is the reflection. Having walked my own path of
          transformation, I feel deeply called to empower and support you as you
          reclaim your wholeness. Let&apos;s get to the root together and move
          into a life that excites you and feels good in your body!
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
        &quot;For the record, I always want the long version when I ask how
        you&apos;re doing.&quot;
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
        <h3 className="relative text-4xl shadow-md z-10">
          What We&apos;ll Do...
        </h3>
        <div className="text-2xl relative z-10">
          <p className="pt-16">Inner Child Work</p>
          <p className="pt-8">
            Our parts through Internal Family Systems (IFS)
          </p>
          <p className="pt-8">Rewiring the Nervous System</p>
          <p className="pt-8">Attachment Theory</p>
          <p className="pt-8">Emotional Freedom Technique (EFT)</p>
          <p className="pt-8">
            The body&apos;s story through Somatic Experiencing.
          </p>
          <p className="pt-8">The Enneagram</p>
          <p className="pt-8">SoulFlow&trade;</p>
        </div>
      </div>

      <Image
        className="w-full pt-32 "
        src={sfembodiment}
        alt="sfe"
        height={200}
        width={350}
      />

      <h4 className="flex flex-wrap md:flex-col text-center text-3xl pt-32 px-8 md:px-64">
        <p>
          ITS BEEN FAR TOO LONG DARLING, TO NOT MOVE FROM INSIDE OF YOUR SOUL.
        </p>
        <p className="text-2xl pt-16 pb-8">
          True embodiment is about embracing your wholeness & learning the
          language your body speaks. SoulFlow&trade; is deeeply rooted in the
          belief that the more embodied you become, the greater magnet you are
          to attracting what it is you desire in your life.
        </p>
        <p className="text-2xl">
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
      <p className="text-center py-32 text-4xl tracking-widest">
        We Heal In Safe Community
      </p>

      <p className="text-center pt-50 text-3xl">Testimonials</p>

      <div className="flex flex-col md:flex-row text-center text-s pt-16 pb-16 shadow-md">
        <p className="px-16 pt-8 md:pt-0 md:w-1/3">
          Carrie goes above and beyond, I believe she will excel in any role
          that a client is facing. Carrie has displayed a strong work ethic,
          high standards and a genuine care for the well being of clients. She
          posseses above average emotional intelligence and excellent
          communication skills. - Dr. Morgan Anderson Psy.D
        </p>
        <p className="px-16 pt-8 md:pt-0 md:w-1/3">
          &quot;Whatever you are trying to move through, you definitely want
          Carrie in your corner. She will make you feel seen, heard and loved;
          while not backing down on what you need to hear in order to move the
          needle. Carries loving, nurturing approach will really help you feel
          safe, looking at the uncomfortable stuff so that you can move through
          anything that is holding you back. There is no staying stuck with
          Carrie. She truly has a gift to help people and I feel so blessed to
          get to work with her. It has been breakthrough after breakthrough and
          my life is shifting in unbelievable ways because of her. - S, 55
        </p>
        <p className="px-16 pt-8 md:pt-0 md:w-1/3">
          Working with Carrie has been truly transformative. From our very first
          session, her guidance and unwavering support has helped me gain
          clarity and confidence in my personal and professional life. Her
          unique approach to coaching, combined with her genuine empathy, has
          empowered me to set and achieve meaningful goals. What I love most
          about working with Carrie is how she consistently validates my
          feelings and experiences, making me feel truly heard and understood.
          I&apos;m constantly experiencing positive changes in my life daily,
          with the way I act, feel, and view life; Thanks to Carrie! - M, 21
        </p>
      </div>
      <p className="pt-36 pb-56 px-8 md:px-36 text-center tracking-widest text-3xl">
        &quot;At any given moment you have the power to say: this is not how the
        story is going to end.&quot;
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

        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-lg text-white shadow-inner pt-12">
          <p className="-mx-auto px-24">Text Me</p>

          <p className="px-24">Send Me An Email</p>

          <p className="px-24">Follow Me</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center text-lg text-white shadow-inner pb-28">
          <p className="px-24">(949) 433 - 9364</p>

          <p className="px-24">ckurtz85@gmail.com</p>

          <p className="px-24">@Carrie_kurtz</p>
        </div>
        <div className="bg-black pb-14"></div>
      </footer>
    </main>
  );
}
