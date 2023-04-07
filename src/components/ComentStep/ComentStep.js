import React, { useState } from 'react'
import './comentstep.css'
import { useSelector } from 'react-redux' 
import { BsTrashFill } from 'react-icons/bs'
import { AiTwotoneEdit } from 'react-icons/ai'
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';

function ComentStep() {
    const comentarios = useSelector(state => state.comentarios.items); 
    const userName = useSelector(state => state.user.userName);
    
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    function closeDeleteModal(){
        setDeleteModalIsOpen(false);
    }
    function closeEditModal(){
        setEditModalIsOpen(false);
    }

    
    return (
        <>
            {comentarios.map((element, index) => { 
                const isAuthor = element.autor === userName;
                return (
                    <div key={element.id} className='card-coment'>
                        <div className='step-header-content' style={{ width: "100%" }}>
                            <div style={{ paddingLeft: "1rem" }}>
                                {element.title}
                            </div>
                            {isAuthor && (
                                <div className='btn-end'>
                                    <div className='icon icon-trash' onClick={() => setDeleteModalIsOpen(true)}><BsTrashFill/></div>
                                    <div className='icon icon-edit'  onClick={() => setEditModalIsOpen(true)}><AiTwotoneEdit /></div>
                                </div>
                            )}
                        </div>
                        <div className='coment-content'>
                            <div className='subtitle-coment'>
                                <div className='autor-coment'>@{element.autor}</div>
                                <div>{element.time} ago</div>
                            </div>
                            <div>{element.text}</div>
                        </div>
                        <EditModal itemId={element.id} show={editModalIsOpen} onHide={closeEditModal}/>
                        <DeleteModal itemId={element.id} show={deleteModalIsOpen} onHide={closeDeleteModal}/>

                        <br></br>
                        <br></br>
                    </div>
                )
            })}
        </>
    )
}

export default ComentStep
