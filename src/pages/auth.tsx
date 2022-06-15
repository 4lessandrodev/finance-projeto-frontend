import { useBudgetBoxes } from '@contexts/my-budget-boxes/my-budget-boxes.context';
import HomeLayout from '@layouts/Home';
import GetMyBudgetBoxesService from '@services/getMyBudgetBoxes';
import type { NextPage } from 'next'

const Template: NextPage | null = () => {
  const { setMyBudgetBoxes } = useBudgetBoxes();
  const { data, loading } = GetMyBudgetBoxesService();
  
  if (loading) return null;
  data?.getBudgetBoxes && setMyBudgetBoxes(data.getBudgetBoxes);

  return (
    <HomeLayout>
      <h1>Hello</h1>
    </HomeLayout>
  )
}

export default Template;
