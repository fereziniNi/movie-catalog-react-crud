import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Read.Module.css';

function Read() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://68273aa86b7628c5290f8e57.mockapi.io/films/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Quer mesmo apagar este filme?");
        if (confirmDelete) {
            axios.delete(`https://68273aa86b7628c5290f8e57.mockapi.io/films/${id}`)
                .then(() => {
                    navigate('/'); // redireciona pra home
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='film-details-container'>
            <div className='film-details-card'>
                <div className='film-info'>
                    <h2 className='film-details-title'>{data.name}</h2>

                    <div className='film-details-item'><strong>Nome:</strong> {data.name}</div>
                    <div className='film-details-item'><strong>Gênero:</strong> {data.gender}</div>

                    <div className='film-details-actions'>
                        <Link to={`/update/${id}`} className='film-button edit-button'>
                            Editar
                        </Link>
                        <Link to="/" className='film-button back-button'>
                            Voltar
                        </Link>
                    </div>

                    <button
                        onClick={() => handleDelete(data.id)}
                        className='film-button delete-button'
                    >
                        Apagar
                    </button>
                </div>

                {data.imageUrl && (
                    <img
                        src={data.imageUrl}
                        alt={data.name}
                        className='film-details-image'
                    />
                )}
            </div>
        </div>
    );
}

export default Read;
