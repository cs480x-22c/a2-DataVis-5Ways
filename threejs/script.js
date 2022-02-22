
// Find the latest version by visiting https://cdn.skypack.dev/three.

import * as THREE from 'https://cdn.skypack.dev/three@0.127.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.127.0/examples/jsm/controls/OrbitControls.js';
import typefaceFont from './fonts/helvetiker_regular.typeface.json' assert { type: "json" };

const fontLoader = new THREE.FontLoader();
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene();
const loader = new THREE.FileLoader();
const KL = {
  axisWidth: .009,
  axisLength: 3.5,
  weightSize: 0.00002,
  weightScale: [1500, 5000],
  mpgTicks: [10, 20, 30, 40],
  mpgScale: [8, 47],
  weightTicks: [2000, 3000, 4000, 5000],
  colors: {
    bmw: 0xff6d59,
    ford: 0xa9b956,
    honda: 0x5ae6a0,
    mercedes: 0x5fc0ed,
    toyota: 0xb94ec7,
  }
}
let dataObject = [];

fontLoader.load(
  './fonts/helvetiker_regular.typeface.json',
  (font) => {
    generateAxes(font)
  }
)

loader.load(
  '../cars-sample.csv',
  (data) => {
    let rows = data.split('\n')
    rows.shift()
    rows.forEach(row => {
      row = row.split(',')
      placePoint(parseFloat(row[7]), parseFloat(row[3]), row[2])
    });
  },
  (inProgress) => {
    console.log((inProgress.loaded / inProgress.total * 100) + '% loaded')
  },
  (err) => {
    console.error('An error happened')
  },
)

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// /**
//  * Axes Helper
//  */
//  const axesHelper = new THREE.AxesHelper(2)
//  scene.add(axesHelper)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//camera.lookAt(new THREE.Vector3(0, - 1, 0))
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('canvas.webgl')
})
renderer.setSize(sizes.width, sizes.height)

const controls = new OrbitControls(camera, renderer.domElement)


window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  // Update camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



//for delta time
let time = Date.now()
//three.js built in version
const clock = new THREE.Clock()

const tick = () => {
  //clock

  // const elapsedTime = clock.getElapsedTime()
  // // delta time
  // const currentTime = Date.now()
  // const deltaTime = currentTime - time
  // time = currentTime

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}

tick()


function placeOnAxis(value, start, end, axisLength) {
  return (axisLength * (value - start) / (end - start)) - axisLength/2
}

function placeOnWeight(weight) {
  return placeOnAxis(weight, KL.weightScale[0], KL.weightScale[1], KL.axisLength)
}

function placeOnMPG(mpg) {
  return placeOnAxis(mpg, KL.mpgScale[0], KL.mpgScale[1], KL.axisLength)
}

function generateAxes(font) {
  //make Axes
  const axes = new THREE.Group()
  const weightAxis = new THREE.Mesh(
    new THREE.BoxGeometry(KL.axisLength, KL.axisWidth, KL.axisWidth),
    new THREE.MeshBasicMaterial({ color: 0xffffff }))

  weightAxis.position.set(0, -KL.axisLength / 2, 0)
  const mpgAxis = new THREE.Mesh(
    new THREE.BoxGeometry(KL.axisWidth, KL.axisLength, KL.axisWidth),
    new THREE.MeshBasicMaterial({ color: 0xffffff }))

  mpgAxis.position.set(-KL.axisLength / 2, 0, 0)

  gsap.fromTo(weightAxis.scale, {x: 0, y: 0, z: 0}, {delay: 0, duration: 1, x: 1, y: 1, z: 1});
  gsap.fromTo(mpgAxis.scale, {x: 0, y: 0, z: 0}, {delay: 0, duration: 1, x: 1, y: 1, z: 1});

  axes.add(weightAxis, mpgAxis);

  //make Labels
  const labelSettings = 
  {
    font: font,
    size: 0.1,
    height: 0.01,
    curveSegments: 3,
  }
  const textMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xaaaaaa,
    transparent: true,
    opacity: 0
   })
  gsap.fromTo(textMaterial, {opacity: 0}, {delay: 0, duration: 5, opacity: 1});


  const weightGeometry = new THREE.TextGeometry('Weight', labelSettings)
  const weightText = new THREE.Mesh(weightGeometry, textMaterial)
  weightText.position.set(0, -KL.axisLength / 2 - .2, 0);

  const mpgGeometry = new THREE.TextGeometry('MPG',labelSettings)
  const mpgText = new THREE.Mesh(mpgGeometry, textMaterial)
  mpgText.position.set(-KL.axisLength / 2 - .2, 0, 0);
  mpgText.rotateZ(Math.PI / 2)

  axes.add(weightText, mpgText)

  //create tick marks
  const tickSettings = 
  {
    font: font,
    size: 0.05,
    height: 0.005,
    curveSegments: 3,
  }
  KL.weightTicks.forEach(e => {
    const mesh = new THREE.Mesh(
      new THREE.TextGeometry(e.toString(), tickSettings),
      textMaterial
    )
    mesh.position.set(placeOnWeight(e), placeOnMPG(KL.mpgScale[0] - .8), 0);
    axes.add( mesh )
  });

  KL.mpgTicks.forEach(e => {
    const mesh = new THREE.Mesh(
      new THREE.TextGeometry(e.toString(), tickSettings),
      textMaterial
    )
    mesh.position.set(placeOnWeight(KL.weightScale[0] - 95), placeOnMPG(e), 0);
    axes.add( mesh )
  });
  scene.add(axes);
}

function placePoint(weight, mpg, manufacturer) {

  if (weight && mpg && manufacturer) {
    const str = manufacturer.substring(1, manufacturer.length - 1);

    const geometry = new THREE.SphereGeometry(weight * KL.weightSize, 8, 8)
    const material = new THREE.MeshBasicMaterial({
      color: KL.colors[str],
      transparent: true,
      opacity: .5,
      side: THREE.FrontSide,
    })
    const dataPoint = new THREE.Mesh(geometry, material)
    dataPoint.position.set(
      placeOnWeight(weight),
      placeOnMPG(mpg),
      0)
      gsap.fromTo(dataPoint.scale, {x: 0, y: 0, z: 0}, {delay: weight/1000 - 1, ease: "power1.out", duration: 1, x: 1, y: 1, z: 1});
    scene.add(dataPoint);
  }
}
