import type { NextPage } from 'next'
import SignLayout from '../layouts/Sign';
import SignForm from '../components/SignForm';

const Home: NextPage = () => {
  return (
    <SignLayout>
      <SignForm formType='SignIn'/>
    </SignLayout>
  )
}

export default Home;
