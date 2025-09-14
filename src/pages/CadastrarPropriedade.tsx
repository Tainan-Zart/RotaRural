import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { 
  ArrowLeft, 
  Upload, 
  MapPin, 
  Home,
  Wifi,
  Car,
  Coffee,
  Users,
  TreePine,
  Fish,
  Utensils
} from "lucide-react";

const CadastrarPropriedade = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  const amenities = [
    { id: "wifi", name: "Wi-Fi", icon: Wifi },
    { id: "estacionamento", name: "Estacionamento", icon: Car },
    { id: "cafe", name: "Café da manhã", icon: Coffee },
    { id: "hospedagem", name: "Hospedagem", icon: Users },
    { id: "trilhas", name: "Trilhas", icon: TreePine },
    { id: "pesca", name: "Pesca", icon: Fish },
    { id: "restaurante", name: "Restaurante", icon: Utensils },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Propriedade cadastrada com sucesso! Aguarde aprovação.");
      navigate("/proprietario/dashboard");
    }, 2000);
  };

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenityId) 
        ? prev.filter(id => id !== amenityId)
        : [...prev, amenityId]
    );
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate("/proprietario/dashboard")}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Cadastrar Propriedade</h1>
              <p className="text-muted-foreground">Adicione sua propriedade rural à plataforma</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Informações Básicas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                Informações Básicas
              </CardTitle>
              <CardDescription>
                Dados principais da sua propriedade
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome da Propriedade *</Label>
                  <Input id="nome" placeholder="Ex: Fazenda Esperança" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Propriedade *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fazenda">Fazenda</SelectItem>
                      <SelectItem value="sitio">Sítio</SelectItem>
                      <SelectItem value="chacara">Chácara</SelectItem>
                      <SelectItem value="pousada-rural">Pousada Rural</SelectItem>
                      <SelectItem value="vinícola">Vinícola</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição *</Label>
                <Textarea 
                  id="descricao" 
                  placeholder="Descreva sua propriedade, suas características especiais, história..."
                  className="min-h-[120px]"
                  required 
                />
              </div>
            </CardContent>
          </Card>

          {/* Localização */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Localização
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço Completo *</Label>
                  <Input id="endereco" placeholder="Rua, número, bairro" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input id="cidade" placeholder="Cidade" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="estado">Estado *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="PR">Paraná</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP *</Label>
                  <Input id="cep" placeholder="00000-000" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comodidades */}
          <Card>
            <CardHeader>
              <CardTitle>Comodidades e Facilidades</CardTitle>
              <CardDescription>
                Selecione as comodidades disponíveis na sua propriedade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={amenity.id}
                      checked={selectedAmenities.includes(amenity.id)}
                      onCheckedChange={() => toggleAmenity(amenity.id)}
                    />
                    <Label 
                      htmlFor={amenity.id}
                      className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <amenity.icon className="h-4 w-4" />
                      {amenity.name}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fotos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Fotos da Propriedade
              </CardTitle>
              <CardDescription>
                Adicione fotos atrativas da sua propriedade (máximo 10 fotos)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <div className="text-sm text-muted-foreground mb-2">
                  Clique para fazer upload ou arraste as imagens aqui
                </div>
                <div className="text-xs text-muted-foreground">
                  PNG, JPG até 5MB cada (máximo 10 fotos)
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-4">
                  Selecionar Fotos
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input id="telefone" placeholder="(11) 99999-9999" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-contato">Email de Contato *</Label>
                  <Input id="email-contato" type="email" placeholder="contato@propriedade.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="site">Website (opcional)</Label>
                <Input id="site" placeholder="https://www.suapropriedade.com.br" />
              </div>
            </CardContent>
          </Card>

          {/* Botões */}
          <div className="flex gap-4 justify-end">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate("/proprietario/dashboard")}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Cadastrando..." : "Cadastrar Propriedade"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastrarPropriedade;