import React from 'react';
import Image from 'next/image';
import styles from './modal.module.css';
import ImageModalStruct from '@/interfaces/imageModal';

const ImageModal: React.FC<ImageModalStruct> = ({ imageUrl, onClose }) => {
  if (!imageUrl) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <Image
          src={imageUrl}
          alt='Demo Next.JS Modal Image'
          className={styles.modalImage}
          width={1920}
          height={1080}
          loading={'lazy'}
          priority={false}
          placeholder='empty'
          />
      </div>
    </div>
  );
};

export default ImageModal;