export interface FileInfo {
    name: string;
    size: number;
    type: string;
    lastModified: number;
}

export interface ShareLink {
    url: string;
    qrCode: string;
}