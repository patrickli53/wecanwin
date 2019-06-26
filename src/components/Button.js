import React from 'react';
import { Link as Redir} from 'react-router-dom';
import { Button } from 'reactstrap';

const Butt = ({message,address}) => {
    return(
        <Button color='primary'>
            <Redir to={address}>
                    <h6 className='butt'>{message}</h6>
            </Redir>
        </Button>
    )
}

export default Butt;