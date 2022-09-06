import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
    if(familiar === true){
        greetings = <p>Welcome, My Friend</p>
    }
    else{
        greetings =  <p>Who the hell are you?</p>
    }

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
             </div>
                <h2>Food</h2>
                {
                    familiar ? <p>I will buy food for you</p> :   <p>Lets eat his his whose whose</p>
                }
            <div>
                <h2>Condition</h2>
                {
                    familiar && <p>Send me friend request in facebook</p>
                }
            </div>
        </div>
    );
};

export default User;