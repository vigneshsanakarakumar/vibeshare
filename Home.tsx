import React from 'react';
import HelloWorld from '../components/HelloWorld';
import FileUploader from '../components/FileUploader';

const Home: React.FC = () => {
    return (
        <div>
            <HelloWorld />
            <FileUploader />
        </div>
    );
};

export default Home;