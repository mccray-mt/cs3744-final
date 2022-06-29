import React, { Component } from "react";
import p5 from 'p5'

class P3 extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()  // createRef provides a way to include
        // any third-party DOM element into our React
    }

    // This is your sketch for P5, add your sketch correctly and make sure
    // your P5 sketch is correctly renders inside your app.
    Sketch = (p) => {

        let stars = [];

        //Change these
        let maxspeed = 3;
        let acceleration = 0.25;
        let starnumber = 250;
        let player = new Player();

        p.setup = () => {
            p.createCanvas(p.windowWidth / 2, p.windowHeight * 3 / 4);

            for (var i = 0; i < starnumber; i++) {
                stars[i] = new Star();
            }
        }

        p.draw = () => {
            p.background(0);
            p.push();
            p.translate(p.width / 2, p.height / 2);
            for (var n = 0; n < stars.length; n++) {
                stars[n].show();
            }
            p.pop();
            player.move();
            player.draw();
        }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth / 2, p.windowHeight * 3 / 4);
        }

        function Player() {
            this.x = p.width / 2;
            this.y = p.height / 2;
            this.ypos = 0;
            this.angle = 0;
            this.forward = 0;
            this.side = (p.width + p.height) / 60;

            this.move = function () {
                if (p.keyIsDown(p.UP_ARROW) || p.keyIsDown(87)) {
                    if (p.keyIsDown(32) && this.forward < maxspeed * 2) {
                        this.forward += 2 * acceleration;
                    }
                    else if (this.forward < maxspeed) {
                        this.forward += acceleration;
                    }
                } else {
                    if (this.forward > 0.025) {
                        this.forward -= 0.05;
                    }
                }
                if (p.keyIsDown(p.LEFT_ARROW) || p.keyIsDown(65)) {
                    this.angle -= 0.15;
                    if (this.angle <= 0) {
                        this.angle = 2 * p.PI;
                    }
                }
                if (p.keyIsDown(p.RIGHT_ARROW) || p.keyIsDown(68)) {
                    this.angle += 0.1;
                    if (this.angle >= 2 * p.PI) {
                        this.angle = 0;
                    }
                }
                this.y = p.height / 2 - this.forward * p.cos(this.angle);
                this.x = p.width / 2 + this.forward * p.sin(this.angle);

                if (this.x < 0) {
                    this.x = p.width + this.x;
                }
                if (this.x > p.width) {
                    this.x = this.x - p.width;
                }
                if (this.y < 0) {
                    this.y = p.height + this.y;
                }
                if (this.y > p.height) {
                    this.y = this.y - p.height;
                }
            };

            this.draw = function () {
                p.push();
                p.fill(0, 255, 0);
                p.translate(this.x, this.y);
                p.rotate(this.angle);
                p.triangle(0, -p.width / 60, -p.width / 60, p.width / 60, p.width / 60, p.width / 60)
                p.pop();
            };
        }

        class Star {
            constructor() {
                this.x = p.random(-p.width, p.width);
                this.y = p.random(-p.height, p.height);
                this.r = p.random(1, (p.width + p.height) / 120);
            }
            show() {
                this.x -= 2 * player.forward * p.sin(player.angle);
                this.y += 2 * player.forward * p.cos(player.angle);
                if (
                    this.x > p.width / 2 + this.r ||
                    this.x < -p.width / 2 - this.r ||
                    this.y > p.height / 2 + this.r ||
                    this.y < -p.height / 2 - this.r
                ) {
                    this.side = p.int(p.random(0, 4));
                    if (this.side === 0) {
                        this.x = p.random(p.width, p.width / 2 + this.r);
                        this.y = p.random(-p.height, p.height);
                    }
                    if (this.side === 1) {
                        this.x = p.random(-p.width, -(p.width / 2) - this.r);
                        this.y = p.random(-p.height, p.height);
                    }
                    if (this.side === 2) {
                        this.x = p.random(-p.width, p.width);
                        this.y = p.random(p.height, p.height / 2 + this.r);
                    }
                    if (this.side === 3) {
                        this.x = p.random(-p.width, p.width);
                        this.y = p.random(-p.height, -(p.height / 2) - this.r);
                    }
                }
                p.push();
                p.fill(255);
                p.noStroke();
                p.ellipse(this.x, this.y, this.r, this.r);
                p.pop();
            }
        }
    }
    componentDidMount() {
        // This is the time that we create a new P5 object and attach it to our dom reference
        new p5(this.Sketch, this.myRef.current)
    }
    render() {
        //We use this div as our reference for the element we want to add as a child
        return (
            <>
                <div className="project">
                    <h1> Space Travel in P5 </h1>
                    <p> Use the arrow keys or WASD to fly around space! Space bar increases your speed!</p>
                    <div ref={this.myRef}>
                    </div>
                </div>
            </>
        );
    }
}

export default P3