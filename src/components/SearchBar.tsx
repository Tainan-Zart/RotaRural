import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/experiencias');
  };
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-6 border border-border/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        {/* Destino */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            Destino
          </label>
          <Input 
            placeholder="Onde você quer ir?" 
            className="border-border/50 focus:border-primary"
          />
        </div>

        {/* Check-in */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Check-in
          </label>
          <Input 
            type="date"
            className="border-border/50 focus:border-primary"
          />
        </div>

        {/* Check-out */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Check-out
          </label>
          <Input 
            type="date"
            className="border-border/50 focus:border-primary"
          />
        </div>

        {/* Hóspedes */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground flex items-center">
            <Users className="w-4 h-4 mr-1" />
            Hóspedes
          </label>
          <div className="flex gap-2">
            <Select>
              <SelectTrigger className="border-border/50 focus:border-primary">
                <SelectValue placeholder="Adultos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Adulto</SelectItem>
                <SelectItem value="2">2 Adultos</SelectItem>
                <SelectItem value="3">3 Adultos</SelectItem>
                <SelectItem value="4">4+ Adultos</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button 
          size="lg" 
          className="bg-gradient-nature text-white hover:opacity-90 px-8 shadow-hero"
          onClick={handleSearch}
        >
          <Search className="w-5 h-5 mr-2" />
          Buscar Experiências
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;