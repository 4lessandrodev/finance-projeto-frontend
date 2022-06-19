import NewBudgetBoxModal, { SubmitNewBudgetBoxProps } from '@components/NewBudgetBoxModal';
import { useAuth } from '@contexts/auth/auth.context';
import { useBudgetBoxes } from '@contexts/my-budget-boxes/my-budget-boxes.context';
import HomeLayout from '@layouts/Home';
import NewBoxService from '@services/createNewBudgetBox';
import GetMyBudgetBoxesService from '@services/getMyBudgetBoxes';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage | null = () => {
  const { token } = useAuth();
  const [isNewBoxModalVisible, setNewBoxModalVisible] = useState<boolean>(false);

  const { data, loading, refetch } = GetMyBudgetBoxesService();
  const { createBudgetBox, error: boxError } = NewBoxService();
  const { setMyBudgetBoxes } = useBudgetBoxes();

  if (!token || loading) return null;
  data?.getBudgetBoxes && setMyBudgetBoxes(data.getBudgetBoxes);

  const handleSubmitNewBudgetBox = async (props: SubmitNewBudgetBoxProps) => {
    const result = await createBudgetBox({
      variables: { CreateBudgetBoxInput: props }
    });
    if (!result.data?.createBudgetBox) return boxError;
    const { data, error } = await refetch();
    if (error) return error;
    setMyBudgetBoxes(data.getBudgetBoxes);
  }

  return (
    <>
      <NewBudgetBoxModal
        isOpen={isNewBoxModalVisible}
        onSubmit={handleSubmitNewBudgetBox}
        closeModal={setNewBoxModalVisible}
      />
      <HomeLayout openOrCloseNewBudgetBoxModal={setNewBoxModalVisible}/>
    </>
  )
}

export default Home;
