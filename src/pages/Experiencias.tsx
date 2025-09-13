import React, { useState } from 'react';
import { Filter, Grid, Map as MapIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import MapComponent from "@/components/MapComponent";
import PropertyCard from "@/components/PropertyCard";
import FilterSidebar from "@/components/FilterSidebar";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import experience1 from "@/assets/experience-1.jpg";
import gastronomia1 from "@/assets/gastronomia-1.jpg";
import gastronomia2 from "@/assets/gastronomia-2.jpg";
import gastronomia3 from "@/assets/gastronomia-3.jpg";
import gastronomia4 from "@/assets/gastronomia-4.jpg";

const Experiencias = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const experiencias = [
    {
      id: "1",
      title: "Fazenda Santa Clara",
      location: "Interior de São Paulo, SP",
      price: 180,
      rating: 4.8,
      reviews: 124,
      image: property1,
      amenities: ["wifi", "cafe", "estacionamento"],
      type: "fazenda" as const,
      coordinates: [-23.5505, -46.6333] as [number, number] // São Paulo
    },
    {
      id: "2",
      title: "Sítio Vale Verde",
      location: "Região Serrana, RJ",
      price: 150,
      rating: 4.9,
      reviews: 89,
      image: property2,
      amenities: ["wifi", "cafe"],
      type: "sitio" as const,
      coordinates: [-22.4609, -42.6417] as [number, number] // Teresópolis
    },
    {
      id: "3",
      title: "Trilha do Café Colonial",
      location: "Sul de Minas, MG",
      price: 120,
      rating: 4.7,
      reviews: 67,
      image: experience1,
      amenities: ["cafe"],
      type: "experiencia" as const,
      coordinates: [-21.7587, -43.3496] as [number, number] // Sul de Minas
    },
    {
      id: "4",
      title: "Casa do Pão Rural",
      location: "Interior de São Paulo, SP",
      price: 95,
      rating: 4.9,
      reviews: 156,
      image: gastronomia1,
      amenities: ["wifi", "cafe", "estacionamento"],
      type: "gastronomia" as const,
      coordinates: [-22.9068, -47.0653] as [number, number] // Campinas
    },
    {
      id: "5",
      title: "Vinícola Familiar Santos",
      location: "Serra Gaúcha, RS",
      price: 320,
      rating: 4.8,
      reviews: 92,
      image: gastronomia2,
      amenities: ["wifi", "estacionamento"],
      type: "gastronomia" as const,
      coordinates: [-29.1678, -51.1794] as [number, number] // Caxias do Sul
    },
    {
      id: "6",
      title: "Aula de Culinária Rural",
      location: "Região Serrana, RJ",
      price: 150,
      rating: 4.9,
      reviews: 78,
      image: gastronomia3,
      amenities: ["cafe"],
      type: "experiencia" as const,
      coordinates: [-22.2756, -42.5308] as [number, number] // Nova Friburgo
    },
    {
      id: "7",
      title: "Queijaria Artesanal",
      location: "Sul de Minas, MG",
      price: 85,
      rating: 4.7,
      reviews: 134,
      image: gastronomia4,
      amenities: ["wifi", "cafe", "estacionamento"],
      type: "gastronomia" as const,
      coordinates: [-22.2519, -45.7036] as [number, number] // São Lourenço
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
              className="shrink-0"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Experiências Rurais
              </h1>
              <p className="text-muted-foreground mt-1">
                {experiencias.length} experiências encontradas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            
            <div className="flex rounded-lg bg-muted p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="h-8 px-3"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('map')}
                className="h-8 px-3"
              >
                <MapIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filtros rápidos */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Todas as experiências
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Gastronomia
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Fazendas
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Pousadas
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Até R$ 150
          </Badge>
          <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
            Avaliação 4.8+
          </Badge>
        </div>

        {/* Conteúdo principal */}
        <div className="flex gap-6">
          {/* Sidebar de filtros - Desktop */}
          <div className="hidden md:block">
            <FilterSidebar />
          </div>

          {/* Sidebar de filtros - Mobile */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-80 bg-white p-6 shadow-lg">
                <FilterSidebar />
                <Button 
                  className="w-full mt-6" 
                  onClick={() => setIsFilterOpen(false)}
                >
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          )}

          {/* Área principal */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiencias.map((experiencia) => (
                  <PropertyCard key={experiencia.id} {...experiencia} />
                ))}
              </div>
            ) : (
              <div className="h-[600px] rounded-lg overflow-hidden">
                <MapComponent properties={experiencias} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencias;