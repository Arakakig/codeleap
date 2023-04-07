import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editarItem } from '../../redux/actions/comentariosStore';
import { useSelector } from 'react-redux' 

function EditModal(props) {

    const dispatch = useDispatch();

    const comentarios = useSelector(state => state.comentarios.items); 

    function handleEdit() {
        dispatch(editarItem({id: props.itemId, title: title, text: content })); 
        props.onHide(); 
    }

    const filteredComentarios = comentarios.filter(item => item.id === props.itemId)[0];

    const [title, setTitle] = useState(filteredComentarios.title);
    const [content, setContent] = useState(filteredComentarios.text);
    const isDisabled = title.trim() === '' || content.trim() === '';

    return (
        <>
            <Modal show={props.show} onHide={props.onHide} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div>
                            <p>Title</p>
                            <input
                                placeholder='Hello world'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>Content</p>
                            <textarea
                                placeholder='Content Here'
                                rows={3}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Cancel
                    </Button>
                    <Button variant="success" className='btn-enter' onClick={handleEdit} disabled={isDisabled}>
                        Save
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;
