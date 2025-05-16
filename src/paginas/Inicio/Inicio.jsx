import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Inicio.Module.css';
import { Link } from "react-router-dom";

export default function Inicio() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://68273aa86b7628c5290f8e57.mockapi.io/films')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <><div className="inicio-container">
            <div className="films-grid">
                {data.map((d, i) => (
                    <div className="film-card" key={d.id}>
                        <Link to={`/read/${d.id}`} className="film-link">
                            <img src={d.imageUrl} alt={d.name} className="film-image" />
                        </Link>

                        <div className="film-title">{d.name}</div>
                    </div>

                ))}
            </div>
        </div></>

    );
}
