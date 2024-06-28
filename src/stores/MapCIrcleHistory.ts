import { create } from 'zustand';

type DeliveryArea = {
  radius: number;
  price: number;
  time: number;
};

type DeliveryConfigStore = {
  deliveryAreas: DeliveryArea[];
  loadFromLocalStorage: () => void;
  saveToLocalStorage: () => void;
  addDeliveryArea: (area: DeliveryArea) => void;
  updateDeliveryArea: (index: number, area: DeliveryArea) => void;
  removeDeliveryArea: (index: number) => void;
};

const deliveryRadius = localStorage.getItem('deliveryAreas') ?? '';
const initialAreas: DeliveryArea[] = deliveryRadius
  ? JSON.parse(deliveryRadius)
  : [];

export const useDeliveryRadiusStore = create<DeliveryConfigStore>((set) => ({
  deliveryAreas: initialAreas,
  loadFromLocalStorage: () => {
    const storedAreas = localStorage.getItem('userSession');
    if (storedAreas) {
      try {
        const parsedAreas: DeliveryArea[] = JSON.parse(storedAreas);
        set({ deliveryAreas: parsedAreas });
      } catch (error) {
        console.error(
          'Erro ao fazer parsing dos dados do localStorage:',
          error,
        );
      }
    }
  },
  saveToLocalStorage: () => {
    set((state) => {
      localStorage.setItem('userSession', JSON.stringify(state.deliveryAreas));
      return state;
    });
  },
  addDeliveryArea: (area: DeliveryArea) =>
    set((state) => ({
      deliveryAreas: [...state.deliveryAreas, area],
    })),
  updateDeliveryArea: (index: number, area: DeliveryArea) =>
    set((state) => {
      const newAreas = [...state.deliveryAreas];
      newAreas[index] = area;
      return { deliveryAreas: newAreas };
    }),
  removeDeliveryArea: (index: number) =>
    set((state) => {
      const newAreas = [...state.deliveryAreas];
      newAreas.splice(index, 1);
      localStorage.setItem('userSession', JSON.stringify(newAreas));
      return { deliveryAreas: newAreas };
    }),
}));
