import React from 'react';

function InterviewTask() {
    return (
        <div className='container'>
            <form className='form d-flex flex-column justify-content-center align-items-center'>
                <label>Job title</label>
                <input type='text' placeholder='Job title' />
                <label>Job location Country</label>
                <input type='text' placeholder='Job location Country' />
                <label>Experience</label>
                <input type='text' placeholder='Experience' />
                <label>Work location</label>
                <input type='text' placeholder='Work location' />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default InterviewTask;
