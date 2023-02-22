import React from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const StyledMapContainer = styled(MapContainer)`
  @import '~leaflet/dist/leaflet.css';
  @import '~react-leaflet-markercluster/dist/styles.min.css';
  height: 100%;
`;
const ContactsMap: React.FC = () => {
  return (
    <StyledMapContainer center={[48.40928, 27.13644]} zoom={6.5} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[48.412971, 27.135889]}>
        <Popup>Знайти нас можна ось тут</Popup>
      </Marker>
    </StyledMapContainer>
  );
};
export default ContactsMap;
