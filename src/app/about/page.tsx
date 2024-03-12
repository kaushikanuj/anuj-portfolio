
import About from '@/components/about';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Anuj Portfolio Website",
};


const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;