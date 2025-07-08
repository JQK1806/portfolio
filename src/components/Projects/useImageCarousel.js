import { useState } from 'react';

const useImageCarousel = (images) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return {
        currentImageIndex,
        nextImage,
        prevImage,
        goToImage,
        hasMultipleImages: images.length > 1
    };
};

export default useImageCarousel;
