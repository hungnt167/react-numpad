import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';
import { media } from '../styles/media-templates';
import { HEIGHT, WIDTH } from '../helper';

const BackgroundPanel = styled.div`
  ${props =>
    props.theme.coords
      ? ``
      : `
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
`};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 1em;
  align-items: ${props => props.theme.position};
`;

const Content = styled.div`
  z-index: 10000;
  ${props =>
    props.theme.coords
      ? `
    position: absolute;
    ${props.theme.coords.top ? `top: ${props.theme.coords.top};` : ``}
    ${props.theme.coords.bottom ? `bottom: ${props.theme.coords.bottom};` : ``}
    height: ${props.height}px;
    `
      : `
    display: flex;    
    width: 100%;
    justify-content: center;
    align-items: ${props.theme.position};
    height: ${props.theme.position === 'center' ? '100vh' : `${props.height}px`};
  `};
  ${media.desktop`left: ${props => (props.theme.coords ? props.theme.coords.left : 0)};`}
  ${media.desktop`right: ${props => (props.theme.coords ? props.theme.coords.right : 0)};`}
  ${media.mobile`left: 0;`}
  ${media.mobile`right: auto;`}
  ${media.mobile`width: 100wv;`}
  `;

const Wrapper = props => (
  <BackgroundPanel>
    <Container>
      <Content width={props.width} height={props.height}>
        {props.children}
      </Content>
    </Container>
  </BackgroundPanel>
);

Wrapper.displayName = 'Wrapper';

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Wrapper.defaultProps = {
  width: WIDTH,
  height: HEIGHT,
};
export default Wrapper;
