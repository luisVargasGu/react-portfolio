export interface ButtonProps {
  label: string;
  onClick: () => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

