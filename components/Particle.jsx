import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styles from "../styles/Home.module.css";

const Particle = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  var color = '#eee';
var maxParticles = 80;
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={styles.particle}
      params={{
        'particles': {
            'number': {
              'value': maxParticles,
              'density': {
                'enable': true,
                'value_area': (maxParticles * 10) * 2
              }
            },
            'color': {
              'value': color
            },
            'shape': {
              'type': 'circle',
              'stroke': {
                'width': 0,
                'color': '#000000'
              },
              'polygon': {
                'nb_sides': 5
              },
            },
            'opacity': {
              'value': 0.5,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 3,
              'random': true,
              'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 150,
              'color': color,
              'opacity': 1,
              'width': 1
            },
            'move': {
              'enable': true,
              'speed': 2,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'bounce': false,
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'interactivity': {
            'detect_on': 'canvas',
            'events': {
              'onhover': {
                'enable': true,
                'mode': 'grab'
              },
              'onclick': {
                'enable': true,
                'mode': 'push'
              },
              'resize': true
            },
            'modes': {
              'grab': {
                'distance': 140,
                'line_linked': {
                  'opacity': 1
                }
              },
              'bubble': {
                'distance': 400,
                'size': 40,
                'duration': 2,
                'opacity': 8,
                'speed': 3
              },
              'repulse': {
                'distance': 200,
                'duration': 0.4
              },
              'push': {
                'particles_nb': 4
              },
              'remove': {
                'particles_nb': 2
              }
            }
          },
          'retina_detect': true
      }}
    />
  );
};

export default Particle;
