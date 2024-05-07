import { PlacesList, usePlacesList } from '@/wigets';

export default function Planner() {
  const { selectedPlaces, allPlaces, handleListClick, handleRemovePlace } =
    usePlacesList();
  return (
    <div>
      <p>🚗 여행을 떠나요</p>
      <PlacesList
        selectedPlaces={selectedPlaces}
        allPlaces={allPlaces}
        handleListClick={handleListClick}
        handleRemovePlace={handleRemovePlace}
      />
    </div>
  );
}
