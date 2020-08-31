import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 20px;
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

const Address = styled.address`
  margin-top: 18px;
  color: #0000ff;
  font-size: 14px;
  line-height: 1.29;
  font-style: normal;
`;

export default () => {
  return (
    <Header>
      <Paragraph>
        Orange Slice Type <br />
        is an Amsterdam based type foundry <br />
        founded by Wooseok Jang in 2018. <br />
        The web version of the catalogue is now in <br />
        development together with webshop. <br />
        Both are hopefully going to be live before <br />
        COVID-19 pandemic ends.
      </Paragraph>
      <Paragraph>
        If you ever have any questions about <br />
        licensing, research, custom work, or <br />
        some interesting idea you have, <br />
        please feel free to get in touch.
      </Paragraph>
      <Paragraph>
        <a
          href='mailto:mail@orangeslicetype.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          email
        </a>
        ,{' '}
        <a
          href='https://instagram.com/orangeslicetype'
          target='_blank'
          rel='noopener noreferrer'
        >
          instagram
        </a>
        ,{' '}
        <a
          href='https://twitter.com/orangeslicetype'
          target='_blank'
          rel='noopener noreferrer'
        >
          twitter
        </a>
      </Paragraph>
      <Address>
        Herenmarkt 93D <br />
        1013 EC Amsterdam <br />
        The Netherlands
      </Address>
    </Header>
  );
};
