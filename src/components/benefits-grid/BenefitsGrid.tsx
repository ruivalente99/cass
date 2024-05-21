import React from "react";
import { motion } from "framer-motion";
import { IntegrationsBlock } from "./IntegrationsBlock";
import { CollaborateBlock } from "./CollaborateBlock";
import { HighlighBlocks } from "./HighlighBlocks";
import { SectionHeading } from "../shared/SectionHeading";
import { SectionSubheading } from "../shared/SectionSubheading";

export const BenefitsGrid = () => {
  return (
    <motion.section
      transition={{
        staggerChildren: 0.1,
      }}
      initial="initial"
      whileInView="whileInView"
      className="relative mx-auto grid max-w-6xl grid-cols-3 gap-4 px-2 md:px-4"
    >
      <div className="col-span-3">
        <SectionHeading>The clear benefits of 
          <span className="text-orange-600"> CASS</span>
        </SectionHeading>
        <SectionSubheading>
        Benefit from an intuitive platform that simplifies AI integration, making advanced technology accessible to non-technical users.
        </SectionSubheading>
      </div>
      <HighlighBlocks />
      <CollaborateBlock />
      <IntegrationsBlock />
    </motion.section>
  );
};
