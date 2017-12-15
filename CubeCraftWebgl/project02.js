var canvas;
var gl;

var NumVertices  = 36;
//points
var points = [];
//firstoject
var points1=[];
var points2=[];
var points3=[];
var points4=[];
var points5=[];
var points6=[];
//second object
var points7=[];
var points8=[];
var points9=[];
var points10=[];
var points11=[];
var points12=[];
//thirs object
var points13=[];
var points14=[];
var points15=[];
var points16=[];
var points17=[];
var points18=[];

//tal2a
var points19=[];

//sa5r
var points20=[];
var points21=[];

//colors
var colors = [];
//first object
var colors1 = [];//body
var colors2 = [];//leftarm
var colors3=[];//rightarm
var colors4=[];//head
var colors5=[];//leftleg
var colors6=[];//rightleg

//second object
var colors7 = [];//body
var colors8 = [];//leftarm
var colors9=[];//rightarm
var colors10=[];//head
var colors11=[];//leftleg
var colors12=[];//rightleg
//third object
var colors13 = [];//body
var colors14 = [];//leftarm
var colors15=[];//rightarm
var colors16=[];//lead
var colors17=[];//leftleg
var colors18=[];//rightleg
//tal2a
var colors19=[];

//sa5r
var colors20=[];
var colors21=[];


var xAxis = 0;
var yAxis = 1;
var zAxis = 2;

var axis = 1;
//object1
//body
var theta = [ 0, 0, 0 ];
var S = [0.17,0.2,0.17];
var Tran = [-0.3,-0.18,0];
//left arm
var theta3= [ 0, 0, 0 ];
var S3 = [0.19,0.17,0.17];
var Tran3 = [-0.29,-0.2,0.0];

//right arm
var theta2= [ 0, 0, 0 ];
var S2 = [0.19,0.17,0.17];
var Tran2 = [-0.159,-0.2,0.0];

//head
var theta4= [ 0, 0, 0 ];
var S4 = [0.25,0.95,0.25];
var Tran4 = [-0.3,-0.535,0];


//leftleg
var theta5= [ 0, 0, 0 ];
var S5 = [0.06,0.18,0.05];
var Tran5 = [-0.35,-0.35,0];

//leftleg
var theta6= [ 0, 0, 0 ];
var S6 = [0.06,0.18,0.05];
var Tran6 = [-0.25,-0.35,0];

//object2
//body
var theta7 = [ 0, 0, 0 ];
var S7 = [0.17,0.2,0.17];
var Tran7 = [0.1,-0.18,0];
//left arm
var theta8= [ 0, 0, 0 ];
var S8 = [0.19,0.19,0.17];
var Tran8 = [0.11,-0.2,0.0];

//right arm
var theta9= [ 0, 0, 0 ];
var S9 = [0.19,0.19,0.17];
var Tran9 = [0.24,-0.2,0.0];

//head
var theta10= [ 0, 0, 0 ];
var S10 = [0.25,0.95,0.25];
var Tran10 = [0.1,-0.535,0];


//leftleg
var theta11= [ 0, 0, 0 ];
var S11 = [0.06,0.18,0.05];
var Tran11 = [0.05,-0.35,0];

//leftleg
var theta12= [ 0, 0, 0 ];
var S12 = [0.06,0.18,0.05];
var Tran12 = [0.15,-0.35,0];

//object3
//body
var theta13 = [ 0, 0, 0 ];
var S13 = [0.17,0.2,0.17];
var Tran13 = [0.5,-0.18,0];
//left arm
var theta14= [ 0, 0, 0 ];
var S14 = [0.19,0.17,0.17];
var Tran14 = [0.51,-0.2,0.0];

//right arm
var theta15= [ 0, 0, 0 ];
var S15 = [0.19,0.17,0.17];
var Tran15 = [0.64,-0.2,0.0];

//head
var theta16= [ 0, 0, 0 ];
var S16 = [0.25,0.95,0.25];
var Tran16 = [0.5,-0.535,0];


//leftleg
var theta17= [ 0, 0, 0 ];
var S17 = [0.06,0.18,0.05];
var Tran17 = [0.45,-0.35,0];

//leftleg
var theta18= [ 0, 0, 0 ];
var S18 = [0.06,0.18,0.05];
var Tran18 = [0.55,-0.35,0];


