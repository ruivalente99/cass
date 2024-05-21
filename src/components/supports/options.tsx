import { MotionConfig, motion } from "framer-motion";
import { Content } from 'next/font/google';
import { title } from 'process';

const Testimonial = ({
  imgSrc,
  name,
  title,
  company,
  content,
}: {
  imgSrc: string;
  name: string;
  title: string;
  company: string;
  content: string;
}) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-zinc-900 bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-24 rounded-lg border-2 border-zinc-900 bg-orange-200"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-zinc-600">
            {title} – <span className="text-orange-400">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Luís",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?hair=hat,variant60"
        name="Luís"
        title="Senior Software Engineer"
        company="Openvia"
        content="The idea behind CASS is incredibly promising. The potential to have customized AI solutions tailored to our needs could revolutionize our daily workflows. Even just discussing the possibilities has shown me how impactful AI can be in streamlining our processes and driving efficiency."
      />
    ),
  },
  {
    title: "Pedro",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Pedro"
        name="Pedro"
        title="Software Engineer"
        company="Moloni"
        content="I'm excited about the potential of CASS's AI solutions. The concept of easily integrating AI into our operations without extensive technical knowledge is exactly what we need. The promise of making advanced AI accessible and practical could greatly enhance our productivity and innovation."
      />
    ),
  },
  {
    title: "Rodrigo",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Rodrigo"
        name="Rodrigo"
        title="Student"
        company="UTAD"
        content="The idea of CASS is fantastic for students like me. Having a platform that simplifies AI and makes it easy to apply in real-world scenarios would be incredibly beneficial. I can see how this tool could support my studies and give me hands-on experience with cutting-edge technology."
      />
    )
  }
  // {
  //   title: "YouTubers",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dan"
  //       name="Dan S."
  //       title="YouTuber"
  //       company="@TheChannel"
  //       content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis qui fuga, deserunt doloribus, vero autem libero sed dolorum nostrum quidem in soluta magni eos excepturi."
  //     />
  //   ),
  // },
  // {
  //   title: "Bloggers",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Carey"
  //       name="Carey J."
  //       title="Writer"
  //       company="theblog.com"
  //       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. At, quo harum."
  //     />
  //   ),
  // },
  // {
  //   title: "Authors",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dani"
  //       name="Moriah H."
  //       title="Author"
  //       company="Books About Things"
  //       content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis qui fuga, deserunt doloribus, vero autem libero sed dolorum nostrum quidem in soluta magni eos excepturi."
  //     />
  //   ),
  // },
  // {
  //   title: "Designers",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Phil"
  //       name="Phil K."
  //       title="UI/UX Design"
  //       company="The Other Company"
  //       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a laborum earum quo unde pariatur consequuntur molestias!"
  //     />
  //   ),
  // },
  // {
  //   title: "Consultants",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Stetson"
  //       name="Stetson R."
  //       title="Consultant"
  //       company="The Company Company"
  //       content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, dicta. Doloremque, hic magnam? Eveniet quisquam porro rerum, voluptatem et aliquam eaque nesciunt quod magni veritatis tempora ducimus!"
  //     />
  //   ),
  // },
  // {
  //   title: "Photographers",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Patty"
  //       name="Patty G."
  //       title="Photographer"
  //       company="@ThePictureLady"
  //       content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, quam? Quia veniam cupiditate officiis."
  //     />
  //   ),
  // },
  // {
  //   title: "Videographers",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Kert"
  //       name="Kert Y."
  //       title="Film Maker"
  //       company="@MovieDude"
  //       content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, eius corrupti! Alias dolore quibusdam ipsum magnam delectus nulla sint harum ab?"
  //     />
  //   ),
  // },
  // {
  //   title: "Local Business",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Joanne"
  //       name="Joanne F."
  //       title="Business Owner"
  //       company="The Local Company"
  //       content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis qui fuga, deserunt doloribus, vero autem libero sed dolorum nostrum quidem in soluta magni eos excepturi."
  //     />
  //   ),
  // },
];
