import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  coordinates: [number, number];
  type: string;
}

interface MapComponentProps {
  properties: Property[];
}

const MapComponent = ({ properties }: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-46.6333, -23.5505], // São Paulo como centro
      zoom: 6
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for each property
    properties.forEach((property) => {
      const marker = new mapboxgl.Marker({
        color: '#059669', // Primary color
        scale: 0.8
      })
        .setLngLat([property.coordinates[1], property.coordinates[0]])
        .addTo(map.current!);

      // Add popup on click
      marker.getElement().addEventListener('click', () => {
        setSelectedProperty(property);
      });
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [properties, mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="h-full flex items-center justify-center bg-muted/50 rounded-lg">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold">Configure o Mapa</h3>
              <p className="text-sm text-muted-foreground">
                Insira seu token público do Mapbox para visualizar o mapa interativo
              </p>
            </div>
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Seu token público do Mapbox"
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
              />
              <Button
                className="w-full"
                onClick={() => {/* Token será usado no useEffect */ }}
                disabled={!mapboxToken.trim()}
              >
                Carregar Mapa
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Obtenha seu token em{' '}
                <a
                  href="https://mapbox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />

      {/* Property popup */}
      {selectedProperty && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="flex gap-3">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{selectedProperty.title}</h4>
                  <p className="text-xs text-muted-foreground">{selectedProperty.location}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{selectedProperty.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({selectedProperty.reviews} avaliações)
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-primary mt-1">
                    R$ {selectedProperty.price}/noite
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProperty(null)}
                  className="h-8 w-8 p-0 shrink-0"
                >
                  ✕
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default MapComponent;