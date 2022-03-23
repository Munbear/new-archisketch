import GalleryApi, {GalleryImageView} from "../api/GalleryApi";
import React ,{useEffect, useState} from "react";
import GalleryImageCard from "../components/GalleryImageCard";
import GalleryImageModal from "../components/GalleryImageModal";

const Gallery = (props: any) => {
    const api = new GalleryApi();
    const [galleryImages, setGalleryImages]: [Array<GalleryImageView>, any] = useState([]);
    const [showModalState, setShowModalState] = useState(false);
    const [galleryImageIndex, setGalleryImageIndex] = useState(0);

    const openModal = (index: number) => {
        if (index < 0) {
            index = 0
        }
        if (index >= galleryImages.length) {
            index = galleryImages.length - 1
        }
        setGalleryImageIndex(index);
        setShowModalState(true);
    }

    useEffect(() => {
        api.getGallery()
            .then((res) => {
                setGalleryImages(res.renderings)
            })
    }, [])

    const CloseModal = () => {
        setShowModalState( false);
    };

    return (
        <>
            <GalleryImageModal
                show={showModalState}
                galleryImage={galleryImages[galleryImageIndex]}
                prevModal={() => openModal(galleryImageIndex - 1)}
                nextModal={() => openModal(galleryImageIndex + 1)}
                closeModal={CloseModal}
            />
            {
                galleryImages.map((galleryImage, idx: number) => (
                    <GalleryImageCard
                        idx={idx}
                        galleryImage={galleryImage}
                        openModal={openModal}
                    />
                ))
            }
        </>
    )
}

export default Gallery;