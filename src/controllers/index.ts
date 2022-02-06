const chooseRandomIndex = () => Math.floor(Math.random() * 3)

const runSingleSimulation = (changeSelection: boolean) => {
  const goldIndex = chooseRandomIndex()
  let userIndex = chooseRandomIndex()
  const validOpenDoorIndexes = [0, 1, 2].filter((value) => {
    return value !== goldIndex && value !== userIndex
  })
  const openedDoorIndex =
    validOpenDoorIndexes[
      Math.floor(Math.random() * validOpenDoorIndexes.length)
    ]

  if (changeSelection) {
    const remainingDoorIndex = [0, 1, 2].filter((value) => {
      return value !== userIndex && value !== openedDoorIndex
    })[0]

    userIndex = remainingDoorIndex
  }

  return userIndex === goldIndex
}

const runMontyHallSim = (rounds: number, changeSelection: boolean) => {
  let wins = 0

  for (let i = 0; i < rounds; ++i) {
    if (runSingleSimulation(changeSelection)) {
      ++wins
    }
  }

  return wins
}

export default runMontyHallSim
