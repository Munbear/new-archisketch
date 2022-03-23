import React from 'react'
import {GalleryImageView} from "../api/GalleryApi";
import {ImageContainer, ImagePaddingBox, ImageBox, Image} from './CardStyle';


type GalleryImageCardProps = {
    idx: number,
    galleryImage: GalleryImageView,
    openModal: (index: number) => void,
}

const GalleryImageCard = (props: GalleryImageCardProps) => {
    return (
        <ImageContainer>
            <ImagePaddingBox>
                <ImageBox>
                    <Image onClick={() => props.openModal(props.idx)}
                           style={{backgroundImage: `url('${props.galleryImage._id}')`}}
                    />
                </ImageBox>
            </ImagePaddingBox>
        </ImageContainer>
    )
}


export default GalleryImageCard;