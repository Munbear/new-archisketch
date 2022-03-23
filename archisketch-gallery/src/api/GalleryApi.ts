import Axios from 'axios';

export type GetGalleryResponse = {
    renderings: Array<GalleryImageView>
}

export type GalleryImageView = {
    _id: string,
}

interface GalleryApi {
    getGallery(): Promise<GetGalleryResponse>
}

class LocalGalleryApi implements GalleryApi {
    async getGallery(): Promise<GetGalleryResponse> {
        return (await Axios.get("/data/data.json")).data
    }
}

export default LocalGalleryApi;