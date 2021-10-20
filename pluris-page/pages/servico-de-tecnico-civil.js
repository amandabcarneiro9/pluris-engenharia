import ServicePage, { ServiceDescription } from '../components/servicosPage/ServicesPage'

export default function Administrativos() {
  return (
    <ServicePage servicoName={'Serviço de Técnico Civil'} imageName={'supervisao-de-obra-blue'}>
      <ServiceDescription>Analisar e discutir instruções técnicas do projeto a ser desenvolvido</ServiceDescription>
      <ServiceDescription>
        Orientar e acompanhar a equipe quanto à execução dos trabalhos para cumprimento de cronograma
      </ServiceDescription>
      <ServiceDescription>
        Coordenar a instalação e utilização de equipamentos e estruturas construtivas em canteiros de obra
      </ServiceDescription>
      <ServiceDescription>Examinar a segurança dos locais e equipamentos da obra</ServiceDescription>
    </ServicePage>
  )
}
