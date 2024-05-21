import React, { useState } from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { Button } from "../shared/Button";
import { CheckListItem, CheckListItemType } from "./CheckListItem";
import { Toggle, ToggleOptionsType } from "./Toggle";
import { AnimatePresence, motion } from "framer-motion";

export const Pricing = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("annual");
  return (
    <section className="mx-auto max-w-7xl px-2 md:px-4">
      <SectionHeading>Pricing</SectionHeading>
      <Toggle selected={selected} setSelected={setSelected} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
        <PriceColumn
          title="Individuals"
          price="0"
          statement="For individuals looking to up their productivity gains. Free forever."
          items={[
            {
              children: "1 Team Member",
              checked: true,
            },
            {
              children: "1 Chat",
              checked: true,
            },
            {
              children: "Self Host",
              checked: true,
            },
            {
              children: "API Integrations",
              checked: false,
            },
            {
              children: "Upgraded Support",
              checked: false,
            },
            {
              children: "Custom Branding",
              checked: false,
            },
          ]}
        />
        <PriceColumn
          title="Teams"
          price={selected === "monthly" ? "500" : "450"}
          statement="For teams looking to scale their team efficiently. Stay on track."
          highlight
          items={[
            {
              children: "∞ Team Members",
              checked: true,
            },
            {
              children: "∞ Chats",
              checked: true,
            },
            {
              children: "Upgraded Support",
              checked: true,
            },
            {
              children: "Self Host",
              checked: true,
            },
            {
              children: "Custom Branding & Consulting",
              checked: selected !== "monthly",
            },
            {
              children: "Workshops",
              checked: false,
            },
            {
              children: "Feature Requests",
              checked: false,
            }
          ]}
        />
        <PriceColumn
          title="CASS Supreme Plan"
          price={"By Quote"}
          statement="For enterprises looking to see new heights. Manage without the stress"
          items={[
            {
              children: "∞ Team Members",
              checked: true,
            },
            {
              children: "∞ Chats",
              checked: true,
            },
            {
              children: "Upgraded Support",
              checked: true,
            },
            {
              children: "Custom Branding & Consulting",
              checked: true,
            },
            {
              children: "Self Host",
              checked: true,
            },
            {
              children: "Workshops",
              checked: true,
            },
            {
              children: "Feature Requests",
              checked: true,
            }
         
          ]}
        />
      </div>
    </section>
  );
};

type Props = {
  highlight?: boolean;
  title: string;
  price: string;
  statement: string;
  items: CheckListItemType[];
};

const PriceColumn = ({ highlight, title, price, statement, items }: Props) => {
  return (
    <div
      style={{
        boxShadow: highlight ? "0px 6px 0px rgb(24, 24, 27)" : "",
      }}
      className={`relative w-full rounded-lg p-6 md:p-8 ${highlight ? "border-2 border-zinc-900 bg-white" : ""}`}
    >
      {highlight && (
        <span className="absolute right-4 top-0 -translate-y-1/2 rounded-full bg-orange-400 px-2 py-0.5 text-sm text-white">
          Most Popular
        </span>
      )}

      <p className="mb-6 text-xl font-medium">{title}</p>
      <div className="mb-6 flex items-center gap-3">
        <AnimatePresence mode="popLayout">
          <motion.span
            initial={{
              y: 24,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -24,
              opacity: 0,
            }}
            key={price}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="block text-6xl font-bold"
          >
            {
              price === "By Quote" ? price : `${price}€`
            }
          </motion.span>
        </AnimatePresence>
        <motion.div layout className="font-medium text-zinc-600">
          {
            price === "By Quote" ? <span className="block"></span> : <span className="block">/month</span>
          }
        </motion.div>
      </div>

      <p className="mb-8 text-lg">{statement}</p>

      <div className="mb-8 space-y-2">
        {items.map((i) => (
          <CheckListItem key={i.children} checked={i.checked}>
            {i.children}
          </CheckListItem>
        ))}
      </div>

      <Button className="w-full" intent={highlight ? "primary" : "secondary"}>
        Try it now
      </Button>
    </div>
  );
};
