class Pelota {
    constructor() {
        this.diam = random(50, 300);
        this.rad = this.diam / 2;

        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random(-5, 5);
        this.vely = random(-5, 5);
        this.nuevoColor = color(random(10, 250), random(90, 235), random(120, 150), random(10, 100));
    }
    //funcion actualizar
    // Actualiza la posición de la bola y 
    // verifica colisiones con los bordes

    actualizar() {
        if (this.posx > width - this.rad || this.posx < this.rad) {
            this.velx *= -1;
        }

        if (this.posy > height - this.rad || this.posy < this.rad) {
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;

    }

    visualizar(nombre) {
        if (nombre == "circle") {
            fill(this.nuevoColor);
            stroke(this.nuevoColor);
            strokeWeight(10);
            circle(this.posx, this.posy, this.diam);
        }
        if (nombre == "ellipse") {
            fill(this.nuevoColor);
            stroke(this.nuevoColor);
            strokeWeight(10);
            ellipse(this.posx, this.posy, this.diam / 2, this.diam * 2);
        }
        if (nombre == "square") {
            fill(this.nuevoColor);
            stroke(this.nuevoColor);
            strokeWeight(10);
            square(this.posx, this.posy, this.diam / 2);
        }
        if (nombre == "rect") {
            fill(this.nuevoColor);
            stroke(this.nuevoColor);
            strokeWeight(10);
            rect(this.posx, this.posy, this.diam / 2, this.diam * 2)
        }


        // noFill();
        // ellipse(this.posx, this.posy, this.diam / 2, this.diam * 2);


        // fill("#ef990fff");
        // stroke("#11eb4bff");
        // square(this.posx, this.posy, this.diam / 2);

    }
}
