import { useAuth } from '@contexts/auth.context';
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { token } = useAuth();
  return (
    <div>
      <h1>Página Home - Autenticado</h1>
      <p> token: { token }</p>
    </div>
  )
}

export default Home;
