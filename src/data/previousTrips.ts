import { PreviousTrip } from '../types';
import corpus1 from '../assets/trips/lake-corpus-christi-may-2026/0B7FF4B6-B5FE-4136-BA78-41D05A18AB27.jpeg';
import corpus2 from '../assets/trips/lake-corpus-christi-may-2026/17321AB8-277D-4E8C-BEF5-E38CF82DA6EE.jpeg';
import corpus3 from '../assets/trips/lake-corpus-christi-may-2026/24FE01D2-3AC9-4CA8-BBDF-3E0672E84B60.jpeg';
import corpus4 from '../assets/trips/lake-corpus-christi-may-2026/3BBD024F-BCF4-414A-8080-EE10C64F2597.jpeg';
import corpus5 from '../assets/trips/lake-corpus-christi-may-2026/4E78995F-8146-45BF-9FEC-4376673478FE.jpeg';
import corpus6 from '../assets/trips/lake-corpus-christi-may-2026/57C12E31-5EC3-4AF8-A27A-D859D6D69C5A.jpeg';
import corpus7 from '../assets/trips/lake-corpus-christi-may-2026/633623E3-3B52-46BC-8333-995DD9A800CE.jpeg';
import corpus8 from '../assets/trips/lake-corpus-christi-may-2026/7CCE12A4-4285-42B6-A5FD-D572A66D844E.jpeg';
import corpus9 from '../assets/trips/lake-corpus-christi-may-2026/810008D6-A112-4212-894C-92BEFD3BE21B.jpeg';
import corpus10 from '../assets/trips/lake-corpus-christi-may-2026/88721F35-65E3-4C77-92DD-617EF2034B98.jpeg';
import corpus11 from '../assets/trips/lake-corpus-christi-may-2026/9CB18CA2-0E85-4DAD-AF1A-0062F790D354.jpeg';
import corpus12 from '../assets/trips/lake-corpus-christi-may-2026/C5619A7B-8A89-4CE2-A2B2-DC5913A888F1.jpeg';
import corpus13 from '../assets/trips/lake-corpus-christi-may-2026/D125D685-2DF8-4856-A6D2-27FC7846ECDB.jpeg';
import corpus14 from '../assets/trips/lake-corpus-christi-may-2026/FC2A387E-97D1-45ED-A555-71DEB2454133.jpeg';
import garner1 from '../assets/trips/garner-apr-2026/IMG_3575.jpeg';
import garner2 from '../assets/trips/garner-apr-2026/IMG_3579.jpeg';
import garner3 from '../assets/trips/garner-apr-2026/IMG_3584.jpeg';
import garner4 from '../assets/trips/garner-apr-2026/IMG_3587.jpeg';
import garner5 from '../assets/trips/garner-apr-2026/IMG_3588.jpeg';
import garner6 from '../assets/trips/garner-apr-2026/IMG_3592.jpeg';
import garner7 from '../assets/trips/garner-apr-2026/IMG_3593.jpeg';
import garner8 from '../assets/trips/garner-apr-2026/IMG_3601.jpeg';
import garner9 from '../assets/trips/garner-apr-2026/IMG_3602.jpeg';
import garner10 from '../assets/trips/garner-apr-2026/IMG_3604.jpeg';
import garner11 from '../assets/trips/garner-apr-2026/IMG_3609.JPG';
import garner12 from '../assets/trips/garner-apr-2026/IMG_3610.JPG';
import garner13 from '../assets/trips/garner-apr-2026/IMG_3611.JPG';
import garner14 from '../assets/trips/garner-apr-2026/IMG_3619.JPG';
import garner15 from '../assets/trips/garner-apr-2026/IMG_3623.JPG';
import garner16 from '../assets/trips/garner-apr-2026/IMG_3627.JPG';
import garner17 from '../assets/trips/garner-apr-2026/IMG_3633.jpeg';
import garner18 from '../assets/trips/garner-apr-2026/IMG_3651.JPG';
import garner19 from '../assets/trips/garner-apr-2026/IMG_3654.JPG';
import colorado1 from '../assets/trips/colorado-bend-mar-2026/IMG_2679.JPG';
import colorado2 from '../assets/trips/colorado-bend-mar-2026/IMG_2686.JPG';
import colorado3 from '../assets/trips/colorado-bend-mar-2026/IMG_2699.JPG';
import colorado4 from '../assets/trips/colorado-bend-mar-2026/IMG_2710.JPG';
import colorado5 from '../assets/trips/colorado-bend-mar-2026/IMG_2712.JPG';
import colorado6 from '../assets/trips/colorado-bend-mar-2026/IMG_2715.JPG';
import colorado7 from '../assets/trips/colorado-bend-mar-2026/IMG_2723.JPG';
import colorado8 from '../assets/trips/colorado-bend-mar-2026/IMG_2732.JPG';
import colorado9 from '../assets/trips/colorado-bend-mar-2026/IMG_2742.JPG';
import colorado10 from '../assets/trips/colorado-bend-mar-2026/IMG_2754.JPG';
import colorado11 from '../assets/trips/colorado-bend-mar-2026/IMG_2755.JPG';
import colorado12 from '../assets/trips/colorado-bend-mar-2026/IMG_2757.JPG';
import buescher1 from '../assets/trips/buescher-feb-2026/IMG_1447.JPG';
import buescher2 from '../assets/trips/buescher-feb-2026/IMG_1493.JPG';
import buescher3 from '../assets/trips/buescher-feb-2026/IMG_1535.JPG';
import buescher4 from '../assets/trips/buescher-feb-2026/IMG_1538.JPG';
import buescher5 from '../assets/trips/buescher-feb-2026/IMG_1550.JPG';
import buescher6 from '../assets/trips/buescher-feb-2026/IMG_1558.JPG';
import buescher7 from '../assets/trips/buescher-feb-2026/IMG_1566.JPG';
import buescher8 from '../assets/trips/buescher-feb-2026/IMG_1576.JPG';
import buescher9 from '../assets/trips/buescher-feb-2026/IMG_1589.JPG';
import buescher10 from '../assets/trips/buescher-feb-2026/IMG_1593.JPG';
import buescher11 from '../assets/trips/buescher-feb-2026/IMG_1623.JPG';
import buescher12 from '../assets/trips/buescher-feb-2026/IMG_1627.JPG';

