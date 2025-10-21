import React, { useState } from 'react';

const FileUploader: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
        }
    };

    const handleUpload = () => {
        // Logic to handle file upload and sharing
        console.log('Files to upload:', files);
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Files</button>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FileUploader;