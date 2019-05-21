import {hot} from 'react-hot-loader';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Canvas,
  useThree
} from 'react-three-fiber';
import * as THREE from 'three';

const App = class extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  state = {
    radius: 1
  };

  render() {
    const {
      radius = 1
    } = this.state;

    return (
      <div>
        <input
          type='number'
          step={0.1}
          placeholder='Radius'
          value={radius}
          onChange={({target: {value = '1'} = {}} = {}) => this.setState({radius: parseFloat(value)})}
        />
        <Canvas>
          <pointLight
            position={new THREE.Vector3(50, 50, 50)}
          />
          <mesh
            scale={new THREE.Vector3(radius, radius, radius)}
          >
            <sphereGeometry
              attach='geometry'
              args={[1, 360, 360]}
            />
            <meshLambertMaterial
              attach='material'
              color='#0096E4'
            />
          </mesh>
        </Canvas>
      </div>
    );
  }
};

export default hot(module)(App);
