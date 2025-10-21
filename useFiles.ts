import { useState } from 'react';

const useFiles = () => {
    const [files, setFiles] = useState<File[]>([]);

    const addFiles = (newFiles: File[]) => {
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
    };

    const removeFile = (fileToRemove: File) => {
        setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove));
    };

    const clearFiles = () => {
        setFiles([]);
    };

    return {
        files,
        addFiles,
        removeFile,
        clearFiles,
    };
};

export default useFiles;