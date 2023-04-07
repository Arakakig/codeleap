import React from 'react'
import CreateCard from '../../components/CreateCard/CreateCard'
import ComentStep from '../../components/ComentStep/ComentStep'
import './steps.css'
function Steps() {
    return (
        <section className='container'>
            <div className='step-container'>
            <div className='step-header'>
                    CodeLeap Network
                    </div>
                <div className='step-content'>
        
                    <CreateCard />
                    <ComentStep />
                </div>
            </div>
        </section>
    )
}

export default Steps