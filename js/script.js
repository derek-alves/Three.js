import * as THREE from '../node_modules/three/src/Three.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

var player = { height:1.8, speed:0.2, turnSpeed:Math.PI*0.02 };
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );


  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0xEEEEEE);
  
  renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  var cube = new THREE.Mesh( geometry, material );
  cube.position.y += 1;
  scene.add( cube );


  var groundTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/terrain/grasslight-big.jpg");
  groundTexture.anisotropy = 16;
  groundTexture.encoding = THREE.sRGBEncoding;
  var PlaneGeometry = new THREE.PlaneGeometry( 50,50, 50,50);
  var PlaneMaterial = new THREE.MeshBasicMaterial( {map:groundTexture, side: THREE.DoubleSide} );
  var plane = new THREE.Mesh( PlaneGeometry, PlaneMaterial );
  plane.rotation.x -= Math.PI/2;
  scene.add( plane );


  camera.position.set(0, player.height +1, -5);
	camera.lookAt(new THREE.Vector3(0,player.height,0));

  var controls = new OrbitControls( camera, renderer.domElement );
  controls.maxPolarAngle = Math.PI * 0.5;
  controls.minDistance = 10;
	controls.maxDistance = 50;

  camera.position.z = 5;
  controls.update();


var animate = function () {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
	cube.rotation.y += 0.02;
  controls.update();
  renderer.render( scene, camera );
};

animate();



       
  
        // var pos = new THREE.Vector3();
				// var quat = new THREE.Quaternion();

        // // Ground

        // var groundTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/terrain/grasslight-big.jpg");
				// groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
				// groundTexture.repeat.set( 25, 25 );
				// groundTexture.anisotropy = 16;
				// groundTexture.encoding = THREE.sRGBEncoding;

				// var groundMaterial = new THREE.MeshLambertMaterial( { map: groundTexture } );

      	// var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 20000, 20000 ), groundMaterial );
				// mesh.position.y = - 250;
				// mesh.rotation.x = - Math.PI / 2;
				// mesh.receiveShadow = true;
				// scene.add( mesh );






