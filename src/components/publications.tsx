import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Publication {
    title: string;
    price: string;
    link: string;
}

const Publications: React.FC = () => {
    const [publications, setPublications] = useState<Publication[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://functions.yandexcloud.net/<your-function-id>');
                setPublications(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Latest Publications</h1>
            <ul>
                {publications.map((publication, index) => (
                    <li key={index}>
                        <a href={publication.link}>{publication.title}</a> - {publication.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Publications;
