import type { NextPage } from 'next'
import SignLayout from '@layouts/Sign';
import SignForm from '@components/SignForm';

const Home: NextPage = () => {
  return (
    <SignLayout>
      <SignForm formType='SignUp'/>
    </SignLayout>
  )
}

export default Home;
