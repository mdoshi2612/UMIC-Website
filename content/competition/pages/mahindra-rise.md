## Mahindra RISE Challenge

After being recognized as the overall winners in IGVC 2017, the team decided to step up the game and started working on an actual car for the Mahindra RISE Challenge. The Challenge envisaged developing a working unit of a ‘driverless car’ for Indian conditions under an intra-city situation on paved roads. As a part of the competition, the team launched India's first successful prototype of a driverless car. The team received a Mahindra E2o model to test its driverless car technology which was given to the top 11 teams out of 259.

<div class="image-1">
<content-image src="robots/e20-2.jpg" alt="Car"></content-image>
</div>

The team has been divided into various subsystems, keeping in mind the various requirements of the project. These include Controls, Path Planning, Mechanical Design, Parking, Computer Vision, Sensors, Object Detection, and Depth Estimation.

The mechanical subsystem includes making modifications to the car design to cater to the various requirements to make the car autonomous. This includes effectively designing mounts for various sensors, keeping in mind the weight reduction and proper placing of the sensors.

Environmental perception includes the task of observing and understanding the environment of the ego vehicle. This includes the tasks of semantic segmentation (to classify and detect roads, lanes, streets, traffic lights, etc.), depth estimation (to be able to make decisions about the car movement), and obstacle avoidance (to be able to ensure safe driving). We have used various Image Processing and Machine Learning techniques to tackle these issues. Currently, we are working on a Multi-task Learning model to be able to achieve the depth and the obstacle avoidance information simultaneously. We also have a dedicated subsystem which aims at the detection of parking areas for executing the parking manoeuvre. After detecting the obstacles present in the surrounding, an essential task is to predict the position of the vehicle in the detected environment accurately which is done using various sensors mounted on the vehicle. The motion and velocity planning is done taking all of this into account to take optimum and safe decisions, also ensuring a smooth drive!

<div class="image-1">
<content-image src="misc/e20.jpg" alt="Car"></content-image>
</div>

The stereo camera, the Lidars, and the radars are used to detect the vehicle surroundings such as the road, various traffic signs, static and dynamic objects, etc. The path planning subsystem takes the detected path and generates a practical path for motion. We are currently implementing path planning algorithms like RRT* and A*. We are also in the process of exploring Reinforcement Learning based Path Planning to do the same. We are currently working on the Non-Linear Model Predictive Control with Linear-Quadratic Regulator (LQR) as a cost function for motion planning. Under the control subsystem, we predict optimized motion for the car based on the path predicted by the path planner.

Right now, the team is working remotely to develop the various aspects of the car, including Controls, Motion Planning, Perception, and Localisation. The developed software will be tested as soon as we will be able to resume offline work.
