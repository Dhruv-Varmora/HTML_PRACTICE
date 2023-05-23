import React from 'react';

function Management(props) {
    return (
        <>
            <div className="container-fluid management pt-5">
                <div className='password'>
                    <h1>Password Management <br /> form anywhere</h1>
                    <p>Life is happening online. Work. Play. Family and friends. LastPass puts your digital life at your fingertips, simply and securely.</p>
                    <div className="btns d-flex mt-5">
                        <div className="personal">
                            <button>personal</button>
                            <p className='para mt-3'>
                            Secure every one of your passwords and store them across all of your devices.</p>
                        </div>
                        <div className="business">
                            <button>business</button>
                            <p className='para mt-3'>
                            Protect every access point while seamlessly connecting employees to their work.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Management;