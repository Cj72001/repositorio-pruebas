import React from "react";
import Matter from "matter-js";

class Scene extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gravedad: false,
      variables: { engine: {} },
      objetos: {
        Engine: Matter.Engine,
        Render: Matter.Render,
        World: Matter.World,
        Bodies: Matter.Bodies,
        Mouse: Matter.Mouse,
        MouseConstraint: Matter.MouseConstraint,
      },
    };
  }

  componentDidMount() {
    this.CreateMatter();
  }

  CreateMatter() {
    const {
      Engine,
      Render,
      World,
      Bodies,
      Mouse,
      MouseConstraint,
    } = this.state.objetos;

    const category01 = 0x0002,
      category02 = 0x0004;

    var engine = Engine.create({
      //positionIterations: 20
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 1580,
        height: 630,
        wireframes: false,
        background: "#FFFFFF",
      },
    });

    var balls = [
      Bodies.circle(210, 350, 30, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
          mask: 0x0004 | 0x0001,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.circle(210, 350, 30, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
          mask: 0x0004 | 0x0001,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.circle(210, 350, 30, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
          mask: 0x0001 | 0x0002,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.circle(210, 350, 30, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
          mask: 0x0001 | 0x0002,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
    ];

    var rectangles = [
      Bodies.rectangle(210, 100, 30, 110, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 100,
        },
      }),
      Bodies.rectangle(210, 100, 30, 110, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 100,
        },
      }),
      Bodies.rectangle(210, 100, 30, 110, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 100,
        },
      }),
      Bodies.rectangle(210, 100, 30, 110, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 100,
        },
      }),
    ];

    var triangles = [
      Bodies.trapezoid(1400, 130, 70, 70, 2, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
          mask: 0x0004 | 0x0001,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.trapezoid(1400, 130, 70, 70, 2, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
          mask: 0x0004 | 0x0001,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.trapezoid(1400, 130, 70, 70, 2, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
          mask: 0x0001 | 0x0002,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.trapezoid(1400, 130, 70, 70, 2, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
          mask: 0x0001 | 0x0002,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
    ];

    var squares = [
      Bodies.rectangle(1400, 350, 60, 60, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
          mask: 0x0004 | 0x0001,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.rectangle(1400, 350, 60, 60, {
        restitution: 0.5,
        collisionFilter: {
          category: category01,
          mask: 0x0004 | 0x0001,
        },
        render: {
          fillStyle: "#0278ae",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.rectangle(1400, 350, 60, 60, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
          mask: 0x0001 | 0x0002,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
      Bodies.rectangle(1400, 350, 60, 60, {
        restitution: 0.5,
        collisionFilter: {
          category: category02,
          mask: 0x0001 | 0x0002,
        },
        render: {
          fillStyle: "#51adcf",
          strokeStyle: "transparent",
          lineWidth: 3,
        },
      }),
    ];

    World.add(engine.world, [
      Bodies.rectangle(170, 60, 190, 10, { isStatic: true }), //arriba cuadrado
      Bodies.rectangle(170, 255, 180, 10, { isStatic: true }), //abajo cubo
      Bodies.rectangle(170, 510, 180, 10, { isStatic: true }), //abajo circulo
      Bodies.rectangle(170, 320, 180, 10, { isStatic: true }), //arriba circulo
      Bodies.rectangle(260, 160, 10, 200, { isStatic: true }), //derecho cubo
      Bodies.rectangle(260, 415, 10, 200, { isStatic: true }), //derecho circulo
      Bodies.rectangle(80, 160, 10, 200, { isStatic: true }), //izquierda cubo
      Bodies.rectangle(80, 415, 10, 200, { isStatic: true }), //izquierda circulo
      Bodies.rectangle(790, 510, 1050, 10, { isStatic: true }), //base

      Bodies.rectangle(1400, 60, 190, 10, { isStatic: true }), //arriba cuadrado
      Bodies.rectangle(1400, 255, 180, 10, { isStatic: true }), //abajo cubo
      Bodies.rectangle(1400, 510, 180, 10, { isStatic: true }), //abajo circulo
      Bodies.rectangle(1400, 320, 180, 10, { isStatic: true }), //arriba circulo
      Bodies.rectangle(1490, 160, 10, 200, { isStatic: true }), //derecho cubo
      Bodies.rectangle(1490, 415, 10, 200, { isStatic: true }), //derecho circulo
      Bodies.rectangle(1310, 160, 10, 200, { isStatic: true }), //izquierda cubo
      Bodies.rectangle(1310, 415, 10, 200, { isStatic: true }), //izquierda circulo
    ]);
    World.add(engine.world, [
      ...balls,
      ...rectangles,
      ...triangles,
      ...squares,
    ]);
    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    World.add(engine.world, mouseConstraint);

    Engine.run(engine);

    Render.run(render);

    this.setState({ engine: engine });
  }

  render() {
    return <div ref="scene"></div>;
  }
}
export default Scene;