var theta19= [ 0, 0, 0 ];
var S19 = [0.06,0.01,0.05];
var Tran19 = [0.55,-0.35,0];


var theta20= [ 0, 0, 0 ];
var S20 = [0.15,0.2,0.05];
var Tran20 = [0.55,-0.35,0];

var theta21= [ 0, 0, 0 ];
var S21 = [0.10,0.9,0.05];
var Tran21 = [0.55,-0.35,0];





 // Tran[xAxis]+=-0.3;
 //    Tran2[xAxis]+=-0.3;
 //    Tran3[xAxis]+=-0.3;
 //    Tran4[xAxis]+=-0.3;
 //    Tran5[xAxis]+=-0.3;
 //    Tran6[xAxis]+=-0.3;

var thetaLoc;
var TranLoc;
var SLoc;

var near = 0.3;
var far = 3.0;
var radius = 4.0;
var thetaa  = 0.0;
var phi    = 0.0;
var dr = 5.0 * Math.PI/180.0;

var  fovy = 60.0;  // Field-of-view in Y direction angle (in degrees)
var  aspect;       // Viewport aspect ratio
var mvMatrix, pMatrix;
var modelView, projection;
var eye;
const at = vec3(0.0, 0.0, 0.0);
const up = vec3(0.0, 1.0, 0.0);

window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }


    colorCube();
    points = points1.concat(points2,points3,points4,points5,points6,points7,points8,points9,points10,points11,points12,points13,points14,points15,points16,points17,points18);

	colors = colors1.concat(colors2,colors3,colors4,colors5,colors6,colors7,colors8,colors9,colors10,colors11,colors12,colors13,colors14,colors15,colors16,colors17,colors18);
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0.0, 0.0, 0.0, 0.0 );
     aspect =  canvas.width/canvas.height;
    gl.enable(gl.DEPTH_TEST);


    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(colors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(points), gl.STATIC_DRAW );


    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    thetaLoc = gl.getUniformLocation(program, "theta");
    TranLoc = gl.getUniformLocation(program, "Tran");
    SLoc = gl.getUniformLocation(program, "S");

     modelView = gl.getUniformLocation( program, "modelView" );
    projection = gl.getUniformLocation( program, "projection" );


document.getElementById("Button1").onclick = function(){near  *= 1.1; far *= 1.1;};
    document.getElementById("Button2").onclick = function(){near *= 0.9; far *= 0.9;};
    document.getElementById("Button3").onclick = function(){radius *= 2.0;};
    document.getElementById("Button4").onclick = function(){radius *= 0.5;};
    document.getElementById("Button5").onclick = function(){thetaa += dr;};
    document.getElementById("Button6").onclick = function(){thetaa -= dr;};
    document.getElementById("Button7").onclick = function(){phi += dr;};
    document.getElementById("Button8").onclick = function(){phi -= dr;};
    //event listeners for buttons

