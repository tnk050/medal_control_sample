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

const predictionList = [
  {
    date: '2022/12/18',
    from: '片山(泰)',
    to: '平松',
    distance: '200km',
    amount: '30',
    fromAmount: '220',
    toAmount: '60',
  },
  {
    date: '2022/12/20',
    from: '後藤',
    to: '平松',
    distance: '200km',
    amount: '20',
    fromAmount: '24',
    toAmount: '80',
  },
  {
    date: '2023/1/10',
    from: '平松',
    to: '販売',
    distance: '200km',
    amount: '75',
    fromAmount: '5',
    toAmount: '',
  },
  {
    date: '2023/1/28',
    from: '田中',
    to: '販売',
    distance: '400km',
    amount: '30',
    fromAmount: '-9',
    toAmount: '',
  },
];

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
              {predictionList.map(
                ({
                  date,
                  from,
                  to,
                  distance,
                  amount,
                  fromAmount,
                  toAmount,
                }) => (
                  <TableRow key={date + from + to}>
                    <TableCell>{date}</TableCell>
                    <TableCell>{from}</TableCell>
                    <TableCell>→</TableCell>
                    <TableCell>{to}</TableCell>
                    <TableCell>{distance}</TableCell>
                    <TableCell>{amount}</TableCell>
                    <TableCell
                      sx={{
                        color:
                          parseInt(fromAmount) < 0 ? 'error.light' : 'inherit',
                      }}
                    >
                      {fromAmount}
                    </TableCell>
                    <TableCell>{toAmount}</TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </Container>
      </Box>
    </Box>
  );
};

export default Prediction;
