import React from 'react';

import { Container, BackGraund } from './styles';

function Skeleton({width, height}) {
  return (
    <Container width={width} height={height}>
        <BackGraund/>
    </Container>);
}

export default Skeleton;