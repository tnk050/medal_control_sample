import { useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Member from './component/member';
import SendForm from './component/sendForm';
import RecieveDialog from './component/recieveDialog';

const Home: NextPage = () => {
  const [send, setSend] = useState(false);
  const [recieve, setRecieve] = useState(false);
  const openSend = () => setSend(true);
  const closeSend = () => setSend(false);
  const openRecieve = () => setRecieve(true);
  const closeRecieve = () => setRecieve(false);
  return (
    <Box>
      <Head>
        <title>メダル管理フォーム</title>
        <meta name="description" content="medal control form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main">
        <Typography my={3} textAlign="center" component="h1" variant="h4">
          オダ近メダル管理フォーム
        </Typography>
        <Container maxWidth="md">
          <Member />
          <Box display="flex" my={3}>
            <Box mx={2}>
              <Link href="/trace">
                <Button variant="outlined">移動履歴</Button>
              </Link>
            </Box>
            <Box mx={2}>
              <Link href="/prediction">
                <Button variant="outlined">移動、販売予測</Button>
              </Link>
            </Box>
            <Box mx={2}>
              <Button onClick={openSend} variant="outlined">
                メダル発送
              </Button>
            </Box>
            <Box mx={2}>
              <Button onClick={openRecieve} variant="contained">
                メダル受取
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <SendForm open={send} onClose={closeSend} />
      <RecieveDialog open={recieve} onClose={closeRecieve} />
    </Box>
  );
};

export default Home;
