import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Star, Wifi, Coffee, Car, TreePine, Home, Camera, ChefHat } from 'lucide-react';

const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  const propertyTypes = [
    { id: 'fazenda', label: 'Fazendas', icon: TreePine, count: 45 },
    { id: 'sitio', label: 'Sítios', icon: Home, count: 32 },
    { id: 'pousada', label: 'Pousadas Rurais', icon: Home, count: 28 },
    { id: 'experiencia', label: 'Experiências', icon: Camera, count: 67 },
    { id: 'gastronomia', label: 'Gastronomia', icon: ChefHat, count: 23 }
  ];

  const amenities = [
    { id: 'wifi', label: 'Wi-Fi', icon: Wifi },
    { id: 'cafe', label: 'Café da manhã', icon: Coffee },
    { id: 'estacionamento', label: 'Estacionamento', icon: Car }
  ];

  const ratings = [4.5, 4.0, 3.5, 3.0];

  const toggleType = (typeId: string) => {
    setSelectedTypes(prev => 
      prev.includes(typeId) 
        ? prev.filter(id => id !== typeId)
        : [...prev, typeId]
    );
  };

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  return (
    <Card className="w-80 h-fit sticky top-4">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filtros</CardTitle>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => {
              setPriceRange([50, 500]);
              setSelectedTypes([]);
              setSelectedAmenities([]);
              setMinRating(0);
            }}
          >
            Limpar
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Faixa de Preço */}
        <div>
          <h4 className="font-medium mb-3">Faixa de Preço</h4>
          <div className="px-3">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={500}
              min={50}
              step={10}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>R$ {priceRange[0]}</span>
              <span>R$ {priceRange[1]}+</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Tipo de Propriedade */}
        <div>
          <h4 className="font-medium mb-3">Tipo de Experiência</h4>
          <div className="space-y-2">
            {propertyTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={type.id}
                    checked={selectedTypes.includes(type.id)}
                    onCheckedChange={() => toggleType(type.id)}
                  />
                  <label
                    htmlFor={type.id}
                    className="flex items-center gap-2 text-sm font-normal cursor-pointer flex-1"
                  >
                    <IconComponent className="w-4 h-4" />
                    {type.label}
                    <Badge variant="secondary" className="ml-auto text-xs">
                      {type.count}
                    </Badge>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* Comodidades */}
        <div>
          <h4 className="font-medium mb-3">Comodidades</h4>
          <div className="space-y-2">
            {amenities.map((amenity) => {
              const IconComponent = amenity.icon;
              return (
                <div key={amenity.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={amenity.id}
                    checked={selectedAmenities.includes(amenity.id)}
                    onCheckedChange={() => toggleAmenity(amenity.id)}
                  />
                  <label
                    htmlFor={amenity.id}
                    className="flex items-center gap-2 text-sm font-normal cursor-pointer"
                  >
                    <IconComponent className="w-4 h-4" />
                    {amenity.label}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* Avaliação */}
        <div>
          <h4 className="font-medium mb-3">Avaliação</h4>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={minRating === rating}
                  onCheckedChange={() => setMinRating(minRating === rating ? 0 : rating)}
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center gap-1 text-sm font-normal cursor-pointer"
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {rating}+ ou mais
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Aplicar Filtros */}
        <Button className="w-full mt-6">
          Aplicar Filtros
        </Button>
      </CardContent>
    </Card>
  );
};

export default FilterSidebar;