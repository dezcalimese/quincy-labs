import Detail, {generateMetadata as detailMetadata} from '../_detail';
const params=Promise.resolve({section:'story'});
export function generateMetadata(){return detailMetadata({params});}
export default function Page(){return <Detail params={params}/>;}
