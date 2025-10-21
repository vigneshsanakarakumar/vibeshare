import { FileInfo } from '../types';

let sharedFiles: FileInfo[] = [];

export const uploadFiles = (files: FileInfo[]) => {
    sharedFiles = [...sharedFiles, ...files];
};

export const getSharedFiles = () => {
    return sharedFiles;
};

export const clearSharedFiles = () => {
    sharedFiles = [];
};