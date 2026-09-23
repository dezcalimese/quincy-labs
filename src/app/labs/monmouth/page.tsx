import Detail, {generateMetadata as detailMetadata} from '../_detail';
const params=Promise.resolve({project:'monmouth'});
export function generateMetadata(){return detailMetadata({params});}
export default function Page(){return <Detail params={params}/>;}
