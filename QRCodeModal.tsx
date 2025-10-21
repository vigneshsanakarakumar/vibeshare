import React from 'react';
import QRCode from 'qrcode.react';

interface QRCodeModalProps {
    isOpen: boolean;
    onClose: () => void;
    shareLink: string;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose, shareLink }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Share this link</h2>
                <p>{shareLink}</p>
                <QRCode value={shareLink} />
            </div>
        </div>
    );
};

export default QRCodeModal;