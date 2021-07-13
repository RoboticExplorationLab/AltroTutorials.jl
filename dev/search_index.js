var documenterSearchIndex = {"docs":
[{"location":"cartpole.html#.-Cartpole-Adding-Constraints","page":"2. Cartpole - Adding Constraints","title":"2. Cartpole - Adding Constraints","text":"","category":"section"},{"location":"examples.html#Tutorial","page":"Examples","title":"Tutorial","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This package contains several Jupyter notebooks that walk through various aspects of the Altro.jl and TrajectoryOptimization.jl ecosystem. We plan to add additional examples highlight new features as they are released.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This page provides an overview of these notebooks, which are meant to be done in order.","category":"page"},{"location":"examples.html#Working-with-Jupyter-Notebooks","page":"Examples","title":"Working with Jupyter Notebooks","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"All of the examples are provided as Jupyter Notebooks. Follow these steps to start working with the provided notebooks:","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Clone this Repo: In your terminal, navigate to whatever location you want to clone this tutorial. Clone the repo and move into the repo root directory\n > git clone https://github.com/RoboticExplorationLab/AltroTutorials.jl\n > cd AltroTutorials\nInstall Julia:  Go to the Julia Downloads page and download the latest binaries for your operating system. The installation is very straight-forward, but for more specific guidance, see this page on the Julia website. \nOpen a Julia REPL: Once the julia binary is on your system path, you can open the REPL by invoking this binary, e.g. \n> julia\nOpen the Julia Package Manager: Enter the package manager using the ] key. It should look like the following:  (Image: )\nInstall the IJulia package: Install the IJulia package to install Jupyter\n (@v1.6) pkg> add IJulia\nLaunch a Jupyter Lab session: To launch a Jupyter Lab session from your current directory, use the following commands from the Julia REPL:\n julia> using IJulia\n julia> jupyterlab(dir=\".\")\nOpen the Desired Tutorial: Once Jupyter Lab has opened in your browser, go to the src/ directory in the repo and open one of the tutorials. The tutorials are outlined below. ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"tip: Tip\nUse SHIFT-ENTER to execute the current cell and move to the next, or CTRL-ENTER to execute the current cell multiple times.","category":"page"},{"location":"examples.html#[1.-Pendulum:-Getting-Started](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/Pendulum.ipynb)","page":"Examples","title":"1. Pendulum: Getting Started","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This introductory problem provides a good in-depth introduction to the various packages  by setting up your own dynamics model and solving an unconstrained optimization problem  with Altro. It covers the following topics:","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Defining your own dynamics model\nDefining a quadratic cost function\nSetting up a problem\nCreating the solver\nCalling the solve! method\nAnalyzing the results\nPlotting the output trajectory\nBenchmarking\nImproving performance with StaticArrays.jl","category":"page"},{"location":"examples.html#[2.-Cartpole:-Adding-Constraints](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/Cartpole.ipynb)","page":"Examples","title":"2. Cartpole: Adding Constraints","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This examples builds on the ideas set up in the pendulum problem, and adds constraints.  It provides some insight on how to efficiently tune the hyperparameters for ALTRO when  solving constrained optimization problems.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"More on defining your own model\nAdding pre-defined constraints\nPlotting the results\nChanging solver parameters / hyperparameter tuning tips","category":"page"},{"location":"examples.html#[3.-Quadrotor:-Rigid-Bodies](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/Quadrotor.ipynb)","page":"Examples","title":"3. Quadrotor: Rigid Bodies","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Using a quadrotor as the canonical example, this problem demonstrates how to define trajectory optimization problems for single rigid bodies, whose state is defined by a 3D rotation. It provides a good introductory example of working with these types of systems, as well as an introduction on how to visualize them easily with TrajOptPlots.jl.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Defining dynamics for single rigid bodies\nCost functions for rigid bodies\n3D visualization w/ TrajOptPlots\nAdding model disturbances\nTracking the reference trajectory with TV-LQR\nImporting 3D meshes for visualization of single rigid bodies","category":"page"},{"location":"examples.html#[4.-Unicycle-Model:-Infeasible-Start](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/CarMaze.ipynb)","page":"Examples","title":"4. Unicycle Model: Infeasible Start","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This example focuses on obstacle avoidance and providing the solver with an initial guess for the state trajectory. ","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Obstacle avoidance constraints\nVisualizing 2D problems\nProviding a smooth initial guess for the states\nSolving an \"infeasible start\" problem with ALTRO","category":"page"},{"location":"examples.html#[5.-Rocket-Model-Predictive-Control-(MPC)](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/RocketMPC.ipynb)","page":"Examples","title":"5. Rocket Model-Predictive Control (MPC)","text":"","category":"section"},{"location":"examples.html","page":"Examples","title":"Examples","text":"This example demonstrates the use of linear dynamics models and how to set up an run a basic MPC problem that tracks a reference trajectory output by a long-horizon solution out of ALTRO. It also demonstrates the use of second-order cone constraints.","category":"page"},{"location":"examples.html","page":"Examples","title":"Examples","text":"Defining a linear model\nDefining second-order cone constraints\nDefining custom constraints\nSetting up and solving an MPC problem w/ a reference trajectory","category":"page"},{"location":"index.html#Altro-Tutorials","page":"Introduction","title":"Altro Tutorials","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Welcome to the tutorials site for Altro.jl! This page is dedicated to providing an extensive suite of useful examples and walkthroughs intended to help newcomers and experienced users alike. ","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"note: Note\nWhile many aspects of the APIs for Altro.jl, TrajectoryOptimization.jl,  RobotDynamics.jl, and related packages will be exposed and explained throughout these  tutorials, this is not intended to replace the documentation provided by these packages. In the event of any discrepancy, the package documentation take precedence.","category":"page"},{"location":"index.html#Overview-of-Optimal-Control","page":"Introduction","title":"Overview of Optimal Control","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Optimal control is a powerful class of algorithms aimed at finding optimal control policies for controlling dynamical systems. Algorithms developed by the optimal control community  over the last 70 years have been succesfully applied to space systems, rockets, airplanes, and a wide variety of robotic and autonomous systems. Trajectory optimization is a powerful sub-field of optimal control where the goal is to find a trajectory that minimizes some  cost function while obey the system dynamics, as well any additional contraints such as  actuator or joint limits, operational areas, or obstacle avoidance. ","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"The packages in the Altro.jl ecosystem are focused on the application of trajectory  optimization to the field of robotics. These problems typically take the following form:","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"beginaligned\n  min_x_1Nu_1N-1 quad  ell_f(x_N) + sum_k=0^N-1 ell_k(x_k u_k dt) \n  textrmst            quad  x_k+1 = f(x_k u_k) \n                                  g_k(x_ku_k) = 0 \n                                  h_k(x_ku_k) leq_K 0\nendaligned","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"where x in mathbbR^n and u in mathbbR^m are the state and control vectors,  N is the number of knot points, ell is a cost function, f(xu) are the system  dynamics, g_k(xu) are smooth equality constraints at time step k, and h_k(x_ku_k)  are generalized inequality constraints at timestep k with respect to the cone K.","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Critically, optimization problems of this form exhibit Markovianity, which in practice  means that the states and controls at any timestep are only coupled to those at adjacent  time steps. This property imparts a unique banded structure to the underlying system  of equations. Leveraging this problem structure is key to good performance. ","category":"page"},{"location":"index.html#Ecosystem-Overview","page":"Introduction","title":"Ecosystem Overview","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Altro.jl is one package in a suite of packages developed by the Robotic Exploration Lab at Stanford and Carnegie Mellon Universities aimed at pushing the computational and  algorithmic limits of optimal control. The packages are summarized below.","category":"page"},{"location":"index.html#Key-Features","page":"Introduction","title":"Key Features","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"The TrajectoryOptimization.jl ecosystem is designed primarily to faciliate the development of novel algorithms for optimal control. While it has been successfully deployed on real robots, it's strength lies in it's extensibility and easy of use. The following are key features / design objectives of the ecosystem:","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Provide an easy, intuitive API for setting up, solving, and analyzing trajectory optimization problems.\nSolve generic single-stage nonlinear trajectory optimization problems with generic nonlinear equality, inequality, or second-order cone constraints.\nAccurately account for the group structure of 3D rotations.\nProvide convient methods for evaluating derivative information via automatic differentiation or finite differencing.\nEasy installation and use with other optimization packages.\nDeliver exceptional single-threaded performance on standard desktop computers.\nAllow for extensions and modifications by partners in both academia and industry.","category":"page"},{"location":"index.html#Core-Packages","page":"Introduction","title":"Core Packages","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"RobotDynamics.jl: Provides methods for describing controlled dynamical systems, with an emphasis on single rigid bodies. It provides a common Julia interface for querying system dynamics and derivatives. Derivatives can be obtained using either automatic differentiation or finite differencing.\nTrajectoryOptimization.jl: A convenient API for describing trajectory optimization problems. It also provides functionality for evaluating costs, constraints, and their derivatives. This interface is intended to be utilized by trajectory optimization solvers such as Altro.jl.\nAltro.jl: A state-of-the-art trajectory optimization solver that uses augmented Lagrangian and iterative LQR (iLQR) to solve general nonlinear, constrained trajectory optimization problems. It accepts problems described using TrajectoryOptimization problems.","category":"page"},{"location":"index.html#Related-Packages","page":"Introduction","title":"Related Packages","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"RobotZoo.jl: A set of canonical mathematical models for nonlinear systems, implemented within the RobotDynamics interface.\nTrajOptPlots.jl: Provides visualization utilities for TrajectoryOptimization.jl, including 3D visualization via MeshCat.jl.","category":"page"},{"location":"index.html#Future-Directions","page":"Introduction","title":"Future Directions","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"The TrajectoryOptimization.jl ecosystem is still under active development and will be continually updated with more algorithms and solvers. Some currently active areas of development include:","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"The development of a C++ version of the core ALTRO algorithm, which will provide a C interface to be called from Julia or other high-level languages.\nIntegration with multi-body dynamics packages.\nProvide easy definition of trajectory optimization problems involving switched or hybrid systems.","category":"page"},{"location":"index.html#Installation","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"It is very easy to install the TrajectoryOptimization.jl ecosystem using Julia's built-in package manager. ","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Install Julia:  Go to the Julia Downloads page and download the latest binaries for your operating system. The installation is very straight-forward, but for more specific guidance, see this page on the Julia website. \nOpen a Julia REPL: Once the julia binary is on your system path, you can open the REPL by invoking this binary, e.g. \n> julia\nOpen the Julia Package Manager: Enter the package manager using the ] key. It should look like the following:  (Image: )\nInstall the packages:  Install the desired packages using the add command in the package manager:\n (@v1.6) pkg> add Altro\n (@v1.6) pkg> add TrajectoryOptimization\n (@v1.6) pkg> add RobotDynamics\nInstall Extra Packages: Some other useful packages you may want to install:\n (@v1.6) pkg> add RobotZoo\n (@v1.6) pkg> add TrajOptPlots \n (@v1.6) pkg> add MeshCat \n (@v1.6) pkg> add StaticArrays \n (@v1.6) pkg> add Plots \n (@v1.6) pkg> add BenchmarkTools \n (@v1.6) pkg> add Rotations","category":"page"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"note: Note\nSince Julia v1.6 the installation process will also precompile these packages for you to decrease the time it takes to load the packages at run-time. Note that when installing Altro it also installs TrajectoryOptimization and RobotDynamics on your system, since these are dependencies. However, you cannot directly use these packages (e.g. using RobotDynamics) until you have specifically added them to your environment. For more information on the package manager, as well as working with environments, see the documentation.","category":"page"},{"location":"index.html#Why-Julia?","page":"Introduction","title":"Why Julia?","text":"","category":"section"},{"location":"index.html","page":"Introduction","title":"Introduction","text":"Julia is a high-performance language specifically designed for scientific computing. Given it's convenient syntax, excellent package manager, and wealth of high-quality packages for scientific computing, we have found it to be an excellent language for developing novel optimization algorithms. Since the focus of the TrajectoryOptimization.jl ecosystem is primarily the research and development of novel algorithms rather than the development of a production-ready software stack, the JIT (just-in-time compilation) overhead and other minor inconvenciences of working with a high-level scripted language like Julia are minor compared to the benefits. ","category":"page"},{"location":"pendulum.html#.-Pendulum-The-Basics","page":"1. Pendulum - The Basics","title":"1. Pendulum - The Basics","text":"","category":"section"}]
}
