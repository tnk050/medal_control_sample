import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Prediction: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>移動、販売予測</title>
        <meta name="description" content="trace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <Typography my={3} textAlign="center" variant="h4" component="h1">
          メダル移動、販売予測
        </Typography>
        <Box display="flex" justifyContent="center" my={2}>
          <Link href="/">
            <Button variant="outlined">HOME</Button>
          </Link>
        </Box>
        <Container maxWidth="md">
          <Table sx={{ mx: 'auto' }} aria-label="trace table">
            <TableHead>
              <TableRow>
                <TableCell>移動日</TableCell>
                <TableCell>移動元</TableCell>
                <TableCell>種類</TableCell>
                <TableCell>移動先</TableCell>
                <TableCell>種類</TableCell>
                <TableCell>枚数</TableCell>
                <TableCell>移動元在庫数</TableCell>
                <TableCell>移動先在庫数</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2022/11/18</TableCell>
                <TableCell>片山(泰)</TableCell>
                <TableCell>→</TableCell>
                <TableCell>平松</TableCell>
                <TableCell>200km</TableCell>
                <TableCell>30</TableCell>
                <TableCell>220</TableCell>
                <TableCell>60</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2022/11/20</TableCell>
                <TableCell>後藤</TableCell>
                <TableCell>→</TableCell>
                <TableCell>平松</TableCell>
                <TableCell>200km</TableCell>
                <TableCell>20</TableCell>
                <TableCell>24</TableCell>
                <TableCell>80</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2022/12/03</TableCell>
                <TableCell>平松</TableCell>
                <TableCell>→</TableCell>
                <TableCell>販売</TableCell>
                <TableCell>200km</TableCell>
                <TableCell>75</TableCell>
                <TableCell>5</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2022/12/10</TableCell>
                <TableCell>田中</TableCell>
                <TableCell>→</TableCell>
                <TableCell>販売</TableCell>
                <TableCell>200km</TableCell>
                <TableCell>37</TableCell>
                <TableCell sx={{ color: 'error.light' }}>-7</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
      </Box>
    </Box>
  );
};

export default Prediction;
