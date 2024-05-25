export default function Home() {
  return (
    <>
      <h1 className="pt-11 text-2xl font-semibold">
        Software I use, gadgets I love,
        <br />
        other things I recommend.
      </h1>
      <p className="pt-8">
        Here are the things I use to build software, stay productive, or buy to fool myself into thinking I&apos;m being
        productive when I&apos;m really just procrastinating. Here&apos;s a big list of all of my favorite stuff.
      </p>

      <div className="relative mt-20 space-y-8 border-l border-white/20 pl-36">
        <p className="absolute left-4 top-[1px] text-sm">Workstation</p>
        <div className="gap-2 space-y-2">
          <h4>Mac mini M1 8GB RAM (2020)</h4>
          <p className="text-sm text-neutral-400">
            I was using an windows based pc prior to this and the difference is night and day. I&apos;ve never heard the
            fans turn on a single time, even under the incredibly heavy loads I put it through with our various
            situations.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>DELL Ultrasharp U2520D</h4>
          <p className="text-sm text-neutral-400">
            The color accuracy and sharpness on this monitor are phenomenal. It has significantly improved my
            productivity and the overall quality of my work. Hands down, the best small monitor for Mac.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>HHKB Profesional Hybrid Type-S keyboard</h4>
          <p className="text-sm text-neutral-400">
            Typing on this keyboard is an absolute joy. The quiet keys and compact layout make it perfect for long
            coding sessions.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>Logitech g502 Lightspeed</h4>
          <p className="text-sm text-neutral-400">
            The responsiveness and ergonomic design of this mouse are unmatched. It has enhanced my productivity tasks
            immensely.
          </p>
        </div>
      </div>

      <div className="relative mt-16 space-y-8 border-l border-white/20 pl-36">
        <p className="absolute left-4 top-[1px] text-sm">Development</p>
        <div className="gap-2 space-y-2">
          <h4>Zed code editor</h4>
          <p className="text-sm text-neutral-400">
            I don’t like visual studio code it is soooo overwhelming for me. Zed is incredibly fast and efficient. Its
            minimalist design helps me focus on coding without any distractions.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>Next.js</h4>
          <p className="text-sm text-neutral-400">
            Next.js makes building React applications a breeze. The server-side rendering and static site generation
            features are top-notch.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>Blender</h4>
          <p className="text-sm text-neutral-400">
            A powerful tool for 3D modeling and animation. It&apos;s comprehensive feature set rivals even the most
            expensive software out there.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>Arc</h4>
          <p className="text-sm text-neutral-400">
            Arc&apos;s browser by the The Browser Company is seamless and fast. It has quickly become my go-to for
            browsing and research.
          </p>
        </div>
      </div>

      <div className="relative mt-16 space-y-8 border-l border-white/20 pl-36">
        <p className="absolute left-4 top-[1px] text-sm">Design</p>
        <div className="gap-2 space-y-2">
          <h4>Figma</h4>
          <p className="text-sm text-neutral-400">
            Figma&apos;s collaborative design features are incredible. It&apos;s streamlined my workflow and improved
            team collaboration.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>Photoshop</h4>
          <p className="text-sm text-neutral-400">
            Great software and powerful editing tools are unparalleled. It&apos;s my go-to software for any graphic
            design project.
          </p>
        </div>
      </div>

      <div className="relative mb-12 mt-16 space-y-8 border-l border-white/20 pl-36">
        <p className="absolute left-4 top-[1px] text-sm">Productivity</p>
        <div className="gap-2 space-y-2">
          <h4>Excalidraw</h4>
          <p className="text-sm text-neutral-400">
            A fantastic tool for creating sketches, diagrams, and visual notes with a hand-drawn aesthetic. The
            interface is straightforward and intuitive, allowing users to start drawing without a steep learning curve.
          </p>
        </div>
        <div className="gap-2 space-y-2">
          <h4>Spotify</h4>
          <p className="text-sm text-neutral-400">
            Spotify offers an extensive music library and personalized playlists that perfectly match my taste.
            It&apos;s user-friendly interface make it convenient for any situation. Plus, the ability to discover new
            music keeps my listening experience fresh.
          </p>
        </div>
      </div>
    </>
  )
}
