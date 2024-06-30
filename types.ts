// types.ts
export interface GalleryState {
  title?: string;
  source: string;
  color?: string;
}

export interface ModalState {
  active: boolean;
  index: number;
}

export interface ProjectProps {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}

export interface ModalProps {
  modal: { active: boolean; index: number };
  Items: GalleryState[];
}
