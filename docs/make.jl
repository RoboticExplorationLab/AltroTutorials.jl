using Documenter
using AltroTutorials

makedocs(
    sitename = "AltroTutorials",
    format = Documenter.HTML(prettyurls = false),
    pages = [
        "Introduction" => "index.md",
        "The Basics" => [
          "pendulum.md",
          "cartpole.md",
        ] 
    ]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
# deploydocs(
#     repo = "github.com/RoboticExplorationLab/AltroTutorials.jl.git",
# )