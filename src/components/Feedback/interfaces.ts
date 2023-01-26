export interface FeedbackProps {
  type: string;
  show: boolean;
  onClose: () => void;
  userName: () => string;
}
