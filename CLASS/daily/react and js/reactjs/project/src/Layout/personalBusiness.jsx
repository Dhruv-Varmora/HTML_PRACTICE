import React from 'react';

function Personal_Business(props) {
    return (
       <div className="container mt-5">
        <div className="row">
            <div className="col-6" style={{position:'relative'}}>
                <div className="bg1">
                    <div className="bg-txt p-3">
                        <h3>Personal</h3>
                        <p>Upgrade to get access to LastPass across all device types along with dark web monitoring, a personalized security dashboard & score, and emergency access.</p>
                        <a href="/">Premium <i class="fa-solid fa-angle-right"></i> </a>
                        <a href="/">For Families <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>

            </div>
            <div className="col-6">
                <div className="bg2">
                <div className="bg-txt p-3 text-white">
                        <h3>Business</h3>
                        <p>Upgrade to get access to LastPass across all device types along with dark web monitoring, a personalized security dashboard & score, and emergency access.</p>
                        <a href="/">Premium <i class="fa-solid fa-angle-right"></i> </a>
                        <a href="/">For Families <i class="fa-solid fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Personal_Business;