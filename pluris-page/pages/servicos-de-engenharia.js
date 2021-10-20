import { ServiceDescription } from '../components/servicosPage/ServicesPage'
import ServicePage from '../components/servicosPage/ServicesPage'

export default function Administrativos() {
  return (
    <ServicePage servicoName={'Serviços de Engenharia'} imageName={'casa-em-obra-blue'}>
      <ServiceDescription>Laudos Técnicos e Ambientais</ServiceDescription>
      <ServiceDescription>Levantamento Planimétrico e Planialtimétrico</ServiceDescription>
      <ServiceDescription>Projeto e licenciamento junto aos orgãos responsáveis</ServiceDescription>
      <ServiceDescription>Projeto de Instalação Elétrica e Hidráulica</ServiceDescription>
      <ServiceDescription>
        Projeto Estrutural - Concreto armado, Alvenaria Estrutural, Estrutura Metálica e Estrutura de Madeira
      </ServiceDescription>
      <ServiceDescription>
        Projetos Especiais - Projeto e cálculo de Muros de Arrimo, Projetos de Arquitetura Residencial e Comercial
      </ServiceDescription>
    </ServicePage>
  )
}
