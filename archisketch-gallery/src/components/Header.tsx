import React from 'react'
import {HeaderWrapper, BackBtn, DownloadBtn} from './HeaderStyle'

type HeaderProps = {
    onClickBackButton: () => void,
}

const Header = (props: HeaderProps) => {

    const downloadFile = async (fileURL :string, fileName: string) => {
        const image = await fetch(fileURL)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a');
        link.href = fileURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <>
            <HeaderWrapper>
                <BackBtn onClick={() => props.onClickBackButton()}>
                    <svg viewBox='0 0 24 24' width='24' height='24'>
                        <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
                    </svg>
                </BackBtn>
                <DownloadBtn onClick={ () => downloadFile}>
                    <svg focusable="false" viewBox="0 0 24 24" width='18px' height='18px'>
                        <path d="M12 16l4-5h-3V4h-2v7H8z"/>
                        <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"/>
                    </svg>
                    <span>Download</span>
                </DownloadBtn>
            </HeaderWrapper>
        </>
    )
}

export default Header;