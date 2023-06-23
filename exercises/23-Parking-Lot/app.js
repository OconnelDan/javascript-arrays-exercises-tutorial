

let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
 function getParkingLotState(parking_state) {
  const state = {
    totalSlots: 0,
    availableSlots: 0, 
    occupiedSlots: 0, 

  }
  for (let i = 0; i < parking_state.length ; i++) {
    for (let j = 0; j < parking_state[i].length; j++) {
      if (parking_state[i][j] === 1 || parking_state[i][j] === 2) {
        state.totalSlots++;        
      }
      if (parking_state[i][j] === 1){
        state.occupiedSlots++;
      }
      if (parking_state[i][j] === 2){
        state.availableSlots++;

      }
    }
          
    
          
        }
  


  return state;
      }
 

console.log(getParkingLotState(parking_state))