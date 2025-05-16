import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Criar.Module.css";

const Create = () => {
    const [values, setValues] = useState({
        name: "",
        gender: "",
        imageUrl: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://68273aa86b7628c5290f8e57.mockapi.io/films', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));

    };

    return (
        <div className="create-container">
            <h2>Adicionar Filme</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Filme:
                    <input
                        type="text"
                        value={values.name}
                        onChange={(e) =>
                            setValues({ ...values, name: e.target.value })
                        }
                        placeholder="Digite o filme"
                    />
                </label>

                <label>
                    Gênero:
                    <input
                        type="text"
                        value={values.gender}
                        onChange={(e) =>
                            setValues({ ...values, gender: e.target.value })
                        }
                        placeholder="Ação, Aventura, etc."
                    />
                </label>

                <label>
                    Url da Imagem:
                    <input
                        type="text"
                        value={values.imageUrl}
                        onChange={(e) =>
                            setValues({ ...values, imageUrl: e.target.value })
                        }
                        placeholder="http://..."
                    />
                </label>

                <div className="button-group">
                    <button type="submit" className="btn btn-primary">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;
