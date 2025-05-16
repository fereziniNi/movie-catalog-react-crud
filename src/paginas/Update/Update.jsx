import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Update.Module.css';

function Update() {
    const { id } = useParams();
    const [values, setValues] = useState({
        name: '',
        genre: '',  // Observe que corrigi de 'gender' para 'genre' 
        img: ''     // Observe que corrigi de 'imageUrl' para 'img' para corresponder à API
    });
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios.get(`https://68273aa86b7628c5290f8e57.mockapi.io/films/${id}`)
            .then(res => {
                setValues(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError("Erro ao carregar dados do filme");
                setLoading(false);
            });
    }, [id]);

    const handleUpdate = (event) => {
        event.preventDefault();
        setSubmitting(true);

        axios.put(`https://68273aa86b7628c5290f8e57.mockapi.io/films/${id}`, values)
            .then(res => {
                setSubmitting(false);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setError("Erro ao atualizar o filme");
                setSubmitting(false);
            });
    }

    return (
        <div className="update-page">
            <div className="update-container">
                <div className="update-header">
                    <h1>Editar Filme</h1>
                    {values.name && <p className="update-subtitle">Editando: {values.name}</p>}
                </div>

                {loading ? (
                    <div className="loading">
                        <div className="loading-spinner"></div>
                        <p>Carregando dados do filme...</p>
                    </div>
                ) : error ? (
                    <div className="error-message">
                        <p>{error}</p>
                        <Link to="/" className="btn btn-primary">Voltar para Home</Link>
                    </div>
                ) : (
                    <form onSubmit={handleUpdate} className="update-form">
                        <div className="form-preview">
                            {values.imageUrl && (
                                <div className="image-preview">
                                    <img src={values.imageUrl} alt={values.name} />
                                </div>
                            )}
                        </div>

                        <div className="form-fields">
                            <div className="form-group">
                                <label htmlFor="name">Nome do Filme</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder="Digite o nome do filme"
                                    value={values.name}
                                    onChange={e => setValues({ ...values, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="genre">Gênero</label>
                                <input
                                    type="text"
                                    id="genre"
                                    name="genre"
                                    className="form-control"
                                    placeholder="Digite o gênero do filme"
                                    value={values.gender || ""}
                                    onChange={e => setValues({ ...values, gender: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="img">URL da Imagem</label>
                                <input
                                    type="url"
                                    id="img"
                                    name="img"
                                    className="form-control"
                                    placeholder="Cole a URL da imagem do filme"
                                    value={values.imageUrl || ""}
                                    onChange={e => setValues({ ...values, imageUrl: e.target.value })}
                                />
                            </div>

                            {error && <div className="form-error">{error}</div>}

                            <div className="form-actions">
                                <button
                                    type="submit"
                                    className="btn btn-save"
                                    disabled={submitting}
                                >
                                    {submitting ? 'Salvando...' : 'Salvar Alterações'}
                                </button>
                                <Link to="/" className="btn btn-cancel">
                                    Cancelar
                                </Link>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Update;