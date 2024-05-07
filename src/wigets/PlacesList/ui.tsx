import { ReactElement } from 'react';
import { Place } from './PlacesData';

interface PlacesListProps {
  allPlaces: Place[];
  selectedPlaces: { [key: string]: boolean };
  handleListClick: (place: Place) => void;
  handleRemovePlace: (name: string) => void;
}

export default function PlacesList({
  allPlaces,
  selectedPlaces,
  handleListClick,
  handleRemovePlace,
}: PlacesListProps): ReactElement {
  return (
    <div>
      <ul>
        {/* 장소 리스트 렌더링 */}
        {allPlaces.map(place => (
          <li key={place.name}>
            <input
              id={`place-${place.name}`}
              type="checkbox"
              checked={selectedPlaces[place.name] || false}
              onChange={() => handleListClick(place)}
            />
            <label htmlFor={`place-${place.name}`}>
              {place.name} - {place.categories}
            </label>
          </li>
        ))}
      </ul>
      <ul>
        {/* 선택된 장소 리스트 렌더링 */}
        {typeof selectedPlaces === 'object' && selectedPlaces !== null
          ? Object.keys(selectedPlaces)
              .filter(name => selectedPlaces[name])
              .map(name => (
                <li key={name}>
                  {name}
                  <button type="button" onClick={() => handleRemovePlace(name)}>
                    삭제
                  </button>
                </li>
              ))
          : null}
      </ul>
    </div>
  );
}
