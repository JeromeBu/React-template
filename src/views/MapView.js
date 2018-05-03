import React from 'react'
import GoogleMapReact from 'google-map-react'

export class MapView extends React.Component {
  render() {
    const center = {
      lat: 48.8566,
      lng: 2.3522
    }
    return (
      <div>
        Map page
        <div className="google-map" style={{ height: '500px', width: '600px' }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            center={center}
            zoom={11}
          />
        </div>
      </div>
    )
  }
}