document.getElementById( "xButton" ).onclick = function () {
        
        if(theta8[xAxis]<10 && theta9[xAxis]<10)
       {
        var audio = new Audio('sounds/hulkroar4.mp3');
            audio.play();
        theta8[xAxis]+=10;
        theta9[xAxis]+=10;
         Tran7[yAxis]-=0.05;
           Tran8[yAxis]-=0.05;
           Tran9[yAxis]-=0.05;
           Tran10[yAxis]-=0.05;
           Tran11[yAxis]-=0.05;
           Tran12[yAxis]-=0.05;

            

           Tran20[zAxis]-=0.1;
           Tran21[zAxis]+=0.1;
           Tran20[xAxis]-=0.2;
           Tran21[xAxis]+=0.2; 
           var crash = new Audio('sounds/Glass_Break-stephan_schutze-958181291.mp3');
            crash.play();

         
       } 
       else if(theta8[xAxis]==10 && theta9[xAxis]==10)
       {
        theta8[xAxis]-=10;
        theta9[xAxis]-=10;
           Tran7[yAxis]+=0.05;
           Tran8[yAxis]+=0.05;
           Tran9[yAxis]+=0.05;
           Tran10[yAxis]+=0.05;
           Tran11[yAxis]+=0.05;
           Tran12[yAxis]+=0.05;

           Tran20[zAxis]+=0.1;
           Tran21[zAxis]-=0.1;
           Tran20[xAxis]+=0.2;
           Tran21[xAxis]-=0.2;
         // var audio = new Audio('sounds/hulkroar4.mp3');
         //    audio.play();
       }
    };
    document.getElementById( "yButton" ).onclick = function () {

    if(Tran19[xAxis]>-2.25)
    {

  var audio = new Audio('sounds/9_mm_gunshot-mike-koenig-123.mp3');
            audio.play();
   Tran19[xAxis]-=0.5;
}
else if(Tran19[xAxis]<-2.25 || Tran19[xAxis]==-2.25)
{
    Tran19[xAxis]+=3.7;
}
//}
    };
    document.getElementById( "zButton" ).onclick = function () {
        if(Tran7[xAxis]<0.6)
         {
           Tran7[xAxis]+=0.6;
           Tran8[xAxis]+=0.6;
           Tran9[xAxis]+=0.6;
           Tran10[xAxis]+=0.6;
           Tran11[xAxis]+=0.6;
           Tran12[xAxis]+=0.6;
       }
       else if(Tran7[xAxis]>0.6)
       {
         Tran7[xAxis]-=0.6;
           Tran8[xAxis]-=0.6;
           Tran9[xAxis]-=0.6;
           Tran10[xAxis]-=0.6;
           Tran11[xAxis]-=0.6;
           Tran12[xAxis]-=0.6;
       }



       //   if(theta5[xAxis]<5 && theta6[xAxis]<5 && theta17[xAxis]<5 && theta18[xAxis]<5)
       // {
       //    theta5[xAxis]-=5;
       //    theta6[xAxis]+=5;
       //    Tran2[xAxis]+=0.1;
       //    Tran3[xAxis]+=0.1;
       //    Tran4[xAxis]+=0.1;
       //    Tran5[xAxis]+=0.1;
       //    Tran6[xAxis]+=0.1;
       //    Tran[xAxis]+=0.1;



       // } 
       //  else if(theta5[xAxis]<5 && theta6[xAxis]>5||theta5[xAxis]>5 && theta6[xAxis]<5
       //    ||theta5[xAxis]<5 && theta6[xAxis]==5||theta5[xAxis]==5 && theta6[xAxis]<5||
       //    theta5[xAxis]>5 && theta6[xAxis]==5||theta5[xAxis]==5&& theta6[xAxis]>5)
       // {
       //    theta5[xAxis]+=5;
       //    theta6[xAxis]-=5;
       //    Tran2[xAxis]+=0.1;
       //    Tran3[xAxis]+=0.1;
       //    Tran4[xAxis]+=0.1;
       //    Tran5[xAxis]+=0.1;
       //    Tran6[xAxis]+=0.1;
       //    Tran[xAxis]+=0.1;
       // }

                  
    };
    var audioo = new Audio('sounds/chaos.mp3');

