import React from 'react'
import {GalleryImageView} from "../api/GalleryApi";
import {HeaderWrapper, BackBtn, DownloadBtn, HeaderGallery} from './HeaderStyle'

type HeaderProps = {
    onClickBackButton: () => void,
    galleryImage: GalleryImageView
}

const Header = (props: HeaderProps) => {

    const OnClickDownloadHandler = () => {
        const imageURL = props.galleryImage._id
        fetch(imageURL, {
            method: 'GET',
        })
            .then(response => response.blob())
            .then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = "test.png";
                document.body.appendChild(a);
                a.click();
                a.remove();
            });
    }

    return(
        <>
            <HeaderWrapper>
                <BackBtn onClick={() => props.onClickBackButton()}>
                    <svg viewBox='0 0 24 24' width='24' height='24'>
                        <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
                    </svg>
                </BackBtn>
                <HeaderGallery>갤러리</HeaderGallery>
                <DownloadBtn onClick={() => {
                    OnClickDownloadHandler()
                }}>
                    <div>다운로드</div>
                </DownloadBtn>
            </HeaderWrapper>
        </>
    )
}

export default Header;