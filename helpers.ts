export const formatFileName = (fileName: string): string => {
    return fileName.trim().replace(/\s+/g, '_');
};

export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9);
};