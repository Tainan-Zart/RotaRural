import { Heart, Star, MapPin, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  amenities: string[];
  type: "fazenda" | "sitio" | "pousada" | "experiencia" | "gastronomia";
}

const PropertyCard = ({
  title,
  location,
  price,
  rating,
  reviews,
  image,
  amenities,
  type
}: PropertyCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "fazenda":
        return "bg-nature-green text-white";
      case "sitio":
        return "bg-earth-brown text-white";
      case "pousada":
        return "bg-primary-light text-white";
      case "experiencia":
        return "bg-sunset-orange text-white";
      case "gastronomia":
        return "bg-primary text-white";
      default:
        return "bg-muted";
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "wifi":
        return <Wifi className="w-4 h-4" />;
      case "estacionamento":
        return <Car className="w-4 h-4" />;
      case "cafe":
        return <Coffee className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border/30">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-muted-foreground hover:text-red-500 transition-colors" />
        </button>
        <Badge className={`absolute top-3 left-3 ${getTypeColor(type)}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Rating and Reviews */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-sunset-orange text-sunset-orange" />
            <span className="font-semibold text-sm">{rating}</span>
            <span className="text-muted-foreground text-sm">({reviews} avaliações)</span>
          </div>
        </div>

        {/* Title and Location */}
        <div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center space-x-3 text-muted-foreground">
          {amenities.slice(0, 3).map((amenity, index) => (
            <div key={index} className="flex items-center space-x-1 text-xs">
              {getAmenityIcon(amenity)}
              <span className="capitalize">{amenity}</span>
            </div>
          ))}
          {amenities.length > 3 && (
            <span className="text-xs">+{amenities.length - 3} mais</span>
          )}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2 border-t border-border/30">
          <div>
            <span className="text-xl font-bold text-primary">R$ {price}</span>
            {/* <span className="text-muted-foreground text-sm"> /noite</span> */}
          </div>
          <Button
            size="sm"
            className="bg-gradient-nature text-white hover:opacity-90"
          >
            Ver Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;