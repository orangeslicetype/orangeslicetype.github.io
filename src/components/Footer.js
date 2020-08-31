import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  color: #0000ff;
  font-size: 14px;
  line-height: 1.29;

  a {
    text-decoration: underline;
  }

  & + & {
    margin-top: 18px;
  }
`;

export default () => {
  return (
    <Footer>
      <Paragraph>
        Design: Wooseok Jang <br />
        Programming: Yeseul Oh
      </Paragraph>
      <Paragraph>
        © 2018–2020 Orange Slice Type. <br />
        All rights reserved, including the right of <br />
        reproduction in whole or in part in any form. <br />
        Please do not distribute our fonts illegally.
      </Paragraph>
    </Footer>
  );
};