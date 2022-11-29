import {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
} from '@mui/material';

// prettier-ignore
const members =[
  {name:'片山(泰)','200':'250 (-30)','300':'120','400':'54','600':'67','1000':'23'},
  {name:'片山(明)','200':'13','300':'2','400':'4','600':'0','1000':'0'},
  {name:'矢野','200':'25','300':'16','400':'23','600':'64','1000':'0'},
  {name:'後藤','200':'44 (-20)','300':'10','400':'13','600':'55','1000':'0'},
  {name:'平松','200':'30 (+50)','300':'50','400':'13','600':'4','1000':'0'},
  {name:'森脇','200':'10','300':'0','400':'0','600':'0','1000':'0'},
  {name:'田中','200':'30','300':'0','400':'21','600':'11','1000':'0'},
]

export default function Member() {
  return (
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
        {members.map(({ name, ...medal }) => (
          <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell>{medal[200]}</TableCell>
            <TableCell>{medal[300]}</TableCell>
            <TableCell>{medal[400]}</TableCell>
            <TableCell>{medal[600]}</TableCell>
            <TableCell>{medal[1000]}</TableCell>
          </TableRow>
        ))}
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
  );
}
