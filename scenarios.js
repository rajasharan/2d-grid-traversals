const scenarios = [
  scenario_0,
  scenario_1,
  scenario_2,
  scenario_3,
  scenario_4,
  scenario_5,
];

function scenario_0() {
  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      que.push([i,j]);
    }
  }
}

function scenario_1() {
  for (let i=rows-1; i>-1; i--) {
    for (let j=0; j<cols; j++) {
      que.push([i,j]);
    }
  }
}

function scenario_2() {
  for (let i=rows-1; i>-1; i--) {
    for (let j=cols-1; j>-1; j--) {
      que.push([i,j]);
    }
  }
}

function scenario_3() {
  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      if ( (i+j) % 2 === 0) {
        que.push([i,j]);
      }
    }
  }
}

function scenario_4() {
  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      if ( (i+j) % 2 !== 0) {
        que.push([i,j]);
      }
    }
  }
}

function scenario_5() {
  for (let j=0; j<cols; j++) {
    let i = 0;
    let _j = j;
    while(_j>-1) {
      que.push([i,_j]);
      i += 1;
      _j -= 1;
    }
  }
}