document.getElementById( "tButton" ).onclick = function () {


              audioo.play();
    if(theta4[xAxis]<2)
    {

        theta4[xAxis]+=2;
         
    }
    else if(theta4[xAxis]>2 || theta4[xAxis]==2)
    {
        theta4[xAxis]-=2;
    }

            
   
    };



    document.onkeydown=function checkKey(event)
    {
        console.log(event);

        if(event.keyCode =='39')
        {
                 if(theta5[xAxis]<2 && theta6[xAxis]<2 )
       {
          theta5[xAxis]-=2;
          theta6[xAxis]+=2;
          Tran2[xAxis]+=0.1;
          Tran3[xAxis]+=0.1;
          Tran4[xAxis]+=0.1;
          Tran5[xAxis]+=0.1;
          Tran6[xAxis]+=0.1;
          Tran[xAxis]+=0.1;
          
           // var audio = new Audio('sounds/walking-in-snow-1.mp3');
           //  audio.play();

       } 
        else if(theta5[xAxis]<2 && theta6[xAxis]>2||theta5[xAxis]>2 && theta6[xAxis]<2
          ||theta5[xAxis]<2 && theta6[xAxis]==2||theta5[xAxis]==2 && theta6[xAxis]<2||
          theta5[xAxis]>2 && theta6[xAxis]==2||theta5[xAxis]==2 && theta6[xAxis]>2)
       {
          theta5[xAxis]+=2;
          theta6[xAxis]-=2;
          Tran2[xAxis]+=0.1;
          Tran3[xAxis]+=0.1;
          Tran4[xAxis]+=0.1;
          Tran5[xAxis]+=0.1;
          Tran6[xAxis]+=0.1;
          Tran[xAxis]+=0.1;

          // var audio = new Audio('sounds/walking-in-snow-1.mp3');
          //   audio.play();
       }
        }
        else if (event.keyCode=='37')
        {
                          if(theta5[xAxis]<5 && theta6[xAxis]<5 )
       {
          theta5[xAxis]-=5;
          theta6[xAxis]+=5;
          Tran2[xAxis]-=0.1;
          Tran3[xAxis]-=0.1;
          Tran4[xAxis]-=0.1;
          Tran5[xAxis]-=0.1;
          Tran6[xAxis]-=0.1;
          Tran[xAxis]-=0.1;

       } 
        else if(theta5[xAxis]<5 && theta6[xAxis]>5||theta5[xAxis]>5 && theta6[xAxis]<5
          ||theta5[xAxis]<5 && theta6[xAxis]==5||theta5[xAxis]==5 && theta6[xAxis]<5||
          theta5[xAxis]>5 && theta6[xAxis]==5||theta5[xAxis]==5&& theta6[xAxis]>5)
       {
          theta5[xAxis]+=5;
          theta6[xAxis]-=5;
          Tran2[xAxis]-=0.1;
          Tran3[xAxis]-=0.1;
          Tran4[xAxis]-=0.1;
          Tran5[xAxis]-=0.1;
          Tran6[xAxis]-=0.1;
          Tran[xAxis]-=0.1;
       }
        }
         else if (event.keyCode=='82')
        {
            radius *= 0.5;

        }


          else if (event.keyCode=='38')//up
        {
          Tran13[yAxis]+=0.2;
          Tran14[yAxis]+=0.2;
          Tran15[yAxis]+=0.2;
          Tran16[yAxis]+=0.2;
          Tran17[yAxis]+=0.2;
          Tran18[yAxis]+=0.2;
          Tran19[yAxis]+=0.2;


          var audio = new Audio('sounds/Sci Fi Robot-SoundBible.com-48947084.mp3');
            audio.play();

        }

            else if (event.keyCode=='40') //down
        {
          Tran13[yAxis]-=0.2;
          Tran14[yAxis]-=0.2;
          Tran15[yAxis]-=0.2;
          Tran16[yAxis]-=0.2;
          Tran17[yAxis]-=0.2;
          Tran18[yAxis]-=0.2;
          Tran19[yAxis]-=0.2;
           var audio = new Audio('sounds/Sci Fi Robot-SoundBible.com-48947084.mp3');
            audio.play();

        }


            else if (event.keyCode=='76')//L
        {
          Tran13[xAxis]-=0.2;
          Tran14[xAxis]-=0.2;
          Tran15[xAxis]-=0.2;
          Tran16[xAxis]-=0.2;
          Tran17[xAxis]-=0.2;
          Tran18[xAxis]-=0.2;
          Tran19[xAxis]-=0.2;

           var audio = new Audio('sounds/Sci Fi Robot-SoundBible.com-48947084.mp3');
            audio.play();

        }

                  else if (event.keyCode=='75') //k
        {
          Tran13[xAxis]+=0.2;
          Tran14[xAxis]+=0.2;
          Tran15[xAxis]+=0.2;
          Tran16[xAxis]+=0.2;
          Tran17[xAxis]+=0.2;
          Tran18[xAxis]+=0.2;
          Tran19[xAxis]+=0.2;
           var audio = new Audio('sounds/Sci Fi Robot-SoundBible.com-48947084.mp3');
            audio.play();

        }
    }
/////obj1
	// theta2[xAxis]+=-25; 
 //    theta3[xAxis]+=-25;
 //    theta[axis]+=45;
 //    theta3[axis]+=35;

 //    theta2[axis]+=55;
       Tran2[xAxis]+=-0.15;
 //    Tran2[zAxis]+=-0.1;

