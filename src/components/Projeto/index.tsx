import Paragrafo from '../Paragrafo'
import Titulo from '../Titulos'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lisra de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista e tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
