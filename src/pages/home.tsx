import { useAuth } from '@contexts/auth/auth.context';
import GetMyBudgetBoxesService from '@services/getMyBudgetBoxes';
import type { NextPage } from 'next'

const Home: NextPage | null = () => {
  const { token } = useAuth();

  const { data: budgetBoxes, loading, error } = GetMyBudgetBoxesService();

  if (loading) return null;
  if (error) return null;

  return (
    <div>
      <h1>Página Home - Autenticado</h1>
      <p> token: {token}</p>
      <p>{ budgetBoxes?.getBudgetBoxes[0]?.id }</p>
    </div>
  )
}

export default Home;
