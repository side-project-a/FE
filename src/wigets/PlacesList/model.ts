import { useEffect, useState } from 'react';
import { dummies, Place } from '@wigets/PlacesList/PlacesData';

export default function usePlacesList() {
  const [allPlaces, setAllPlace] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    setAllPlace(dummies);
  }, []);

  const handleListClick = (place: Place) => {
    setSelectedPlaces(prev => ({
      ...prev,
      [place.name]: !prev[place.name],
    }));
  };

  const handleRemovePlace = (name: string) => {
    setSelectedPlaces(prev => {
      const newState = { ...prev };
      delete newState[name];
      return newState;
    });
  };

  return {
    selectedPlaces,
    handleListClick,
    handleRemovePlace,
    allPlaces,
  };
}
