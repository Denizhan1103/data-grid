interface MediaData {
  name?: string;
  link?: string;
  description?: string;
}

export const getAllSocialMedia = (pageNumber: number, itemCount: number) => {};

export const getSingleSocialMedia = (mediaId: number) => {};

export const addSocialMedia = (mediaData: MediaData) => {};

export const updateSocialMedia = (mediaId: number, mediaData: MediaData) => {};

export const deleteSocialMedia = (mediaId: number) => {};
