// Next.js imports
import Image from 'next/image'

// Images imports
import sufferingfrommelancholia from '@/assets/images/sufferingfrommelancholia.png'

export default function Home() {
  return (
    <>
      <div className="pt-12">
        <Image
          src={sufferingfrommelancholia}
          width={220}
          height={220}
          alt="Profile picture"
          className="rotate-[4.5deg] rounded-2xl border border-white/20"
        />
      </div>
      <h1 className="pt-11 text-2xl font-semibold">
        I&apos;m Filip Dadaj. I live in Liberec city, where I transform ideas into experiences that shape the online
        landscape.
      </h1>
      <p className="pb-12 pt-8">
        I&apos;ve been passionate about creating and building things for as long as I can remember. I built my first PC
        when I was 14 years old, meticulously assembling each component to create a machine capable of running the
        latest games and software.
        <br />
        <br />
        This project also sparked my interest in 3D modeling, as I began exploring the possibilities of creating digital
        worlds and objects with the powerful machine I had built. My journey with technology began even earlier;
        I&apos;ve been playing video games since I was 3, and they sparked my fascination with the digital world.
        <br />
        <br />
        One of my other early interests was solving puzzles. By the time I was 10, I could solve a Rubik&apos;s Cube in
        under a minute, a skill that taught me patience, problem-solving, and the satisfaction of achieving a complex
        goal. This knack for solving problems led me to explore coding, and I found a particular love for Tailwind CSS.
        Its utility-first approach and flexibility resonated with my desire for efficiency and creativity in web
        development.
        <br />
        <br />
        Today, I apply these skills and passions in my work, constantly seeking new challenges and opportunities to
        innovate. My early experiences have shaped my approach to technology, where I combine the precision of a puzzle
        solver with the imagination of a gamer, always striving to build and create something extraordinary.
      </p>
    </>
  )
}
