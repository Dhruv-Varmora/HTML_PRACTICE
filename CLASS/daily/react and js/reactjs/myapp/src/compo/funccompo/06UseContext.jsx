import React from 'react';
import { useContext } from 'react';


const theme = {
    "light": {
        forground: "yellow",
        background: "grey"
    },
    "dark": {
        forground: "red",
        background: "black"
    }
}

const Theme = React.createContext(theme.dark)

function UseContext(props) {
    const data = useContext(Theme)
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-4">
                        <div className="card">
                            <p style={{ color: data.forground, background: data.background }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis asperiores eius ipsa pariatur esse distinctio quaerat atque nihil laboriosam, aliquam, blanditiis vel dolores exercitationem facilis eligendi obcaecati saepe error quos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseContext;