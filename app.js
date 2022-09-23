let rows = 4;
let cols = 4;

let elapsedTime = 0;
let isDrawing = true;
let blinkTime = 350;
let paused = false;

let que = [];
let queIndex = -1;
let scenario = 0;

function pause() {
  paused = !paused;
  instance.$data.paused = !instance.$data.paused;
}

function next() {
  if (scenario === scenarios.length - 1) return;
  scenario += 1;
  instance.$data.scenario = scenario;
  setupQue();
}

function prev() {
  if (scenario === 0) return;
  scenario -= 1;
  instance.$data.scenario = scenario;
  setupQue();
}

function setup() {
  const canvas = createCanvas(400, 300);
  canvas.parent('sketch');
  instance.$data.scenarios = scenarios;
  setupQue();
}

function setupQue() {
  while(instance.$data.code.length) instance.$data.code.pop();
  scenarios[scenario].toString().split('\n').forEach(line => {
    if (line.includes('que.push')) {
      line = line.replace('que.push([i,j]);', 'grid[i][j] = true;');
    }
    instance.$data.code.push(line);
  });

  while(que.length) que.pop();
  scenarios[scenario]();
  queIndex = -1;
}

function draw() {
  elapsedTime += deltaTime;
  drawGridLines();
  drawPrevGrids();

  if (isDrawing) {
    fillGrid(que[queIndex]);
  }

  if (!paused && elapsedTime > blinkTime) {
    queIndex += 1;
    if (queIndex === que.length) queIndex = -1;
    elapsedTime = 0;
  }
}

function drawPrevGrids() {
  for (let i=0; i<queIndex; i++) {
    fillGrid(que[i]);
  }
}

function fillGrid(coord) {
  if (!coord) return;

  let [i, j] = coord;
  let x = j * width/cols;
  let y = i * height/rows;

  fill(150);
  rect(x, y, width/cols, height/rows);

  fill(0);
  text(`(${i},${j})`, x+width/(2*cols), y+height/(2*rows));
}

function drawGridLines() {
  background(200);

  // notes(): draw horizontal lines
  for (let i=1; i<rows; i++) {
    line(0, height/rows * i, width, height/rows * i);
  }

  // notes(): draw vertical lines
  for (let i=1; i<cols; i++) {
    line(width/cols * i, 0, width/cols*i, height);
  }
}
