import Logo from '@components/Logo';
import Title from '@components/Title'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Title value='Simple Title'/>
      <Logo />
    </div>
  )
}

export default Home;