export const previousTrips: PreviousTrip[] = [
  {
    id: 'lake-corpus-christi-may-2026',
    parkName: 'Lake Corpus Christi State Park',
    location: 'Mathis, Texas',
    dates: 'May 15-17',
    month: 'May',
    year: 2026,
    images: [corpus1, corpus2, corpus3, corpus4, corpus5, corpus6, corpus7, corpus8, corpus9, corpus10, corpus11, corpus12, corpus13, corpus14],
  },
  {
    id: 'garner-apr-2026',
    parkName: 'Garner State Park',
    location: 'Concan, Texas',
    dates: 'Apr 24-26',
    month: 'April',
    year: 2026,
    images: [garner1, garner2, garner3, garner4, garner5, garner6, garner7, garner8, garner9, garner10, garner11, garner12, garner13, garner14, garner15, garner16, garner17, garner18, garner19],
  },
  {
    id: 'colorado-bend-mar-2026',
    parkName: 'Colorado Bend State Park',
    location: 'Bend, Texas',
    dates: 'Mar 20-22',
    month: 'March',
    year: 2026,
    images: [colorado1, colorado2, colorado3, colorado4, colorado5, colorado6, colorado7, colorado8, colorado9, colorado10, colorado11, colorado12],
  },
  {
    id: 'buescher-feb-2026',
    parkName: 'Buescher State Park',
    location: 'Smithville, Texas',
    dates: 'Feb 20-22',
    month: 'February',
    year: 2026,
    images: [
      buescher1,
      buescher2,
      buescher3,
      buescher4,
      buescher5,
      buescher6,
      buescher7,
      buescher8,
      buescher9,
      buescher10,
      buescher11,
      buescher12,
    ],
  },
];
