export interface Post {
  id: number;
  title: string;
  url: string;
  liked: boolean;
  comments: string[];
}

export interface GalleryProps {
  post: Post[];
  setNewModal: (modal: React.JSX.Element) => void;
}

export interface ImageModalProps {
  post: Post;
  setNewModal: (modal: React.JSX.Element) => void;
}

export interface NewImageFieldProps {
  addImageByTitleAndURL: (newTitle: string, newURL: string) => void;
  setAllImages: (clear: Post[]) => void;
  setNewModal: (modal: React.JSX.Element) => void;
}
