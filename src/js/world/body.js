class Body {

    constructor() {
        this.x = this.y = 0;
        this.radius = 0;
    }

    cycle(e) {
        U.ships.forEach(ship => {
            const minDist = this.radius + ship.radius;
            const overlap = minDist - dist(ship, this);
            if (overlap > 0) {
                // Push the ship away
                const angle = angleBetween(this, ship);
                ship.x = this.x + cos(angle) * (minDist + 5);
                ship.y = this.y + sin(angle) * (minDist + 5);
                ship.vX += cos(angle) * (overlap + SHIP_DECELERATION * 2);
                ship.vY += sin(angle) * (overlap + SHIP_DECELERATION * 2);
                
                interp(ship, 'uncontrolledRotation', pick([-6, 6]), 0, 1);

                ship.damage(this);
            }
        });
    }

    // For reference only
    // render() {

    // }

    damage() {
        
    }

    pointsAround(radiuses) {
        const pts = [];

        const circles = [];
        radiuses.forEach(radius => {
            const circle = [];
            circles.push(circle);

            for (let i = 0 ; i < 6 ; i++) {
                const angle = PI * 2 * (i / 6);
                const pt = {
                    'x': cos(angle) * radius + this.x,
                    'y': sin(angle) * radius + this.y,
                    'neighbors': []
                };
                pts.push(pt);

                circle.push(pt);
            }
        });

        circles.forEach((circle, circleIndex) => {
            circle.forEach((pt, ptIndex) => {
                // Link within the same circle
                const circleNeighbor = circle[(ptIndex + 1) % circle.length];
                pt.neighbors.push(circleNeighbor);
                circleNeighbor.neighbors.push(pt);

                // Link between circles
                const radiusNeighbor = circles[(circleIndex + 1) % circles.length][ptIndex];
                pt.neighbors.push(radiusNeighbor);
                radiusNeighbor.neighbors.push(pt);
            });
        });

        return pts;
    }

}