import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions/comentariosStore';
import './createCard.css';
import { useSelector } from 'react-redux' 

function CreateCard() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const userName = useSelector(state => state.user.userName);
    const dispatch = useDispatch();

    const isDisabled = title.trim() === '' || content.trim() === '';




    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addItem({ autor: userName, text: content, title: title}));
        setTitle('');
        setContent('');
    }

    return (
        <div className='create-card'>
            <div className='create-card-content'>
                <br/>
                <h3>What’s on your mind?</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <span>Title</span>
                        <input
                            placeholder='Hello world'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <span>Content</span>
                        <textarea
                            placeholder='Content Here'
                            rows={3}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className='btn-final'>
                        <button type='submit' className='btn-enter btn-create' disabled={isDisabled}>
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCard;
