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
  Star, 
  Clock,
  Users,
  DollarSign,
  Calendar,
  Utensils,
  TreePine,
  Camera,
  GraduationCap
} from "lucide-react";

const CadastrarExperiencia = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [includedItems, setIncludedItems] = useState<string[]>([]);

  const categories = [
    { id: "gastronomia", name: "Gastronomia Rural", icon: Utensils },
    { id: "natureza", name: "Experiência na Natureza", icon: TreePine },
    { id: "cultural", name: "Experiência Cultural", icon: Camera },
    { id: "educativa", name: "Experiência Educativa", icon: GraduationCap },
  ];

  const includeOptions = [
    "Alimentação completa",
    "Lanche/Coffee break", 
    "Transporte local",
    "Guia especializado",
    "Material necessário",
    "Seguro de acidentes",
    "Fotos/Vídeos da experiência",
    "Lembrança/Souvenir"
  ];

  const mockProperties = [
    { id: "1", name: "Fazenda Esperança" },
    { id: "2", name: "Sítio Águas Claras" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular envio
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Experiência cadastrada com sucesso!");
      navigate("/proprietario/dashboard");
    }, 2000);
  };

  const toggleIncludedItem = (item: string) => {
    setIncludedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
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
              <h1 className="text-2xl font-bold">Cadastrar Experiência</h1>
              <p className="text-muted-foreground">Crie uma experiência única para seus visitantes</p>
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
                <Star className="h-5 w-5" />
                Informações Básicas
              </CardTitle>
              <CardDescription>
                Dados principais da sua experiência
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="propriedade">Propriedade *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a propriedade" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockProperties.map((property) => (
                      <SelectItem key={property.id} value={property.id}>
                        {property.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome da Experiência *</Label>
                  <Input id="nome" placeholder="Ex: Degustação de Queijos Artesanais" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="categoria">Categoria *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          <div className="flex items-center gap-2">
                            <category.icon className="h-4 w-4" />
                            {category.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descricao">Descrição da Experiência *</Label>
                <Textarea 
                  id="descricao" 
                  placeholder="Descreva detalhadamente a experiência, o que está incluído, o que os visitantes vão fazer..."
                  className="min-h-[120px]"
                  required 
                />
              </div>
            </CardContent>
          </Card>

          {/* Detalhes da Experiência */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Detalhes e Logística
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="duracao">Duração *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Duração" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1h">1 hora</SelectItem>
                      <SelectItem value="2h">2 horas</SelectItem>
                      <SelectItem value="3h">3 horas</SelectItem>
                      <SelectItem value="meio-dia">Meio dia (4h)</SelectItem>
                      <SelectItem value="dia-inteiro">Dia inteiro (8h)</SelectItem>
                      <SelectItem value="2-dias">2 dias</SelectItem>
                      <SelectItem value="3-dias">3 dias ou mais</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="capacidade">Capacidade Máxima *</Label>
                  <Input 
                    id="capacidade" 
                    type="number" 
                    placeholder="Ex: 12" 
                    min="1"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idade-minima">Idade Mínima</Label>
                  <Input 
                    id="idade-minima" 
                    type="number" 
                    placeholder="Ex: 5" 
                    min="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dificuldade">Nível de Dificuldade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="facil">Fácil - Para toda família</SelectItem>
                      <SelectItem value="moderado">Moderado - Requer condicionamento básico</SelectItem>
                      <SelectItem value="dificil">Difícil - Requer preparo físico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="disponibilidade">Disponibilidade</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Quando funciona" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos-dias">Todos os dias</SelectItem>
                      <SelectItem value="fins-semana">Fins de semana</SelectItem>
                      <SelectItem value="feriados">Fins de semana e feriados</SelectItem>
                      <SelectItem value="personalizado">Sob agendamento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preços */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Preços e Valores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="preco-adulto">Preço por Adulto *</Label>
                  <Input 
                    id="preco-adulto" 
                    placeholder="Ex: 85.00" 
                    type="number"
                    step="0.01"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preco-crianca">Preço por Criança (até 12 anos)</Label>
                  <Input 
                    id="preco-crianca" 
                    placeholder="Ex: 45.00" 
                    type="number"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="desconto-grupo">Desconto para Grupos</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Input 
                    placeholder="A partir de quantas pessoas" 
                    type="number"
                  />
                  <Input 
                    placeholder="% de desconto" 
                    type="number"
                    max="50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* O que está incluso */}
          <Card>
            <CardHeader>
              <CardTitle>O que está incluso na experiência</CardTitle>
              <CardDescription>
                Selecione tudo que está incluído no preço da experiência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includeOptions.map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox 
                      id={item}
                      checked={includedItems.includes(item)}
                      onCheckedChange={() => toggleIncludedItem(item)}
                    />
                    <Label htmlFor={item} className="text-sm cursor-pointer">
                      {item}
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
                Fotos da Experiência
              </CardTitle>
              <CardDescription>
                Adicione fotos que mostrem a experiência em ação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <div className="text-sm text-muted-foreground mb-2">
                  Clique para fazer upload ou arraste as imagens aqui
                </div>
                <div className="text-xs text-muted-foreground">
                  PNG, JPG até 5MB cada (máximo 8 fotos)
                </div>
                <Button type="button" variant="outline" size="sm" className="mt-4">
                  Selecionar Fotos
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Requisitos e Recomendações */}
          <Card>
            <CardHeader>
              <CardTitle>Requisitos e Recomendações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="requisitos">O que levar/vestir</Label>
                <Textarea 
                  id="requisitos" 
                  placeholder="Ex: Roupas confortáveis, calçado fechado, protetor solar, chapéu..."
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="restricoes">Restrições ou Observações</Label>
                <Textarea 
                  id="restricoes" 
                  placeholder="Ex: Não recomendado para gestantes, pessoas com problemas cardíacos..."
                  className="min-h-[80px]"
                />
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
              {isLoading ? "Cadastrando..." : "Cadastrar Experiência"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastrarExperiencia;