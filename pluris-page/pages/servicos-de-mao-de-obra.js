import ServicePage, { ServiceDescription } from '../components/servicosPage/ServicesPage'

export default function Administrativos() {
  return (
    <ServicePage servicoName={'Serviço de mão de obra para Construção Civil'} imageName={'trabalhadores-blue'}>
      <ServiceDescription>Suporte para ligações de energia e água e esgoto</ServiceDescription>
      <ServiceDescription>
        Suporte em pequenas compras e valores de materiais, e orientação de lugares para cotações
      </ServiceDescription>
      <ServiceDescription>Busca por redução de custo mantendo a qualidade</ServiceDescription>
      <ServiceDescription>Ações para possíveis imprevistos sem prejudicar a obra</ServiceDescription>
    </ServicePage>
  )
}
