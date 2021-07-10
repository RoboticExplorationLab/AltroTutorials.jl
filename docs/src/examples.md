# Tutorial
This package contains several Jupyter notebooks that walk through various aspects of the Altro.jl and TrajectoryOptimization.jl ecosystem. We plan to add additional examples highlight new features as they are released.

This page provides an overview of these notebooks, which are meant to be done in order.

## 1. Pendulum: Getting Started
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

## 2. Cartpole: Adding Constraints
This examples builds on the ideas set up in the pendulum problem, and adds constraints. 
It provides some insight on how to efficiently tune the hyperparameters for ALTRO when 
solving constrained optimization problems.
- More on defining your own model
- Adding pre-defined constraints
- Plotting the results
- Changing solver parameters / hyperparameter tuning tips

## 3. Quadrotor: Rigid Bodies
Using a quadrotor as the canonical example, this problem demonstrates how to define trajectory optimization problems for single rigid bodies, whose state is defined by a 3D rotation. It provides a good introductory example of working with these types of systems,
as well as an introduction on how to visualize them easily with TrajOptPlots.jl.
- Defining dynamics for single rigid bodies
- Cost functions for rigid bodies
- 3D visualization w/ TrajOptPlots
- Adding model disturbances
- Tracking the reference trajectory with TV-LQR
- Importing 3D meshes for visualization of single rigid bodies

## 4. Unicycle Model: Infeasible Start
This example focuses on obstacle avoidance and providing the solver with an initial guess for the state trajectory. 
- Obstacle avoidance constraints
- Visualizing 2D problems
- Providing a smooth initial guess for the states
- Solving an "infeasible start" problem with ALTRO

## 5. Rocket Model-Predictive Control (MPC)
This example demonstrates the use of linear dynamics models and how to set up an run a basic MPC problem that tracks a reference trajectory output by a long-horizon solution out of ALTRO. It also demonstrates the use of second-order cone constraints.
- Defining a linear model
- Defining second-order cone constraints
- Defining custom constraints
- Setting up and solving an MPC problem w/ a reference trajectory

