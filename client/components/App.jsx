import React, { useGlobal } from 'reactn'
import { Route } from 'react-router-dom'
import Welcome from './Welcome'
import Nav from './Nav'
import ProgrammerHumorRedditFeed from './ProgrammerHumorRedditFeed'
import RetconnedRedditFeed from './RetconnedRedditFeed'
import IsItBullshitRedditFeed from './IsItBullshitRedditFeed'
import TooAfraidToAskRedditFeed from './TooAfraidToAskFeed'
import QuantumPhysicsFeed from './QuantumPhysicsFeed'
import QuantumComputingFeed from './QuantumComputingFeed'
import JavascriptFeed from './JavascriptFeed'
import SpaceFeed from './SpaceFeed'
import AstronomyPicOfTheDay from './AstronomyPicOfTheDay'
import NZGeneralFeed from './NZGeneralFeed'

const App = () => {
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  if (categorySelected || titleSelected) {
    return <div>
      <Nav />
      <div>
        <Route path='/phFeed' component={ProgrammerHumorRedditFeed} />
        <Route path='/rcFeed' component={RetconnedRedditFeed} />
        <Route path='/bsFeed' component={IsItBullshitRedditFeed} />
        <Route path='/tataFeed' component={TooAfraidToAskRedditFeed} />
        <Route path='/qpFeed' component={QuantumPhysicsFeed} />
        <Route path='/qcFeed' component={QuantumComputingFeed} />
        <Route path='/jsFeed' component={JavascriptFeed} />
        <Route path='/spaceFeed' component={SpaceFeed} />
        <Route path='/apod' component={AstronomyPicOfTheDay} />
        <Route path='/nzgFeed' component={NZGeneralFeed} />
      </div>
    </div>
  } else {
    return <div>
      <Nav />
      <div>
        <Welcome />
      </div>
    </div>
  }
}

export default App
