import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const SimpleButton = ( { text}: Props ) => (
    <button className="simple-button">{text}</button>
);

export default SimpleButton;