import React from 'react';
import Styles from './styles';

const Button = ({ label, href }) => {
    try {

        if (!label || !href) {
            throw new Error(`You are missing a required attribute (label or href)`);
        }

        //Return your JSX element
        return (
            <Styles.Button as="a" className="btn" href={href}>{label}</Styles.Button>
        );
    } catch (error) {
        console.error(error.message);
        console.error(error.stack);

        return null;
    }
    
};

export default Button;