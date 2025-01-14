export interface ButtonProps {
    title: string; 
    icon?: React.ReactNode; 
    link?: string;
    disabled?: boolean;
    onClick?: () => void;
  }