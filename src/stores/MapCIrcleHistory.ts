import { create } from 'zustand';

type DeliveryArea = {
  radius: number;
  price: number;
  time: number;
};

type DeliveryConfigStore = {
  deliveryAreas: DeliveryArea[];
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
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
  hoveredIndex: null,
  setHoveredIndex: (index: number | null) => set({ hoveredIndex: index }),
  loadFromLocalStorage: () => {
    const storedAreas = localStorage.getItem('deliverySession');
    if (storedAreas) {
      try {
        const parsedAreas: DeliveryArea[] = JSON.parse(storedAreas);
        const sortedAreas = parsedAreas.sort((a, b) => a.radius - b.radius); // Ordena os dados ao carregar
        set({ deliveryAreas: sortedAreas });
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
      localStorage.setItem(
        'deliverySession',
        JSON.stringify(state.deliveryAreas),
      );
      return state;
    });
  },
  addDeliveryArea: (area: DeliveryArea) =>
    set((state) => {
      const newAreas = [...state.deliveryAreas, area];
      localStorage.setItem('deliverySession', JSON.stringify(newAreas));
      return { deliveryAreas: newAreas };
    }),
  updateDeliveryArea: (index: number, area: DeliveryArea) =>
    set((state) => {
      const newAreas = [...state.deliveryAreas];
      newAreas[index] = area;
      localStorage.setItem('deliverySession', JSON.stringify(newAreas));
      return { deliveryAreas: newAreas };
    }),
  removeDeliveryArea: (index: number) =>
    set((state) => {
      const newAreas = [...state.deliveryAreas];
      newAreas.splice(index, 1);
      localStorage.setItem('deliverySession', JSON.stringify(newAreas));
      return { deliveryAreas: newAreas };
    }),
}));
