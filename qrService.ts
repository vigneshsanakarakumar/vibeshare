import QRCode from 'qrcode';

export const generateQRCode = async (url: string): Promise<string> => {
    try {
        const qrCodeDataUrl = await QRCode.toDataURL(url);
        return qrCodeDataUrl;
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw new Error('Failed to generate QR code');
    }
};

export const generateShareLink = (fileIds: string[]): string => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/share?files=${fileIds.join(',')}`;
};