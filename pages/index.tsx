import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
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
          <Table sx={{ mx: 'auto', minWidth: 650 }} aria-label="medal table">
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell>200km</TableCell>
                <TableCell>300km</TableCell>
                <TableCell>400km</TableCell>
                <TableCell>600km</TableCell>
                <TableCell>1000km</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>片山(泰)</TableCell>
                <TableCell>250 (-30)</TableCell>
                <TableCell>120</TableCell>
                <TableCell>54</TableCell>
                <TableCell>67</TableCell>
                <TableCell>23</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>片山(明)</TableCell>
                <TableCell>13</TableCell>
                <TableCell>2</TableCell>
                <TableCell>4</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>矢野</TableCell>
                <TableCell>25</TableCell>
                <TableCell>16</TableCell>
                <TableCell>23</TableCell>
                <TableCell>64</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>後藤</TableCell>
                <TableCell>44 (-20)</TableCell>
                <TableCell>10</TableCell>
                <TableCell>13</TableCell>
                <TableCell>55</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>平松</TableCell>
                <TableCell>30 (+50)</TableCell>
                <TableCell>50</TableCell>
                <TableCell>13</TableCell>
                <TableCell>4</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>森脇</TableCell>
                <TableCell>10</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>田中</TableCell>
                <TableCell>30</TableCell>
                <TableCell>0</TableCell>
                <TableCell>21</TableCell>
                <TableCell>11</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell>XXX</TableCell>
                <TableCell>XXX</TableCell>
                <TableCell>XXX</TableCell>
                <TableCell>XXX</TableCell>
                <TableCell>XXX</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
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
              <Button variant="outlined">メダル発送</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
