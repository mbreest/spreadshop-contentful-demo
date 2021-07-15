import React from 'react';
import * as Contentful from 'contentful';
// import { isAbsolute } from 'path';
import { Container } from 'components/Container';

type SectionProps = {
  background: "White" | "Light" | "Dark"; 
  children: React.ReactNode;
};

export const Section = ({ background, children }: SectionProps) => {
  const styling = {
    backgroundColor: background == "White" ? 'white' : background == "Light" ? "#F2F2F2" : "dark",
  }
  const displayBackgroundImage = 

  
  return (
    <section className="relative" style={styling}>
      <Container>
        {children}
      </Container>
    </section>
  )
};
