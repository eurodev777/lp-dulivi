export interface FormData {
  name: string;
  email: string;
  password?: string; // made optional or required depending on stage
  phone: string;
  cpf: string;
  accentColor: string;
}

export type AccentColorKey = 'dulivi' | 'emerald' | 'amber' | 'indigo' | 'coral';

export interface AccentColor {
  name: string;
  primary: string;
  lightBg: string;
  hover: string;
  glow: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  description: string;
  variant?: 'default' | 'destructive' | 'success';
}
