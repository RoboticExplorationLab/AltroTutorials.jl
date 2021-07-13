# Tutorial
This package contains several Jupyter notebooks that walk through various aspects of the Altro.jl and TrajectoryOptimization.jl ecosystem. We plan to add additional examples highlight new features as they are released.

This page provides an overview of these notebooks, which are meant to be done in order.

## Working with Jupyter Notebooks
All of the examples are provided as Jupyter Notebooks. Follow these steps to start working with the provided notebooks:

1. **Clone this Repo:** In your terminal, navigate to whatever location you want to clone this tutorial. Clone the repo and move into the repo root directory
        
        > git clone https://github.com/RoboticExplorationLab/AltroTutorials.jl
        > cd AltroTutorials

1. **Install Julia:**  Go to the Julia [Downloads page](https://julialang.org/downloads/) and download the latest binaries for your operating system. The installation is very straight-forward, but for more specific guidance, see [this page on the Julia website](https://julialang.org/downloads/platform/). 

2. **Open a Julia REPL:** Once the `julia` binary is on your system path, you can open the REPL by invoking this binary, e.g. 

       > julia

3. **Open the Julia Package Manager:** Enter the package manager using the `]` key. It should look like the following:
    ![](../img/julia_pkg.png)

4. **Install the [IJulia](https://github.com/JuliaLang/IJulia.jl) package:** Install the IJulia package to install Jupyter

        (@v1.6) pkg> add IJulia
      
5. **Launch a Jupyter Lab session:** To launch a Jupyter Lab session from your current directory, use the following commands from the Julia REPL:

        julia> using IJulia
        julia> jupyterlab(dir=".")

6. **Open the Desired Tutorial:** Once Jupyter Lab has opened in your browser, go to the `src/` directory in the repo and open one of the tutorials. The tutorials are outlined below. 

!!! tip
    Use SHIFT-ENTER to execute the current cell and move to the next, or CTRL-ENTER to execute the current cell multiple times.
    

## [1. Pendulum: Getting Started](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/Pendulum.ipynb)
This introductory problem provides a good in-depth introduction to the various packages 
by setting up your own dynamics model and solving an unconstrained optimization problem 
with Altro. It covers the following topics:
- Defining your own dynamics model
- Defining a quadratic cost function
- Setting up a problem
- Creating the solver
- Calling the `solve!` method
- Analyzing the results
- Plotting the output trajectory
- Benchmarking
- Improving performance with [StaticArrays.jl](https://github.com/JuliaArrays/StaticArrays.jl)

## [2. Cartpole: Adding Constraints](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/Cartpole.ipynb)
This examples builds on the ideas set up in the pendulum problem, and adds constraints. 
It provides some insight on how to efficiently tune the hyperparameters for ALTRO when 
solving constrained optimization problems.
- More on defining your own model
- Adding pre-defined constraints
- Plotting the results
- Changing solver parameters / hyperparameter tuning tips

## [3. Quadrotor: Rigid Bodies](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/Quadrotor.ipynb)
Using a quadrotor as the canonical example, this problem demonstrates how to define trajectory optimization problems for single rigid bodies, whose state is defined by a 3D rotation. It provides a good introductory example of working with these types of systems,
as well as an introduction on how to visualize them easily with TrajOptPlots.jl.
- Defining dynamics for single rigid bodies
- Cost functions for rigid bodies
- 3D visualization w/ TrajOptPlots
- Adding model disturbances
- Tracking the reference trajectory with TV-LQR
- Importing 3D meshes for visualization of single rigid bodies

## [4. Unicycle Model: Infeasible Start](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/CarMaze.ipynb)
This example focuses on obstacle avoidance and providing the solver with an initial guess for the state trajectory. 
- Obstacle avoidance constraints
- Visualizing 2D problems
- Providing a smooth initial guess for the states
- Solving an "infeasible start" problem with ALTRO

## [5. Rocket Model-Predictive Control (MPC)](https://github.com/RoboticExplorationLab/AltroTutorials.jl/blob/main/src/RocketMPC.ipynb)
This example demonstrates the use of linear dynamics models and how to set up an run a basic MPC problem that tracks a reference trajectory output by a long-horizon solution out of ALTRO. It also demonstrates the use of second-order cone constraints.
- Defining a linear model
- Defining second-order cone constraints
- Defining custom constraints
- Setting up and solving an MPC problem w/ a reference trajectory

