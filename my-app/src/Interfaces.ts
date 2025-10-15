export interface ImageValues {
  id: number;
  title: string;
  url: string;
  liked: boolean;
  comments: string[];
}

export interface GalleryProps {
  images: ImageValues[];
  setNewModal: (modal: React.JSX.Element) => void;
}

export interface ImageModalProps {
  values: ImageValues;
  setNewModal: (modal: React.JSX.Element) => void;
}

export interface NewImageFieldProps {
  addImageByTitleAndURL: (newTitle: string, newURL: string) => void;
  setAllImages: (clear: ImageValues[]) => void;
  setNewModal: (modal: React.JSX.Element) => void;
}
