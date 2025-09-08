"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from '../modal/modal';
import styles from './gallery.module.css';

const GallerySystem = ({images}: {images: string[]}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl: string) => {
    if (!isModalOpen) {
        setSelectedImage(imageUrl);
        setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };

  return (
    <>
        <div className={styles.galleryGrid}>
            {images.map((thumbnail, index) => (
                <div key={index} className={styles.imageContainer}>
                    <Image
                        src={thumbnail}
                        alt={images[index]}
                        onClick={() => openModal(images[index])}
                        className={styles.thumbnail}
                        style={{ cursor: 'pointer' }}
                        width={1920}
                        height={1080}
                        loading={'lazy'}
                        priority={false}
                        placeholder={'empty'}
                    />
                </div>
            ))}
        </div>
        <ImageModal imageUrl={selectedImage} onClose={closeModal} />
    </>
  );
};

export default GallerySystem;