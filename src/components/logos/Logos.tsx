import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiClerk,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiStripe,
  SiGithub,
  SiVercel,
  SiJira,
  SiPrisma,
  SiTypescript,
  SiTraefikproxy,
  SiServerless,
} from "react-icons/si";
import { IconType } from "react-icons";
import OLLAMA from "./OLLAMA.svg"

export const Logos = () => {
  return (
    <section className="relative -mt-2 -rotate-1 scale-[1.01] border-y-2 border-zinc-900 bg-white">
      <div className="relative z-0 flex overflow-hidden border-b-2 border-zinc-900">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="relative z-0 flex overflow-hidden">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-white to-white/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-white to-white/0" />
    </section>
  );
};

const TranslateWrapper = ({
  children,
  reverse,
}: {
  children: JSX.Element;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon, name }: { Icon: IconType; name: string }) => {
  return (
    <span className="flex items-center justify-center gap-4 px-4 py-2 md:py-4">
      <Icon className="text-2xl text-orange-400 md:text-3xl fill-current" />
      <span className="whitespace-nowrap text-xl font-semibold uppercase md:text-2xl">
        {name}
      </span>
    </span>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={OLLAMA} name="OLLAMA" />
    <LogoItem Icon={SiClerk} name="Clerk" />
    <LogoItem Icon={SiStripe} name="Stripe" />
    <LogoItem Icon={SiGithub} name="Github" />
    <LogoItem Icon={SiVercel} name="Vercel" />
    <LogoItem Icon={SiJira} name="Jira" />
    <LogoItem Icon={SiServerless} name="Serverless" />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiNextdotjs} name="NEXT.JS" />
    <LogoItem Icon={SiTailwindcss} name="TailwindCSS" />
    <LogoItem Icon={SiPrisma} name="Prisma" />
    <LogoItem Icon={SiTypescript} name="Typescript" />
    <LogoItem Icon={SiTraefikproxy} name="Traefik" />
    <LogoItem Icon={SiDocker} name="Docker" />
    <LogoItem Icon={SiKubernetes} name="Kubernetes" />
    <LogoItem Icon={SiAmazonaws} name="AWS" />
  </>
);
