import { useLoaderData } from 'react-router-dom';

export default function SearchPage() {
    const data = useLoaderData();
    return (
        <div>
            Search Page
        </div>
    );
}