//craft1
          Tran2[yAxis]-=0.55;
          Tran3[yAxis]-=0.55;
          Tran4[yAxis]-=0.55;
          Tran5[yAxis]-=0.55;
          Tran6[yAxis]-=0.55;
          Tran[yAxis]-=0.55;


          Tran2[xAxis]-=0.77;
          Tran3[xAxis]-=0.77;
          Tran4[xAxis]-=0.77;
          Tran5[xAxis]-=0.77;
          Tran6[xAxis]-=0.77;
          Tran[xAxis]-=0.77;

   //craft2

          Tran7[yAxis]-=0.33;
          Tran8[yAxis]-=0.33;
          Tran9[yAxis]-=0.33;
          Tran10[yAxis]-=0.33;
          Tran11[yAxis]-=0.33;
          Tran12[yAxis]-=0.33;



     theta7[xAxis]-=10;
     theta8[xAxis]-=10;
     theta9[xAxis]-=10;
     theta10[xAxis]-=10;
     theta11[xAxis]-=10;
     theta12[xAxis]-=10;


     theta7[yAxis]-=15;
     theta8[yAxis]-=15;
     theta9[yAxis]-=15;
     theta10[yAxis]-=15;
     theta11[yAxis]-=15;
     theta12[yAxis]-=15;


     //craft3

          Tran13[xAxis]+=0.88;
          Tran14[xAxis]+=0.88;
          Tran15[xAxis]+=0.88;
          Tran16[xAxis]+=0.88;
          Tran17[xAxis]+=0.88;
          Tran18[xAxis]+=0.88;

          Tran13[yAxis]-=0.39;
          Tran14[yAxis]-=0.39;
          Tran15[yAxis]-=0.39;
          Tran16[yAxis]-=0.39;
          Tran17[yAxis]-=0.39;
          Tran18[yAxis]-=0.39;




/////obj2
Tran9[xAxis]+=-0.15;

/////obj3
Tran15[xAxis]+=-0.15;

//tal2a
Tran19[xAxis]+=0.75;
Tran19[yAxis]-=0.16;


//sa5r

Tran20[xAxis]+=0.25;
Tran20[yAxis]-=0.50;
Tran21[xAxis]+=0.09;
Tran21[yAxis]-=1.01;


  render();
}

function colorCube()
{
    quad( 1, 0, 3, 2 );
    quad( 2, 3, 7, 6 );
    quad( 3, 0, 4, 7 );
    quad( 6, 5, 1, 2 );
    quad( 4, 5, 6, 7 );
    quad( 5, 4, 0, 1 );




}

