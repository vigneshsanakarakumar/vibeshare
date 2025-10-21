import React from 'react';
import { useFiles } from '../hooks/useFiles';
import QRCodeModal from './QRCodeModal';

const ShareList: React.FC = () => {
    const { files, removeFile } = useFiles();
    const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleShareClick = (file: File) => {
        setSelectedFile(file);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedFile(null);
    };

    return (
        <div>
            <h2>Shared Files</h2>
            <ul>
                {files.map((file) => (
                    <li key={file.name}>
                        {file.name}
                        <button onClick={() => handleShareClick(file)}>Share</button>
                        <button onClick={() => removeFile(file)}>Remove</button>
                    </li>
                ))}
            </ul>
            {isModalOpen && selectedFile && (
                <QRCodeModal file={selectedFile} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default ShareList;