import { create } from 'zustand';

interface session {
  sessionId: number;
  sessionName: string;
  recruitNumber: number;
}
interface RecruitStore {
  title: string;
  content: string;
  image: string;
  status: string;
  region: string;
  startDate: string;
  endDate: string;
  level: string;
  notice: string;
  sessions: session[];
  setTitle: (title: string) => void;
  setContent: (content: string) => void;
  setImg: (image: string) => void;
  setStatus: (status: string) => void;
}

export const useRecruitStore = create<RecruitStore>(set => ({
  title: '',
  content: '',
  image: '',
  status: '',
  region: '',
  startDate: '',
  endDate: '',
  level: '',
  notice: '',
  sessions: [],
  setTitle: (title: string) => set(state => ({ ...state, title })),
  setContent: (content: string) => set(state => ({ ...state, content })),
  setImg: (image: string) => set(state => ({ ...state, image })),
  setStatus: (status: string) => set(state => ({ ...state, status })),
}));