function quad(a, b, c, d)
{
    var body = [
        vec4( -0.5, -0.5,  0.5, 1.0 ),
        vec4( -0.5,  0.5,  0.5, 1.0 ),
        vec4(  0.5,  0.5,  0.5, 1.0 ),
        vec4(  0.5, -0.5,  0.5, 1.0 ),
        vec4( -0.5, -0.5, -0.5, 1.0 ),
        vec4( -0.5,  0.5, -0.5, 1.0 ),
        vec4(  0.5,  0.5, -0.5, 1.0 ),
        vec4(  0.5, -0.5, -0.5, 1.0 )
    ];


    var leftarm = [
        vec4( -0.8, -0.4,  0.1, 1.0 ),
        vec4( -0.8,  0.47,  0.1, 1.0 ),
        vec4(  -0.5,  0.47,  0.1, 1.0 ),
        vec4(  -0.5, -0.4,  0.1, 1.0 ),
         vec4( -0.8, -0.4,  -0.1, 1.0 ),
        vec4( -0.8,  0.47,  -0.1, 1.0 ),
        vec4(  -0.5,  0.47,  -0.1, 1.0 ),
        vec4(  -0.5, -0.4,  -0.1, 1.0 )
    ];

    var rightarm = [
        vec4( 0.5, -0.4,  0.1, 1.0 ),
        vec4( 0.5,  0.47,  0.1, 1.0 ),
        vec4(  0.8,  0.47,  0.1, 1.0 ),
        vec4(  0.8, -0.4,  0.1, 1.0 ),
         vec4( 0.5, -0.4, - 0.1, 1.0 ),
        vec4( 0.5,  0.47,  -0.1, 1.0 ),
        vec4(  0.8,  0.47,  -0.1, 1.0 ),
        vec4(  0.8, -0.4,  -0.1, 1.0 ),
    ];

    var head = [
        vec4( -0.7, 0.47,  0.6, 1.0 ),
        vec4( -0.7,  0.7,  0.6, 1.0 ),
        vec4(  0.7,  0.7,  0.6, 1.0 ),
        vec4(  0.7, 0.47,  0.6, 1.0 ),
        vec4( -0.7, 0.47, -0.6, 1.0 ),
        vec4( -0.7,  0.7, -0.6, 1.0 ),
        vec4(  0.7,  0.7, -0.6, 1.0 ),
        vec4(  0.7, 0.47, -0.6, 1.0 )
    ];

    var leftleg = [
        vec4( -0.5, -0.5,  0.5, 1.0 ),
        vec4( -0.5,  0.5,  0.5, 1.0 ),
        vec4(  0.5,  0.5,  0.5, 1.0 ),
        vec4(  0.5, -0.5,  0.5, 1.0 ),
        vec4( -0.5, -0.5, -0.5, 1.0 ),
        vec4( -0.5,  0.5, -0.5, 1.0 ),
        vec4(  0.5,  0.5, -0.5, 1.0 ),
        vec4(  0.5, -0.5, -0.5, 1.0 )
    ];

var rightleg = [
        vec4( -0.5, -0.5,  0.5, 1.0 ),
        vec4( -0.5,  0.5,  0.5, 1.0 ),
        vec4(  0.5,  0.5,  0.5, 1.0 ),
        vec4(  0.5, -0.5,  0.5, 1.0 ),
        vec4( -0.5, -0.5, -0.5, 1.0 ),
        vec4( -0.5,  0.5, -0.5, 1.0 ),
        vec4(  0.5,  0.5, -0.5, 1.0 ),
        vec4(  0.5, -0.5, -0.5, 1.0 )
    ];

 






    var vertexColors = [
        [ 0.0, 0.0, 0.0, 1.0 ],  // black
        [ 1.0, 0.0, 0.0, 1.0 ],  // red
        [ 1.0, 1.0, 0.0, 1.0 ],  // yellow
        [ 0.0, 1.0, 0.0, 1.0 ],  // green
        [ 0.0, 0.0, 1.0, 1.0 ],  // blue
        [ 1.0, 0.0, 1.0, 1.0 ],  // magenta
        [ 0.0, 1.0, 1.0, 1.0 ],  // cyan
        [ 1.0, 1.0, 1.0, 1.0 ]   // white
    ];

    // We need to parition the quad into two triangles in order for
    // WebGL to be able to render it.  In this case, we create two
    // triangles from the quad indices

    //vertex color assigned by the index of the vertex

    var indices = [ a, b, c, a, c, d ];
//first object
    for ( var i = 0; i < indices.length; ++i ) {
        points1.push( body[indices[i]] );
        colors1.push(vertexColors[a]);

 		
    }
	for(var i =0 ;i<indices.length;i++)
	{
		points2.push( leftarm[indices[i]] );
        colors2.push(vertexColors[a]);
	}

	for(var i =0 ;i<indices.length;i++)
	{
		points3.push( rightarm[indices[i]] );
        colors3.push(vertexColors[a]);
	}

	for(var i =0 ;i<indices.length;i++)
	{
		points4.push( head[indices[i]] );
        colors4.push(vertexColors[a]);
	}

	for(var i =0 ;i<indices.length;i++)
	{
		points5.push( leftleg[indices[i]] );
        colors5.push(vertexColors[a]);
	}

	for(var i =0 ;i<indices.length;i++)
	{
		points6.push( rightleg[indices[i]] );
        colors6.push(vertexColors[a]);
	}

	//second object
	for ( var i = 0; i < indices.length; ++i ) {
        points7.push( body[indices[i]] );
        colors7.push(vertexColors[b]);	
    }

    for ( var i = 0; i < indices.length; ++i ) {
        points8.push( leftarm[indices[i]] );
        colors8.push(vertexColors[b]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points9.push( rightarm[indices[i]] );
        colors9.push(vertexColors[b]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points10.push( head[indices[i]] );
        colors10.push(vertexColors[b]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points11.push( leftleg[indices[i]] );
        colors11.push(vertexColors[b]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points12.push( rightleg[indices[i]] );
        colors12.push(vertexColors[b]);	
    }

    //third object

    for ( var i = 0; i < indices.length; ++i ) {
        points13.push( body[indices[i]] );
        colors13.push(vertexColors[c]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points14.push( leftarm[indices[i]] );
        colors14.push(vertexColors[c]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points15.push( rightarm[indices[i]] );
        colors15.push(vertexColors[c]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points16.push( head[indices[i]] );
        colors16.push(vertexColors[c]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points17.push( leftleg[indices[i]] );
        colors17.push(vertexColors[c]);	
    }
    for ( var i = 0; i < indices.length; ++i ) {
        points18.push( rightleg[indices[i]] );
        colors18.push(vertexColors[c]);	
    }
//tal2a
     for ( var i = 0; i < indices.length; ++i ) {
        points19.push( rightleg[indices[i]] );
        colors19.push(vertexColors[d]); 
    }

    //sa5r

  for ( var i = 0; i < indices.length; ++i ) {
        points20.push( rightleg[indices[i]] );
        colors20.push(vertexColors[d]); 
    }

     for ( var i = 0; i < indices.length; ++i ) {
        points21.push( rightleg[indices[i]] );
        colors21.push(vertexColors[d]); 
    }

}



function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


     eye = vec3(radius*Math.sin(thetaa)*Math.cos(phi),
      radius*Math.sin(thetaa)*Math.sin(phi), radius*Math.cos(thetaa));

    mvMatrix = lookAt(eye, at , up);
    pMatrix = perspective(fovy, aspect, near, far);

    gl.uniformMatrix4fv( modelView, false, flatten(mvMatrix) );
    gl.uniformMatrix4fv( projection, false, flatten(pMatrix) );


  var gun = new Audio('sounds/9_mm_gunshot-mike-koenig-123.mp3');

//Tran19[xAxis]+=1.0;
    
////obj1
//   theta[axis]+=2;
//    theta2[axis]+=2;
//    theta3[axis]+=2;
//   theta4[axis]+=2;
//      theta5[axis]+=2;
//     theta6[axis]+=2;
// ///obj2
// theta7[axis]+=2;
//    theta8[axis]+=2;
//    theta9[axis]+=2;
//   theta10[axis]+=2;
//      theta11[axis]+=2;
//     theta12[axis]+=2;
//   //obj3
//   theta13[axis]+=2;
//    theta14[axis]+=2;
//    theta15[axis]+=2;
//   theta16[axis]+=2;
//      theta17[axis]+=2;
//     theta18[axis]+=2;

    // Tran[xAxis]+=0.1;
    // Tran2[xAxis]+=0.1;
    // Tran3[xAxis]+=0.1;
    // Tran4[xAxis]+=0.1;
    // Tran5[xAxis]+=0.1;
    // Tran6[xAxis]+=0.1;


     gl.uniform3fv(thetaLoc, theta);
    gl.uniform3fv(TranLoc, Tran);
    gl.uniform3fv(SLoc, S);
    gl.drawArrays( gl.TRIANGLES, 0, NumVertices );

 gl.uniform3fv(thetaLoc, theta3);
    gl.uniform3fv(TranLoc, Tran3);
    gl.uniform3fv(SLoc, S3);
    gl.drawArrays( gl.TRIANGLES, NumVertices, NumVertices );

    gl.uniform3fv(thetaLoc, theta2);
    gl.uniform3fv(TranLoc, Tran2);
    gl.uniform3fv(SLoc, S2);
    gl.drawArrays( gl.TRIANGLES, NumVertices*2, NumVertices );

     gl.uniform3fv(thetaLoc, theta4);
    gl.uniform3fv(TranLoc, Tran4);
    gl.uniform3fv(SLoc, S4);
    gl.drawArrays( gl.TRIANGLES, NumVertices*3, NumVertices );


     gl.uniform3fv(thetaLoc, theta5);
    gl.uniform3fv(TranLoc, Tran5);
    gl.uniform3fv(SLoc, S5);
    gl.drawArrays( gl.TRIANGLES,NumVertices*4, NumVertices );

    gl.uniform3fv(thetaLoc, theta6);
    gl.uniform3fv(TranLoc, Tran6);
    gl.uniform3fv(SLoc, S6);
    gl.drawArrays( gl.TRIANGLES, NumVertices*5, NumVertices );
/////obj2
    gl.uniform3fv(thetaLoc, theta7);
    gl.uniform3fv(TranLoc, Tran7);
    gl.uniform3fv(SLoc, S7);
    gl.drawArrays( gl.TRIANGLES, NumVertices*6, NumVertices );


    gl.uniform3fv(thetaLoc, theta8);
    gl.uniform3fv(TranLoc, Tran8);
    gl.uniform3fv(SLoc, S8);
    gl.drawArrays( gl.TRIANGLES, NumVertices*7, NumVertices );

    gl.uniform3fv(thetaLoc, theta9);
    gl.uniform3fv(TranLoc, Tran9);
    gl.uniform3fv(SLoc, S9);
    gl.drawArrays( gl.TRIANGLES, NumVertices*8, NumVertices );

    gl.uniform3fv(thetaLoc, theta10);
    gl.uniform3fv(TranLoc, Tran10);
    gl.uniform3fv(SLoc, S10);
    gl.drawArrays( gl.TRIANGLES, NumVertices*9, NumVertices );

    gl.uniform3fv(thetaLoc, theta11);
    gl.uniform3fv(TranLoc, Tran11);
    gl.uniform3fv(SLoc, S11);
    gl.drawArrays( gl.TRIANGLES, NumVertices*10, NumVertices );

    gl.uniform3fv(thetaLoc, theta12);
    gl.uniform3fv(TranLoc, Tran12);
    gl.uniform3fv(SLoc, S12);
    gl.drawArrays( gl.TRIANGLES, NumVertices*11, NumVertices );

     ////obj3

     gl.uniform3fv(thetaLoc, theta13);
    gl.uniform3fv(TranLoc, Tran13);
    gl.uniform3fv(SLoc, S13);
    gl.drawArrays( gl.TRIANGLES, NumVertices*12, NumVertices );

    gl.uniform3fv(thetaLoc, theta14);
    gl.uniform3fv(TranLoc, Tran14);
    gl.uniform3fv(SLoc, S14);
    gl.drawArrays( gl.TRIANGLES, NumVertices*13, NumVertices );

    gl.uniform3fv(thetaLoc, theta15);
    gl.uniform3fv(TranLoc, Tran15);
    gl.uniform3fv(SLoc, S15);
    gl.drawArrays( gl.TRIANGLES, NumVertices*14, NumVertices );

    gl.uniform3fv(thetaLoc, theta16);
    gl.uniform3fv(TranLoc, Tran16);
    gl.uniform3fv(SLoc, S16);
    gl.drawArrays( gl.TRIANGLES, NumVertices*15, NumVertices );

    gl.uniform3fv(thetaLoc, theta17);
    gl.uniform3fv(TranLoc, Tran17);
    gl.uniform3fv(SLoc, S17);
    gl.drawArrays( gl.TRIANGLES, NumVertices*16, NumVertices );

    gl.uniform3fv(thetaLoc, theta18);
    gl.uniform3fv(TranLoc, Tran18);
    gl.uniform3fv(SLoc, S18);
    gl.drawArrays( gl.TRIANGLES, NumVertices*17, NumVertices );

       gl.uniform3fv(thetaLoc, theta19);
    gl.uniform3fv(TranLoc, Tran19);
    gl.uniform3fv(SLoc, S19);
    gl.drawArrays( gl.TRIANGLES, NumVertices*17, NumVertices );



     gl.uniform3fv(thetaLoc, theta20);
    gl.uniform3fv(TranLoc, Tran20);
    gl.uniform3fv(SLoc, S20);
    gl.drawArrays( gl.TRIANGLES, NumVertices*17, NumVertices );


     gl.uniform3fv(thetaLoc, theta21);
    gl.uniform3fv(TranLoc, Tran21);
    gl.uniform3fv(SLoc, S21);
    gl.drawArrays( gl.TRIANGLES, NumVertices*15, NumVertices );



//    if(Tran19[xAxis]>-2.25)
//     {

//            gun.play();
//    Tran19[xAxis]-=0.5;
// }
// else if(Tran19[xAxis]<-2.25 || Tran19[xAxis]==-2.25)
// {
//     Tran19[xAxis]+=3.7;
// }





     requestAnimFrame( render );
}

