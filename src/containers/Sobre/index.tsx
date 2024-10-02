import Titulo from '../../components/Titulos'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint omnis
      reprehenderit corporis incidunt exercitationem delectus ex dolorum
      suscipit saepe beatae repellendus unde soluta quaerat odit, iste accusamus
      laudantium consequuntur molestias.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=kingmancha&show_icons=true&theme=dracula&include_all_commits=true&count_private=true&token=YOUR_GITHUB_TOKEN"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=kingmancha&layout=compact&langs_count=7&theme=dracula&token=YOUR_GITHUB_TOKEN"
      />
    </GithubSecao>
  </section>
)

export default Sobre
