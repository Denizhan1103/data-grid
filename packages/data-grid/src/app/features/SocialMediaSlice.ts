import { createSlice } from "../../infra/adapter/StoreAdapter";
import type { PayloadAction } from "../../infra/adapter/StoreAdapter";

interface SocialMediaItem {
  id: number;
  name?: string;
  link?: string;
  description?: string;
}

interface SocialMediaState {
  socialMediaList: SocialMediaItem[];
  currentMediaItemId: number;
}

const initialState: SocialMediaState = {
  socialMediaList: [],
  currentMediaItemId: -1,
};

export const socialMediaSlice = createSlice({
  name: "SocialMediaSlice",
  initialState,
  reducers: {},
});
