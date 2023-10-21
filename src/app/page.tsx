import { Header } from './components/header'
import { Banner } from './components/banner'
import { Programs } from './components/programs'
import { Topics } from './components/topics'
import { MemberShip } from './components/memberShip'
import { Footer } from './components/footer'
export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Programs/>
      <Topics/>
      <MemberShip/>
      <Footer/>
    </> 
  )
}
