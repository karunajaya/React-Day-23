import React from 'react';

const End = () => {
    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px 0',
    };

    return (
        <div style={footerStyle}>
            <p style={{ margin: 0, fontSize: '14px' }}>Copyright © Your Website 2023</p>
        </div>
    );
}

export default End;
