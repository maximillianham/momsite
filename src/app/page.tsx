import Image from "next/image";
import Roots from "./components/LotusColorSTTR.png";
import Certificate from "./components/governingboard.png";
import blossommain from "./components/blossommain.jpg";
import blossomBG from "./components/adobestock_90133252.jpeg";
import mom from "./components/carrie_favorite_website.jpg";
import petalsbg from "./components/adobestock_532705031.png";
import petalsbg2 from "./components/adobestock_789829685.png";
import Sunnyday from "./components/IMG_5889.jpeg";
import fallingPetals from "./components/falling-petals.png";
import sfembodiment from "./components/sf_highres.png";
import { karma, Rhd } from "@/app/fonts";
import AutoPlayVideo from "./components/AutoPlayVideo";
import { testimonials } from "./data/testimonials";
import TextSlider from "./components/TextSlider";

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
          className="relative md:left-1/3 px-4 z-10 pt-8"
          src={Roots}
          alt="logomark"
          height={150}
          width={150}
        />

        <div className="relative z-10 items-center justify-center text-black text-center px-4 sm:px-6 md:px-24 lg:px-40 xl:px-60 pb-24 w-full">
          {/* Textblock */}
          <h1 className="text-2xl font-normal pt-14">
            <p
              className={`z-10 justify-center text-4xl tracking-widest pb-4 font-bold ${Rhd}`}
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
            <p className="pt-24 pb-16">
              Schedule a complimentary somatic session and begin to learn the
              language your body speaks.
            </p>
          </h1>
          <div className="">
            <div className="">
              <a
                href="tel:+19494339364"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-lg bg-neutral-400 hover:bg-pink-400 rounded-full text-center text-neutral-60 hover:text-white lg:px-32 px-8"
              >
                Text me to book a free consultation!
              </a>
            </div>
          </div>
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
        className={`flex flex-col text-3xl px-6 md:px-0 pt-16 md:pt-64 md:pb-32 md:w-[800px] mx-auto z-10 justify-center text-center tracking-widest font-regular ${karma.className}`}
      >
        &quot;For the record, I always want the long version when I ask how
        you&apos;re doing.&quot;
      </div>

      <div className="flex justify-center items-center">
        <AutoPlayVideo />
      </div>

      <div className="relative pt-18 px-6 md:px-0">
        {/* Background Image */}
        <Image
          className="absolute z-0 opacity-80 invisible md:visible"
          src={fallingPetals}
          alt="bg2"
          height={1250}
          width={1250}
        />
        {/* Foreground Text */}
        <h3 className="relative text-4xl text-center z-10">
          What We&apos;ll Do...
        </h3>
        <div className="relative text-3xl flex flex-col text-center lg:px-56 lg:gap-y-12 gap-y-4 pt-24 lg:pt-32 z-10">
          <h4>Inner Child Work</h4>
          <p className="text-2xl">
            Meet the younger parts of you with safety and compassion so they no
            longer have to protect you in old ways.
          </p>
          <h4>Our parts through Internal Family Systems (IFS)</h4>
          <p className="text-2xl">
            Explore your inner world without judgment. Every part has a purpose,
            and you learn how to lead from a regulated, grounded Self.
          </p>
          <h4>Rewiring the Nervous System</h4>
          <p className="text-2xl">
            Work with the body to build capacity for safety, rest, and
            connection so change feels steady and sustainable.
          </p>
          <h4>Attachment Theory</h4>
          <p className="text-2xl">
            Understand how early attachment patterns shape your relationships
            today, with partners, family, and yourself, and gently shift toward
            greater security and trust.
          </p>
          <h4> Somatic EMDR </h4>
          <p className="text-2xl">
            Combines traditional Eye Movement Desensitization and Reprocessing
            (EMDR) with body-centered somatic psychology to treat trauma stored
            in the nervous system. So the past can finally feel like it&apos;s
            in the past, not something you&apos;re still living inside of.
          </p>
          <h4>The body&apos;s story through Somatic Experiencing.</h4>
          <p className="text-2xl">
            Listen to the body&apos;s story through sensation tracking and
            movement, allowing stored stress and survival responses to release
            safely.
          </p>
          <h4>The Enneagram</h4>
          <p className="text-2xl">
            A tool for self awareness and compassion that helps uncover
            unconscious patterns and create more choice.
          </p>
          <h4>SoulFlow&trade;</h4>
          <p className="text-2xl">
            An intuitive somatic movement and dance practice that supports
            emotional release, nervous system regulation.
          </p>
        </div>
      </div>

      <Image
        className="w-full lg:pt-32 pt-16"
        src={sfembodiment}
        alt="sfe"
        height={303}
        width={1500}
      />

      <h4 className="flex flex-wrap md:flex-col text-center text-3xl lg:pt-32 pt-16 px-8 md:px-64">
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

      <p className="text-center pt-50 tracking-wide text-3xl">
        Some Words About Carrie...
      </p>
      <TextSlider />
      <div>
        <div className="flex flex-col lg:flex-row text-justify lg:text-center lg:gap-x-8 pt-16 pb-16 shadow-md px-12 lg:gap-y-8"></div>
      </div>
      <p className="pt-12 pb-56 px-6 md:px-36 text-center tracking-widest text-3xl">
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
      <footer className="bg-neutral-900 py-20">
        <div className="mx-auto pt-6 text-center text-lg text-neutral-600">
          <a
            href="https://www.soulflowembodiment.com/calendar/soulflow/carrie-kurtz-4-19-25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-pink-400"
          >
            Book Your First Class Today!
          </a>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-8 lg:gap-y-0 md:flex-row text-center text-lg text-white shadow-inner pt-12 ">
          <div className="md:w-1/3">
            <div>Text Me</div>
            <a href="sms:+19494339364" className=" hover:underline">
              (949) 433 - 9364
            </a>
          </div>

          <div className="md:w-1/3">
            <div>Send Me An Email</div>
            <a href="mailto:ckurtz85@gmail.com" className="hover:underline">
              ckurtz85@gmail.com
            </a>
          </div>

          <div className="md:w-1/3">
            <div>Follow Me</div>
            <a
              href="https://www.instagram.com/@carrie.kurtz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @Carrie_kurtz
            </a>
          </div>
        </div>
      </footer>
      <div className="flex flex-col text-center">
        <a href="/terms" className="hover:underline">
          {" "}
          Terms & Conditions
        </a>
      </div>
    </main>
  );
}
