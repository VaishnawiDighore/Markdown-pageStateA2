import ReactMarkdown from 'react-markdown'


// import {render}from "react-dom"

const ViewScreen = ({ data }) => {
    console.log(data);

    return (
        <div className="output for">
            <p className='screen_textarea textarea' type="text" >
                <ReactMarkdown >
                    {data}
                </ReactMarkdown>

            </p>
        </div>

    )
}

export default ViewScreen;
