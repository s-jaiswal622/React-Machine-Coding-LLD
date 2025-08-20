import { useEffect , useState} from 'react';
import { MemeCard } from './MemeCard';

export const ShimmerUI = () => {
    const [memeData, setMemeData] = useState([]);

    const fetchMemeData = async() => {
        const response = await fetch("https://meme-api.com/gimme/20");
        const result = await response.json();
        setMemeData(result.memes);
    }

    useEffect(() => {
        fetchMemeData();
    }, [])

    return (
       <div className="overflow-x-hidden">
        <div className='flex flex-wrap w-full justify-center'>
            {memeData.length > 0 && memeData.map((meme, idx) => <MemeCard key={idx} details={meme}/>)}
        </div>
        </div>
    )
}