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

const Trace: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>移動、販売履歴</title>
        <meta name="description" content="trace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="main">
        <Typography my={3} textAlign="center" variant="h4" component="h1">
          移動、販売履歴
        </Typography>
        <Box display="flex" justifyContent="center" my={2}>
          <Link href="/">
            <Button variant="outlined">HOME</Button>
          </Link>
        </Box>
        <Container maxWidth="md">
          <Table sx={{ mx: 'auto', minWidth: 700 }} aria-label="trace table">
            <TableHead>
              <TableRow>
                <TableCell>移動日</TableCell>
                <TableCell>移動元</TableCell>
                <TableCell>→</TableCell>
                <TableCell>移動先</TableCell>
                <TableCell>種類</TableCell>
                <TableCell>枚数</TableCell>
                <TableCell>移動元在庫数</TableCell>
                <TableCell>移動先在庫数</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2022/11/08</TableCell>
                <TableCell>田中</TableCell>
                <TableCell>→</TableCell>
                <TableCell>販売</TableCell>
                <TableCell>200km</TableCell>
                <TableCell>34</TableCell>
                <TableCell>30</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2022/10/25</TableCell>
                <TableCell>片山(泰)</TableCell>
                <TableCell>→</TableCell>
                <TableCell>田中</TableCell>
                <TableCell>200km</TableCell>
                <TableCell>20</TableCell>
                <TableCell>250</TableCell>
                <TableCell>64</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Container>
      </Box>
    </Box>
  );
};

export default Trace;
