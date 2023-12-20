import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function sectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl text-center font-medium capitalize mb-8">
      {children}
    </h2>
  );
}
