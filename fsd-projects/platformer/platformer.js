$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(200, 700, 100, 10);
     createPlatform(400, 600, 200, 10);
     createPlatform(200, 500, 100, 10);
     createPlatform(400, 400, 200, 10);
     createPlatform(900, 500, 100, 10);
     createPlatform(700, 300, 10, 500);
     createPlatform(700, 650, 600, 10);
     createPlatform(100, 300, 100, 10);
     createPlatform(400, 200, 100, 10);
     createPlatform(700, 200, 100, 10);





    // TODO 3 - Create Collectables
    createCollectable("book", 200, 170, 0.5, 0.7);
    createCollectable("steve", 400, 150, 0.5, 0.7);
    createCollectable("grace", 700, 150, 0.5, 0.7);
    createCollectable("database", 900, 150, 0.5, 0.7);
    createCollectable("max", 700, 700,);

    



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 300, 2000);
    createCannon("left", 400, 2000);
    createCannon("bottom", 600, 2000);
    createCannon("top", 1400, 2000);




    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
