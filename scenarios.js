const scenarios = [
  scenario_0,
  scenario_1,
  scenario_2,
  scenario_3,
  scenario_4,
  scenario_5,
  scenario_6,
];

function scenario_0() {
  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      que.push([i,j]);
    }
  }
}

function scenario_1() {
  for (let j=0; j<cols; j++) {
    let i = 0;
    let _j = j;
    while (_j > -1) {
      que.push([i,_j]);
      i += 1;
      _j -= 1;
    }
  }

  for (let i=1; i<rows; i++) {
    let j = cols-1;
    let _i = i;
    while (_i < rows) {
      que.push([_i,j]);
      _i += 1;
      j -= 1; 
    }
  }
}

function scenario_2() {
  for (let j=cols-1; j>-1; j--) {
    let i = 0;
    let _j = j;
    while (_j < cols) {
      que.push([i,_j]);
      _j += 1;
      i += 1;
    }
  }

  for (let i=1; i<rows; i++) {
    let j = 0;
    let _i = i;
    while (_i < rows) {
      que.push([_i,j]);
      _i += 1;
      j += 1;
    }
  }
}

function scenario_3() {
  for (let j=0; j<cols; j++) {
    let i = rows-1;
    let _j = j;
    while (_j < cols) {
      que.push([i,_j]);
      _j += 1;
      i -= 1;
    }
  }
}

function scenario_4() {
  for (let i=rows-1; i>-1; i--) {
    let j = 0;
    let _i = i;
    while (_i > -1) {
      que.push([_i,j]);
      j += 1;
      _i -= 1;
    }
  }
}

function scenario_5() {
  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      if ( (i+j) % 2 === 0) {
        que.push([i,j]);
      }
    }
  }
}

function scenario_6() {
  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      if ( (i+j) % 2 !== 0) {
        que.push([i,j]);
      }
    }
  }
}


