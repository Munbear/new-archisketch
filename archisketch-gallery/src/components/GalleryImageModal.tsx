import React from 'react'
import {ModalWrapper, Button, DetailImage, ModalItem, RightBtn, LeftBtn} from './ModalStyle'
import {GalleryImageView} from "../api/GalleryApi";
import Header from "./Header";



type GalleryImageModalProps = {
    show: boolean,
    galleryImage: GalleryImageView,
    prevModal: () => void,
    nextModal: () => void,
    closeModal: () => void
}

const GalleryImageModal = (props: GalleryImageModalProps) => {

    console.log(props);
    return (
        <>
            {
                props.show ?
                    <ModalWrapper>
                        <Header onClickBackButton={() => props.closeModal()} />
                        <ModalItem>
                            <LeftBtn onClick={() => props.prevModal()}>
                                <svg viewBox='0 0 24 24' width='24' height='24'>
                                    <path d="M12.707 17.293L8.414 13 18 13 18 11 8.414 11 12.707 6.707 11.293 5.293 4.586 12 11.293 18.707z"/>
                                </svg>
                            </LeftBtn>
                            <RightBtn onClick={() => props.nextModal()}>
                                <svg viewBox='0 0 24 24' width='24' height='24'>
                                    <path d="M11.293 17.293L12.707 18.707 19.414 12 12.707 5.293 11.293 6.707 15.586 11 6 11 6 13 15.586 13z" />
                                </svg>
                            </RightBtn>
                            <DetailImage src={props.galleryImage._id}/>
                        </ModalItem>
                    </ModalWrapper>
                    : <></>
            }
        </>
    );
}

export default GalleryImageModal;